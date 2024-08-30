let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // invoke any drawing functions inside of setup.
  // functions should all go between "createCanvas()" and "drawGrid()"
  draw5Circles();
  draw5RedSquares();
  draw5CirclesWhile();
  draw5CirclesFor();
  drawNCircles(6);
  drawNCirclesFlexible(30, 25, 400, 0);
  drawNShapesFlexible(30, 25, 600, 0, 'circle');
  drawNShapesFlexible(30, 30, 500, 0, 'not circle');
  drawNShapesDirectionFlexible(30, 30, 100, 700, 'circle', 'row');
  drawNShapesDirectionFlexible(30, 30, 100, 800, 'not circle', 'row');
  drawNShapesDirectionFlexible(30, 30, 700, 100, 'circle', 'not row');
  drawNShapesDirectionFlexible(
    30,
    30,
    800,
    100,
    'not circle',
    'not row'
  );
  algorithmicArt(5000);
  drawGrid(canvasWidth, canvasHeight);
}

// my first function
function draw5Circles() {
  noFill();
  // fill('red');
  circle(100, 200, 50); // centerX, centerY, radius
  circle(100, 250, 50);
  circle(100, 300, 50);
  circle(100, 350, 50);
  circle(100, 400, 50);
}

function draw5CirclesWhile() {
  let count = 0;
  fill('blue');
  while (count < 5) {
    circle(200, 200 + count * 50, 50);
    count++;
  }
}

function draw5CirclesFor() {
  fill('green');
  for (let i = 0; i < 5; i++) {
    circle(100 + i * 50, 100, 50);
  }
}

function drawNCircles(n) {
  fill('purple');
  for (let i = 0; i < n; i++) {
    circle(100 + i * 50, 500, 50);
  }
}

function drawNCirclesFlexible(n, size, x, y) {
  fill('grey');
  for (let i = 0; i < n; i++) {
    circle(x, y + i * size, size);
  }
}

function drawNShapesFlexible(n, size, x, y, shape) {
  fill('yellow');
  if (shape === 'circle') {
    for (let i = 0; i < n; i++) {
      circle(x, y + i * size, size);
    }
  } else {
    for (let i = 0; i < n; i++) {
      square(x, y + i * size, size);
    }
  }
}

function drawNShapesDirectionFlexible(
  n,
  size,
  x,
  y,
  shape,
  direction
) {
  fill('orange');
  if (shape === 'circle') {
    if (direction === 'row') {
      for (let i = 0; i < n; i++) {
        circle(x + i * size, y, size);
      }
    } else {
      for (let i = 0; i < n; i++) {
        circle(x, y + i * size, size);
      }
    }
  } else {
    if (direction === 'row') {
      for (let i = 0; i < n; i++) {
        square(x + i * size, y, size);
      }
    } else {
      for (let i = 0; i < n; i++) {
        square(x, y + i * size, size);
      }
    }
  }
}

function algorithmicArt(n) {
  for (let i = 0; i < n; i++) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(
      16
    );
    fill('#' + randomColor); // From https://css-tricks.com/snippets/javascript/random-hex-color/
    let shape = randomNumber();
    if (shape % 2 === 1) {
      shape = 'circle';
    } else {
      shape = 'not circle';
    }
    let x = randomNumber();
    let y = randomNumber();
    let size = randomNumber() / 10;
    if (shape === 'circle') {
      circle(x, y, size);
    } else {
      square(x, y, size);
    }
  }
}

function randomNumber() {
  return Math.round(Math.random() * 1000);
}

function draw5RedSquares() {
  fill('red');
  square(320, 200, 50); // topLeftX, topLeftY, width
  square(320, 250, 50);
  square(320, 300, 50);
  square(320, 350, 50);
  square(320, 400, 50);
}
