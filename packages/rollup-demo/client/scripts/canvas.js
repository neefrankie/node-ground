let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect(10, 10, 100, 50);

context.strokeStyle = "blue";
context.strokeRect(5, 120, 50, 50);
context.lineWidth = 5;
context.strokeRect(135, 120, 50, 50);

context.beginPath();
for (let y = 10; y < 100; y += 10) {
  context.moveTo(10, y);
  context.lineTo(90, y);
}
context.stroke();

context.beginPath();
context.moveTo(50, 210);
context.lineTo(10, 270);
context.lineTo(90, 270);
context.fill();

context.beginPath();
context.moveTo(10, 390);
context.quadraticCurveTo(60, 210, 390, 390);
// context.lineTo(60, 10);
// context.closePath();
context.stroke();

context.beginPath();
context.arc(50, 50, 40, 0, 7);
context.arc(150, 50, 40, 0, 0.5 * Math.PI);
context.stroke();

const results = [
  {name: "Satisfied", count: 1043, color: "lightblue"},
  {name: "Neutral", count: 563, color: "lightgreen"},
  {name: "Unsatisfied", count: 510, color: "pink"},
  {name: "No comment", count: 175, color: "silver"},
];
let total = results.reduce((sum, {count}) => sum + count, 0);
let currentAngle = -0.5 * Math.PI;
for (let result of results) {
  let sliceAngle = (result.count / total) * 2 * Math.PI;
  context.beginPath();

  context.arc(100, 500, 100, currentAngle, currentAngle + sliceAngle);

  currentAngle += sliceAngle;

  context.lineTo(100, 500);
  context.fillStyle = result.color;
  context.fill();
}

context.font = '28px Georgia';
context.fillStyle = "fuchsia";
context.fillText("I can draw text, too!", 10, 500);

let img = document.createElement("img");
img.src = 'img/hat.png';
img.addEventListener('load', () => {
  for (let x = 10; x < 20; x += 100) {
    context.drawImage(img, x, 600);
  }
});

context.scale(3, .5);
context.beginPath();
context.arc(50, 750, 40, 0, 7);
context.lineWith = 3;
context.stroke();
