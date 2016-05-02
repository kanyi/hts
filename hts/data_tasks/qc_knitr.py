# (C) 2015, 2016 Elke Schaper

"""
    :synopsis: ``quality_control`` implementes all methods connected to the
    quality control of a high throughput screening experiment.
    qc_knitr implements knitr specific methods.

    .. moduleauthor:: Elke Schaper <elke.schaper@isb-sib.ch>
"""

import collections
import datetime
import logging
import os
import sys

LOG = logging.getLogger(__name__)
PATH = '/Users/elkeschaper/Downloads/'


def create_report(run, qc_result_path, qc_helper_methods_path, qc_methods, meta_data=None, knit_html=True):
    """
    Run QC tasks, and combine the result to a report.

    Args:
        run (run.Run): Run instance
        qc_result_path (str):  Path to the resulting qc report file.
        qc_helper_methods_path (str): Path to an R file with additional functionality assumed in the QC methods.
        qc_methods (dict of str: (dict of str: stuff)): A dictionary connecting an abitrary name of each qc method to a
                dictionary containing the description (function name, filters, ... for the qc method.)
        meta_data (list of tuples): List of tuples used as content for a table in the qc report.
        knit_html (Boolean):
    """

    qc_result_path = os.path.realpath(qc_result_path)
    if not os.path.exists(qc_result_path):
        LOG.warning("Creating QC report result path: {}".format(qc_result_path))
        os.makedirs(qc_result_path)

    path_knitr_data = os.path.join(qc_result_path, "data.csv")
    run.write(format='csv', path=path_knitr_data)
    path_knitr_file = os.path.join(qc_result_path, "qc_report.Rmd")

    # Create header info and environment snippets
    header, environment, data_loader = knitr_header_setup(qc_helper_methods_path=qc_helper_methods_path,
                                                          path_knitr_data=path_knitr_data, meta_data=meta_data,
                                                          x3_plate_names=[plate.name for plate in run.plates.values()])

    # import pdb; pdb.set_trace()

    # Create QC snippets
    qc_report_data = collections.OrderedDict()
    for i_qc, i_qc_characteristics in qc_methods.items():
        LOG.debug("i_qc: {}".format(i_qc))
        try:
            qc_method_name = i_qc_characteristics['method']
        except:
            LOG.warning("No key 'method' in i_qc_characteristics: {}".format(i_qc_characteristics))
        # 1. Create subset of data
        if "filter" in i_qc_characteristics:
            qc_subset = knitr_subset(i_qc_characteristics['filter'])
        else:
            qc_subset = ""
            LOG.info("No key 'filter' in i_qc_characteristics: {}".format(i_qc_characteristics))
        # 2. Create QC code
        if "options" in i_qc_characteristics:
            qc_description, qc_calculation = perform_qc(qc_method_name, **i_qc_characteristics["options"])
        else:
            qc_description, qc_calculation = perform_qc(qc_method_name)
        # 3. Apply filter
        if "threshold" in i_qc_characteristics:
            qc_decision = evaluate_qc(qc_result, i_qc_characteristics['threshold'])
            chunk = "\n".join([qc_subset, qc_calculation, qc_decision])
        else:
            chunk = "\n".join([qc_subset, qc_calculation])
        # 4. Choose Knitr options. E.g. choose how verbose Knitr is:
        if "knitr_options" in i_qc_characteristics:
            knitr_options = i_qc_characteristics['knitr_options']
        else:
            knitr_options = {}

        # Later on, you can make this line more complicated.
        wrapped_chunk = wrap_knitr_chunk(chunk=chunk, chunk_name=i_qc, **knitr_options)
        qc_report_data[i_qc] = "\n".join(["### QC {} ({})".format(i_qc, qc_method_name), qc_description, wrapped_chunk])

    # import pdb; pdb.set_trace()

    # QC report
    # 1. Write the start of a RMarkdown file,
    # 2. Add each section
    # 3. Add end of RMarkdown file
    # 4. Save and return results.
    with open(path_knitr_file, "w") as fh:
        fh.write(header)
        fh.write(environment)
        fh.write(data_loader)
        fh.write("## QC\n")
        for i_qc, i_qc_knitr in qc_report_data.items():
            fh.write(i_qc_knitr + "\n\n")

    if knit_html:
        command = """Rscript -e 'library(rmarkdown); rmarkdown::render("{}", "html_document")'"""
        command = command.format(path_knitr_file)
        os.system(command)

    return None


