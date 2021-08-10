var synth = new Tone.FMSynth().toMaster();

class ControlSet {
  constructor(name, primary, secondary) {
    this.name = name.toUpperCase(); // color name, will generate ID names among other things.
    this.primary = primary;
    this.secondary = secondary;
    this.dialValue = 3;
    this.makeDial();
    this.makeButton();
  }
  makeDial() {
    var self = this;
    console.log("self makeDial", self.dialValue);
    console.log("this makeDial", this.dialValue);
    console.log(this.name);
    var thisDial = new Nexus.Dial('#' + this.name + 'Dial', {
      'min': 0,
      'max': 6,
      'value': this.dialValue
    });
    thisDial.colorize("accent",this.primary);
    thisDial.colorize("fill",this.secondary);
    var dialDisplay = document.getElementById(this.name + "Display");
    dialDisplay.innerHTML = this.name + this.dialValue;
    thisDial.on('change', function(v) {
      self.changeValue(v);
    });
  }
  changeValue(v) {
    //console.log("self changeValue", self.dialValue);
    console.log("this changeValue", this.dialValue);
    console.log(this.name + " Dial value: " + v + " | Rounded: " + Math.round(v));
    var newValue = Math.round(v);
    var dialDisplay = document.getElementById(this.name + "Display");
    dialDisplay.innerHTML = this.name + newValue;
    this.dialValue = newValue;
    return newValue;
  }
  makeButton() {
    // Adding the self = this here because the event listeners were hijacking the `this`
    // and preventing the correct note from actually playing
    var self = this;
    //console.log("self makeButton", self.dialValue);
    console.log("this makeButton", this.dialValue);
    var dialValue = this.dialValue;
    var thisButton = new Nexus.Button('#' + this.name + 'Button');
    thisButton.colorize("accent",this.secondary);
    thisButton.colorize("fill",this.primary);
    thisButton.on('click',function(v) {
      console.log("this makeButton", self.dialValue);
      console.log(self.name + " Button: " + self.name + self.dialValue);
      synth.triggerAttack(self.name + self.dialValue);
    });
    thisButton.on('release',function(v) {
      synth.triggerRelease();
    });
  }
  clickButton() {
    
  }
}

let redSet = new ControlSet("A", "#E80000", "#410000"),
    oraSet = new ControlSet("B", "#FF7600", "#823C00");

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
