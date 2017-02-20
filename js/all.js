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
    /*for(var item = design66.length-1; item >0; item-- )
    {
        design66[item].img = "\img\\\\design\\\\"+design66[item].img;
    }
    for(var item = design66.length-1; item >0; item-- )
    {
        ele = '<div class="item hide '+design66[item].dispName+'"><div class="itemContent"><div class="itemImgCont"><img class="itemImg" name="'+design66[item].dispName+'" src="" width="200px" height="200px" onLoad="LoadImage(\''+design66[item].dispName+'\',\''+design66[item-1].dispName+'\',\''+design66[item-1].img+'\')"></img></div><div class="itemDescCont"><div class="itemDesc">'+design66[item].desc+'</div></div></div></div>';
        $('.designItems').append(ele);
    }
    LoadImage(design66[design66.length-1].dispName,design66[design66.length-1].dispName,design66[design66.length-1].img);*/
    var portfolioJsonNames = [design,photograph];
    initImages(portfolioJsonNames);
    $('.itemContent').unbind("mouseenter").bind("mouseenter",function(event)
            {
                $(event.target).closest('.itemContent').addClass("highlight");
                $('.itemContent').not(event.target).addClass("dull");
            });
    $('.itemContent').unbind("mouseleave").bind("mouseleave",function(event)
            {
                $(event.target).closest('.itemContent').removeClass("highlight");
                $('.itemContent').not(event.target).removeClass("dull");
            });
});

function initImages(portfolioJsonNames)
{
    for(var i = 0 ;i < portfolioJsonNames.length ; i ++)
    {
        curPortfolio = portfolioJsonNames[i].images;
        classToAppend = portfolioJsonNames[i].classToAppend;
        for(var item = curPortfolio.length-1; item >0; item-- )
        {
            curPortfolio[item].img = "\img\\\\design\\\\"+curPortfolio[item].img;
        }
        for(var item = curPortfolio.length-1; item >0; item-- )
        {
            ele = '<div class="item hide '+curPortfolio[item].dispName+'"><div class="itemContent"><div class="itemImgCont"><img class="itemImg" name="'+curPortfolio[item].dispName+'" src="" width="200px" height="200px" onLoad="LoadImage(\''+curPortfolio[item].dispName+'\',\''+curPortfolio[item-1].dispName+'\',\''+curPortfolio[item-1].img+'\')"></img></div><div class="itemDescCont"><div class="itemDesc">'+curPortfolio[item].desc+'</div></div></div></div>';
            $(classToAppend).append(ele);
        }
        LoadImage(curPortfolio[curPortfolio.length-1].dispName,curPortfolio[curPortfolio.length-1].dispName,curPortfolio[curPortfolio.length-1].img);
    }
};

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
        
        if ((!document.images[imageName]) || document.images[imageName].src.indexOf(imageFile)<0)
        {
            //document.images[imageName] = {};
            document.images[imageName].src = imageFile;
        }
        loadingImage = false;
    }
    var className ='.item.'+ele;
        //$(className).eq(0).css("display","block");
    dispShow($(className).eq(0));
}
function dispShow(ele)
{
    $(ele).removeClass("hide").addClass("show");
}