// Setup nodes
var cityNode = document.getElementById('city'),
  aqiNode = document.getElementById('aqi'),
  responseBodyNode = document.getElementById('response-body');

// State to Abbreviation converter from:
// https://gist.github.com/calebgrove/c285a9510948b633aa47
function abbrState(input, to){
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }
    }
}

window.addEventListener("load", function () {

    function sendData() {
      var XHR = new XMLHttpRequest();

      // Bind the FormData object and the form element
      var FD = new FormData(form);
      var parsedForm = [];
      for(var pair of FD.entries()) {
        parsedForm.push(pair[1]); 
      }
     console.log(parsedForm);

    fetch('https://www.zipcodeapi.com/rest/10xqqUdsHAt66QNcZwwZ6eKlhoAvi8rp7cVXhcvbsWLJghaSrm86XtiCDWkwqKj4/info.json/' + parsedForm[0] + '/degrees')
      .then((resp) => resp.json())
      .then(function(data){
        console.log(data);
        cityName = data.city;
        stateName = data.state;
        var stateNameFull = abbrState(data.state, 'name');
        cityNode.innerHTML = data.city;
        console.log(stateNameFull);
        //return fetch('http://api.airvisual.com/v2/states?country=USA&key=DTKpZ2DfQPw4wSkr5');
        //return fetch('http://api.airvisual.com/v2/cities?state=' + stateNameFull + '&country=USA&key=DTKpZ2DfQPw4wSkr5');
        return fetch('http://api.airvisual.com/v2/city?city=' + cityName + '&state=' + stateNameFull + '&country=USA&key=DTKpZ2DfQPw4wSkr5');
        // encodeURI(data.city);
      })
      .then((resp) => resp.json())
      .then(function(data){
        console.log(data);
        //var pollution = data.current.pollution.aquis;
        console.log(data.data.current.pollution.aqius);
        var pollution = data.data.current.pollution.aqius;
        aqiNode.innerHTML = pollution;
        responseBodyNode.classList.add("active");
        responseBodyNode.classList.remove("inactive");
        return pollution;
      });
    }

    // Access the form element...
    var form = document.getElementById("myForm");

    // ...and take over its submit event.
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      sendData();
    });
  });