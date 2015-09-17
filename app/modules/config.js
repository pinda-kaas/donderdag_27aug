"use strict";

 angular.module('config', [])

.constant('DATA', {environment:'mock',WIPServiceClient:'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/',WIPServiceBusiness:'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/',businessId:'MPMSWP',adviserId:'PFALL',detailsSuffix:'account/',openOrdersSuffix:'/orders/statuses/open/minimum',awaitingSettlementsSuffix:'orders/statuses/awaitingsettlement',completedOrdersSuffix:'orders/statuses/complete',assetTypesSuffix:'assettypes',orderTypesSuffix:'ordertypes',orderStatussesSuffix:'orderstatuses',orderSourcesSuffix:'ordersources',WIPTypeAheadServicePrefix:'https://www-masdev1.macquarie.com.au/wealth/services/reporting/v2.0/searchAccounts?searchText=',WIPTypeAheadServiceSuffix:'&bv=MPM&PD-REFERER=secure-test.macquarie.com.au&PD-ID=324Sa3cYPAX000Ev7oErv5/itGKfFtNn+StHmU8TG8ZVQ3kpta2YwGyXloFD232+CIpbgsRG2FoYHU4yADn3VK8O+yRbNlCIBjdN07jOPXBgRGKoYZV6fh0nR09voeX5ZcUk+SJRpRzfRzLjt2iB7cCtP8p1GcBl'})

;