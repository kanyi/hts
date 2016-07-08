Search.setIndex({envversion:49,filenames:["code_docs","config","contributors","data_transformations","example_workflow","hit_selection","hts","hts.data_tasks","hts.plate","hts.plate_data","hts.protocol","hts.run","index","install","meta_data","model","modules","notebooks/config","notebooks/data_normalization_tutorial","notebooks/gaussian_process_normalization_tutorial","notebooks/load_data__tutorial","notebooks/quality_control_reporting__tutorial","notebooks/run_object","notebooks/write_data__tutorial"],objects:{"":{hts:[6,0,0,"-"]},"hts.conftest":{pytest_runtest_setup:[6,1,1,""]},"hts.data_tasks":{data_normalization:[7,0,0,"-"],data_tasks:[7,0,0,"-"],qc_detect_data_issues:[7,0,0,"-"],qc_knitr:[7,0,0,"-"],qc_matplotlib:[7,0,0,"-"]},"hts.data_tasks.data_normalization":{calculate_local_ssmd:[7,1,1,""],classify_by_cutoff:[7,1,1,""]},"hts.data_tasks.data_tasks":{perform_task:[7,1,1,""]},"hts.data_tasks.qc_detect_data_issues":{detect_low_cell_viability:[7,1,1,""]},"hts.data_tasks.qc_knitr":{chessboard_pattern:[7,1,1,""],compare_plate_replicates:[7,1,1,""],create_report:[7,1,1,""],dynamics:[7,1,1,""],heat_map:[7,1,1,""],heat_map_log10_mark_conditionally:[7,1,1,""],heat_map_mark_conditionally:[7,1,1,""],knitr_header_setup:[7,1,1,""],knitr_subset:[7,1,1,""],kolmogorov_smirnov:[7,1,1,""],kolmogorov_smirnov_estimated:[7,1,1,""],mean_value_across_plates:[7,1,1,""],perform_qc:[7,1,1,""],plate_layout:[7,1,1,""],replicate_correlation:[7,1,1,""],replicate_correlation_robust:[7,1,1,""],shapiro_wilk_normality_test:[7,1,1,""],smoothed_histogram:[7,1,1,""],smoothed_histogram_sample_type:[7,1,1,""],ssmd:[7,1,1,""],time_course:[7,1,1,""],wrap_knitr_chunk:[7,1,1,""],z_factor:[7,1,1,""],z_prime_factor:[7,1,1,""]},"hts.data_tasks.qc_matplotlib":{create_report:[7,1,1,""],heat_map_multiple:[7,1,1,""],heat_map_multiple_gaussian_process_model:[7,1,1,""],heat_map_single:[7,1,1,""],heat_map_single_gaussian_process_model:[7,1,1,""],slice_multiple_gaussian_process_model:[7,1,1,""],slice_single_gaussian_process_model:[7,1,1,""]},"hts.plate":{plate:[8,0,0,"-"]},"hts.plate.plate":{Plate:[8,2,1,""],translate_coordinate_humanreadable:[8,1,1,""],translate_humanreadable_coordinate:[8,1,1,""]},"hts.plate.plate.Plate":{"__str__":[8,3,1,""],add_data:[8,3,1,""],calculate_control_normalized_signal:[8,3,1,""],calculate_linearly_normalized_signal:[8,3,1,""],calculate_local_ssmd:[8,3,1,""],calculate_net_fret:[8,3,1,""],calculate_normalization_by_division:[8,3,1,""],calculate_significance_compared_to_null_distribution:[8,3,1,""],classify_by_cutoff:[8,3,1,""],create:[8,3,1,""],cross_validate_predictions:[8,3,1,""],evaluate_well_value_prediction:[8,3,1,""],filter:[8,3,1,""],flatten_data:[8,3,1,""],flatten_values:[8,3,1,""],flatten_wells:[8,3,1,""],get_data_for_gaussian_process:[8,3,1,""],height:[8,4,1,""],map_coordinates:[8,3,1,""],name:[8,4,1,""],preprocess:[8,3,1,""],randomize_values:[8,3,1,""],subtract_readouts:[8,3,1,""],un_flatten_data:[8,3,1,""],width:[8,4,1,""],write:[8,3,1,""]},"hts.plate_data":{data_issue:[9,0,0,"-"],meta_data:[9,0,0,"-"],plate_data:[9,0,0,"-"],plate_data_io:[9,0,0,"-"],plate_layout:[9,0,0,"-"],readout:[9,0,0,"-"],readout_io:[9,0,0,"-"]},"hts.plate_data.data_issue":{DataIssue:[9,2,1,""]},"hts.plate_data.data_issue.DataIssue":{create_well_list:[9,5,1,""],layout_general_type:[9,4,1,""],sample_replicate_count:[9,4,1,""]},"hts.plate_data.meta_data":{MetaData:[9,2,1,""]},"hts.plate_data.plate_data":{PlateData:[9,2,1,""]},"hts.plate_data.plate_data.PlateData":{"__iter__":[9,3,1,""],"__str__":[9,3,1,""],add_data:[9,3,1,""],create:[9,5,1,""],create_csv:[9,5,1,""],create_excel:[9,5,1,""],create_excel_multiple_plates_per_file:[9,5,1,""],create_from_coordinate_tuple_dict:[9,5,1,""],create_pickle:[9,5,1,""],data:[9,4,1,""],get_data:[9,3,1,""],get_values:[9,3,1,""],get_wells:[9,3,1,""],height:[9,4,1,""],tags:[9,4,1,""],width:[9,4,1,""],write:[9,3,1,""]},"hts.plate_data.plate_data_io":{read_csv:[9,1,1,""],read_excel:[9,1,1,""]},"hts.plate_data.plate_layout":{PlateLayout:[9,2,1,""]},"hts.plate_data.plate_layout.PlateLayout":{create_csv:[9,5,1,""],invert:[9,3,1,""],layout_general_type:[9,4,1,""],sample_replicate_count:[9,4,1,""]},"hts.plate_data.readout":{Readout:[9,2,1,""]},"hts.plate_data.readout.Readout":{"__str__":[9,3,1,""],create_envision_csv:[9,3,1,""],create_insulin_csv:[9,3,1,""],data:[9,4,1,""],height:[9,4,1,""],width:[9,4,1,""]},"hts.plate_data.readout_io":{read_envision_csv:[9,1,1,""],read_insulin_csv:[9,1,1,""]},"hts.protocol":{protocol:[10,0,0,"-"]},"hts.protocol.protocol":{Protocol:[10,2,1,""],ProtocolTask:[10,2,1,""]},"hts.protocol.protocol.Protocol":{create:[10,5,1,""],file:[10,4,1,""],get_tasks_by_tag:[10,3,1,""],name:[10,4,1,""],tasks:[10,4,1,""],write:[10,3,1,""]},"hts.protocol.protocol.ProtocolTask":{config:[10,4,1,""],create:[10,5,1,""],method:[10,4,1,""],name:[10,4,1,""],tags:[10,4,1,""],type:[10,4,1,""]},"hts.run":{constants:[11,0,0,"-"],run:[11,0,0,"-"],run_io:[11,0,0,"-"]},"hts.run.run":{Run:[11,2,1,""],merged_replicates:[11,1,1,""],send_mail:[11,1,1,""]},"hts.run.run.Run":{"__iter__":[11,3,1,""],"__str__":[11,3,1,""],"_platelayout":[11,4,1,""],"_protocol":[11,4,1,""],"_qc":[11,4,1,""],add_data_from_data_frame:[11,3,1,""],add_meta_data:[11,3,1,""],analysis:[11,3,1,""],create:[11,5,1,""],create_from_config:[11,5,1,""],create_from_csv_file:[11,5,1,""],create_from_envision:[11,5,1,""],data_frame:[11,4,1,""],data_frame_samples:[11,4,1,""],do_task:[11,3,1,""],experimenter:[11,4,1,""],filter:[11,3,1,""],get_run_config_data:[11,3,1,""],gp_models:[11,4,1,""],height:[11,4,1,""],map_config_file_definition:[11,5,1,""],merger_add_data_from_data_frame:[11,3,1,""],merger_rank_samples:[11,3,1,""],merger_summarize_statistical_significance:[11,3,1,""],name:[11,4,1,""],net_qc:[11,4,1,""],plates:[11,4,1,""],preprocess:[11,3,1,""],protocol:[11,3,1,""],qc:[11,3,1,""],raw_qc:[11,4,1,""],width:[11,4,1,""],write:[11,3,1,""]},"hts.run.run_io":{add_meta_data:[11,1,1,""],column_plate_name:[11,4,1,""],column_well:[11,4,1,""],columns_metas:[11,4,1,""],columns_readouts:[11,4,1,""],convert_well_id_format:[11,1,1,""],delimiter:[11,4,1,""],file:[11,4,1,""],plate_layout_name:[11,4,1,""],plate_name:[11,4,1,""],read_csv:[11,1,1,""],readouts:[11,4,1,""],rename_pd_columns:[11,1,1,""],run:[11,4,1,""],serialize_as_csv_one_row_per_well:[11,1,1,""],serialize_as_pandas:[11,1,1,""],serialize_run_for_r:[11,1,1,""],well_name:[11,4,1,""]},hts:{conftest:[6,0,0,"-"],data_tasks:[7,0,0,"-"],plate:[8,0,0,"-"],plate_data:[9,0,0,"-"],protocol:[10,0,0,"-"],run:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:classmethod"},terms:{"0x1093de048":[],"0x10eced908":19,"16x24":19,"20160418_sirna_beivaleria":21,"414nm":8,"475nm":8,"525nm":8,"615nm":8,"665nm":8,"__init__":[17,18,22],"__iter__":[9,11],"__str__":[8,9,11],"_platelayout":11,"_protocol":11,"_qc":11,"_subplot":7,"_use_error_msg":17,"boolean":[7,8,11],"break":[17,18,19,20,22,23],"case":[19,20],"class":[8,9,10,11,12],"default":[13,21],"else":8,"export":9,"float":[7,8,11],"function":[7,18,19,22],"import":[13,17,18,19,20,21,22,23],"int":[8,9,11],"new":7,"null":8,"return":[7,8,9,11],"true":[7,8,9,11,17,19,21],"try":[19,20],a001:11,abitrari:7,abov:7,acceptor:8,acceptor_:8,acceptor_channel:8,acceptor_fluorophor:8,access:[13,20,23],accord:[8,11],aceptor:8,across:8,add:[],add_data:[8,9],add_data_from_data_fram:11,add_gaussian_process:19,add_meta_data:11,addit:[12,17],addition:20,address:11,adjac:[17,18,19,20,22,23],adjust:9,adriano_conrad_aguzzi:11,advis:7,after:8,afterward:9,all:[],allow:[15,21],alongsid:15,alpha:7,alreadi:[17,18,22],also:[1,8,9,21,23],alwai:20,ambient:9,analys:20,analysi:[],ansi:[17,18,19,20,22,23],apc:8,apertur:9,appli:[7,17],approach:17,arbitrari:[9,10,15,17,19,20,21],arbitrarili:19,arg:[7,8,9,10,11],argument:11,arrai:9,arrang:9,aspect:17,assai:9,assayid:9,associ:8,assum:8,assume:8,attach:11,auto:9,automat:21,auxiliari:17,avail:[7,23],averag:8,axesgrid:7,axessubplot:7,back:20,backend:[17,18,22],bar:21,barcod:9,base:[1,7,8,9,10,11,12,15,20,21],base_path:20,basic:9,basicconfig:[17,19,21,23],bayesian:19,becaus:[17,18,22],been:[17,18,22],befor:[17,18,22],begin:[9,17,18,19,20,22,23],below:8,best:19,best__s__predicted_mean:19,best__s__predicted_sd:19,best_mean_tag:19,best_sd_tag:19,better:8,bewar:1,bf2a440d906f:23,bic:19,binari:8,biolog:19,blank:8,blue:23,bmg:9,bodi:11,bool:[8,11],both:[1,8],bound:19,buffer:8,buffer_:8,build:[9,15],calc:9,calcul:[8,9,19],calculate_control_normalized_sign:[8,17],calculate_linearly_normalized_sign:8,calculate_local_ssmd:[7,8],calculate_net_fret:8,calculate_normalization_by_divis:8,calculate_significance_compared_to_null_distribut:8,call:[17,18,22,23],can:[1,7,9,13,15,17,18,19,20,21,22,23],cdot:8,cell:[7,17,18,19,20,22,23],cfp:8,chamber:9,channel:[8,9],channel_wise_info:9,channel_wise_read:9,check:[8,9,10,11],chessboard_pattern:7,chirp:18,choic:17,choos:19,chose:19,chosen:[17,18,22],chunk:[7,21],chunk_nam:7,classif:8,classify_by_cutoff:[7,8],classmethod:[9,10,11],code:[7,12,21],col:9,collect:11,color:7,column:[9,11,20,23],column_nam:11,column_plate_nam:[11,20,22],column_wel:[11,20,22],columni:9,columns_meta:[11,20,22],columns_readout:[11,20,22],com:[11,13,17],combin:7,command:[13,19],commandchar:[17,18,19,20,22,23],comment:[17,18,19,20,22,23],common:7,commonli:20,compar:[8,19],compare_plate_repl:7,compens:8,compli:[7,21],compound:11,concaten:11,condit:[7,8,9],condition_data_tag:8,condition_data_typ:8,config:[],config_data:[7,8],config_path:[17,19,20,21,23],config_protocol:17,config_run:17,configobj:[1,10,11,20,21],conform:[8,9],connect:[],consid:7,consist:21,constant:[],constitut:19,constraint:[17,19],contain:[7,9,17,19,20,21],content:[],control:[],control_readout_tag:7,control_sample_typ:7,controlled_sample_typ:7,convert_well_id_format:11,coordin:[8,9,11],coordinates_list:8,corner:9,correct:9,correspond:9,could:[7,8,11,19],coupl:23,cover:9,creat:[],create_csv:9,create_envision_csv:9,create_excel:9,create_excel_multiple_plates_per_fil:9,create_from_config:11,create_from_coordinate_tuple_dict:9,create_from_csv_fil:11,create_from_envis:11,create_insulin_csv:9,create_pickl:9,create_report:[7,17,21],create_well_list:9,criterion:19,cross:8,cross_validate_predict:8,crosstalk:9,csv:[9,11,17,18,19,20,21,22,23],csv_one_well_per_row:[20,23],current:[7,8,9,10,11,19,20,21,23],custom:17,cut:7,cyan:23,d_all:7,data0:22,data1:22,data2:22,data_0:11,data_1:11,data_3:20,data_fram:[11,23],data_frame_sampl:[11,23],data_frame_sample_onli:23,data_issu:[],data_issue_tag:7,data_load:7,data_norm:[],data_path:[18,22],data_predict:8,data_tag:[7,8,9],data_tag_classified_readout:8,data_tag_mean_neg:8,data_tag_mean_po:8,data_tag_normalized_readout:[8,17],data_tag_p_valu:8,data_tag_pvalue_sample_vs_neg_control:17,data_tag_pvalue_sample_vs_pos_control:17,data_tag_randomized_readout:8,data_tag_readout:[7,8,17,19],data_tag_readout_differ:8,data_tag_readout_minuend:8,data_tag_readout_subtrahend:8,data_tag_ssmd:8,data_tag_standard_scor:8,data_tag_std_neg:8,data_tag_std_po:8,data_task:[],data_typ:8,datafil:20,dataissu:9,dataset:8,date:[9,13],datum:9,deal:[18,19,22],debug:8,decid:19,declar:7,defaultdatafold:9,defin:[],definit:21,degre:9,deinstal:13,delimit:[9,11,20],depend:[],describ:[8,9,10,11,18],descript:[7,9],design:15,detail:18,detect:7,detect_low_cell_vi:7,dev:[],develop:13,deviat:7,diamet:9,dict:[7,9,11],dictionari:7,differ:[19,20],dimension:19,dir:11,direct:9,directli:13,directori:[8,9,10,11,23],displai:20,distribut:8,diverg:7,divers:21,divis:8,do_gaussian_process_norm:17,do_gaussian_process_predict:19,do_task:[11,18,19,21],doc:[],document:[12,17],doe:[7,17,20],donor:8,donor_:8,donor_channel:8,donor_fluorophor:8,down:19,download:[20,21],dynam:7,each:[7,9,11,12,15,19,20],easi:11,easili:20,echo:7,edit:9,effect:[17,18,22],either:[7,8,11,20],elke:2,elkeschap:[13,17,18,19,20,22,23],elkewschap:11,els:11,email_from:11,email_subject:11,email_to:11,emmenegg:2,empti:21,end:[9,17,18,19,20,22,23],environ:[7,13],envis:[9,11],envision:9,envision_24h:17,envision_csv:20,envisision_24h:17,equal:8,errno:23,error:[8,9,17,19,21,23],estim:8,evalu:7,evaluate_well_value_predict:8,everi:[19,20,21],everyth:1,exactli:[9,10],excel:[9,20],exist:[7,11],expect:7,experi:[7,11,20],experiment2_:20,experiment:[9,11,17,20],experiment_2b:20,experimenter_mail:20,explain:9,explanatori:21,explicitli:7,express:[8,9],extra_info_1:20,extra_info_2:20,extract:[9,11],factor:8,factori:9,fall:8,fals:[7,8,11,17,19,21],fast:19,favorit:21,field:9,fig:[17,21],filenam:[9,11,20],filenotfounderror:23,filenumb:20,filter:[7,8,11,17,21,23],filter_condit:11,find:[17,19],finish:[9,11],first:[17,18,20,21,22],fit:11,fix:[17,19],fixtur:8,flash:9,flatten:8,flatten_data:8,flatten_valu:8,flatten_wel:8,flow:15,fluoresc:9,fluorophor:8,fluorophore_acceptor:8,fluorophore_donor:8,fly:7,folder:21,follow:[8,15,19,20,21],foo:21,forc:[7,8,11,17,18,19,20,22,23],format:[1,8,9,10,11,17,18,19,20,21,22,23],formula:9,frame:[7,11,23],fret:[8,17],from:[7,8,9,11,13,17,18,19,20,21,22,23],further:[8,19],gaussian:[],gaussian_process:19,gaussian_process_norm:17,gener:[9,17,20,21],georg:2,get:[8,9],get_data:[8,9],get_data_for_gaussian_process:8,get_run_config_data:11,get_tasks_by_tag:10,get_valu:9,get_wel:9,ggplot2:13,git:13,github:[12,13],given:[9,20],glo:7,global:17,glucos:11,gmail:11,good:19,gp_model:11,gpy:[13,19],green:23,grid:[],gridextra:13,gripper:9,group:9,guex:2,guid:[],hack:9,handl:[15,17],happen:19,hat:8,have:[7,8,19,20],header:[],heart:20,heat:18,heat_map:[7,17,21],heat_map_log10_mark_condition:7,heat_map_mark_condition:7,heat_map_multipl:[7,19],heat_map_multiple_gaussian_process_model:[7,19],heat_map_singl:7,heat_map_single_gaussian_process_model:7,height:[8,9,11,17,18,19,20,21,22],here:[1,17,18,19,20,21,22],hold:[18,19,22],how:[17,19,21,23],html:[1,13,21],html_document:7,htslab:17,http:[1,13],humanread:8,humid:9,i_col:9,i_row:9,ignor:9,imag:15,implement:[7,11,19,20,21],implicitli:7,includ:[8,10,17],include:9,index:[0,9,12],indic:11,individu:17,info:[9,18],inform:[],informat:[9,19],inlin:[17,18,19,21,22,23],input:[8,9,10,11,18,19,22,23],insert:18,instal:[13,17,19,23],install:12,installat:[],instanc:[],instead:[7,11,13],instruct:[],instrument:9,integr:[7,20],intens:23,interest:20,intern:11,interpret:9,intro:12,introduc:[8,12],invert:9,invok:21,ioanni:2,ipynb:1,ipython:23,is_higher_value_bett:8,is_neg:21,is_per_pl:[17,19],is_twosid:8,is_zigzag:[17,19],issu:[7,9],item:6,iterat:[9,11],itself:[13,20],john:[17,20],join:11,kei:[7,8,9],kernel:[],kernel_tag:[7,19],kernel_typ:[7,17,19],key_str:11,keyword:11,kind:17,kinet:9,knit_html:7,knitr:[7,13,17,21],knitr_chunk_opt:7,knitr_header_setup:7,knitr_opt:[17,21],knitr_subset:7,knittr:7,known_data_types:8,known_task_types:10,kolmogorov_smirnov:7,kolmogorov_smirnov_estim:7,kwarg:[7,8,9,11,23],label:9,lambda:9,larg:[9,21],last:[9,23],latest:[1,13],layout:[],layout_general_typ:9,learn:21,least:[19,21],lengthscal:[17,19],let:[17,19,20],letternumb:11,level:[7,9,17,19,20,21,23],lib:[17,18,22],like:[1,18,22],line:[9,13,15,17,18,19,20,21,22,23],linearli:8,link:[18,19,22],linspac:18,list:[7,8,9,10,11,20,21],littl:19,load:[],load_data__tutori:1,loader:7,local:[8,17,19,20,21],log:[17,19,21,23],look:[17,18,19,20,22],low:[7,8],lower:8,lowest:19,lum:9,luminesc:9,m32:7,m_insulinassay384:9,magnif:7,mai:[7,8,9,11,20,21],mail:11,make:[8,13],map:[8,9,18,20],map_config_file_definit:11,map_coordin:8,marc:2,markdown:7,mass:13,match:21,math:8,matplotlib:[7,17,18,19,21,22,23],matric:9,matrix:9,mea:9,mean:[8,19],mean_value_across_pl:7,measinfo:9,meastim:9,measur:[7,9,12,20],meisl:2,merg:11,merged_repl:11,merger_add_data_from_data_fram:11,merger_rank_sampl:11,merger_summarize_statistical_signific:11,messag:7,meta:[1,11,15,18,19,20,22],meta_data:[],meta_data_exclude_column:11,meta_data_kwarg:11,meta_data_renam:11,meta_data_well_name_pattern:11,metadata:9,method:[7,8,9,10,17,19,21],method_nam:[7,8],methodnam:8,might:13,min:9,mind:15,misfortun:9,mode:[9,17,19,21,23],model:[8,12,15,19],model_as_gaussian_process:7,more:[12,18,19,22],most:23,move:9,mu_:8,multipl:[7,9,11,20],must:[1,9,17,18,22],my_custom_normalized_readout_tag:17,my_custom_pvalue_neg_control_tag:17,my_custom_pvalue_pos_control_tag:17,my_custom_readout_tag:17,my_first_plate_nam:20,my_quality_control:21,my_readouts_nam:20,my_readouts_name_3:20,my_run:23,my_second_plate_nam:20,my_sign:21,my_tag:21,my_third_plate_nam:20,n_max_iter:7,n_plate:11,n_plates_max:7,name:[1,7,8,9,10,11,17,19,20,21],necessari:[9,11,17,19,21,23],necessarili:10,need:[7,8,9,10,17,18,19,20,21,22,23],neg:[8,9,19,21],neg_0:[17,19],neg_k:9,negat:7,negative_control_kei:[8,17],net:[8,17],net_fret:[8,17,19],net_fret_kei:8,net_qc:11,netfret:8,new_data_fram:7,next:13,nicknam:9,nicola:2,nomin:7,none:[7,8,9,10,11,19],nor:9,normal:[],normalized_0:8,normalized_1:8,normalized__i:8,normalized_kei:8,normalizer_kei:8,note:9,notebook:1,now:[13,19,20],number:[9,15,18,19,20,21],numpi:[13,18],object:[8,9,10,11,19],occur:20,off:7,omega:9,once:[],one:[],onli:[7,8,9,10,11,17,19,20,21,23],open:23,operat:9,option:[7,17,21],ordereddict:11,org:20,origin:[7,11,17,18,19,20,21,22,23],original_data_fram:7,originalverbatim:[17,18,19,20,22,23],other:[8,9,18,20],otherwis:8,our:19,out:[9,19,21],output:[1,7,8,9,10,11,17,18,19,21,22,23],over:[9,11],overview:19,own:[18,19],packag:[],page:[0,12],pair:8,panda:[11,23],pandoc:13,param:8,paramet:[7,8,9,10,11,19,23],parser:20,part:20,particular:9,pass:11,path:[1,7,8,9,10,11,17,18,19,20,21,22,23],path_data:7,path_knitr_data:7,pattern:[8,20],pdf:[13,21],per:[],perform:[],perform_prion_fit:[],perform_qc:7,perform_task:7,perhap:7,person:21,pickl:[8,9,10,11,23],pip3:13,pip:13,place:9,plate1:17,plate2:17,plate3:17,plate4:17,plate5:17,plate6:17,plate:[],plate_data:[],plate_data_io:[],plate_data_typ:11,plate_info:9,plate_layout:[],plate_layout_nam:11,plate_layout_tutorial_1:17,plate_nam:[7,11,20],plate_tag:7,plate_wel:20,platedata:[8,9,18,19,22],platelayout:[9,11],platemap:9,plot:[],plot_kwarg:7,plotli:7,plt:18,plyr:[],pos_0:[17,19,21],pos_1:21,pos_control_lower_than_neg_control:8,pos_k:9,posit:[8,9,19,21],positive_control_kei:[8,17],possibl:23,posterior:19,practic:7,predict:[],prepar:[18,21],prepend:20,preprocess:[8,11,17],preset:9,print:[11,17,18,19,20,22],prion:[],procedur:21,process:[],procol:21,procol_config:21,produc:19,program:9,project:[12,13],proportion:8,protocol:[],protocol_config:[],protocol_config_tutorial_1:17,protocoltask:[10,11],provid:[7,17,18,19,21,22],publicli:9,purpos:8,pvalu:[8,19],pylab:[17,18,22],pypi:13,pyplot:[17,18,22],pytest_runtest_setup:6,python3:[13,17,18,22],python:[],python_project:[17,18,19,20,22,23],qc_detect_data_issu:[],qc_helper_method:17,qc_helper_methods_path:17,qc_knitr:[],qc_matplotlib:[],qc_report:[7,11],qc_result_path:21,qualiti:[],quality_control:7,qualitycontrol:11,rac:8,random:8,randomize_valu:8,randomized_sampl:8,raw:[],raw_data:[17,18,22],raw_qc:11,rbf:[],rcolorbrew:[],read:[],read_csv:[9,11],read_envision_csv:9,read_excel:9,read_insulin_csv:9,readout:[],readout_1:20,readout_2:20,readout_3:20,readout_dict:8,readout_io:[],readout_tag:[],readthedoc:1,real:7,realtim:7,recent:23,recommend:13,red:23,redund:1,ref:17,refer:[7,8,9],regard:7,relev:11,reload:11,remov:19,remove_empty_row:[9,11],renam:[7,8],rename_columns_dict:11,rename_dict:11,rename_pd_column:11,repeat:9,replicate_correl:7,replicate_correlation_robust:7,replicate_defining_column:[7,11],report:[],reproduc:21,requir:[1,7,13],research:21,reshape2:[],resolut:19,result:[7,8,9,11,15,19,21],result_fil:7,resultfile_tag:[7,21],retriev:[8,9],return_list:8,return_str:[8,9,10,11,23],rewrite:8,rmarkdown:13,rotat:9,row:[9,11,20],rowi:9,rscript:13,run:[],run_common:23,run_config:[],run_config_tutorial_1:[17,19,20],run_data:11,run_from_panda:23,run_io:[],run_one_well_per_row_csv:[18,22],s_k:9,same:[1,7,8,9,15],sampl:[],sample_kei:[7,8],sample_replicate_count:9,sample_tag:[7,8,19],sample_tag_input:17,sample_tag_null_distribut:8,sample_typ:[7,21],save:[1,8,11,20,21],scale:[],scanx:9,scany:9,schaper:2,schema:[18,19,22],score:[8,19],search:[0,12],see:[1,9,17,18,19,20,21,22,23],self:[7,8,11,23],send_mail:11,separ:9,serial:[8,9,10,11],serialize_as_csv_one_row_per_wel:11,serialize_as_panda:[11,23],serialize_run_for_r:11,set:[],setter:7,setup:[],sever:[8,11,20],shall:[9,11],shapiro_wilk_normality_test:7,sheet:9,sheffieldml:13,shorten:20,should:19,show:[8,9,18],signal:[8,9,11,17,19],signific:7,simpl:[18,19,20,21],simpli:21,sin:18,singl:[7,9,15],sirna:19,site:[17,18,22],size:9,slice:7,slice_multiple_gaussian_process_model:7,slice_single_gaussian_process_model:7,slightli:1,smooth:19,smoothed_histogram:7,smoothed_histogram_sample_typ:7,smtp:11,smtp_port:11,smtp_server:11,smtp_usernam:11,snippet:13,soft:9,some:[17,19],sourc:[],specif:[1,7,8,17,20,21],specifi:[7,8,10,11],spreadsheet:9,squar:8,ssmd:[7,8,19],standard:[8,19,21,23],start:9,state:[8,9,10,11],statement:[18,19,22],statist:21,stefan:2,step:[15,19],store:[8,15],str:[7,8,9,10,11],streamlin:12,string:[7,8,9,11],strong:7,structur:9,stuff:7,subclass:8,submodul:[],subset:[7,8],subset_requir:7,subtract:19,subtract_readout:8,suffer:7,suppli:7,suppos:8,sure:13,synopsi:[7,8,9,10,11],system:9,tag:[7,8,9,10,11,17,19,20,21],take:20,taken:11,tale:9,task:[],task_nam:7,temperatur:9,templat:[20,21],term:7,test:[9,15,18,21,22],test_data:[17,18,19,20,22],text:21,textbf:23,textcolor:23,textfil:21,thei:20,them:21,thi:[1,7,8,9,10,11,12,17,18,19,20,21,22,23],three:17,threshold:[7,8],throughput:[],time:[9,11,13,17,18,22],time_cours:7,timeglo:7,titl:[7,18,21],to_csv:23,todo:[],too:7,traceback:23,train:19,translat:9,translate_coordinate_humanread:8,translate_humanreadable_coordin:8,truncat:7,tsv:11,tupl:[7,9,11],turn:9,tutorial_1:17,tutorial_data_normalization_path:[17,18,19,20,22,23],tutorial_qc_path:21,two:[1,19,21],txt:[17,19,20],type:[1,8,9,10,11,20],type_attribut:11,typic:8,un_flatten_data:8,unchang:17,undefin:9,under:13,uniqu:21,unnorm:8,unnormalized_i:8,unnormalized_kei:8,update:11,use:19,user:[9,17,18,19,20,22,23],userwarn:[17,18,22],using:[],uslum:9,valid:8,valu:[7,8,9,11,21],value_data_tag:8,value_data_typ:8,value_str:11,value_typ:[8,9],varianc:[17,19],verbos:7,veri:19,versatil:21,version:[],via:23,viabil:7,virtual:13,virtualenv:[17,18,22],visual:[7,8],visualis:7,vocabulari:9,wai:15,warn:[7,9,17],warning:[8,19],wdw:9,well:[7,8,9,11,15,19,20,22],well_list:9,well_nam:11,well_name_pattern:11,were:19,what:[1,8,18,19,20],when:[],whenev:1,where:[8,9,21],whether:8,which:[7,8,9,11,13,19,20],white:7,who:[2,17],width:[8,9,11,18,19,20,22],wise:[8,19],within:13,workstat:9,would:[1,8,18,22],wrap_knitr_chunk:7,write:[],write_data:[],x100:9,x101:9,x102:9,x103:9,x104:9,x105:9,x106:9,x107:9,x108:9,x109:9,x10:9,x110:9,x111:9,x112:9,x113:9,x114:9,x115:9,x116:9,x117:9,x118:9,x119:9,x11:9,x120:9,x121:9,x122:9,x123:9,x124:9,x125:9,x126:9,x127:9,x128:9,x129:9,x12:9,x130:9,x131:9,x132:9,x133:9,x134:9,x135:9,x136:9,x137:9,x138:9,x139:9,x13:9,x140:9,x141:9,x142:9,x143:9,x144:9,x145:9,x146:9,x147:9,x148:9,x149:9,x14:9,x150:9,x151:9,x152:9,x153:9,x154:9,x155:9,x156:9,x157:9,x158:9,x159:9,x15:9,x160:9,x161:9,x162:9,x163:9,x164:9,x165:9,x166:9,x167:9,x168:9,x169:9,x16:9,x170:9,x171:9,x172:9,x173:9,x174:9,x175:9,x176:9,x177:9,x178:9,x179:9,x17:9,x180:9,x181:9,x182:9,x183:9,x184:9,x185:9,x186:9,x187:9,x188:9,x189:9,x18:9,x190:9,x191:9,x192:9,x193:9,x194:9,x195:9,x196:9,x197:9,x198:9,x199:9,x19:9,x200:9,x201:9,x202:9,x203:9,x204:9,x205:9,x206:9,x207:9,x208:9,x209:9,x20:9,x210:9,x211:9,x212:9,x213:9,x214:9,x215:9,x216:9,x217:9,x218:9,x219:9,x21:9,x220:9,x221:9,x222:9,x223:9,x224:9,x225:9,x226:9,x227:9,x228:9,x229:9,x22:9,x230:9,x231:9,x232:9,x233:9,x234:9,x235:9,x236:9,x237:9,x238:9,x239:9,x23:9,x240:9,x241:9,x242:9,x243:9,x244:9,x245:9,x246:9,x247:9,x248:9,x249:9,x24:9,x250:9,x251:9,x252:9,x253:9,x254:9,x255:9,x256:9,x257:9,x258:9,x259:9,x25:9,x260:9,x261:9,x262:9,x263:9,x264:9,x265:9,x266:9,x267:9,x268:9,x269:9,x26:9,x270:9,x271:9,x272:9,x273:9,x274:9,x275:9,x276:9,x277:9,x278:9,x279:9,x27:9,x280:9,x281:9,x282:9,x283:9,x284:9,x285:9,x286:9,x287:9,x288:9,x289:9,x28:9,x290:9,x291:9,x292:9,x293:9,x294:9,x295:9,x296:9,x297:9,x298:9,x299:9,x29:9,x300:9,x301:9,x302:9,x303:9,x304:9,x305:9,x306:9,x307:9,x308:9,x309:9,x30:9,x310:9,x311:9,x312:9,x313:9,x314:9,x315:9,x316:9,x317:9,x318:9,x319:9,x31:9,x320:9,x321:9,x322:9,x323:9,x324:9,x325:9,x326:9,x327:9,x328:9,x329:9,x32:9,x330:9,x331:9,x332:9,x333:9,x334:9,x335:9,x336:9,x337:9,x338:9,x339:9,x33:9,x340:9,x341:9,x342:9,x343:9,x344:9,x345:9,x346:9,x347:9,x348:9,x349:9,x34:9,x350:9,x351:9,x352:9,x353:9,x354:9,x355:9,x356:9,x357:9,x358:9,x359:9,x35:9,x360:9,x361:9,x362:9,x363:9,x364:9,x365:9,x366:9,x367:9,x368:9,x369:9,x36:9,x370:9,x371:9,x372:9,x373:9,x374:9,x375:9,x376:9,x377:9,x378:9,x379:9,x37:9,x380:9,x381:9,x382:9,x383:9,x384:9,x38:9,x39:9,x40:9,x41:9,x42:9,x43:9,x44:9,x45:9,x46:9,x47:9,x48:9,x49:9,x50:9,x51:9,x52:9,x53:9,x54:9,x55:9,x56:9,x57:9,x58:9,x59:9,x60:9,x61:9,x62:9,x63:9,x64:9,x65:9,x66:9,x67:9,x68:9,x69:9,x70:9,x71:9,x72:9,x73:9,x74:9,x75:9,x76:9,x77:9,x78:9,x79:9,x80:9,x81:9,x82:9,x83:9,x84:9,x85:9,x86:9,x87:9,x88:9,x89:9,x90:9,x91:9,x92:9,x93:9,x94:9,x95:9,x96:9,x97:9,x98:9,x99:9,x_high:8,x_low:8,xenario:2,xyz005:11,yet:7,yfp:8,you:[1,13,18,20,21,22,23],your:[],z_factor:7,z_prime_factor:7,zoller:2},titles:["Modules","HTS configuration files","Contributors &amp; Background","High-througput screening data transformations","Example workflow","Hit Selection","hts package","hts.data_tasks package","hts.plate package","hts.plate_data package","hts.protocol package","hts.run package","High Throughput Screening Library - beta version","Installation","Connecting screen data with information on the samples","When HTS is useful ...","hts","HTS Configuration files","Tutorial: Data normalization","Tutorial: Gaussian process normalization","Tutorial: Load data","Tutorial: Create a Quality control report","Tutorial: Run instance","Tutorial: Write data"],titleterms:{add:21,all:[17,19,20,23],analysi:7,background:[2,12],beta:12,config:[1,20],configur:[1,12,17],conftest:6,connect:[14,21],constant:11,content:[6,7,8,9,10,11],contributor:2,control:21,creat:[20,21],data:[3,14,17,18,19,20,21,23],data_issu:9,data_norm:7,data_task:7,defin:20,depend:[17,19,23],exampl:[4,21],file:[1,17,19,20,21],gaussian:19,header:20,high:[3,12,17,18,19,21],hit:5,hts:[1,15,17],indice:[0,12],inform:14,installat:13,instanc:22,instruct:21,kernel:19,layout:17,librari:12,load:[17,19,20,23],meta_data:9,modul:[0,6,7,8,9,10,11],normal:[18,19],one:20,outdat:12,packag:[6,7,8,9,10,11],peopl:2,per:20,perform:19,plate:[8,17,20],plate_data:9,plate_data_io:9,plate_layout:9,plot:19,predict:8,process:19,protocol:[1,10,17],protocol_config:21,qc_detect_data_issu:7,qc_knitr:7,qc_matplotlib:7,qualiti:21,raw:19,rbf:19,read:[17,18,19],readout:[9,20],readout_io:9,report:21,run:[1,11,17,20,22],run_config:20,run_io:11,sampl:14,screen:[3,12,14,17,18,19,21],select:5,set:21,setup:[],sourc:20,submodul:[6,7,8,9,10,11],subpackag:6,tabl:[0,12],task:12,throughput:[12,17,18,19,21],througput:3,todo:[8,9,10,11],transform:3,tutori:[12,18,19,20,21,22,23],version:12,when:15,workflow:4,write:[19,23],your:[17,18,19,21,23]}})