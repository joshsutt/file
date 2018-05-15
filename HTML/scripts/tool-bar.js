var menuBar = {
	init: function () {
		var me = this;
		$.getJSON("config/tool-bar.json", function (myJSON) {
			me.data = myJSON;
			me.update();
		});
	},
	update: function () {},

	process: function (data, index) {
		/*
		var mainClass = "option no-hide-menu";
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
			if (data[i].click != undefined) {
				click = `onClick="events.${data[i].click}()"`;
			}
			str += `<div ${click} class="${mainClass}">${title}${content}</div>`;
		}
		return str;
		*/
	}

};
