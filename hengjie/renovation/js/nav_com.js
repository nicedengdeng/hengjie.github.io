//assistant 的hover设置
$("#site-assistant").on("mouseover mouseout", function(event) {
	if(event.type == "mouseover") {
		//鼠标悬浮
		$(".assistant").css(
			"display", "block",
			"transition", "height 2s ease",
			"height", "5116px"
		);

	} else if(event.type == "mouseout") {

		setTimout(mouse_leave(), 200);

	}
})

//鼠标离开
function mouse_leave() {
	$(".assistant").css("display", "none");
}

//remove_assistant方法
$("#remove_a").click(function() {
	//鼠标离开
	$(".assistant").css("display", "none");
});

