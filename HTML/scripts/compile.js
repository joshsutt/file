// JavaScript Document

$.ajax({
			
			url: "minecraft_commands.txt", dataType:"text", async: true, 
			success: function(result){
				result = result.split("\n");
				for(var i=0; i<result.length; i++){
					result[i] = result[i].split(" ");
				}
				console.log(result);
			
			}
});
function compile(ev){
	var input = $("#textarea").val().split("\n");
	for (var i=0; i<input.length; i++){
		
		//(([A-Za-z0-9_-]+)|(@+(a|e|s|p|r)+(\[+((attr)+)+\])?))(?=\s)
		console.log(input[i].match(/(((~?-?[0-9]+ ){2})(~?-?[0-9]+)|([\w/:@]+)(\[[^\]]+\])?(\{[^}]+\})?)/g));
		
		
		
		
	}
}


