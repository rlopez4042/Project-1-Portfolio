// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations

//var for the golden circles
var goldenCenter = new Image();
var darkGrayCircle = new Image();

//store the two golden circle images
function init() {
  goldenCenter.src = '/Users/robertlopez/Desktop/Project 1/project-1-portfolio/goldenCenter.png';
  darkGrayCircle.src = '/Users/robertlopez/Desktop/Project 1/project-1-portfolio/GoldCircle.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.save();
  ctx.translate(150, 150);

  // smaller circle
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  
  //distance of the smaller ciricle compared to the larger one.
  ctx.translate(105, 0);

  ctx.drawImage(darkGrayCircle, -17, -17, 30, 30);

  ctx.restore();

  // image of the center circle and postitioning
  ctx.drawImage(goldenCenter, 110, 110, 80, 80);

  window.requestAnimationFrame(draw);
}

init();
