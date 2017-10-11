console.log("Test sig: 11");
var token = "66baffe96a88a7dd06204620b07b01c3",
	apiUrl = "https://api.collection.cooperhewitt.org/rest/",
	cafeOpen = "",
	cafeHours = "",
	galleryOpen = "",
	numberExhibits = "",
	exhibitList = "",
	cafeNode = $('#cafeOpen'),
	galleryNode = $('#galleryOpen'),
	numberExhibitsNode = $('#numberExhibits'),
	exhibitListNode = $('#exhibitList');
$.ajax(apiUrl, {
	success: function(response) {
		console.log("Cafe Call:");
		console.log(response);
		cafeOpen = response.open;
		console.log("Cafe status?");
		if (cafeOpen === 1) {
			console.log("Cafe is open.");
		  cafeNode.html("Yes!");
		} else if (cafeOpen === "") {
			console.log("Cafe status is unknown.");
		  cafeNode.html("I don't know.");
		} else if (cafeOpen === 0) {
			console.log("Cafe is closed.");
		  cafeNode.html("No!");
		}
	},
	data: {"method": "cooperhewitt.cafe.isOpen",
		   "access_token": token}
});

$.ajax(apiUrl, {
	success: function(response) {
		console.log("Gallery Call:");
		console.log(response);
		galleryOpen = response.open;
		console.log("Gallery status?");
		if (galleryOpen === 1) {
			console.log("Gallery is open.");
			galleryNode.html("Yes!");
		} else if (galleryOpen === "") {
			console.log("Gallery status is unknown.");
			galleryNode.html("I don't know.");
		} else if (galleryOpen === 0) {
			console.log("Gallery is closed.");
			galleryNode.html("No!");
		}
		},
	data: {"method": "cooperhewitt.galleries.isOpen",
		   "access_token": token}
});
$.ajax(apiUrl, {
	async: false,
	success: function(response) {
		console.log("Exhibition List:");
		console.log(response);
		numberExhibitsNode.html(response.exhibitions.length);
		console.log("Exhibit number: " + response.exhibitions.length);
		for (i = 0; i < response.exhibitions.length; i++) {
			var title = response.exhibitions[i].title,
				id = response.exhibitions[i].id,
				link = response.exhibitions[i].url,
				image = "";
			console.log(title);
			console.log(id);
			$.ajax(apiUrl, {
				async: false,
				success: function(response) {
					image = response.objects[0].images[0].sq.url;
					console.log("Image:");
					console.log(image);
				},
				data: {"method": "cooperhewitt.exhibitions.getObjects",
					   "access_token": token,
				   	   "page": 1,
				   	   "per_page": 1,
				   	   "exhibition_id": id}
			});
			exhibitListNode.append("<div class='col-md-3'><img src='"+ image + "'/><br /><p><a href='" + link + "' target='blank'><b>" + title + "</b></p></a></div>");
		}
	},
	data: {"method": "cooperhewitt.exhibitions.getList",
		  "access_token": token,
	  	  "page": 1,
	  	  "per_page": 4}
});
/*
var numSpots = $.get(apiUrl,
		{
			"method": "cooperhewitt.objects.locations.spots.getList",
			"access_token": token,
			"page": 1,
			"per_page": 1}
		);
console.log("Number of spots:");
console.log(numSpots);
*/
