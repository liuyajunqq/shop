app.factory('ajaxServer',['$http','$q',function($http,$q){
    return {
        getData:function(type,url){
            var defer = $q.defer();
            if(type.toUpperCase() === 'JSONP'){
                $.ajax({
                    url:url,
                    dataType:type,
                    success:function(data){
                        defer.resolve(data);
                    },
                    error:function(err){
                        defer.reject(err);
                    }
                })
            }else{
                $http({
                    method:type,
                    url:url
                }).then(function(data){
                    defer.resolve(data);
                },function(err){
                    defer.reject(err);
                })
            }
            return defer.promise;
        }
    }
}]);