var synth = new Tone.FMSynth().toMaster();

class ControlSet {
  constructor(name, primary, secondary) {
    this.name = name; // color name, will generate ID names among other things.
    this.primary = primary;
    this.secondary = secondary;
  }
  dialValue = 3;
  makeDial() {
    var self = this;
    var thisDial = new Nexus.Dial('#' + this.name + 'Dial', {
      'min': 0,
      'max': 6,
      'value': 3
    });
    thisDial.colorize("accent",this.primary);
    thisDial.colorize("fill",this.secondary);
    var dialDisplay = document.getElementById(this.name + "Display");
    dialDisplay.innerHTML = "A" + this.dialValue;
    thisDial.on('change', function(v) {
      self.changeValue(v);
    });
  }
  changeValue(v) {
    console.log(this.name + " Dial value: " + v + " | Rounded: " + Math.round(v));
    var newValue = Math.round(v);
    var dialDisplay = document.getElementById(this.name + "Display");
    dialDisplay.innerHTML = "A" + newValue;
    this.dialValue = newValue;
    return newValue;
  }
  makeButton() {
    var dialValue = this.dialValue;
    var thisButton = new Nexus.Button('#' + this.name + 'Button');
    thisButton.colorize("accent",this.secondary);
    thisButton.colorize("fill",this.primary);
    thisButton.on('click',function(v) {
      console.log("Red Button: A" + dialValue);
      synth.triggerAttack('A' + dialValue);
    });
    thisButton.on('release',function(v) {
      synth.triggerRelease();
    });
  }
}

var test = new ControlSet("red", "#E80000", "#410000");
console.log(test.name);
test.makeDial();
test.makeButton();
/*
var redDial = new Nexus.Dial('#redDial', {
    'min': 0,
    'max': 6,
    'value': 3
});
redDial.colorize("accent","#E80000");
redDial.colorize("fill","#410000");
var redValue = 3;
redDisplay = document.getElementById("redDisplay");
redDisplay.innerHTML = "A" + redValue;
redDial.on('change', function(v) {
    console.log("Red Dial value: " + v + " | Rounded: " + Math.round(v));
    redValue = Math.round(v);
    redDisplay.innerHTML = "A" + redValue;
    return redValue;
});

*/
/*
var redButton = new Nexus.Button('#redButton');
redButton.colorize("accent","#410000");
redButton.colorize("fill","#E80000");
redButton.on('click',function(v) {
  console.log("Red Button: A" + redValue);
  synth.triggerAttack('A' + redValue);
});
redButton.on('release',function(v) {
  synth.triggerRelease();
});
*/
/** ORANGE **/

var oraDial = new Nexus.Dial('#oraDial', {
    'min': 0,
    'max': 6,
    'value': 3
});
oraDial.colorize("accent","#FF7600");
oraDial.colorize("fill","#823C00");
var oraValue = 3;
oraDisplay = document.getElementById("oraDisplay");
oraDisplay.innerHTML = "B" + oraValue;
oraDial.on('change', function(v) {
    console.log("Orange Dial value: " + v + " | Rounded: " + Math.round(v));
    oraValue = Math.round(v);
    oraDisplay.innerHTML = "B" + oraValue;
    return oraValue;
});

var oraButton = new Nexus.Button('#oraButton');
oraButton.colorize("accent","#823C00");
oraButton.colorize("fill","#FF7600");
oraButton.on('click',function(v) {
  console.log("Orange Button: B" + oraValue);
  synth.triggerAttack('B' + oraValue);
});
oraButton.on('release',function(v) {
  synth.triggerRelease();
});

/* YELLOW */

var yelDial = new Nexus.Dial('#yelDial', {
    'min': 0,
    'max': 6,
    'value': 3
});
yelDial.colorize("accent","#FFD22C");
yelDial.colorize("fill","#775D00");
var yelValue = 3;
yelDisplay = document.getElementById("yelDisplay");
yelDisplay.innerHTML = "C" + yelValue;
yelDial.on('change', function(v) {
    console.log("Yellow Dial value: " + v + " | Rounded: " + Math.round(v));
    yelValue = Math.round(v);
    yelDisplay.innerHTML = "C" + yelValue;
    return yelValue;
});

