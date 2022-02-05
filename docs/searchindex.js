Search.setIndex({docnames:["basic_tutorial","examples","extensions_tutorial","getting_started","index","scratchcloud","scratchcloud.ext"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["basic_tutorial.rst","examples.rst","extensions_tutorial.rst","getting_started.rst","index.rst","scratchcloud.rst","scratchcloud.ext.rst"],objects:{"scratchcloud.client":[[5,1,1,"","CloudChange"],[5,1,1,"","CloudClient"],[5,1,1,"","RawCloudChange"]],"scratchcloud.client.CloudClient":[[5,2,1,"","close"],[5,2,1,"","cloud_event"],[5,2,1,"","cloud_event_error"],[5,2,1,"","cloud_event_task"],[5,2,1,"","connect_ws"],[5,2,1,"","event"],[5,2,1,"","login"],[5,2,1,"","on_connect"],[5,2,1,"","on_connect_task"],[5,2,1,"","on_disconnect"],[5,2,1,"","on_disconnect_task"],[5,2,1,"","on_message"],[5,2,1,"","on_message_error"],[5,2,1,"","on_message_event_task"],[5,2,1,"","on_recv"],[5,2,1,"","parse_raw_cloud"],[5,2,1,"","raise_exc_callback"],[5,2,1,"","run"],[5,2,1,"","run_client"],[5,2,1,"","set_cloud"],[5,2,1,"","start"],[5,2,1,"","ws_handshake"],[5,2,1,"","ws_send"]],"scratchcloud.errors":[[5,3,1,"","DecodeError"],[5,3,1,"","EncodeError"],[5,3,1,"","MissingCloudVariable"],[5,3,1,"","NotFoundError"],[5,3,1,"","ScratchCloudException"],[5,3,1,"","SizeError"],[5,3,1,"","UnableToValidate"]],"scratchcloud.ext":[[6,0,0,"-","api"],[6,0,0,"-","codecs"],[6,0,0,"-","utils"]],"scratchcloud.ext.api":[[6,1,1,"","APIConnection"],[6,1,1,"","Comment"],[6,1,1,"","CommentType"],[6,1,1,"","IncompleteProject"],[6,1,1,"","IncompleteUser"],[6,1,1,"","Project"],[6,1,1,"","ProjectJSON"],[6,1,1,"","Studio"],[6,1,1,"","StudioProject"],[6,1,1,"","User"]],"scratchcloud.ext.api.APIConnection":[[6,2,1,"","fetch_project"],[6,2,1,"","fetch_studio"],[6,2,1,"","fetch_user"]],"scratchcloud.ext.api.Comment":[[6,4,1,"","api_path"],[6,4,1,"","author"],[6,4,1,"","commentee_id"],[6,4,1,"","connection"],[6,4,1,"","content"],[6,4,1,"","created"],[6,4,1,"","datetime_created"],[6,4,1,"","datetime_modified"],[6,2,1,"","fetch_replies"],[6,4,1,"","id"],[6,4,1,"","modified"],[6,4,1,"","parent_id"],[6,4,1,"","reply_count"],[6,4,1,"","type"],[6,4,1,"","visibility"]],"scratchcloud.ext.api.CommentType":[[6,4,1,"","Project"],[6,4,1,"","Studio"]],"scratchcloud.ext.api.IncompleteUser":[[6,4,1,"","image"]],"scratchcloud.ext.api.Project":[[6,4,1,"","author"],[6,4,1,"","comments_allowed"],[6,4,1,"","connection"],[6,4,1,"","created"],[6,4,1,"","description"],[6,4,1,"","favorites"],[6,2,1,"","fetch_comments"],[6,2,1,"","fetch_project_json_object"],[6,4,1,"","history"],[6,4,1,"","id"],[6,4,1,"","image"],[6,4,1,"","images"],[6,4,1,"","instructions"],[6,4,1,"","is_published"],[6,4,1,"","loves"],[6,4,1,"","modified"],[6,4,1,"","parent_id"],[6,4,1,"","public"],[6,4,1,"","remix"],[6,4,1,"","remixes"],[6,4,1,"","root_id"],[6,4,1,"","shared"],[6,4,1,"","stats"],[6,4,1,"","title"],[6,4,1,"","views"],[6,4,1,"","visibility"]],"scratchcloud.ext.api.ProjectJSON":[[6,2,1,"","get_block_count"],[6,2,1,"","get_json"],[6,2,1,"","get_sprite_count"]],"scratchcloud.ext.api.Studio":[[6,4,1,"","comments"],[6,4,1,"","comments_allowed"],[6,4,1,"","connection"],[6,4,1,"","created"],[6,4,1,"","description"],[6,2,1,"","fetch_comments"],[6,2,1,"","fetch_curators"],[6,2,1,"","fetch_managers"],[6,2,1,"","fetch_projects"],[6,4,1,"","followers"],[6,4,1,"","history"],[6,4,1,"","host"],[6,4,1,"","id"],[6,4,1,"","image"],[6,4,1,"","managers"],[6,4,1,"","modified"],[6,4,1,"","open_to_all"],[6,4,1,"","projects"],[6,4,1,"","public"],[6,4,1,"","stats"],[6,4,1,"","title"],[6,4,1,"","visibility"]],"scratchcloud.ext.api.StudioProject":[[6,4,1,"","actor_id"]],"scratchcloud.ext.api.User":[[6,4,1,"","bio"],[6,4,1,"","connection"],[6,4,1,"","country"],[6,2,1,"","fetch_favorite_projects"],[6,2,1,"","fetch_followers"],[6,2,1,"","fetch_following"],[6,2,1,"","fetch_message_count"],[6,2,1,"","fetch_projects"],[6,4,1,"","history"],[6,4,1,"","id"],[6,4,1,"","image"],[6,4,1,"","joined"],[6,4,1,"","profile"],[6,4,1,"","scratchteam"],[6,4,1,"","status"],[6,4,1,"","username"]],"scratchcloud.ext.codecs":[[6,1,1,"","BaseCodec"]],"scratchcloud.ext.codecs.BaseCodec":[[6,2,1,"","decode"],[6,2,1,"","encode"]],"scratchcloud.ext.utils":[[6,1,1,"","CloudValidator"],[6,1,1,"","SegmentDump"]],"scratchcloud.ext.utils.CloudValidator":[[6,2,1,"","validate_cloud"]],"scratchcloud.ext.utils.SegmentDump":[[6,2,1,"","dict_has_all_keys"],[6,2,1,"","dump"],[6,2,1,"","get_segments"],[6,2,1,"","read"]],scratchcloud:[[5,0,0,"-","client"],[5,0,0,"-","errors"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:attribute"},terms:{"0":[0,2,6],"001":2,"01":6,"0s":6,"1":[5,6],"10":[2,3,5,6],"100":0,"11":1,"13":1,"14":1,"16":1,"18":1,"19":1,"2":[2,6],"20":[1,2,6],"200":0,"21":1,"22":2,"23":1,"231":2,"24":[1,6],"25":1,"256":[5,6],"26":1,"27":1,"28":1,"3":[2,3],"32":1,"40":6,"400":0,"492":2,"5":1,"57":2,"6":1,"622084628":[0,2],"622779749":1,"622792569":1,"622799182":1,"67":2,"7":1,"boolean":[5,6],"break":6,"catch":[0,5],"class":[2,5,6],"default":[2,5,6],"do":[0,2],"enum":6,"final":[0,5],"float":6,"function":[0,1,2,5,6],"import":[0,1,2],"int":[5,6],"long":1,"new":[0,1],"public":6,"return":[1,2,5,6],"true":[5,6],"try":1,"var":0,"while":2,A:[0,1,5,6],By:2,For:[0,2],If:[0,1,2,3,5,6],In:[0,1],It:3,Not:5,On:3,The:[0,1,2,3,5,6],Then:[0,2],These:[0,2],To:[0,2,3],_:[2,6],_asyncio:5,abcdefghijklmnopqrstuvwxyz1234567890:6,abt:2,accept:2,access:6,account:[3,5],actor_id:6,actual:[0,3],ad:6,adapt:2,add:[0,3,6],after:[0,2,5],again:0,aiohttp:3,all:[0,1,2,5,6],allow:[0,1,2,3,6],alphabet:[2,6],alreadi:[0,2,3,5],also:[0,2,5],alwai:[0,3],an:[0,1,2,3,5,6],ani:[0,2,3],anoth:0,anyon:[0,3,6],api:5,api_path:6,apiconnect:[1,2,6],applic:0,appropri:0,ar:[0,2,3,5,6],arg:6,argument:[0,2,5,6],assum:[0,2],async:[0,1,4,5,6],asynchron:[0,3,6],asyncio:3,attribut:[0,5,6],author:6,automat:2,awai:2,await:[0,1,4],b:1,back:[0,1],backpack:2,bad:0,base:[0,2,3,4,5,6],basecodec:[1,2,6],basic:[2,4,5],bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789:2,becaus:1,been:5,befor:[0,2,3,6],begin:6,being:[0,2],between:[0,2,3,5,6],bio:6,bit:0,block:[0,2,3,5,6],bool:[5,6],both:2,box:2,built:[0,2,4],builtin:[1,5],button:3,c:0,cach:6,call:[0,1,3,5,6],callabl:5,can:[0,1,2,3],cannot:[],cat:0,caught:0,caus:[0,5],chang:[0,2,3],charact:[2,6],check:1,choos:2,chronolog:5,cipher:6,cipheralpha:6,ciphertext:6,click:[0,3],client:[0,1,2,6],close:5,cloud:[1,2,3,4,5,6],cloud_ev:[0,1,5],cloud_event_error:[0,1,5],cloud_event_task:5,cloud_nam:6,cloudchang:[0,1,5,6],cloudclient:[0,1,2,5,6],cloudvalid:6,code:[0,2,3,4],come:[0,2],command:3,comment:6,commentee_id:6,comments_allow:6,commenttyp:6,common:5,complet:2,connect:[0,1,3,5,6],connect_w:5,constant:2,contain:[2,6],content:6,continu:0,control:[0,5],convert:5,cooki:5,coroutin:[5,6],correct:0,could:[1,2,6],couldn:6,count:6,countri:[1,6],creat:[0,1,3,6],creation:6,curat:6,current:2,d:[1,6],data:[0,1,2,3,5,6],dataclass:6,date:6,datetim:6,datetime_cr:6,datetime_modifi:6,deal:2,decid:2,decod:[1,2,5,6],decode_data:6,decodeerror:[1,5],decor:0,def:[0,1],defin:0,delai:6,delet:6,descript:[1,6],dict:[5,6],dict_has_all_kei:6,dictionari:5,didn:3,differ:[0,2,6],digit:[1,2,5,6],directli:5,disconnect:[0,1,5],disconnect_messag:5,divid:[],doc:[2,4],document:2,doe:[0,2,3],doesn:5,don:3,done:2,due:6,dump:6,each:[2,6],easi:0,easili:2,edu:[],effici:0,elif:1,els:[0,1],emoji:0,empti:6,empty_valu:6,encod:[1,2,5,6],encode_data:6,encode_empti:6,encode_end:6,encodeerror:[5,6],end_var_valu:6,endless:3,enter:0,enumer:[],environ:3,equal:3,error:[0,1,4],error_func_nam:5,establish:5,event:[1,2,4,5],exampl:[0,2,4],except:[0,1,5],exclud:[0,5],exit:1,explain:2,ext:[1,2],extens:4,extra:0,f:[0,1],failsaf:3,fals:[2,5,6],favorit:6,featur:[3,4],fetch:[1,2,6],fetch_com:6,fetch_cur:6,fetch_favorite_project:6,fetch_follow:6,fetch_manag:6,fetch_message_count:6,fetch_project:[2,6],fetch_project_json_object:6,fetch_repli:6,fetch_studio:[2,6],fetch_us:[1,2,6],file:0,first:[0,2],follow:[0,2,6],forc:6,force_lowecas:6,force_lowercas:[2,6],found:[1,2,5,6],from:[0,1,2,3,5,6],func:5,func_nam:5,get:[0,1,2,4,6],get_block_count:6,get_json:6,get_seg:6,get_sprite_count:6,go:[0,2],goe:0,goodby:0,got:1,ha:[0,2,3,5,6],handl:[0,1,4,5],handshak:5,hashed_result:1,hashlib:1,have:[0,2,3,5],haven:[0,2],header:5,hello:0,here:[0,2,3],hex_result:1,hexdigest:1,histori:6,hop:0,host:6,how:2,http_session:5,hundr:2,i:1,id:[0,5,6],ident:5,imag:6,immedi:0,includ:[0,6],incompleteproject:6,incompleteus:6,increas:2,index:4,inform:[1,3,6],inherit:6,initvar:6,input:2,insid:3,instal:[0,2],instead:[1,3],instruct:6,intend:3,interact:[0,2,4],interfac:[3,6],intermedi:3,intern:6,is_publish:6,isinst:[0,1],issu:[1,4,5],item:6,its:[0,2,3,6],join:[1,4,6],join_dat:1,joined_at:1,json:6,just:[0,5],kei:6,keword:6,keyboardinterrupt:5,keyerror:5,keyword:0,knowledg:3,kwarg:6,languag:3,larg:[5,6],larger:[3,5,6],lastli:0,later:1,length:[2,6],less:6,let:0,letter:[1,2],librari:[0,2,3,4,5],like:[2,6],limit:[2,6],line:[0,1,3],link:[1,2],list:6,log:[3,5],login:[3,5],love:6,lowercas:[2,6],m:[1,3],mac:3,made:[2,4],mai:[2,3],main:0,make:[0,2,3],manag:6,mani:[0,2],max_reconnect:5,maximum:[5,6],md5:1,mean:2,member:6,messag:[1,6],method:[0,1,5,6],mind:2,miss:5,missingcloudvari:[0,5,6],mit:[],modif:6,modifi:[3,6],monitor:0,more:2,much:6,must:[0,2,5],n:6,name:[0,1,5,6],need:[0,3],never:5,next:0,non:[1,2],none:[5,6],normal:[2,6],notfounderror:[1,5,6],notic:0,now:3,number:[0,1,2,5,6],numer:2,object:[0,1,3,5,6],occur:5,off:0,offset:[2,6],on_connect:[0,1,5],on_connect_task:5,on_disconnect:[0,1,5],on_disconnect_task:5,on_messag:[0,5],on_message_error:5,on_message_event_task:5,on_recv:5,on_request:[0,1],on_request_error:0,onc:6,one:[0,2,3],onli:[0,2],oop:[],open:[3,6],open_to_al:6,oper:6,option:[5,6],order:[0,5],orient:3,origin:3,other:[2,5],otherwis:5,our:[0,1],ourselv:[],out:2,over:0,overhead:2,own:[0,2,3],owner:3,owner_usernam:[],packag:3,paramet:[0,2,5,6],parent:6,parent_id:6,pars:5,parse_raw_cloud:5,password:[0,1,5],path:[3,6],payload:5,per:2,perform:5,perscrib:0,pip3:[],pip:3,places_per_charact:[2,6],plainalpha:[2,6],plaintext:6,pleas:2,popular:3,posit:0,possibl:[2,3,5],power:4,pretti:6,previou:[0,5],previous_valu:5,print:[0,1,5],profil:6,program:[0,3],programm:[0,3],project:[0,1,2,3,5,6],project_id:[0,1,2,5],projectjson:6,prompt:3,properli:5,protocol:3,prototyp:4,provid:3,publish:6,py:0,python3:3,python:[0,1,2,3,4],rais:[0,1,2,5,6],raise_exc_callback:5,rapid:4,rate:2,ratelimit:2,rather:2,raw_data:5,rawcloudchang:5,re:[0,3],read:[2,6],reason:0,receiev:0,receiv:[0,1,5],recev:5,recommend:[0,3],reconnect:[4,5],reconnect_cooldown:5,regardless:3,regist:5,remix:6,repeatedli:5,repli:6,reply_count:6,repres:[0,5],request:[0,1,2],request_error:1,requir:[0,2,3],reset:0,respond:[0,1],respons:[0,1],result:[1,2],rewrit:0,root:6,root_id:6,rtype:6,run:[0,1,3,5],run_client:5,s:[0,1,2,5,6],sai:[0,2],same:[0,3],scratch:[0,1,2,3,4,5,6],scratchcloud:[0,1,2,3],scratchcloudexcept:5,scratchconnect:2,scratcher:[],scratchteam:6,search:[0,6],second:[2,5],section:6,see:[0,1,2,3],seen:3,segment:6,segmentdump:6,self:5,send:[0,1,2,5,6],sender:[5,6],sent:[1,2,5,6],server:[3,5],set:[1,3,5,6],set_cloud:[0,1,5],sever:[0,2,6],share:6,should:[0,2,6],show:[],sid72020123:2,similarli:0,simpl:[0,2],sinc:[0,2,3],size:5,sizeerror:[1,5,6],smaller:6,some:[0,1,2,3,6],someon:[0,1],someth:0,sourc:4,specif:[0,1],specifi:[0,1,5],sprite:[2,6],start:[0,1,2,4,5,6],stat:6,state:0,statement:1,statu:6,stop:[0,1,3],store:[3,5,6],str:[5,6],strftime:1,string:[2,5],studio:6,studioproject:6,studious:6,style:[0,2],subclass:5,successfulli:3,support:2,sure:[0,2,3],syntax:4,system:0,t:[0,2,3,5,6],take:[2,5],task:5,team:3,tell:0,termin:3,test:0,text:[0,6],than:[2,5,6],thei:0,thi:[0,1,2,3,5,6],thing:0,thousand:2,three:2,through:[0,2,3],time:5,titl:6,to_divid:[],token:5,too:[1,5,6],total:2,transfer:3,turn:2,tutori:4,two:0,type:[0,5,6],typeerror:[5,6],unabl:6,unabletovalid:[5,6],union:[],unread:6,unus:6,up:[0,1,3,6],updat:2,upercas:2,url:6,us:[1,2,3,5,6],usabl:2,useabl:[],user:[0,2,3,6],usernam:[0,1,2,5,6],usual:3,valid:[5,6],validate_cloud:6,valu:[0,1,2,5,6],valueerror:[0,6],variabl:[1,2,3,4,5,6],variable_nam:5,ve:[0,2,3],veri:0,version:3,view:[3,6],virtual:3,virual:[],visibl:6,wa:[0,1,2],wai:3,want:[0,2],we:0,websit:3,websocket:[3,5],welcom:3,well:6,what:2,when:[0,1,5],whenev:[0,1],where:[2,3,6],whether:[3,5],whevev:0,which:[0,1,3],who:6,wil:5,window:3,without:0,work:2,world:0,would:[0,2],wrapper:[5,6],write:0,wrong:0,ws_handshak:5,ws_send:5,y:1,yet:[0,2],you:[0,2,3],your:[0,1,2],your_nam:[],yourself:2,yuw:[0,1,2],zero:0,zerodivisionerror:[]},titles:["Basic Tutorial","Examples","Extensions Tutorial","Getting Started","Welcome to scratchcloud!","scratchcloud docs","extensions docs"],titleterms:{"1":1,"2":1,"3":1,"new":4,api:[1,2,6],basic:0,client:5,cloud:0,codec:[2,6],connect:2,doc:[5,6],document:4,error:5,event:0,exampl:1,ext:6,extens:[2,6],extern:4,get:3,hash:1,hex:1,how:3,instal:3,link:4,modul:[5,6],ping:1,pong:1,scratchcloud:[4,5,6],search:4,set:0,start:3,tool:4,tutori:[0,2],us:0,user:[1,4],util:[2,6],variabl:0,welcom:4,work:3}})