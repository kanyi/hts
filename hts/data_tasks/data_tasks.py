import logging
import sys

from hts.data_tasks import analysis, data_normalization, data_normalization, gaussian_processes, qc_detect_data_issues, qc_knitr, qc_matplotlib

LOG = logging.getLogger(__name__)


def perform_task(run, task_name, *args, **kwargs):

    try:
        name_list = task_name.split(".")
        task_method = sys.modules[__name__]
        for i in name_list:
            task_method = getattr(task_method, i)

    except:
        LOG.warning("Could not find task data_tasks - trying plate wise tasks")
        for i_plate in run.plates.values():
            i_plate.preprocess(task_name,  *args, **kwargs)
        return

    return task_method(run, *args, **kwargs)