def perform_qc(method_name, *args, **kwargs):
    """
    Perform QC `method_name` with parameter *args and **kwargs, and return result.

    """

    try:
        qc_method = getattr(sys.modules[__name__], method_name)
    except:
        raise ValueError("method_name: {} not defined in qc_knitr.py".format(method_name))
    return qc_method(*args, **kwargs)


def knitr_header_setup(qc_helper_methods_path, path_knitr_data, x3_plate_names, meta_data=None,
                       original_data_frame="d_all", output="html_document"):
    """ Create knitr markdown file header and setup.

   Create knitr markdown file header and setup.

    Args:
        path_qc_methods (str): Path to external R methods file
        path_data (str): Path to data file


    Returns:
        header (str): Knittr markdown file header
        environment (str): Knittr markdown environment setter
        data_loader (str): Knittr markdown data loader

    """

    header = """
---
title: "QC report"
author: "Vital-IT, Swiss Institute of Bioinformatics"
date: "{}"
output: "{}"
---
""".format(str(datetime.date.today()), output)

    if meta_data:
        header += """
## HTS Run general info

| Overview |
|:-----------|:------------|\n"""

        header += "\n".join(["| {} | {}".format(i[0], i[1]) for i in meta_data])

    environment_commands = """
# Create environment:
# rm(list = ls(all = TRUE))
# gc()
source("{}")
library(reshape2)
require(gridExtra)""".format(qc_helper_methods_path)
    environment = "\n" + wrap_knitr_chunk(chunk=environment_commands, chunk_name="set_environment", echo=False,
                                          evaluate=True)

    data_loader_commands = """
# Load data:
path = "{0}"
{1} = read.csv(path, sep=",", header = TRUE)
{1}$x3_plate_name = factor({1}$x3_plate_name, levels = c("{2}"))
""".format(path_knitr_data, original_data_frame, '","'.join(x3_plate_names))
    data_loader = "\n" + wrap_knitr_chunk(chunk=data_loader_commands, chunk_name="load_data", echo=False, evaluate=True)

    return header, environment, data_loader


################ wrap knitr chunk ###################

def wrap_knitr_chunk(chunk, chunk_name, echo=False, evaluate=True, message=False, warning=False, options=""):
    """
        Instead of explicitly defining echo, evaluate and so on, it may be advised to implicitly provide all Knitr chunk
         options as a string in "options"
         In the same regard, one could rename "verbosity" to "options"/"knitr_chunk_options"
    """
    parameter_mapping = {"echo": echo, "eval": evaluate, "message": message, "warning": warning}
    parameters = {i: "{}=TRUE".format(i) if j else "{}=FALSE".format(i) for i, j in parameter_mapping.items()}
    return "```{{r {1}, {echo}, {eval}, {message}, {warning}, {options}}}\n{0}\n```\n".format(chunk, chunk_name,
                                                                                              options=options,
                                                                                              **parameters)


################ Data subsetting #####################

def knitr_subset(subset_requirements, original_data_frame="d_all", new_data_frame="d"):
    """ Create knitr code to subset the data.

   Create knitr code to subset the data.

    Args:
        subset_requirements (dict): For each requirement, key, values and negated need to be supplied.
        original_data_frame (str): Name of the original data frame.
        new_data_frame (str): Name of the new data frame.

    Returns:
        subset (str): Knittr code subsetting

    """

    if subset_requirements == {}:
        LOG.info("subset_requirements is empty.")
        return ""

    knitr_requirements = []
    for knitr_key, i_s in subset_requirements.items():
        if type(i_s["values"]) == list:
            knitr_equal = "%in%"
            knitr_value = "c('{}')".format("', '".join(i_s["values"]))
        else:
            knitr_equal = "=="
            knitr_value = "'{}'".format(i_s["values"])
        if (i_s["is_negated"].lower() == "true") == True:
            knitr_negator = "!"
        else:
            knitr_negator = ""
        knitr_requirements.append(" ".join([knitr_negator, knitr_key, knitr_equal, knitr_value]))

    subset = "{} = subset({}, {})".format(new_data_frame, original_data_frame, " & ".join(knitr_requirements))
    return subset


