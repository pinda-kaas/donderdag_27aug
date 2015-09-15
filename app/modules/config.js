"use strict";

 angular.module('config', [])

.constant('DATA', {environment:'development',WIPServiceClient:'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/',WIPServiceBusiness:'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/',businessId:'MPMSWP',adviserId:'PFALL',openOrdersSuffix:'/orders/statuses/open/minimum',detailsSuffix:'account/',awaitingSettlementsSuffix:'orders/statuses/awaitingsettlement',completedOrdersSuffix:'orders/statuses/complete',assetTypesSuffix:'assettypes',orderTypesSuffix:'ordertypes',orderStatussesSuffix:'orderstatuses',orderSourcesSuffix:'ordersources',WIPTypeAheadServicePrefix:'https://www-masdev1.macquarie.com.au/wealth/services/reporting/v2.0/searchAccounts?searchText=',WIPTypeAheadServiceSuffix:'&bv=MPM&PD-REFERER=secure-test.macquarie.com.au'})

;