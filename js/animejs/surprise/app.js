var maincircAnim = anime({
  targets: '#cssSelector .heart.origheart',
  scale: 70,
  duration: 3500,
  opacity: .9,
  easing: 'easeInOutSine'
});
var maincircAnimFill = anime({
  targets: '#cssSelector .heart.fillheart',
  scale: 70,
  duration: 3000,
  offset: 1000,
  opacity: .9,
  easing: 'easeInOutSine'
});

var lineDraw = anime({
  targets: '.heart.orig path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
  delay: function(el, i) { return i * 250 }
});


var textAnim = anime({
  targets: '.flextest .text',
  scale: [
    {value: 0, duration: 0},
    {value: 2, duration: 1500, delay: 500}
  ],
  color: [
    {value: '#940400', duration: 0},
    {value: '#FFFFFF', duration: 1500, delay: 500}
  ],
  opacity: [
    {value: 0, duration: 0},
    {value: 1, duration: 1500, delay: 500}
  ],
  offset: 1500,
  easing: 'easeInOutSine'
});


var circ1Anim = anime({
  targets: '#cssSelector .circ1.orig',
  translateY: '-70vh',
  duration: 3000,
  opacity: [
    {value: 1, duration: 0},
    {value: 1, duration: 0, delay: 2500},
    {value: 0, duration: 500, delay: 2501}
  ],
  easing: 'easeInQuad'
});
var circ1contAnim = anime({
  targets: '#cssSelector .circ1.circcont',
  translateY: [
    {value: '0vh', duration: 0},
    {value: '-120vh', duration: 4500, delay: 2000}
  ],
  loop: true,
  easing: 'easeInQuad'
});
var circ2Anim = anime({
  targets: '#cssSelector .circ2.orig',
  translateY: '-90vh',
  opacity: [
    {value: 1, duration: 0},
    {value: 1, duration: 0, delay: 2500},
    {value: 0, duration: 500, delay: 2501}
  ],
  duration: 3000,
  easing: 'easeInQuad'
});
var circ2contAnim = anime({
  targets: '#cssSelector .circ2.circcont',
  translateY: [
    {value: '0vh', duration: 0},
    {value: '-120vh', duration: 5000, delay: 2000}
  ],
  loop: true,
  easing: 'easeInQuad'
});


var circ3Anim = anime({
  targets: '#cssSelector .circ3.orig',
  translateY: '-30vh',
  opacity: [
    {value: 1, duration: 0},
    {value: 1, duration: 0, delay: 2500},
    {value: 0, duration: 500, delay: 2501}
  ],
  duration: 3000,
  easing: 'easeInQuad'
});
var circ3contAnim = anime({
  targets: '#cssSelector .circ3.circcont',
  translateY: [
    {value: '0vh', duration: 0},
    {value: '-120vh', duration: 5000, delay: 2000}
  ],
  loop: true,
  easing: 'easeInQuad'
});

var circ4Anim = anime({
  targets: '#cssSelector .circ4.orig',
  translateY: '-100vh',
  opacity: [
    {value: 1, duration: 0},
    {value: 1, duration: 0, delay: 2500},
    {value: 0, duration: 500, delay: 2501}
  ],
  duration: 6000,
  easing: 'easeInQuad'
});
var circ4contAnim = anime({
  targets: '#cssSelector .circ4.circcont',
  translateY: [
    {value: '0vh', duration: 0},
    {value: '-120vh', duration: 5000, delay: 5000}
  ],
  loop: true,
  easing: 'easeInQuad'
});
console.log("wow");