################# Plate layout ################

def plate_layout():
    description = '''
The plate layout used for all plates of this run.'''

    calculation = '''
x3_tail = tail(d_all$x3, n=1)
d = subset(d_all, x3 == x3_tail)
d = ddply(d, .(sample_type, x1, x2), summarize, y_mean = mean(y))

d$x2 = factor(d$x2, levels = max(d$x2):min(d$x2))
d$x1 = factor(d$x1, levels = min(d$x1):max(d$x1))
p = ggplot(d, aes(x= x1, y= x2, fill=sample_type), environment = environment())
p = p + geom_raster() + scale_fill_brewer(palette="Spectral")
p = beautifier(p)
p'''

    return description, calculation


################ QC methods ####################


def chessboard_pattern():
    description = '''
Evolution of mean value over plates for odd and even row and columns.'''

    calculation = '''
d = ddply(d, 1, transform, row_type = c("even", "odd")[(x2 %% 2) + 1])
d = ddply(d, 1, transform, column_type = c("even", "odd")[(x1 %% 2) + 1])


d_summary = ddply(d, .(x3, x3_plate_name, row_type), summarize, y_mean =mean(y), y_sd =sd(y))
p = ggplot(d_summary, aes(x3_plate_name, y_mean))
p = p + geom_errorbar(aes(ymin=y_mean-y_sd, ymax=y_mean+y_sd), width=.05)
p = p + geom_point(size = 2, aes(color = row_type))
p = p + scale_colour_brewer(palette="Set1")
p = beautifier(p)

d_summary = ddply(d, .(x3, x3_plate_name, column_type), summarize, y_mean =mean(y), y_sd =sd(y))
p2 = ggplot(d_summary, aes(x3_plate_name, y_mean))
p2 = p2 + geom_errorbar(aes(ymin=y_mean-y_sd, ymax=y_mean+y_sd), width=.05)
p2 = p2 + geom_point(size = 2, aes(color = column_type))
p2 = p2 + scale_colour_brewer(palette="Set1")
p2 = beautifier(p2)

grid.arrange(p, p2, ncol=2)'''

    return description, calculation


def compare_plate_replicates(r1=1, r2=2):
    description = """
Plot replicate values {r1} and {r2} against each other.""".format(r1=r1, r2=r2)

    calculation = """
d_tmp_1 = subset(d, sample_replicate == {r1})
d_tmp_2 = subset(d, sample_replicate == {r2})
d_tmp_1$y_replicate_1 = d_tmp_1$y
d_tmp_1$y_replicate_2 = d_tmp_2$y

p = ggplot(d_tmp_1, aes(y_replicate_1, y_replicate_2))
p = p + geom_point(size = 0.8, color = "brown", alpha = 0.3)
p = p + geom_smooth(method=lm,   # Add linear regression lines
                se=FALSE,    # Don't add shaded confidence region
                fullrange=T, colour="grey")
p = p + facet_wrap( ~x3_plate_name, ncol=3) + scale_colour_brewer(palette="Set1")
p = p + coord_fixed(ratio=1)
#plot.new()
#legend('topleft', legend = lm_eqn(lm(y_replicate_1 ~ y_replicate_2, d_tmp_1)), bty = 'n') # Problem printing.
beautifier(p)

myLm <- function( formula, df ){lb}
   mod <- lm(formula, data=df)
   lmOut <- data.frame(t(mod$coefficients))
   names(lmOut) <- c("intercept","slope")
   lmOut$r2 = summary(mod)$r.squared
   return(lmOut)
{rb}
outDf <- ddply(d_tmp_1, "x3_plate_name", function(df)  myLm(y_replicate_1 ~ y_replicate_2, df))
print(outDf)""".format(r1=r1, r2=r2, lb="{", rb="}")

    return description, calculation


