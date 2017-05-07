function setup() {
    createCanvas(800,600);
    //Uncomment to set default as radians instead of degrees.
    //angleMode(DEGREES);
}
function draw() {
    background(204);

    // Dotted Line
    point(540, 560);
    point(540, 562);
    point(540, 564);
    point(540, 566);
    point(540, 568);
    point(540, 570);
    point(540, 572);
    point(540, 574);
    point(540, 576);
    point(540, 578);

    // Corners
    point(0, 800);
    point(800, 0);
    point(0, 0);
    point(800, 800);

    // Line
    line(205,55,305,65);

    //Funky shape
    quad(158,55,199,14,392,66,351,107);
    triangle(347,54,392,9,392,66);
    strokeWeight(2);
    triangle(158,55,290,91,290,112);
    strokeWeight(1);

    //Rectangle
    rect(480,360,120,40);

    //Ellipse
    ellipse(412,360,40,40);
    ellipse(382,460,40,10);

    // Part of Ellipse
    arc(100, 200, 100,100,0, HALF_PI);
    arc(225, 200, 100,100,0, PI+HALF_PI);
    arc(350, 200, 100,100,PI, TWO_PI+HALF_PI);
    arc(475, 200, 100,100,QUARTER_PI, PI+QUARTER_PI);

    // With Radians
    //Uncomment below if angle mode set to radians
    //arc(550,200,80,80,0,90);
    arc(550,200,80,80,0,radians(90));

    //Intersections
    ellipse(100,400,100,100);
    rect(125,410,100,50);

    rect(125,525,100,50);
    ellipse(100,550,100,100);
}
