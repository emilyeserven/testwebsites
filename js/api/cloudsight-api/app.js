console.log("Test 3");
function imageSelect(e)
{
    var key = "XuG8YVAswvB1e0-38tpUyw",
    apiUrl = "https://api.cloudsight.ai/v1/images",
    imageUrl = e.getAttribute("src"),
    request = {
        "remote_image_url": imageUrl
    },
    outputNode = $('#output'),
    outputImgNode = $('#outputImg');

    console.log("Image URL:");
    console.log(imageUrl);
    console.log(request);

    $.ajax({
        type: "POST",
        headers: {"Authorization": "CloudSight XuG8YVAswvB1e0-38tpUyw",
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*"},
        url: apiUrl,
        dataType: 'json',
        data: JSON.stringify(request),
        headers: {
           "Content-Type": "application/json",
        },
        success: function(response){
           console.log("Success!");
           console.log(response);
       },
       error: function(jqXHR, textStatus, errorThrown) {
          console.log('ERRORS: ');
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
       }
   });
}
