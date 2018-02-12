var maincircAnim = anime({
  targets: '#cssSelector .maincircle',
  scale: 70,
  duration: 2000,
  backgroundColor: '#B60F0B',
  opacity: .9
});
var textAnim = anime({
  targets: '.flextest .text',
  scale: [
    {value: 0, duration: 0},
    {value: 2, duration: 1500, delay: 500}
  ],
  color: [
    {value: '#940400', duration: 0},
    {value: '#EEEEEE', duration: 1500, delay: 500}
  ],
  opacity: [
    {value: 0, duration: 0},
    {value: 1, duration: 1500, delay: 500}
  ],
});
var beginAnim = anime({
  targets: '#cssSelector .circle.begin',
  translateY: '-60vh',
  duration: 3000,
  easing: 'easeInQuad'
});
var begincontAnim = anime({
  targets: '#cssSelector .circle.begincont',
  translateY: '-110vh',
  duration: 3500,
  offset: 3000,
  loop: true,
  easing: 'easeInQuad'
});
var circ2Anim = anime({
  targets: '#cssSelector .circle.circ2',
  translateY: '-90vh',
  duration: 3000,
  easing: 'easeInQuad'
});
var circ2contAnim = anime({
  targets: '#cssSelector .circle.circ2cont',
  translateY: '-110vh',
  duration: 5000,
  offset: 3000,
  loop: true,
  easing: 'easeInQuad'
});
console.log("wow");
