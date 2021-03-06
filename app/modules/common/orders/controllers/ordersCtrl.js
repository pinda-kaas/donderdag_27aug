'use strict';

app.controller('OrdersCtrl', function ($scope, $filter, $location, configService, $state, wipService, $http) {

    var advisers_mock = ['GILLTO', 'BAKEAL', 'ESKOK', 'SJR', '4MW', 'JWW', 'MUZ', 'RJM', 'JAB', 'MIK', 'ABH', 'MAL', 'HJM', 'WUSIMO', 'PPMRM', 'MENSFO', 'JUDD', 'PGISZ', 'HELTON', 'ARTHUR', 'GPE', 'MFO', 'NSHEA', 'RMAGG1', 'GL', 'HUNTGR', 'JBL', 'GBV', 'IMACRI', 'MDR', 'STX', 'PGG', 'AXC', 'CAJCH', 'BXF', 'GAC', 'LGERON', 'BJP', '4ITR', 'SFUNG', 'BSPT', 'PFALL', '10', 'GRUS', 'GJP', '3BNS', 'SLILLE', 'GBARTE', 'DAVIMA', 'H00544', '031', '013', 'EAST', 'H00783', 'PS16', 'KARALO', 'PAIN', 'BURKE', '2111', '4141', 'PA', '2221', '3185', '3066', '3130', '3269', '3308', 'CCHENG', 'SCAFFI', 'DWIEC', 'NCDEEV', 'NBTUKX', 'GRAYS', 'MCGOL', 'PROFIL', 'DLO', 'PASCOE', 'BPYK', 'LMW01', '24862', 'PBLEM', 'LAVERY', 'DMORAN', 'JMANT', 'ANNOUN', 'PERKS1', 'SHELE1', '4MJR', 'MARMST', '2NIL', 'PFALL1', '5DLF', 'CZM', 'ALD', 'ASM', 'LSWAN', 'MXE', 'JATRAN', 'CRAS', 'GKAL1', '3SS', 'MCZ', 'SCHGRE', 'PBLEMA', 'CSEWEL', 'LA3WAT', 'MDHMMW', 'WILFFR', 'MTOBIA', 'LA3MDW', 'RTATE', 'HNGUY', 'EPST', 'HTOMAS', 'BPETEF', 'JDUNC', 'LSMCH', 'DRAYNE', 'SIMONW', 'BBUT1', 'SYMES', 'GDEST', 'CARBEL', 'PA156', 'STCR', 'NRI', 'LMEN', '2MO', 'MCRODI', 'FNLXR', '20656', 'MICHB', 'FCS', 'GSUMN', 'ACLEGG', 'LA', 'MCINTM', 'PETEB', 'TAKWAT', '257157', 'RGFP', 'NPERKI', 'MJI', 'NMW', 'MARCOM', 'SMCKIL', 'ACROFT', 'TKCBJ', 'KMCLE', 'AMYERS', 'JRTK', 'AMCM', 'JDDR', 'PB2', 'TCROS2', 'MYJ', 'CAFP1', 'GDEST2', 'CAFP2', 'VPRICE', 'JHOGAN', 'NCDFJJ', 'JH1', 'LC2', 'NCGRDQ', 'MCMH', 'SFAS', 'STEPIN', 'BMRI', 'SFG', 'FRASEB', 'MHAYDO', 'GATHO', 'RPU', 'JSHAKE', 'RGSB', 'ESKOK2', 'ESKOK3', 'ESKOK5', 'AHB2', 'VIVJAM', 'GFP498', 'LCSB', 'LWHITE', 'MTGL', 'PTOCM', 'NIGELJ', 'WRAP2', 'NCVNW3', 'PDKFS2', 'RIPRE2', 'GRTHO', 'JDIFED', 'SJT', 'NIKVEL', 'SAMG2', 'DGILK', 'BSIMON', 'BFS', '4RKMC', 'JBURGM', 'SHALP', 'TISNEL', 'HFP', 'JDAM', 'H00299', '4TPS', '3M1AW', '5ATCC', 'H15869', 'CLARJR', 'JJNJB', 'POTTS1', 'CDCR', 'MGSTET', 'BAICHP', 'PNCORK', 'GSTEER', 'ANBOT', 'MHOG1', 'ARX', 'WCHASE', 'MWALK', '2NP', 'CHEPP2', '4DJA', 'PDAV', 'ROBBDA', '47D963', 'JDIGGL', 'PMANCE', 'PWALTO', 'ADONA', 'J15745', 'MAK', 'JXS', 'PBR', '249730', 'ANROW', 'CALLAN', 'SBIRC', 'SKIRS4', 'NDIGIW', 'SVEVRZ', 'GARRYB', 'HODDMJ', '4146', 'NDHGOH', 'SLAMB2', 'RODNEB', 'MDH', 'CHRISS', 'NDJFQQ', 'HENDED', 'SHDQLD', 'BJR', 'BBK', 'JTICKN', 'APRICE', 'PBANK', 'NORRET', 'FRDOR', 'RAYMOR', 'RWYNAN', 'GLOBPT', 'LANTER', 'AMEIN1', 'DEVTAR', 'DROVB', 'PSWA', 'GEORR', 'JACKAL', 'SYMOM', 'OREIC', 'HADDM', 'ARRAR', 'MEECD', 'KLETR', 'MORCD', 'DODGM', 'GAULM', 'VIGNM', 'VIGNMV', 'HOODT', 'LEEMI', 'LEEMIV', 'CRIGT', 'TUTTJ', 'SALAL', 'MASTTV', 'GFP272', 'NHALC', 'GSALAT', 'MATKID', 'LOUIEO', 'ADAMFG', 'GLENM', 'CSCM', 'DDRAKE', 'BSH', 'KROBER', 'SZP', 'ANE', 'BUCHAN', 'ATILSO', 'FELLAS', 'BAKEAN', 'LAMAN', 'JOHNJO', 'METZKA', 'PEARM', 'BELFI', 'AAAPPT', 'ADEAVI', '5PFP', 'DJLEN', 'VIMOUN', 'PV328', 'MASTT', 'GALI', 'NDALSU', 'AMOYLA', 'PEDOWL', 'MARK1', 'CMARSH', 'JSJB1', 'TONFO1', 'PAULM', 'MJDOB1', 'WRAP1', 'MALEW1', 'TKMCP1', 'DONNIC', 'AAAPRE', 'AAACBA', 'PC124', 'JANSHA', 'INGHAM', 'HIRSTC', 'GRANTA', 'HARPK', 'PGMR', 'STGAR1', 'DMRO1', 'MICANS', 'SKING', 'JPEZET', 'GRPI5', 'JBRUC', 'OCON', 'ALAIR5', 'SHEND5', 'SSTAN3', 'BRMAR', 'LCAIA5', 'DTOME', 'OKINA', 'MNORMA', 'BLANYO', 'ZCERNA', 'RPOOLE', 'AHOLST', 'CHAIN', 'EWONG', 'JFERRE', 'CSUTHE', 'PCRAFT', 'DRICHA', 'LREYN', 'GEORGM', 'RODUNN', 'RICHNW', 'SZEKG', 'AAAPPS', 'KESSL', 'ANDLOR', 'SGUPTA', 'FLETC', 'BFSPF', 'ANDBEN', 'HLBWM', 'HIRCAS', 'ABCFP', 'DEB', 'PPTEST', 'HOWELT', 'CRAVH', 'NGOA', 'MPPMIM', 'SDENAT', 'SCOTTA', 'SLOVED', 'SDEBON', 'READIE', 'KHAMMO', 'MSP1', 'DAREL1', 'CMARI', 'SIMPDJ', 'AMITCH', 'TRAIN1', 'TRAIN2', 'MIML1', 'MIML2', 'MIML3', 'JRIC7', 'ELKMO', 'CNGYU5', 'RUTHER', 'MPHEPW', 'BAKER1', 'LAM1', 'MEECH1', 'DAWIL1', 'GAMBLE', 'FRAS1', 'HP01Y6', 'MAHRR1', 'HALPIN', 'GSTT', 'JRIC6', 'SDD', 'TRUST', 'MICPHI', 'MWILL6', 'JSIVR', 'STEWEA', 'CAML6', 'CSUL3', 'LDEF6', 'MBAL6', 'LEEDA2', 'SATELL', 'PUPINN', 'JANSMI', 'HUGSUT', 'NDQWVF', 'NDQWYJ', 'RSCHE1', 'JSCHRA', 'BSKYFP', 'MSMI6', 'ACOY3', 'PEASTE', 'MMEAD5', 'DHAZ3', 'IFCPL', 'MRAMB1', 'PABAGG', 'HANNAH', 'CPCPL', 'PT159', 'BFPL', 'GTAY3', 'THARGR', 'Q003', 'CAJ', 'WILSON', 'RIWAL1', 'RIWALK', 'HPW', 'CEHAY', 'ANNWIL', 'SHIPPM', 'BENJEF', 'JANDRW', 'AHILLS', 'FRAMAC', 'PAUGOG', 'BMCGUI', 'SMET', 'AML', 'SIMCL1', 'SHAWK1', 'GHORES', 'MVM', 'WBSB', 'ZAPPIA', 'WSHEAR', 'AMJL', 'TSTAD', 'DIYSUP', 'PTHO5', 'TBOOT', 'KMURU', 'KWILD', 'DAVFOR', 'RICHOU', 'JENNEL', 'ALZUGA', 'RTWF', 'DMATT1', 'DMATT2', 'DMATT3', 'FORM', 'CROBSO', 'AHENSO', 'APJL', 'PJACKS', 'NBZBHW', 'RAV6', 'JIMM', '3CAWK', 'BESPFS', 'HARVFM', 'RALP', 'PSY589', 'MDONO', 'MACHA', 'PAMNKR', 'NWIJEY', 'DSK', 'LSSB', 'DSSB', 'RXZ2', 'ABTS', 'STEERA', 'EISEMA', 'DAVJEN', 'KYMBAI', 'JPARKE', 'PASCH1', 'FITZP2', 'WBUTT', 'PJAH', 'MATHC', 'CHADB', 'KBGW', 'KBAB', 'DWAB', 'KGS', 'MSIMP2', 'BPAYEX', 'CONOMJ', 'MXK', 'GRUS1', 'LMW03', 'EDRYAN', 'KINIVT', 'LAMA1', 'LAMANT', 'MATCHA', 'TIMADA', 'SDALY', 'COCKEJ', 'JOHNSJ', 'MPS', 'GJEFFE', 'SEFTMI', 'CDAVEY', 'EXW', 'MEECDP', 'AAA', 'RICHE1', 'RICHE2', 'SMITK1', 'SMITK2', 'BADEH1', 'BADEH2', 'RPRIN', '245', 'PWEALT', '2BB', 'ADAPTW', 'MBZ', 'KISSGQ', 'KAYEPW', 'INTRFP', 'APJL2', 'BABFSV', 'WALSDN', 'ACARD1', 'GCHA', 'BDBRK', 'STONEA', 'CZAWAT', 'JONEDC', 'BSUTTE', 'NGJACC', 'KINGCC', 'DWJF1', 'MHW', 'CJGEE', 'MCAR1', 'OADVIC', 'AHX', 'CARE01', 'SWESTH', '14908', 'LAUNCJ', '2CHLW', 'LBPD', 'JWOTHE', 'BEGLEY', 'PBX', 'HUNFIN', 'FTAN12', 'MAEARP', 'JSW', 'GPV', 'ATX', 'DSTONE', 'BURBPQ', 'CONGMN', '08664', 'RCURRI', 'GNP', 'CABLH1', 'ZAMMIT', 'N01DAS', 'N01PK', 'BRMAY6', 'BJK', 'XH0651', 'H00651', 'JMISS1', 'STASRW', 'BAKNNA', 'BMM', 'COOBR1', 'LYNBNA', 'CANJNA', 'BARSNA', 'STEMNA', 'SOVRNR', 'WVG2', 'WEBMNA', 'AAAACM', 'FASP', 'CDRJ', 'CARJ', 'SMCC1', 'BKOHN', 'BKO', 'AMHNW', 'AM3', 'HISC12', 'TRANJC', 'KFNSW', 'PE1', 'PE2', 'CUSTOD', 'LANSMN', 'AGNWEA', '21887', 'WIBUT', 'SOCKA', 'WEMAR', 'PETTR', 'SWS5', 'CPM001', 'CPM002', 'DXD', 'NHZ'];

    $scope.orderData = [];

    $scope.advisers = advisers_mock.sort();

    $scope.accountName = '';
    $scope.ordersTabActive = true;
    $scope.settlementsTabActive = false;
    $scope.completedTabActive = false;
    $scope.showAdvancedSearch = true;

    console.log('ordersctrl started');

    //if (orderData.length === 0) {
    //  $scope.ordersTabActive = false;
    //  $scope.settlementsTabActive = true;;
    //}
    //else {
    //  $scope.displayedRows = orderData;
    //  $scope.accounts = orderData;//typeAheadAccounts;
    //}

    $scope.onSelect = function ($item, $model, $label) {
        $scope.$item = $item;
        $scope.$model = $model;
        $scope.$label = $label;

        debugger;

        $state.go('orderDetail', {accountId: $item.account.accountId.key});
    };

    $scope.changeAdviser = function (val) {
        console.log('adviser change');

        //wipService.getData(configService.config('open', $scope.adviser)).then(function (data) {
        //    $scope.orderData = data;
        //});


        //todo temp hack!!

        $http.get(configService.config('open', $scope.adviser))
            .then(function (result) {
                $scope.accounts = result.data;
                console.log('accounts', $scope.accounts);
            });


        $http.get(configService.config('settlement', $scope.adviser))
            .then(function (result) {
                $scope.settlements = result.data;
                console.log('settlements', $scope.settlements);
            });


        $http.get(configService.config('complete', $scope.adviser))
            .then(function (result) {
                $scope.completeOrders = result.data;
                console.log('commplete', $scope.completeOrders);
            });


        //$scope.settlements = wipService.getData(configService.config('settlement', $scope.adviser));
        //$scope.completeOrders = wipService.getData(configService.config('complete', $scope.adviser));


    }


});