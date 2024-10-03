let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

signature();

function signature() {
  context.beginPath();
  context.fillStyle = "#f4f4f4";
  context.fillRect(0, 0, 500, 500);

  context.fillStyle = "#e4848c";
  context.fillRect(40, 40, 85, 85);

  context.fillStyle = "#e4848c";
  context.fillRect(210, 40, 85, 85);

  context.fillStyle = "#e4848c";
  context.fillRect(380, 40, 85, 85);

  context.fillStyle = "#e4848c";
  context.fillRect(40, 380, 85, 85);

  context.fillStyle = "#e4848c";
  context.fillRect(210, 380, 85, 85);

  context.fillStyle = "#e4848c";
  context.fillRect(380, 380, 85, 85);

  context.fillStyle = "#e4848c";
  context.fillRect(40, 295, 425, 85);
}
