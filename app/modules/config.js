"use strict";

angular.module('config', [])

    .constant('DATA', {
        environment: 'development',
        WIPServiceClient: 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/',
        WIPServiceClient_uat1: 'https://www-mbl-test:11443/uat1/wealth/services/orders/wip/v1/',
        WIPServiceClient_sit1: 'https://www-mbl-test:11443/sit1/wealth/services/orders/wip/v1/',
        WIPServiceBusiness: 'https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/',
        WIPServiceBusiness_sit1: 'https://www-mbl-test:11443/sit1/wealth/services/orders/wip/v1/businesses/',
        WIPServiceBusiness_uat1: 'https://www-mbl-test:11443/uat1/wealth/services/orders/wip/v1/businesses/',
        businessId: 'NPMSWP',
        adviserId: 'PFALL',
        openOrdersSuffix: '/orders/statuses/open/minimum',
        detailsSuffix: 'account/',
        awaitingSettlementsSuffix: 'orders/statuses/awaitingsettlement',
        completedOrdersSuffix: 'orders/statuses/complete',
        assetTypesSuffix: 'assettypes',
        orderTypesSuffix: 'ordertypes',
        orderStatussesSuffix: 'orderstatuses',
        orderSourcesSuffix: 'ordersources',
        WIPTypeAheadServicePrefix: 'https://www-masdev1.macquarie.com.au/wealth/services/reporting/v2.0/searchAccounts?searchText=',
        WIPTypeAheadServiceSuffix: '&bv=MPM&PD-REFERER=secure-test.macquarie.com.au'
    })

;