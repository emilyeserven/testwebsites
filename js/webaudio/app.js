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

let ASet = new ControlSet("A", "#E80000", "#410000"), // red
    BSet = new ControlSet("B", "#FF7600", "#823C00"), // orange
    CSet = new ControlSet("C", "#FFD22C", "#775D00"), // yellow
    DSet = new ControlSet("D", "#2FE825", "#067500"), // green
    ESet = new ControlSet("E", "#1D21CA", "#030545"), // blue
    FSet = new ControlSet("F", "#6502B1", "#2D004F"), // purple
    GSet = new ControlSet("G", "#E0006A", "#510026"); // pink

document.body.style.backgroundColor = "#EEE";