def dynamics():
    description = '''
Plot the (dynamical) change across readouts.'''

    calculation = '''
d_summary = ddply(d, .(y_type, sample, sample_type, x3, x3_plate_name), summarize, y_mean =mean(y), y_sd =sd(y))
d_summary$y_time = as.numeric(gsub("\\D", "", d_summary$y_type))

p = ggplot(d_summary, aes(x=y_time, y=y_mean, color=sample, group=sample))
p = p + geom_point(size=2) + geom_line()
#p = p + geom_errorbar(aes(ymin=y_mean-y_sd, ymax=y_mean+y_sd), width=.05)
p = p + facet_wrap( ~ x3_plate_name, ncol=2) + scale_colour_brewer(palette="Set1")
beautifier(p)'''

    return description, calculation


def heat_map():
    description = '''
Heatmap of well wise values.'''

    calculation = '''
tile_plot_x1x2x3(d, "y", FALSE)'''

    return description, calculation


def kolmogorov_smirnov():
    description = '''
Kolmogorov–Smirnov test: Do sample and negative control stem from the same distribution (H0) or not (H1)?'''

    calculation = '''
calculate_ks <- function(neg, x3_plate_name) {
 neg_y = d[d$sample == neg & d$x3_plate_name == x3_plate_name, "y"]
 sample_y = d[d$sample_type == 's' & d$x3_plate_name == x3_plate_name, "y"]
 my_ks = ks.test(neg_y, sample_y, alternative = c("two.sided"), exact = TRUE)
 return(my_ks[['p.value']])
}

my_grid = expand.grid(neg = unique(d[d$sample_type=='neg', 'sample']), x3_plate_name = unique(d$x3_plate_name))
d_ks = adply(my_grid, 1, transform, pvalue_ks = calculate_ks(neg, x3_plate_name))
d_ks$log10_pvalue_ks = log10(d_ks$pvalue_ks)

p = ggplot(d_ks, aes(x3_plate_name, log10_pvalue_ks))
p = p + geom_point()
p = p + geom_hline(yintercept=-2)
p = p + facet_wrap( ~neg, ncol=2)
beautifier(p)'''

    return description, calculation


def kolmogorov_smirnov_estimated():
    description = '''
Kolmogorov–Smirnov test: Does the negative control stem from the same (estimated) distribution as the sample (H0) or not (H1)?'''

    calculation = '''
calculate_ks_estimate <- function(neg, x3_plate_name) {
 neg_y = d[d$sample == neg & d$x3_plate_name == x3_plate_name, "y"]
 # The maximum likelihood estimators for mu (sigma) of a Gaussian is the mean (the sample standard deviation = sd in R.)
 sample_y = d[d$sample_type == 's' & d$x3_plate_name == x3_plate_name, "y"]
 my_ks = ks.test(neg_y, 'pnorm', mean(sample_y), sd(sample_y), exact = TRUE)
 return(my_ks[['p.value']])
}

my_grid = expand.grid(neg = unique(d[d$sample_type=='neg', 'sample']), x3_plate_name = unique(d$x3_plate_name))
d_ks = adply(my_grid, 1, transform, pvalue_ks = calculate_ks_estimate(neg, x3_plate_name))
d_ks$log10_pvalue_ks = log10(d_ks$pvalue_ks)

p = ggplot(d_ks, aes(x3_plate_name, log10_pvalue_ks))
p = p + geom_point()
p = p + geom_hline(yintercept=-2)
p = p + facet_wrap( ~neg, ncol=2)
beautifier(p)'''

    return description, calculation


def mean_value_across_plates():
    description = '''
Evolution of mean value across plates.'''

    calculation = '''
d_summary = ddply(d, .(sample_type, x3, x3_plate_name), summarize, y_mean =mean(y), y_sd =sd(y))

p = ggplot(d_summary, aes(x3_plate_name, y_mean))
p = p + geom_errorbar(aes(ymin=y_mean-y_sd, ymax=y_mean+y_sd), width=.1)
p = p + geom_point(size = 2, aes(color = sample_type))
p = p + facet_wrap( ~sample_type, ncol=4) + scale_colour_brewer(palette="Set1")
beautifier(p)'''

    return description, calculation


