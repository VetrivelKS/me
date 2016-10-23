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
			$(".navBar").addClass("moveUp");
			addAnim(".moveUp","0");
			$(".home").addClass("hide");
			$(".home").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){$(".home").css("display","none"); });
		});
});