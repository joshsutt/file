var menuBar = {
	init: function () {
		var me = this;
		$.getJSON("menu-bar.json", function (myJSON) {
			me.data = myJSON;
			me.update();
			$(".menu-bar-item > .options1").hide();
			$(".menu-bar-item").on("click", me.itemClick);
		});

		$(":root").on("click", function (e) {
			if (!$(e.target).hasClass("option")) {
				$(".menu-bar-item").not(e.target).children().hide();
			}
		});
	},
	itemClick: function (e) {
		$(e.target).children(".options1").toggle();
	},
	update: function () {
		$("#menu-bar").html(menuBar.process(this.data, 0));
	},

	process: function (data, index) {
		var mainClass = "option";
		var contentClass = "options2 options";
		var str = "";
		if (index == 0) {
			mainClass = "menu-bar-item";
			contentClass = "options1 options";
		}
		for (var i = 0; i < data.length; i++) {
			var click = "";
			var content = "";
			var title = data[i].title;
			if (data[i].content != undefined) {
				content = `<div class="${contentClass}">${this.process(data[i].content, index+1)}</div>`;
			}
			str += `<div ${click} class="${mainClass}">${title}${content}</div>`;
		}
		return str;
	}
};
