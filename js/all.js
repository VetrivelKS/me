$(document).ready(function() {
    function addAnim(className)
    {
        var winHeight= $(window).height();
        var eleHeight= $(className).height();
        var transY = -( winHeight -  eleHeight);
        var cssProp = "translate(0px,"+transY+"px)";
        var kits = ["transform","-webkit-transform","-moz-transform","-o-transform"];
        for(var kitType in kits)
        {
            $(className).css(kits[kitType],cssProp);
        }
    }
    $(window).resize(function(){
        addAnim(".moveUp","0");
    });
    $(".navIcon").click(
        function()
        {
//            $(".navBar").addClass("moveUp");
  //          addAnim(".moveUp","0");
            $(".homePage").addClass("hide");
           /* $(".home").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                    function(){
                        $(".home").css("display","none");
                        });*/
    });
    var design66 = [];
    design66 = [
                {dispName:"day0", img:"0.jpg"},
                {dispName:"day1", img:"1.jpg"},
                {dispName:"day2", img:"2.jpg"}
                ];
    for(var item = 0; item < design66.length; item++ )
        {
            $('.portfolioPage').append('<div class="item '+design66[item].dispName+'"><img src='+"img//"+design66[item].img+' width="200px" height="200px"></img></div>');
        }
});