def shapiro_wilk_normality_test():
    description = '''
Shapiro-Wilk Normality Test: Does the negative control stem from a normal distribution? Does the sample stem from a normal distribution?'''

    calculation = '''
calculate_sw <- function(data) {
 my_ks = shapiro.test(data)
 return(my_ks[['p.value']])
}

d_sw = ddply(d, .(x3_plate_name, x3, sample, sample_type), summarize, log10_pvalue_sw = log10(calculate_sw(y)))

p = ggplot(d_sw, aes(x3_plate_name, log10_pvalue_sw))
p = p + geom_point()
p = p + geom_hline(yintercept=-2)
p = p + facet_wrap( ~sample, ncol=2)
beautifier(p)'''

    return description, calculation


def ssmd():
    description = '''
SSMD (Definition according to [wikipedia](https://en.wikipedia.org/wiki/Strictly_standardized_mean_difference "Wikipedia: SSMD"))
$$ \\rm{ssmd} = \\frac{\mu_\\rm{pos} - \mu_\\rm{neg}}{\sqrt{\\sigma_\\rm{pos}^2 + \\sigma_\\rm{neg}^2}}, $$
where pos is the positive control, and neg are positive is the negative control.

Warning: The displayed cut-off values assume a moderate control. Strong controls require smaller (more strict) ssmd values.
Also, the displayed cut-off values hold for negative controls with higher signal than the corresponding positive controls.  If this is not given, the displayed cut-off values ought to be multiplied by -1.'''

    calculation = '''
d_summary = ddply(d, .(sample, sample_type, x3, x3_plate_name), summarize, y_mean =mean(y), y_sd =sd(y))

calculate_ssmd <- function(neg, pos, x3_plate_name) {
 neg_mean = d_summary[d_summary$sample == neg & d_summary$x3_plate_name == x3_plate_name, "y_mean"]
 neg_sd = d_summary[d_summary$sample ==neg & d_summary$x3_plate_name == x3_plate_name, "y_sd"]
 pos_mean = d_summary[d_summary$sample == pos & d_summary$x3_plate_name == x3_plate_name, "y_mean"]
 pos_sd = d_summary[d_summary$sample == pos & d_summary$x3_plate_name == x3_plate_name, "y_sd"]
 ssmd = (pos_mean - neg_mean) / sqrt(pos_sd^2 + neg_sd^2)
 return(ssmd)
}

my_grid = expand.grid(neg = unique(d[d$sample_type=='neg', 'sample']),  pos = unique(d[d$sample_type=='pos', 'sample']), x3_plate_name = unique(d$x3_plate_name))
d_qc_score = adply(my_grid, 1, transform, ssmd = calculate_ssmd(neg, pos, x3_plate_name))

thresholds = c(-2, -1, -0.5)
labels = c("excellent", "good", "inferior", "poor")
label_positions = get_label_positions(d_qc_score$ssmd, thresholds)
label_position_x3 = round(length(d_qc_score$x3)/2)


p = ggplot(d_qc_score, aes(x3_plate_name, ssmd))
p = p + geom_point(size=2, aes(color=neg))
p = p + geom_hline(yintercept=thresholds)
p = p + annotate("text", x=d_qc_score$x3_plate_name[label_position_x3], y=label_positions[[1]], label=labels[[1]], colour="grey40")
p = p + annotate("text", x=d_qc_score$x3_plate_name[label_position_x3], y=label_positions[[2]], label=labels[[2]], colour="grey40")
p = p + annotate("text", x=d_qc_score$x3_plate_name[label_position_x3], y=label_positions[[3]], label=labels[[3]], colour="grey40")
p = p + facet_wrap( ~ pos, ncol=2) + scale_colour_manual(values=cbbPalette)
beautifier(p)

print(d_qc_score[with(d_qc_score, order(pos, x3_plate_name)), ])'''

    return description, calculation


