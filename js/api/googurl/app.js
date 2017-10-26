console.log("Test 17");
function logoDetect()
{
   var key = "AIzaSyCBUQyq3xAP49xlRnNA5iQ-31Omzo50W_A";
       apiUrl = "https://vision.googleapis.com/v1/images:annotate?key=" + key,
       imageUrl = document.getElementById("imageurl").value,
       request = {"requests":[{"image":{"source":{"imageUri":imageUrl}},"features":[{"type":"LOGO_DETECTION"}]}]},
       outputNode = $('#output'),
       outputImgNode = $('#outputImg');
   console.log("Image URL:");
   console.log(imageUrl);
   $.ajax({
      type: "POST",
      url: apiUrl,
      dataType: 'json',
      data: JSON.stringify(request),
      headers: {
         "Content-Type": "application/json",
      },
      success: function(response) {
         console.log("Success!");
         console.log(response);
         outputNode.html(response.responses[0].logoAnnotations[0].description);
         outputImgNode.html("<img src='" + imageUrl + "' />");
      },
      error: function(jqXHR, textStatus, errorThrown) {
         console.log('ERRORS: ');
         console.log(jqXHR);
         console.log(textStatus);
         console.log(errorThrown);
         outputNode.html("Sorry! There was an error sending your image.");
      }
   });
}
/*
function makeShort()
{
   var longUrl=document.getElementById("longurl").value;
    var request = gapi.client.urlshortener.url.insert({
      {
  "requests": [
    {
      "image": {
        "source": {
          "imageUri": "https://www.blog.google/static/blog/images/google-200x200.7714256da16f.png"
        }
      },
      "features": [
        {
          "type": "LOGO_DETECTION"
        }
      ]
    }
  ]
}
    }
    });
    request.execute(function(response)
    {

        if(response.id != null)
        {
            str ="<b>Long URL:</b>"+longUrl+"<br>";
            str +="<b>Short URL:</b> <a href='"+response.id+"'>"+response.id+"</a><br>";
            document.getElementById("output").innerHTML = str;
        }
        else
        {
            alert("error: creating short url n"+ response.error);
        }

    });
 }
 */
/*
function load()
{
    //Get your own Browser API Key from  https://code.google.com/apis/console/
    gapi.client.setApiKey('AIzaSyBlkUvTfY7XUST5NHscfmbkvu-wYNiUugI');
    gapi.client.load('urlshortener', 'v1',function(){document.getElementById("output").innerHTML="";});

}
window.onload = load;
*/
