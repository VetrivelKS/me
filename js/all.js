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
    $(".navIcon").click(
        function()
        {
//            $(".navBar").addClass("moveUp");
  //          addAnim(".moveUp","0");
            $(".homePage").removeClass("show").addClass("hide");
            $("body").removeClass("home").addClass("portfolio");
            $(".portfolioPage").removeClass("hide").addClass("show");
            
           /* $(".home").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                    function(){
                        $(".home").css("display","none");
                        });*/
    });
    var design66 = [];
    design66 = [
                {dispName:"day0", img:"0.jpg",desc:"this is image"},
                {dispName:"day1", img:"1.jpg",desc:"this is image"},
                {dispName:"day2", img:"2.jpg",desc:"this is image"},
                {dispName:"day3", img:"3.jpg",desc:"this is image"},
                {dispName:"day4_1", img:"4_1.jpg",desc:"this is image"},
                {dispName:"day4_2", img:"4_2.jpg",desc:"this is image"},
                {dispName:"day5", img:"5.jpg",desc:"this is image"},
                {dispName:"day6", img:"6.jpg",desc:"this is image"},
                {dispName:"day7", img:"7.jpg",desc:"this is image"},
                {dispName:"day8", img:"8.jpg",desc:"this is image"},
                {dispName:"day9", img:"9.jpg",desc:"this is image"},
                {dispName:"", img:"",desc:""}//leave extra empty elem
                ];
    for(var item = 0; item < design66.length-1; item++ )
    {
        design66[item].img = "\img\\\\"+design66[item].img;
    }
    for(var item = 0; item < design66.length-1; item++ )
    {
        ele = '<div class="item hide '+design66[item].dispName+'"><div class="itemContent"><img class="itemImg" name="'+design66[item].dispName+'" src="" width="200px" height="200px" onLoad="LoadImage(\''+design66[item].dispName+'\',\''+design66[item+1].dispName+'\',\''+design66[item+1].img+'\')"></img><div class="desc">'+design66[item].desc+'</div></div></div>';
        $('.photos').append(ele);
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
        $(className).eq(0).removeClass("hide").addClass("show");
    }
}
