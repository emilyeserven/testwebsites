function setup() {
    createCanvas(720,480);
    strokeWeight(2);
    ellipseMode(RADIUS);
}
function draw() {
    background(204);

    //Neck
    stroke(102);
    line(266,257,266,162);
    line(276,257,276,162);
    line(286,257,286,162);

    //Antennae
    line(276,155,246,112);
    line(276,155,306,56);
    line(276,155,342,170);

    //Body
    noStroke();
    fill(102);
    ellipse(264,377,33,33);
    fill(0);
    rect(219,257,90,120);
    fill(102);
    rect(219,274,90,6);

    //Head
    fill(0);
    ellipse(276,155,45,45);
    fill(255);
    ellipse(288,150,14,14);
    fill(075);
    rect(274,148,28,3);
    fill(153);
    ellipse(263,148,5,5);
    ellipse(296,130,4,4);
    ellipse(305,162,3,3);

    //Boink
    fill(0);
    stroke(2);
    line(200,400,210,395);
    line(198,410,208,405);
    line(196,420,206,415);
}
