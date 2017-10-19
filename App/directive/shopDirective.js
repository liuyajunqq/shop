app.directive('shop',function(){
    return {
        templateUrl:'App/View/shop.html',
        scope:{
            item:'=item',
            index:'@index'
        },
        link:function(scope,ele,attr){
            $('ion-scroll').height($(window).height())
        },
        controller:'shopController'
    }
});