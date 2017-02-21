$(document).ready(function() {
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
            $("body").removeClass("home").addClass("portCat");
            if(currentDisp)
            {
                $("body").removeClass(currentDisp).removeClass(currentDisp).addClass(toDisplay);
                $("."+currentDisp).removeClass("show").addClass("hide");
            }
            $("."+toDisplay).removeClass("hide").addClass("show");
            var hash = window.location.hash.substring(1); 
            if(hash != toDisplay)
            {
                window.location.hash = toDisplay;
            }
        }
    });
    
    navigate(true);
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
    var portfolioJsonNames = { "designItems" : designItems ,"photographItems" : photographItems};
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
    $('.showMore').unbind("click").bind("click",function(event)
            {
                loadMore(portfolioJsonNames,event.target);
            });
});
function navigate(isFromInit,toChange)
{
    if(isFromInit)
    {
        var hash = window.location.hash.substring(1);
        hash =  hash ? hash : "home";
        if(hash)
        {
            $('.navEle[navto="'+hash+'"]').trigger("click");
        }
    }
}
function initImages(portfolioJsonNames)
{
    $.each(portfolioJsonNames, function(i, item) {
        {
            end= 0;
            length = portfolioJsonNames[i].images.length-1;
            start = (length> 12) ? 12 : length;
            renderUI(portfolioJsonNames[i],start,end);
        }
    });
};
function loadMore(portfolioJsonNames,ele)
{
    var fromCategory = $(ele).parent().siblings()[0].className.split(" ")[1];
    var alreadyLoaded = $("."+fromCategory+" .item").length;
    var totalImages = portfolioJsonNames[fromCategory].images.length-1;
    var toLoad = alreadyLoaded + 12;
    start = (totalImages > toLoad ) ? toLoad : totalImages;
    renderUI(portfolioJsonNames[fromCategory],start,alreadyLoaded);
};
function renderUI(portfolioJsonNames,start,end)
{
    curPortfolio = portfolioJsonNames.images;
    classToAppend = portfolioJsonNames.classToAppend;
    for(var item = start; item >end; item-- )
    {
        curPortfolio[item].img = "\img\\\\design\\\\"+curPortfolio[item].img;
    }
    for(var item = start; item >end; item-- )
    {
        ele = '<div class="item hide '+curPortfolio[item].dispName+'"><div class="itemContent"><div class="itemImgCont"><img class="itemImg" name="'+curPortfolio[item].dispName+'" src="" width="200px" height="200px" onLoad="LoadImage(\''+curPortfolio[item].dispName+'\',\''+curPortfolio[item-1].dispName+'\',\''+curPortfolio[item-1].img+'\')"></img></div><div class="itemDescCont"><div class="itemDesc">'+curPortfolio[item].desc+'</div></div></div></div>';
        $(classToAppend).append(ele);
    }
    LoadImage(curPortfolio[start].dispName,curPortfolio[start].dispName,curPortfolio[start].img);
    
    if(curPortfolio.length-1 == start)
    {
        $(classToAppend).siblings().addClass("hide");//to hide load more
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