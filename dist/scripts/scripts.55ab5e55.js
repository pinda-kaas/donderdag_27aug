"use strict";var underscore=angular.module("underscore",[]);underscore.factory("_",["$window",function(){return $window._}]);var app;app=angular.module("WIP",["ui.router","underscore","ui.bootstrap","smart-table","ngAnimate","config"]),console.log("IS THIS CLEANED??? SHOULD NOT BEthis is the app starting up"),app.config(function($stateProvider){$stateProvider.state("tabs",{url:"/",templateUrl:"views/tabs.html",controller:"OrdersCtrl"}).state("orderDetail",{templateUrl:"views/detail.html",controller:"OrderDetailCtrl",params:{accountId:null,accountName:null},resolve:{orderDetails:function(wipService,configService,$stateParams){var accountId=$stateParams.accountId;return wipService.getData(configService.config("detail",accountId))}}})}),app.run(function($state){$state.go("tabs")}),angular.module("config",[]).constant("DATA",{environment:"development",WIPServiceClient:"https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/",WIPServiceClient_uat1:"https://www-mbl-test:11443/uat1/wealth/services/orders/wip/v1/",WIPServiceClient_sit1:"https://www-mbl-test:11443/sit1/wealth/services/orders/wip/v1/",WIPServiceBusiness:"https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/",WIPServiceBusiness_sit1:"https://www-mbl-test:11443/sit1/wealth/services/orders/wip/v1/businesses/",WIPServiceBusiness_uat1:"https://www-mbl-test:11443/uat1/wealth/services/orders/wip/v1/businesses/",businessId:"MPMSWP",adviserId:"",openOrdersSuffix:"/orders/statuses/open/minimum",detailsSuffix:"account/",awaitingSettlementsSuffix:"orders/statuses/awaitingsettlement",completedOrdersSuffix:"orders/statuses/complete",assetTypesSuffix:"assettypes",orderTypesSuffix:"ordertypes",orderStatussesSuffix:"orderstatuses",orderSourcesSuffix:"ordersources",WIPTypeAheadServicePrefix:"https://www-masdev1.macquarie.com.au/wealth/services/reporting/v2.0/searchAccounts?searchText=",WIPTypeAheadServiceSuffix:"&bv=MPM&PD-REFERER=secure-test.macquarie.com.au"}),app.controller("OrdersCtrl",function($scope,$filter,$location,configService,$state,wipService,$http){var advisers_mock=["GILLTO","BAKEAL","ESKOK","SJR","4MW","JWW","MUZ","RJM","JAB","MIK","ABH","MAL","HJM","WUSIMO","PPMRM","MENSFO","JUDD","PGISZ","HELTON","ARTHUR","GPE","MFO","NSHEA","RMAGG1","GL","HUNTGR","JBL","GBV","IMACRI","MDR","STX","PGG","AXC","CAJCH","BXF","GAC","LGERON","BJP","4ITR","SFUNG","BSPT","PFALL","10","GRUS","GJP","3BNS","SLILLE","GBARTE","DAVIMA","H00544","031","013","EAST","H00783","PS16","KARALO","PAIN","BURKE","2111","4141","PA","2221","3185","3066","3130","3269","3308","CCHENG","SCAFFI","DWIEC","NCDEEV","NBTUKX","GRAYS","MCGOL","PROFIL","DLO","PASCOE","BPYK","LMW01","24862","PBLEM","LAVERY","DMORAN","JMANT","ANNOUN","PERKS1","SHELE1","4MJR","MARMST","2NIL","PFALL1","5DLF","CZM","ALD","ASM","LSWAN","MXE","JATRAN","CRAS","GKAL1","3SS","MCZ","SCHGRE","PBLEMA","CSEWEL","LA3WAT","MDHMMW","WILFFR","MTOBIA","LA3MDW","RTATE","HNGUY","EPST","HTOMAS","BPETEF","JDUNC","LSMCH","DRAYNE","SIMONW","BBUT1","SYMES","GDEST","CARBEL","PA156","STCR","NRI","LMEN","2MO","MCRODI","FNLXR","20656","MICHB","FCS","GSUMN","ACLEGG","LA","MCINTM","PETEB","TAKWAT","257157","RGFP","NPERKI","MJI","NMW","MARCOM","SMCKIL","ACROFT","TKCBJ","KMCLE","AMYERS","JRTK","AMCM","JDDR","PB2","TCROS2","MYJ","CAFP1","GDEST2","CAFP2","VPRICE","JHOGAN","NCDFJJ","JH1","LC2","NCGRDQ","MCMH","SFAS","STEPIN","BMRI","SFG","FRASEB","MHAYDO","GATHO","RPU","JSHAKE","RGSB","ESKOK2","ESKOK3","ESKOK5","AHB2","VIVJAM","GFP498","LCSB","LWHITE","MTGL","PTOCM","NIGELJ","WRAP2","NCVNW3","PDKFS2","RIPRE2","GRTHO","JDIFED","SJT","NIKVEL","SAMG2","DGILK","BSIMON","BFS","4RKMC","JBURGM","SHALP","TISNEL","HFP","JDAM","H00299","4TPS","3M1AW","5ATCC","H15869","CLARJR","JJNJB","POTTS1","CDCR","MGSTET","BAICHP","PNCORK","GSTEER","ANBOT","MHOG1","ARX","WCHASE","MWALK","2NP","CHEPP2","4DJA","PDAV","ROBBDA","47D963","JDIGGL","PMANCE","PWALTO","ADONA","J15745","MAK","JXS","PBR","249730","ANROW","CALLAN","SBIRC","SKIRS4","NDIGIW","SVEVRZ","GARRYB","HODDMJ","4146","NDHGOH","SLAMB2","RODNEB","MDH","CHRISS","NDJFQQ","HENDED","SHDQLD","BJR","BBK","JTICKN","APRICE","PBANK","NORRET","FRDOR","RAYMOR","RWYNAN","GLOBPT","LANTER","AMEIN1","DEVTAR","DROVB","PSWA","GEORR","JACKAL","SYMOM","OREIC","HADDM","ARRAR","MEECD","KLETR","MORCD","DODGM","GAULM","VIGNM","VIGNMV","HOODT","LEEMI","LEEMIV","CRIGT","TUTTJ","SALAL","MASTTV","GFP272","NHALC","GSALAT","MATKID","LOUIEO","ADAMFG","GLENM","CSCM","DDRAKE","BSH","KROBER","SZP","ANE","BUCHAN","ATILSO","FELLAS","BAKEAN","LAMAN","JOHNJO","METZKA","PEARM","BELFI","AAAPPT","ADEAVI","5PFP","DJLEN","VIMOUN","PV328","MASTT","GALI","NDALSU","AMOYLA","PEDOWL","MARK1","CMARSH","JSJB1","TONFO1","PAULM","MJDOB1","WRAP1","MALEW1","TKMCP1","DONNIC","AAAPRE","AAACBA","PC124","JANSHA","INGHAM","HIRSTC","GRANTA","HARPK","PGMR","STGAR1","DMRO1","MICANS","SKING","JPEZET","GRPI5","JBRUC","OCON","ALAIR5","SHEND5","SSTAN3","BRMAR","LCAIA5","DTOME","OKINA","MNORMA","BLANYO","ZCERNA","RPOOLE","AHOLST","CHAIN","EWONG","JFERRE","CSUTHE","PCRAFT","DRICHA","LREYN","GEORGM","RODUNN","RICHNW","SZEKG","AAAPPS","KESSL","ANDLOR","SGUPTA","FLETC","BFSPF","ANDBEN","HLBWM","HIRCAS","ABCFP","DEB","PPTEST","HOWELT","CRAVH","NGOA","MPPMIM","SDENAT","SCOTTA","SLOVED","SDEBON","READIE","KHAMMO","MSP1","DAREL1","CMARI","SIMPDJ","AMITCH","TRAIN1","TRAIN2","MIML1","MIML2","MIML3","JRIC7","ELKMO","CNGYU5","RUTHER","MPHEPW","BAKER1","LAM1","MEECH1","DAWIL1","GAMBLE","FRAS1","HP01Y6","MAHRR1","HALPIN","GSTT","JRIC6","SDD","TRUST","MICPHI","MWILL6","JSIVR","STEWEA","CAML6","CSUL3","LDEF6","MBAL6","LEEDA2","SATELL","PUPINN","JANSMI","HUGSUT","NDQWVF","NDQWYJ","RSCHE1","JSCHRA","BSKYFP","MSMI6","ACOY3","PEASTE","MMEAD5","DHAZ3","IFCPL","MRAMB1","PABAGG","HANNAH","CPCPL","PT159","BFPL","GTAY3","THARGR","Q003","CAJ","WILSON","RIWAL1","RIWALK","HPW","CEHAY","ANNWIL","SHIPPM","BENJEF","JANDRW","AHILLS","FRAMAC","PAUGOG","BMCGUI","SMET","AML","SIMCL1","SHAWK1","GHORES","MVM","WBSB","ZAPPIA","WSHEAR","AMJL","TSTAD","DIYSUP","PTHO5","TBOOT","KMURU","KWILD","DAVFOR","RICHOU","JENNEL","ALZUGA","RTWF","DMATT1","DMATT2","DMATT3","FORM","CROBSO","AHENSO","APJL","PJACKS","NBZBHW","RAV6","JIMM","3CAWK","BESPFS","HARVFM","RALP","PSY589","MDONO","MACHA","PAMNKR","NWIJEY","DSK","LSSB","DSSB","RXZ2","ABTS","STEERA","EISEMA","DAVJEN","KYMBAI","JPARKE","PASCH1","FITZP2","WBUTT","PJAH","MATHC","CHADB","KBGW","KBAB","DWAB","KGS","MSIMP2","BPAYEX","CONOMJ","MXK","GRUS1","LMW03","EDRYAN","KINIVT","LAMA1","LAMANT","MATCHA","TIMADA","SDALY","COCKEJ","JOHNSJ","MPS","GJEFFE","SEFTMI","CDAVEY","EXW","MEECDP","AAA","RICHE1","RICHE2","SMITK1","SMITK2","BADEH1","BADEH2","RPRIN","245","PWEALT","2BB","ADAPTW","MBZ","KISSGQ","KAYEPW","INTRFP","APJL2","BABFSV","WALSDN","ACARD1","GCHA","BDBRK","STONEA","CZAWAT","JONEDC","BSUTTE","NGJACC","KINGCC","DWJF1","MHW","CJGEE","MCAR1","OADVIC","AHX","CARE01","SWESTH","14908","LAUNCJ","2CHLW","LBPD","JWOTHE","BEGLEY","PBX","HUNFIN","FTAN12","MAEARP","JSW","GPV","ATX","DSTONE","BURBPQ","CONGMN","08664","RCURRI","GNP","CABLH1","ZAMMIT","N01DAS","N01PK","BRMAY6","BJK","XH0651","H00651","JMISS1","STASRW","BAKNNA","BMM","COOBR1","LYNBNA","CANJNA","BARSNA","STEMNA","SOVRNR","WVG2","WEBMNA","AAAACM","FASP","CDRJ","CARJ","SMCC1","BKOHN","BKO","AMHNW","AM3","HISC12","TRANJC","KFNSW","PE1","PE2","CUSTOD","LANSMN","AGNWEA","21887","WIBUT","SOCKA","WEMAR","PETTR","SWS5","CPM001","CPM002","DXD","NHZ"];$scope.orderData=[],$scope.advisers=advisers_mock.sort(),$scope.accountName="",$scope.ordersTabActive=!0,$scope.settlementsTabActive=!1,$scope.completedTabActive=!1,$scope.showAdvancedSearch=!0,console.log("ordersctrl started"),$scope.onSelect=function($item,$model,$label){$scope.$item=$item,$scope.$model=$model,$scope.$label=$label,$state.go("orderDetail",{accountId:$item.account.accountId.key})},$scope.changeAdviser=function(val){console.log("adviser change"),$http.get(configService.config("open",$scope.adviser)).then(function(result){$scope.accounts=result.data,console.log("accounts",$scope.accounts)}),$http.get(configService.config("settlement",$scope.adviser)).then(function(result){$scope.settlements=result.data,console.log("settlements",$scope.settlements)}),$http.get(configService.config("complete",$scope.adviser)).then(function(result){$scope.completeOrders=result.data,console.log("commplete",$scope.completeOrders)})}}),app.directive("ordersTab",function(){return{templateUrl:"views/ordersTab.html"}}),app.directive("awaitingSettlementsTab",function(){return{templateUrl:"views/awaitingSettlementsTab.html"}}),app.directive("completeOrdersTab",function(){return{templateUrl:"views/completeOrdersTab.html"}});var prefix="";angular.module("WIP").factory("configService",function(DATA,$location){return{config:function(tabType,adviserId){var host=$location.absUrl();switch(console.log("location.absUrl",host),tabType){case"open":return console.log("DATA environment:",DATA.environment),"mock"!==DATA.environment?(host.indexOf("localhost")>=0&&(prefix=DATA.WIPServiceBusiness),(host.indexOf("sit1")>=0||host.indexOf("www-masdev.macquarie.com.au")>=0)&&(prefix=DATA.WIPServiceBusiness),host.indexOf("uat1")>=0&&(prefix=DATA.WIPServiceBusiness_uat1),console.log("hier",prefix+DATA.businessId+"/advisers/"+adviserId+DATA.openOrdersSuffix),prefix+DATA.businessId+"/advisers/"+adviserId+DATA.openOrdersSuffix):"/modules/common/orders/mock/ordersTabMockData.json";case"settlement":return console.log("settlements switch"),"mock"!==DATA.environment?(host.indexOf("localhost")>=0&&(prefix=DATA.WIPServiceBusiness),(host.indexOf("sit1")>=0||host.indexOf("www-masdev.macquarie.com.au")>=0)&&(prefix=DATA.WIPServiceBusiness),host.indexOf("uat1")>=0&&(prefix=DATA.WIPServiceBusiness_uat1),prefix+DATA.businessId+"/advisers/"+adviserId+"/"+DATA.awaitingSettlementsSuffix):"/modules/common/orders/mock/settlementsTabMockData.json";case"complete":return"mock"!==DATA.environment?(host.indexOf("localhost")>=0&&(prefix=DATA.WIPServiceBusiness),(host.indexOf("sit1")>=0||host.indexOf("www-masdev.macquarie.com.au")>=0)&&(prefix=DATA.WIPServiceBusiness),host.indexOf("uat1")>=0&&(prefix=DATA.WIPServiceBusiness_uat1),prefix+DATA.businessId+"/advisers/"+adviserId+"/"+DATA.completedOrdersSuffix):"/modules/common/orders/mock/completeOrdersTabMockData.json";case"detail":return"mock"!==DATA.environment?(host.indexOf("localhost")>=0&&(prefix=DATA.WIPServiceClient),(host.indexOf("sit1")>=0||host.indexOf("www-masdev.macquarie.com.au")>=0)&&(prefix=DATA.WIPServiceClient),host.indexOf("uat1")>=0&&(prefix=DATA.WIPServiceClient_uat1),console.log("hier",prefix+DATA.detailsSuffix+adviserId+"/orders"),prefix+DATA.detailsSuffix+adviserId+"/orders"):"/modules/common/orders/mock/orderDetailMock.json";case"auto":if("mock"!==DATA.environment)return host.indexOf("localhost")>=0&&(prefix=DATA.WIPServiceBusiness),(host.indexOf("sit1")>=0||host.indexOf("www-masdev.macquarie.com.au")>=0)&&(prefix=DATA.WIPServiceBusiness),host.indexOf("uat1")>=0&&(prefix=DATA.WIPServiceBusiness_uat1),DATA.WIPTypeAheadServicePrefix+adviserId+DATA.WIPTypeAheadServiceSuffix;break;case"assetType":return"mock"!==DATA.environment?(host.indexOf("localhost")>=0&&(prefix=DATA.WIPServiceClient),(host.indexOf("sit1")>=0||host.indexOf("www-masdev.macquarie.com.au")>=0)&&(prefix=DATA.WIPServiceClient),host.indexOf("uat1")>=0&&(prefix=DATA.WIPServiceClient_uat1),prefix+DATA.assetTypesSuffix):"/modules/common/orders/mock/assetTypes.json";case"orderType":return"mock"!==DATA.environment?(host.indexOf("localhost")>=0&&(prefix=DATA.WIPServiceClient),(host.indexOf("sit1")>=0||host.indexOf("www-masdev.macquarie.com.au")>=0)&&(prefix=DATA.WIPServiceClient),host.indexOf("uat1")>=0&&(prefix=DATA.WIPServiceClient_uat1),prefix+DATA.orderTypesSuffix):"/modules/common/orders/mock/tradeTypes.json";case"orderStatus":return"mock"!==DATA.environment?(host.indexOf("localhost")>=0&&(prefix=DATA.WIPServiceClient),(host.indexOf("sit1")>=0||host.indexOf("www-masdev.macquarie.com.au")>=0)&&(prefix=DATA.WIPServiceClient),host.indexOf("uat1")>=0&&(prefix=DATA.WIPServiceClient_uat1),prefix+DATA.orderStatussesSuffix):"/modules/common/orders/mock/orderStatus.json";case"orderSourceType":return"mock"!==DATA.environment?(host.indexOf("localhost")>=0&&(prefix=DATA.WIPServiceClient),(host.indexOf("sit1")>=0||host.indexOf("www-masdev.macquarie.com.au")>=0)&&(prefix=DATA.WIPServiceClient),host.indexOf("uat1")>=0&&(prefix=DATA.WIPServiceClient_uat1),prefix+DATA.orderSourcesSuffix):"/modules/common/orders/mock/orderSourceTypes.json"}}}}),angular.module("WIP").factory("wipService",function($http){return{getData:function(url){return $http.get(url).then(function(result){return console.log("WIPSERVICE url:",url),result.data})}}}),app.directive("stRatio",function(){return{link:function(scope,element,attr){var ratio=+attr.stRatio;element.css("width",ratio+"%")}}}),app.filter("showCurrency",function(){return function(input,symbol){switch(symbol){case"AUD":return"$"+input}}}),app.directive("tableFilter",function(wipService,configService){return{restrict:"E",templateUrl:"views/tableFilter.html",controller:function($scope){console.log("tablefilter staer"),console.log("account obj",$scope.account),$scope.assetType={},$scope.assetType.code="",$scope.orderType={},$scope.orderType.code="",$scope.orderSource={},$scope.orderSource.code="",$scope.orderStatus={},$scope.orderStatus.code="",$scope.accountName="",wipService.getData(configService.config("assetType","")).then(function(data){$scope.assetTypes=data}),wipService.getData(configService.config("orderType","")).then(function(data){console.log("ordertype:",data),$scope.orderTypes=data}),wipService.getData(configService.config("orderSourceType","")).then(function(data){$scope.orderSourceTypes=data}),wipService.getData(configService.config("orderStatus","")).then(function(data){$scope.orderStatuses=data}),$scope.periodTypes=["Today","Last week","Last month"],$scope.changePeriod=function(){switch($scope.period){case"Today":$scope.dateFrom=new Date,$scope.dateTo=new Date,console.log("chanegeperiod",$scope.period);break;case"Last week":$scope.dateFrom=new Date,$scope.dateFrom.setDate($scope.dateFrom.getDate()-7),console.log("chanegeperiod",$scope.period);break;case"Last month":$scope.dateFrom=new Date,$scope.dateFrom.setDate($scope.dateFrom.getDate()-30),console.log("chanegeperiod",$scope.period)}},console.log("datepicker controller"),$scope.today=function(){$scope.dt=new Date},$scope.today(),$scope.clear=function(){$scope.dt=null},$scope.toggleMin=function(){$scope.minDate=$scope.minDate?null:new Date},$scope.toggleMin(),$scope.open=function($event){$event.preventDefault(),$event.stopPropagation(),console.log("open dp"),$scope.opened=!0},$scope.dateOptions={formatYear:"yy",startingDay:1},$scope.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],$scope.format=$scope.formats[0],$scope.status={opened:!1};var tomorrow=new Date;tomorrow.setDate(tomorrow.getDate()+1);var afterTomorrow=new Date;afterTomorrow.setDate(tomorrow.getDate()+2),$scope.events=[{date:tomorrow,status:"full"},{date:afterTomorrow,status:"partially"}],$scope.getDayClass=function(date,mode){if("day"===mode)for(var dayToCheck=new Date(date).setHours(0,0,0,0),i=0;i<$scope.events.length;i++){var currentDay=new Date($scope.events[i].date).setHours(0,0,0,0);if(dayToCheck===currentDay)return $scope.events[i].status}return""}}}}),app.filter("dateRange",function(){return function(input,dateFrom,dateTo,dateName){return _.filter(input,function(d){if(d[dateName]){var res=Date.parse(d[dateName])>=Date.parse(dateFrom)&&Date.parse(d[dateName])<=Date.parse(dateTo);return void 0===res&&(res=!1),res}return null})}}),app.directive("datePicker",function(){return{replace:!0,restrict:"E",templateUrl:"views/datepicker.html",scope:{dt:"=par1"},link:function(scope,element,attrs){if(console.log("attrs",attrs),"dateFrom"==attrs.par1){var today=new Date,monthAgo=new Date;monthAgo.setDate(today.getDate()-30),scope.dt=monthAgo,console.log("month ago",scope.dt)}if("dateTo"==attrs.par1){var today=new Date;scope.dt=today}},controller:function($scope){$scope.today=function(){var tomorrow=new Date;tomorrow.setDate(tomorrow.getDate()+1),$scope.dt=tomorrow},console.log("datepicker controller"),$scope.clear=function(){$scope.dt=null},$scope.toggleMin=function(){$scope.minDate=$scope.minDate?null:new Date},$scope.toggleMin(),$scope.open=function($event){$event.preventDefault(),$event.stopPropagation(),$scope.opened=!0},$scope.dateOptions={formatYear:"yy",startingDay:1},$scope.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],$scope.format=$scope.formats[2],$scope.status={opened:!1};var tomorrow=new Date;tomorrow.setDate(tomorrow.getDate()+1);var afterTomorrow=new Date;afterTomorrow.setDate(tomorrow.getDate()+2),$scope.events=[{date:tomorrow,status:"full"},{date:afterTomorrow,status:"partially"}],$scope.getDayClass=function(date,mode){if("day"===mode)for(var dayToCheck=new Date(date).setHours(0,0,0,0),i=0;i<$scope.events.length;i++){var currentDay=new Date($scope.events[i].date).setHours(0,0,0,0);if(dayToCheck===currentDay)return $scope.events[i].status}return""}}}}),app.controller("OrderDetailCtrl",function($scope,$filter,$location,configService,orderDetails,$stateParams,wipService,DATA){$scope.orderDetails=orderDetails,$scope.showAdvancedSearch=!0,console.log("orderdetails in ctrl params NOW",$stateParams),console.log("data from resolve orderdetails in ctrl :",orderDetails),$scope.accountId=$stateParams.accountId,$scope.accountName=$stateParams.accountName,console.log("state",$stateParams),$scope.collapsed=!0,$scope.collapsedDetail=!0,$scope.refresh=function(){console.log("refresh"),console.log($stateParams),console.log("src",$scope.orderSource),console.log(" $scope.tradeType.code ",$scope.tradeType),console.log("$scope.security;",$scope.security);var dtFrom=$filter("date")($scope.dateFrom,"yyyy-mm-dd"),dtTo=$filter("date")($scope.dateTo,"dd-mm-yy");console.log("datefrom",dtFrom),console.log("dateto",dtTo),console.log("$scope.orderSource.code ",$scope.orderSource.code),console.log("$scope.orderStatus.code",$scope.orderStatus.code),console.log("$scope.orderType.code",$scope.orderType.code),console.log("$scope.assetType.code",$scope.assetType.code),console.log("$scope.security",$scope.accountName);var url=DATA.WIPServiceClient+DATA.detailsSuffix+$scope.accountId+"/orders/search?orderSource="+$scope.orderSource.code+"&status="+$scope.orderStatus.code+"&orderType="+$scope.orderType.code+"&fromDate="+dtFrom+"&toDate="+dtTo+"&security="+$scope.accountName+"&securityType="+$scope.assetType.code;console.log("searchfilter url",url),wipService.getData(url).then(function(data){$scope.orderDetails=data})}}),app.directive("orderSourceFilter",function(){return{templateUrl:"views/orderSourceFilter.html",controller:function($scope){console.log($scope.showAdvancedSearch),$scope.showAdvancedSearch=!1}}}),app.directive("resetFilter",function(){return{restrict:"E",templateUrl:"views/resetFilter.html",controller:function(){}}}),app.filter("removeUnderscore",function(){return function(input){return input.replace(/_/g," ")}}),function(ng){app.filter("customFilter",["$filter",function($filter){var filterFilter=$filter("filter"),standardComparator=function(obj,text){return text=(""+text).toLowerCase(),(""+obj).toLowerCase().indexOf(text)>-1};return function(array,expression){function customComparator(actual,expected){var higherLimit,lowerLimit,itemDate,queryDate,isBeforeActivated=expected.before,isAfterActivated=expected.after,isLower=expected.lower,isHigher=expected.higher;if(ng.isObject(expected)){if(expected.before||expected.after)try{return isBeforeActivated&&(higherLimit=expected.before,itemDate=new Date(actual),queryDate=new Date(higherLimit),itemDate>queryDate)?!1:isAfterActivated&&(lowerLimit=expected.after,itemDate=new Date(actual),queryDate=new Date(lowerLimit),queryDate>itemDate)?!1:!0}catch(e){return!1}else if(isLower||isHigher)return isLower&&(higherLimit=expected.lower,actual>higherLimit)?!1:isHigher&&(lowerLimit=expected.higher,lowerLimit>actual)?!1:!0;return!0}return standardComparator(actual,expected)}var output=filterFilter(array,expression,customComparator);return output}}]),app.directive("stDateRange",["$timeout",function($timeout){return{restrict:"E",require:"^stTable",scope:{before:"=",after:"="},templateUrl:"views/stDateRange.html",link:function(scope,element,attr,table){function open(before){return function($event){$event.preventDefault(),$event.stopPropagation(),before?scope.isBeforeOpen=!0:scope.isAfterOpen=!0}}var inputs=element.find("input"),inputBefore=ng.element(inputs[0]),inputAfter=ng.element(inputs[1]),predicateName=attr.predicate;[inputBefore,inputAfter].forEach(function(input){input.bind("blur",function(){var query={};scope.isBeforeOpen||scope.isAfterOpen||(scope.before&&(query.before=scope.before),scope.after&&(query.after=scope.after),scope.$apply(function(){table.search(query,predicateName)}))})}),scope.openBefore=open(!0),scope.openAfter=open()}}}])}(angular),angular.module("WIP").run(["$templateCache",function($templateCache){$templateCache.put("views/awaitingSettlementsTab.html",'<div> <!--{{displayedRows.length}} results match your search selection.--> <div> <table st-set-filter="customFilter" st-table="displayedRows" st-safe-src="settlements" class="table table-striped"> <thead> <tr> <th st-ratio="25" st-sort="account.accountName">Account</th> <th st-ratio="10" st-sort="account.tradeDate">Trade date</th> <th st-ratio="5" st-sort="account.orderType">Type</th> <th st-ratio="25" st-sort="account.asset.name">Investment</th> <th st-ratio="5" st-sort="account.units">Units</th> <th st-ratio="5" st-sort="account.price">Price</th> <th st-ratio="5" st-sort="account.fee">Fee</th> <th st-ratio="5" st-sort="account.settlementValue">Value</th> <th st-ratio="5" st-sort="account.account.adviser.key">Adviser</th> <th st-ratio="10" st-sort="account.settlementDate">Date</th> <th></th> </tr> <!--<tr>--> <!--<th>--> <!--<st-date-range predicate="settlementDate" before="query.before" after="query.after"></st-date-range>--> <!--</th>--> <!--</tr>--> </thead> <tbody> <!--<tr ng-repeat="account in displayedRows">--> <tr ng-repeat="account in settlements | dateRange:dateFrom:dateTo:\'settlementDate\' | filter:account.orderType.code | filter:account.assetType.code | filter:accountName "> <td st-ratio="25"><a ui-sref="orderDetail({accountId:account.account.accountId.key})">{{account.account.accountName | limitTo:30}}</a> </td> <td st-ratio="5">{{account.tradeDate}}</td> <td st-ratio="5">{{account.orderType}}</td> <td st-ratio="25">{{account.asset.name }}</td> <td st-ratio="5">{{account.units}}</td> <td st-ratio="5">{{account.price.value | showCurrency:account.price.currency}}</td> <td st-ratio="5">{{account.fee}}</td> <td st-ratio="5">{{account.settlementValue.value | showCurrency:account.price.currency}}</td> <td st-ratio="5">{{account.account.adviser.key}}</td> <td st-ratio="20">{{account.settlementDate}}</td> <td> <i class="fa fa-file-pdf-o"></i> </td> </tr> </tbody> <tfoot> <tr> <td colspan="11" class="text-center"> <div st-items-by-page="10" st-pagination="" st-template="views/pagination.custom.html"></div> </td> </tr> </tfoot> </table> </div> </div>'),$templateCache.put("views/completeOrdersTab.html",'<div> <!--{{displayedRows.length}} results match your search selection.--> <div> <table st-table="displayedRows" st-safe-src="completeOrders" class="table table-striped"> <thead> <tr> <th st-ratio="25" st-sort="account.accountName">Account</th> <th st-ratio="10" st-sort="account.tradeDate">Trade date</th> <th st-ratio="5" st-sort="account.orderType">Type</th> <th st-ratio="25" st-sort="account.asset.name">Investment</th> <th st-ratio="5" st-sort="account.units">Units</th> <th st-ratio="5" st-sort="account.price">Price</th> <th st-ratio="5" st-sort="account.fee">Fee</th> <th st-ratio="5" st-sort="account.settlementValue.value">Value</th> <th st-ratio="5" st-sort="account.account.adviser.key">Adviser</th> <th st-ratio="10" st-sort="account.settlementDate">Date</th> <th></th> </tr> </thead> <tbody> <tr ng-repeat="account in completeOrders  | dateRange:dateFrom:dateTo:\'settlementDate\' | filter:account.orderType.code | filter:account.assetType.code | filter:accountName "> <td st-ratio="25"><a ui-sref="orderDetail({accountId:account.account.accountId.key})">{{account.account.accountName | limitTo:30}}</a></td> <td st-ratio="5">{{account.tradeDate}}</td> <td st-ratio="5">{{account.orderType}}</td> <td st-ratio="25">{{account.asset.name }}</td> <td st-ratio="5">{{account.units}}</td> <td st-ratio="5">{{account.price.value | showCurrency:account.price.currency}}</td> <td st-ratio="5">{{account.fee}}</td> <td st-ratio="5">{{account.settlementValue.value | showCurrency:account.price.currency}}</td> <td st-ratio="5">{{account.account.adviser.key}}</td> <td st-ratio="20">{{account.settlementDate}}</td> <td> <i class="fa fa-file-pdf-o"></i> </td> </tr> </tbody> <tfoot> <tr> <td colspan="11" class="text-center"> <div st-items-by-page="10" st-pagination="" st-template="views/pagination.custom.html"></div> </td> </tr> </tfoot> </table> </div> </div>'),$templateCache.put("views/datepicker.html",'<p class="input-group"> <input type="text" class="form-control" datepicker-popup="{{format}}" ng-model="dt" is-open="opened" datepicker-options="dateOptions" date-disabled="disabled(date, mode)" ng-required="true" close-text="Close"> <span class="input-group-btn"> <button type="button" class="btn btn-default" ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i></button> </span> </p>'),$templateCache.put("views/detail.html",'<div class="orders"> <hr class="detail"> <div class="row form-inline"> <div class="col-sm-4"> <label>Account</label> <span>{{accountId}}</span> </div> <div class="col-sm-4"> <label>Accounttype</label> <span>??</span> </div> </div> <hr class="detail"> <div class="row form-inline"> <div class="col-sm-6"> <label>Accountname</label> <span>{{accountName}}</span> </div> </div> <hr class="detail"> <div class="row"> <order-source-filter></order-source-filter> <reset-filter></reset-filter> </div> <table-filter></table-filter> <div> <table st-table="displayedRows" st-safe-src="orderDetails" class="table table-striped"> <thead> <tr> <th st-ratio="10" st-sort="account.orderDate">ORDER DATE</th> <th st-ratio="15" st-sort="account.asset.name">INVESTMENT</th> <th st-ratio="10" st-sort="account.asset.type">TYPE</th> <th st-ratio="7" st-sort="account.totalUnits">UNITS</th> <th st-ratio="7" st-sort="account.unitsFilled">FILLED</th> <th st-ratio="5" st-sort="account.orderTransactionSummary.amount.value">PRICE</th> <th st-ratio="5" st-sort="account.valid">VALID</th> <th st-ratio="5" st-sort="account.applyAdviserFee">FEE</th> <th st-ratio="5" st-sort="account.value">AMOUNT</th> <th st-ratio="5" st-sort="account.dataSource">SOURCE</th> <th st-ratio="15" st-sort="account.transactions.state">STATUS</th> <th st-ratio="5" st-sort="account.detail"></th> </tr> </thead> <tbody ng-repeat="account in displayedRows"> <!--highest level row--> <tr> <td st-ratio="10">{{account.orderDate}}</td> <td st-ratio="15">{{account.asset.name | limitTo:30 }}{{account.asset.name.length >= 30 ? \'...\' : \'\'}}</td> <td st-ratio="10">{{account.asset.type| removeUnderscore | limitTo:10 }}{{account.asset.type.length >= 10 ? \'...\' : \'\'}}</td> <td st-ratio="7">{{account.totalUnits}}</td> <td st-ratio="7">{{account.unitsFilled}}</td> <td st-ratio="5">{{account.limitPrice.currency}}&nbsp{{account.limitPrice.value|currency}}</td> <td st-ratio="5">{{account.expiryMethod}}</td> <td st-ratio="5">{{account.limitPrice.currency}}&nbsp{{account.applyAdviserFee| currency}}</td> <td st-ratio="5">{{account.orderTransactionSummary.amount.currency}}&nbsp{{account.orderTransactionSummary.amount.value|currency}}</td> <td st-ratio="5">{{account.dataSource}}</td> <td st-ratio="10">{{account.orderState}}</td> <td st-ratio="5"><a ng-click="collapsed = !collapsed">details</a> </td> <!--<td st-ratio="5"><a ng-class="{true:\'fa fa-plus\', false:\'fa fa-minus\'}[collapsed]" ng-click="collapsed = !collapsed"></a>--> <!--</td>--> </tr> <tr collapse="collapsed"> <th></th> <th></th> <th></th> <th st-ratio="7" st-sort="transaction.reference">REF</th> <th st-ratio="7" st-sort="transaction.orderTaker">TAKER</th> <th st-ratio="20" st-sort="transaction.lastUpdated">UPDATED</th> <th st-ratio="5" st-sort="transaction.filledUnits">FILLED</th> <th st-ratio="5" st-sort="transaction.price">PRICE</th> <th st-ratio="5" st-sort="transaction.amount">AMOUNT</th> <th st-ratio="5" st-sort="transaction.fundingPriority">PRIORITY</th> <th st-ratio="10" st-sort="transaction.status">STATUS</th> </tr> <!--1st level detail--> <tr collapse="collapsed"> <td></td> <td></td> <td></td> <td><span ng-show="account.transactions.fundingPriority=!\'Transacting\'">{{transaction.reference}}</span> <span ng-hide="account.transactions.fundingPriority=!\'Transacting\'"> <a ng-click="collapsedDetail=!collapsedDetail">{{account.orderTransactionSummary.reference}}</a></span> </td> <td> {{account.orderTransactionSummary.orderTaker}}</td> <td> {{account.orderTransactionSummary.lastUpdatedDateTime}}</td> <td> {{account.orderTransactionSummary.unitsFilled}}</td> <td> {{account.orderTransactionSummary.price.currency}}&nbsp{{account.orderTransactionSummary.price.value|currency}}</td> <td> {{account.orderTransactionSummary.amount.currency}}&nbsp{{account.orderTransactionSummary.amount.value|currency}}</td> <td> {{account.orderTransactionSummary.fundingMethod}}</td> <td> {{account.orderTransactionSummary.state}}</td> </tr> <!--2nd level detail--> <tr collapse="collapsedDetail" ng-repeat="transaction in account.transactions"> <td></td> <td></td> <td></td> <td></td> <td></td> <td>{{transaction.transactionDateTime}}</td> <td>{{transaction.filledUnits}}</td> <td>{{transaction.price.currency}}{{transaction.price.value|currency}}</td> <td>{{transaction.amount.currency}} {{transaction.amount.value|currency}}</td> <td>{{transaction.priority}} </td> <td>{{transaction.state}} </td> </tr> <tfoot> <tr> <td colspan="13" class="text-center"> <div st-items-by-page="10" st-pagination="10" st-template="views/pagination.custom.html"></div> </td> </tr> </tfoot> </tbody></table> </div> <button class="btn floatRight" ui-sref="tabs">Close</button> </div>'),$templateCache.put("views/orderSourceFilter.html",'<div class="col-sm-2"> <label for="">Order source</label> <select ng-model="orderSource" ng-options="source.name for source in orderSourceTypes" class="form-control"> <option value="">-</option> </select> </div> <div class="col-sm-2"> <label for="">Status</label> <select ng-model="orderStatus" ng-options="status.name for status in orderStatuses" class="form-control"> <option value="">-</option> </select> </div> <div class="col-sm-2 advancedSearch"> <a href="#" ng-click="showAdvancedSearch=!showAdvancedSearch">Advanced search</a> </div>'),$templateCache.put("views/ordersTab.html",'<div> <div> <span class="results"> <!--{{accounts.length}} results match your search selection.--> </span> <table st-ratio="100" st-table="displayedRows" st-safe-src="accounts" class="table table-striped"> <thead> <tr> <th st-ratio="10" st-sort="accountId.key">Account</th> <th st-ratio="30" st-sort="account.accountName"></th> <th st-ratio="10" st-sort="account.adviser">Adviser</th> <th st-ratio="20" st-sort="account.productName">Product</th> <th st-ratio="30" st-sort="minOpenOrderState">Status</th> </tr> </thead> <tbody> <tr ng-repeat="acc in accounts | filter:adviser"> <td st-ratio="10"><a ui-sref="orderDetail({accountId:acc.account.accountId.key,accountName:acc.account.accountName})"> {{acc.account.accountId.key}}</a></td> <td st-ratio="10">{{acc.account.accountName | limitTo:30}}</td> <td st-ratio="10">{{acc.account.adviser.key}}</td> <td st-ratio="10">{{acc.account.productName}}</td> <td st-ratio="10">{{acc.minOpenOrderState}}</td> </tr> </tbody> <tfoot> <tr> <td colspan="5" class="text-center"> <div st-items-by-page="10" st-pagination="" st-template="views/pagination.custom.html"></div> </td> </tr> </tfoot> </table> </div> </div>'),
$templateCache.put("views/pagination.custom.html",'<nav> <ul class="pagination"> <li><a ng-click="selectPage(1)">First</a> </li><li><a ng-click="selectPage(currentPage - 1)">&lt;</a> </li><li><a><page-select></page-select> of {{numPages}}</a> </li><li><a ng-click="selectPage(currentPage + 1)">&gt;</a> </li><li><a ng-click="selectPage(numPages)">Last</a></li> </ul> </nav>'),$templateCache.put("views/resetFilter.html",'<div class="resetFilter"> <a href="#" ng-click="resetFilter()">Reset Filter</a> &nbsp<a ng-click="refresh()" href="#">Refresh</a> <i class="fa fa-file-excel-o"></i> <a ng-mousedown="csv.generate()" ng-href="{{ csv.link() }}" download="test.csv">Export to CSV</a> <i class="fa fa-print"></i> <a href="#">Print</a> </div>'),$templateCache.put("views/stDateRange.html",'<label>before</label> <div class="input-group"> <input type="text" class="form-control" datepicker-popup="yyyy/MM/dd" ng-model="before" is-open="isBeforeOpen" close-text="Close"> <span class="input-group-btn"> <button type="button" class="btn btn-default" ng-click="openBefore($event)"><i class="glyphicon glyphicon-calendar"></i></button> </span> </div> <label>after</label> <div class="input-group"> <input type="text" class="form-control" datepicker-popup="yyyy/MM/dd" ng-model="after" is-open="isAfterOpen" close-text="Close"> <span class="input-group-btn"> <button type="button" class="btn btn-default" ng-click="openAfter($event)"><i class="glyphicon glyphicon-calendar"></i></button> </span> </div>'),$templateCache.put("views/tableFilter.html",'<div collapse="!showAdvancedSearch"> <div class="row tableFilter"> <div class="col-sm-2"> <label for="">Asset type</label> <select class="form-control" name="" ng-model="account.assetType" ng-options="item.name for item in assetTypes"> <option value=""></option> </select> </div> <div class="col-sm-2"> <label for="">Security</label> <input class="form-control" type="text"> </div> <div class="col-sm-2"> <label for="">Trade type</label> <select class="form-control" ng-model="account.orderType" ng-options="item.name for item in orderTypes"> </select> </div> <div class="col-sm-2"> <label for="">Date from:</label> <date-picker par1="dateFrom"></date-picker> </div> <div class="col-sm-2"> <label for="">Date to:</label> <date-picker par1="dateTo"></date-picker> </div> <div class="col-sm-2"> <label for="">Period</label> <select class="form-control" ng-model="period" ng-options="item for item in periodTypes" ng-click="changePeriod(period)"> </select> </div> </div> </div>'),$templateCache.put("views/tabs.html",'<div class="main"> <div class="well search form-inline"> <div class="row"> <div class="col-sm-8"> <label for="">Account Search:</label> <input type="text" id="selectaccount" ng-model="selectedAccount" placeholder="Select accountname" typeahead-on-select="onSelect($item, $model, $label)" typeahead="(account.account.accountId.key + \' \' + account.account.accountName) for account in accounts | filter:$viewValue | limitTo:8" class="form-control" typeahead-loading="loadingAccounts"> <i ng-show="loadingAccounts" class="glyphicon glyphicon-refresh"></i> <div ng-show="noResults"> <i class="glyphicon glyphicon-remove"></i> No Results Found </div> </div> <div class="col-sm-4"> <label for="">Adviser:</label> <select id="selectadviser" class="form-control" name="" id="" ng-change="changeAdviser()" ng-options="adviser for adviser in advisers" ng-model="adviser"> </select> </div> </div> </div> <reset-filter></reset-filter> <div class="orders"> <div> <div> <div> <tabset id="tab"> <tab heading="Orders" active="ordersTabActive"> <orders-tab></orders-tab> </tab> <tab heading="Awaiting settlement" active="settlementsTabActive"> <table-filter></table-filter> <awaiting-settlements-tab></awaiting-settlements-tab> </tab> <tab heading="Complete" active="completedTabActive"> <table-filter></table-filter> <complete-orders-tab></complete-orders-tab> </tab> </tabset> </div> </div> </div> </div> </div>')}]);