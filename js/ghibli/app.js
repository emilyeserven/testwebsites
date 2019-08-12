document.getElementById("hello").innerHTML = "<p>Hi!</p>";

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    console.log("request");
    var data = JSON.parse(this.response);
    console.log(data);

    var circles = d3.select("#canvas").selectAll("circle")
        .data(data);
    
    circles.enter().append("circle")
        .attr("cx", function(d, i){ return ((d.release_date-1900)*3)-200; })
        .attr("cy", function(d, i){ return d.rt_score*3; })
        .attr("r", 5)
        .attr("fill", "grey");
}

// Send request
request.send()