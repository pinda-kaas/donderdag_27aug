angular.module('WIP').factory('wipService', function ($http) {
    return {
        getData: function (url) {
            console.log('getdata method on wipService');
            return $http.get(url)
                .then(function (result) {
                    return result.data;
                });
        },
        getDetail: function (url) {
            console.log('getdetail method on wipService');
            return $http.get(url)
                .then(function (result) {
                    return result.data;
                });
        }
    };
});
