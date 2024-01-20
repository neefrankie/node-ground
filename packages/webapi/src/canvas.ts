export function createCanvas(width: number, height: number) {
  const elem = document.createElement('canvas');
  elem.height = height;
  elem.width = width;

  return elem;
}

function drawText() {
  const canvas = createCanvas(480, 270);
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#D4CACD';
  ctx.fillRect(0, 0, 960, 540);
  
  ctx.fillStyle = '#000000'
  ctx.font = '48px serif';

  ctx.strokeText('p / q', 150, 100);
}

drawText();