var yelButton = new Nexus.Button('#yelButton');
yelButton.colorize("accent","#775D00");
yelButton.colorize("fill","#FFD22C");
yelButton.on('click',function(v) {
  console.log("Yellow Button: C" + yelValue);
  synth.triggerAttack('C' + yelValue);
});
yelButton.on('release',function(v) {
  synth.triggerRelease();
});

/* GREEN */

var greDial = new Nexus.Dial('#greDial', {
    'min': 0,
    'max': 6,
    'value': 3
});
greDial.colorize("accent","#2FE825");
greDial.colorize("fill","#067500");
var greValue = 3;
greDisplay = document.getElementById("greDisplay");
greDisplay.innerHTML = "D" + greValue;
greDial.on('change', function(v) {
    console.log("Green Dial value: " + v + " | Rounded: " + Math.round(v));
    greValue = Math.round(v);
    greDisplay.innerHTML = "D" + greValue;
    return greValue;
});

var greButton = new Nexus.Button('#greButton');
greButton.colorize("accent","#067500");
greButton.colorize("fill","#2FE825");
greButton.on('click',function(v) {
  console.log("Green Button: D" + greValue);
  synth.triggerAttack('D' + greValue);
});
greButton.on('release',function(v) {
  synth.triggerRelease();
});

/* BLUE */

var bluDial = new Nexus.Dial('#bluDial', {
    'min': 0,
    'max': 6,
    'value': 3
});
bluDial.colorize("accent","#1D21CA");
bluDial.colorize("fill","#030545");
var bluValue = 3;
bluDisplay = document.getElementById("bluDisplay");
bluDisplay.innerHTML = "E" + bluValue;
bluDial.on('change', function(v) {
    console.log("Blue Dial value: " + v + " | Rounded: " + Math.round(v));
    bluValue = Math.round(v);
    bluDisplay.innerHTML = "E" + bluValue;
    return bluValue;
});

var bluButton = new Nexus.Button('#bluButton');
bluButton.colorize("accent","#030545");
bluButton.colorize("fill","#1D21CA");
bluButton.on('click',function(v) {
  console.log("Blue Button: E" + bluValue);
  synth.triggerAttack('E' + bluValue);
});
bluButton.on('release',function(v) {
  synth.triggerRelease();
});

/* PURPLE */

var purDial = new Nexus.Dial('#purDial', {
    'min': 0,
    'max': 6,
    'value': 3
});
purDial.colorize("accent","#6502B1");
purDial.colorize("fill","#2D004F");
var purValue = 3;
purDisplay = document.getElementById("purDisplay");
purDisplay.innerHTML = "F" + purValue;
purDial.on('change', function(v) {
    console.log("Purple Dial value: " + v + " | Rounded: " + Math.round(v));
    purValue = Math.round(v);
    purDisplay.innerHTML = "F" + purValue;
    return purValue;
});

var purButton = new Nexus.Button('#purButton');
purButton.colorize("accent","#2D004F");
purButton.colorize("fill","#6502B1");
purButton.on('click',function(v) {
  console.log("Purple Button: F" + purValue);
  synth.triggerAttack('F' + purValue);
});
purButton.on('release',function(v) {
  synth.triggerRelease();
});

/* PINK */

var pinDial = new Nexus.Dial('#pinDial', {
    'min': 0,
    'max': 6,
    'value': 3
});
pinDial.colorize("accent","#E0006A");
pinDial.colorize("fill","#510026");
var pinValue = 3;
pinDisplay = document.getElementById("pinDisplay");
pinDisplay.innerHTML = "G" + purValue;
pinDial.on('change', function(v) {
    console.log("Pink Dial value: " + v + " | Rounded: " + Math.round(v));
    pinValue = Math.round(v);
    pinDisplay.innerHTML = "G" + pinValue;
    return pinValue;
});

var pinButton = new Nexus.Button('#pinButton');
pinButton.colorize("accent","#510026");
pinButton.colorize("fill","#E0006A");
pinButton.on('click',function(v) {
  console.log("Pink Button: G" + pinValue);
  synth.triggerAttack('G' + pinValue);
});
pinButton.on('release',function(v) {
  synth.triggerRelease();
});

document.body.style.backgroundColor = "#EEE";
