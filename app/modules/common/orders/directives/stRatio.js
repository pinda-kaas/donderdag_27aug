app.directive('stRatio',function(){
    return {
        link:function(scope, element, attr){
          console.log('stratio');
            var ratio=+(attr.stRatio);
            element.css('width',ratio+'%');
        }
    };
});
