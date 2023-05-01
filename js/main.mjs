import Rectangle from './Rectangle.mjs';

const scale = .5;
const dx = 10;
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const a = -100;
const b = 100;

context.translate(canvas.width / 2, canvas.height / 2);
context.scale(1 * scale, -1 * scale);

function f(x) {
  return 1 / x * 1000;
}

let result = 0;

for (let x = a; x <= b; x += dx) {
  const r = new Rectangle(x, 0, dx, f(x));
  r.draw(context);
  result += r.getArea();
}

console.log(result);