def z_factor():
    description = '''
The estimated z-factor is calculated as:
$$ z_{\\rm{factor}} = 1 - \\frac{3\cdot(\sigma_\\rm{s} + \sigma_\\rm{neg})}{|\mu_\\rm{s} - \mu_\\rm{neg}|}, $$
where s is the sample, and neg the negative control."
(Described e.g. on [wikipedia](https://en.wikipedia.org/wiki/Z-factor "Wikipedia: Z-factor") or in Birmingham et al, Nature, (2009) "Statistical methods for analysis of high throughput RNA interference screens"
)'''

    calculation = '''
d_summary = ddply(d, .(sample, sample_type, x3, x3_plate_name), summarize, y_mean =mean(y), y_sd =sd(y))

calculate_z_factor <- function(neg, x3_plate_name) {
 neg_mean = d_summary[d_summary$sample == neg & d_summary$x3_plate_name == x3_plate_name, "y_mean"]
 neg_sd = d_summary[d_summary$sample ==neg & d_summary$x3_plate_name == x3_plate_name, "y_sd"]
 s_mean = mean(d[d$sample_type == "s" & d$x3_plate_name == x3_plate_name, "y"])
 s_sd = sd(d[d$sample_type == "s" & d$x3_plate_name == x3_plate_name, "y"])
 z_factor = 1 - 3*(neg_sd + s_sd) / abs (neg_mean - s_mean)
 return(z_factor)
}

my_grid = expand.grid(neg = unique(d[d$sample_type=="neg", "sample"]), x3_plate_name = unique(d$x3_plate_name))
d_qc_score = adply(my_grid, 1, transform, z_factor = calculate_z_factor(neg, x3_plate_name))

thresholds = c(0, 0.5)
labels = c("unacceptable", "acceptable", "very good")
label_positions = get_label_positions(d_qc_score$z_factor, thresholds)
label_position_x3 = round(length(d_qc_score$x3)/2)


p = ggplot(d_qc_score, aes(x3_plate_name, z_factor))
p = p + geom_point(size=2, aes(color=neg))
p = p + geom_hline(yintercept=thresholds)
p = p + annotate("text", x=d_qc_score$x3_plate_name[label_position_x3], y=label_positions[[1]], label=labels[[1]], colour="grey40")
p = p + annotate("text", x=d_qc_score$x3_plate_name[label_position_x3], y=label_positions[[2]], label=labels[[2]], colour="grey40")
p = p + annotate("text", x=d_qc_score$x3_plate_name[label_position_x3], y=label_positions[[3]], label=labels[[3]], colour="grey40")
p = p + facet_wrap( ~ neg, ncol=2) + scale_colour_brewer(type=2, palette="RdYlBu")
beautifier(p)

print(d_qc_score[with(d_qc_score, order(neg, x3_plate_name)), ])
'''

    return description, calculation


