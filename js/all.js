$(document).ready(function() {
/*    function addAnim(className)
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
    });*/
    /*$(".navHome").click(
        function()
        {
            //                $(".navBar").addClass("moveUp");
            //            addAnim(".moveUp","0");
        $(".homePage").removeClass("show").addClass("hide");
        var currentDisp = $("body").attr("currentDisp");
        $("body").removeClass(currentDisp).removeClass(currentDisp).addClass("portCatPage");
        $(".portCatPage").removeClass("hide").addClass("show");
        
       /* $(".home").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                function(){
                    $(".home").css("display","none");
                    });
        });*/
    $(".navEle").click(
        function()
        {
        var toDisplay = $(this).attr("navTo");
        var currentDisp = $("body").attr("currentDisp");
        $("body").attr("currentDisp",toDisplay);
        if(toDisplay != currentDisp)
        {
            $(this).siblings().removeClass("highlight");
            $(this).addClass("highlight");
            $("body").removeClass(currentDisp).removeClass(currentDisp).addClass(toDisplay);
            $("body").removeClass("home").addClass("portCat");
            $("."+currentDisp).removeClass("show").addClass("hide");
            $("."+toDisplay).removeClass("hide").addClass("show");
        }
    });
    
    var design66 = [];
    design66 = [
                {dispName:"day0", img:"0.jpg",desc:"Camera icon"},
                {dispName:"day1", img:"1.jpg",desc:"#1 logo"},
                {dispName:"day2", img:"2.jpg",desc:"Prestige Sailing School Logo"},
                {dispName:"day3", img:"3.jpg",desc:"Trip to MOON logo"},
                {dispName:"day4_1", img:"4_1.jpg",desc:"Zim's Icecream Parlour Logo"},
                {dispName:"day4_2", img:"4_2.jpg",desc:"Zim's Icecream Parlour Logo #2"},
                {dispName:"day5", img:"5.jpg",desc:"The Laser Saloon Logo"},
                {dispName:"day6", img:"6.jpg",desc:"The Silent Velcro Logo"},
                {dispName:"day7", img:"7.jpg",desc:"Snake Sweater Logo"},
                {dispName:"day8", img:"8.jpg",desc:"Ken's Candy shop Logo"},
                {dispName:"day9", img:"9.jpg",desc:"Grass Fuel"},
                {dispName:"", img:"",desc:""}//leave extra empty elem
                ];
    for(var item = 0; item < design66.length-1; item++ )
    {
        design66[item].img = "\img\\\\design\\\\"+design66[item].img;
    }
    for(var item = 0; item < design66.length-1; item++ )
    {
        ele = '<div class="item hide '+design66[item].dispName+'"><div class="itemContent"><img class="itemImg" name="'+design66[item].dispName+'" src="" width="200px" height="200px" onLoad="LoadImage(\''+design66[item].dispName+'\',\''+design66[item+1].dispName+'\',\''+design66[item+1].img+'\')"></img><div class="desc">'+design66[item].desc+'</div></div></div>';
        $('.designItems').append(ele);
    }
    LoadImage(design66[0].dispName,design66[0].dispName,design66[0].img);
});
var loadingImage = false;
function LoadImage(ele,imageName,imageFile)
{
    if(imageName && imageFile)
    {
        if ((!document.images) || loadingImage)
        {
            return;
        }
        loadingImage = true;
        
        if (document.images[imageName].src.indexOf(imageFile)<0)
        {
            document.images[imageName].src = imageFile;
        }
        loadingImage = false;
        var className ='.item.'+ele;
        //$(className).eq(0).css("display","block");
        dispShow($(className).eq(0));
    }
}
function dispShow(ele)
{
    $(ele).removeClass("hide").addClass("show");
}