// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
var center = new Image();
var outter = new Image();
function init() {
  center.src = '/Users/robertlopez/Desktop/Project 1/project-1-portfolio/goldenCenter.png';
  outter.src = '/Users/robertlopez/Desktop/Project 1/project-1-portfolio/goldenCenter.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0, 0, 300, 300);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.save();
  ctx.translate(150, 150);

// ## Code Snippet--------------------------------------------------------------------

  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  
// ## Code Snippet--------------------------------------------------------------------

  ctx.translate(105, 0);
  ctx.drawImage(outter, -17, -17, 30, 30);
  ctx.restore();
  ctx.drawImage(center, 110, 110, 80, 80);
  window.requestAnimationFrame(draw);
}

init();
