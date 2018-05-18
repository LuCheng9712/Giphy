var api_key = "bjVtnArZQBxXVIQYuYyVzxzDuqH1Jikk"
var limit = 30

function getGifs() {

	var input = $("#searchtext").val()

	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key="+api_key+"&limit="+limit+"");
	
	xhr.done(function(reponse) { 
		console.log("success got data", reponse); 

		var gifs = reponse.data;

		for (i in gifs) {
			var width = gifs[i].images.fixed_height.height
			var height= gifs[i].images.fixed_width.width
			$('.inner').append("<img src='"+gifs[i].images.original.url+"' style='height:"+height+"; width:"+width+"'>")
		}	
	});

}