def z_prime_factor():
    description = '''
$$ z'_{\\rm{factor}} = 1 - \\frac{3\cdot(\sigma_\\rm{hc} + \sigma_\\rm{lc})}{|\mu_\\rm{hc} - \mu_\\rm{lc}|}, $$
where hc is the high value control, and lc the low value control. The order of controls is irrelevant in the equation.
(Described e.g. in Birmingham et al, Nature, (2009) "Statistical methods for analysis of high throughput RNA interference screens": "A potential issue in using the Z' factor as a measure of assay resolution is that it is possible to generate a high Z' factor using a very strong positive control, which may not realistically represent more moderate screening positives. This issue is of special con- cern for RNAi screens, in which weak effects might be biologically meaningful and in which the signal-to-background ratio can be of lower magnitude than in small-molecule screens (Supplementary Table 1). Thus, researchers are advised whenever possible to use positive controls that are similar in strength to the hits they antici- pate finding. It may also be necessary to adjust Z'-factor quality guidelines for RNAi screens; we have found that assays with Z' fac- tors of zero or greater have been successful in identifying validated hits when we screened library plates in duplicate or triplicate.")'''

    calculation = '''
d_summary = ddply(d, .(sample, sample_type, x3, x3_plate_name), summarize, y_mean =mean(y), y_sd =sd(y))

calculate_z_prime_factor <- function(neg, pos, x3_plate_name) {
 neg_mean = d_summary[d_summary$sample == neg & d_summary$x3_plate_name == x3_plate_name, "y_mean"]
 neg_sd = d_summary[d_summary$sample ==neg & d_summary$x3_plate_name == x3_plate_name, "y_sd"]
 pos_mean = d_summary[d_summary$sample == pos & d_summary$x3_plate_name == x3_plate_name, "y_mean"]
 pos_sd = d_summary[d_summary$sample == pos & d_summary$x3_plate_name == x3_plate_name, "y_sd"]
 z_prime_factor = 1 - 3*(neg_sd + pos_sd) / abs (neg_mean - pos_mean)
 return(z_prime_factor)
}

my_grid = expand.grid(neg = unique(d[d$sample_type=='neg', 'sample']),  pos = unique(d[d$sample_type=='pos', 'sample']), x3_plate_name = unique(d$x3_plate_name))
d_qc_score = adply(my_grid, 1, transform, z_prime_factor = calculate_z_prime_factor(neg, pos, x3_plate_name))

thresholds = c(0, 0.5)
labels = c("unacceptable", "acceptable", "very good")
label_positions = get_label_positions(d_qc_score$z_prime_factor, thresholds)
label_position_x3 = round(length(d_qc_score$x3)/2)

p = ggplot(d_qc_score, aes(x3_plate_name, z_prime_factor))
p = p + geom_point(size=2, aes(color=neg))
p = p + geom_hline(yintercept=thresholds)
p = p + annotate("text", x=d_qc_score$x3_plate_name[label_position_x3], y=label_positions[[1]], label=labels[[1]], colour="grey40")
p = p + annotate("text", x=d_qc_score$x3_plate_name[label_position_x3], y=label_positions[[2]], label=labels[[2]], colour="grey40")
p = p + annotate("text", x=d_qc_score$x3_plate_name[label_position_x3], y=label_positions[[3]], label=labels[[3]], colour="grey40")
p = p + facet_wrap( ~ pos, ncol=2) + scale_colour_manual(values=cbbPalette)
beautifier(p)

print(d_qc_score[with(d_qc_score, order(pos, x3_plate_name)), ])'''

    return description, calculation


def smoothed_histogram():
    description = '''
Smoothed histogram to visualise the overlap of value densities per sample type.'''

    calculation = '''
p = ggplot(d, aes(y, colour=sample)) + geom_density()
p = p + facet_wrap( ~x3_plate_name, ncol=2, scales="free_y") + scale_colour_manual(values=cbbPalette)
beautifier(p)'''

    return description, calculation


def smoothed_histogram_sample_type():
    description = '''
Smoothed histogram to visualise the overlap of value densities per sample type.'''

    calculation = '''
p = ggplot(d, aes(y, colour=sample_type)) + geom_density()
p = p + facet_wrap( ~x3_plate_name, ncol=2, scales="free_y") + scale_colour_manual(values=cbbPalette)
beautifier(p)'''

    return description, calculation


def time_course():
    description = '''
Visualise the time course of mean and sd of different sample types.'''

    calculation = '''
d$x3 = factor(d$x3, levels = min(d$x3):max(d$x3))
d_summary = ddply(d, .(x3, x3_plate_name, sample_type), summarize, y_mean =mean(y), y_sd =sd(y))
p = ggplot(d_summary, aes(x3, y_mean, colour=sample_type))
p = p + geom_errorbar(aes(ymin=y_mean-y_sd, ymax=y_mean+y_sd), width=.05)
p = p + scale_colour_brewer(palette="Set1")
p = p + geom_point(size = 2)
p = p + geom_line(size = 1, aes(group=sample_type))
# LATER: Add http://docs.ggplot2.org/current/geom_smooth.html
beautifier(p)'''

    return description, calculation
