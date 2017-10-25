console.log("Test 4");
function logoDetect()
{
   var apiUrl = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBlkUvTfY7XUST5NHscfmbkvu-wYNiUugI",
       imageUrl = document.getElementById("imageurl").value;
   $.post(apiUrl, {
      data: {
        "requests": [
          {
            "image": {
              "source": {
                "imageUri": imageUrl
              }
            },
            "features": [
              {
                "type": "LOGO_DETECTION"
              }
            ]
          }
        ]
      },
      success: function(response) {
         console.log("Success!");
         console.log(response);
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
