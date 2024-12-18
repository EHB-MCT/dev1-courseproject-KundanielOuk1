"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let canvasWidth = context.canvas.width;
let canvasHeight = context.canvas.height;

let triangles = [];

let mouseX = width / 2;
let mouseY = height / 2;

canvas.addEventListener("mousemove", (event) => {
  let rect = canvas.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
});

createNumTriangles();
triangles();
animate();

//100 driehoeken maken
function createNumTriangles() {
  for (let i = 0; i < 100; i++) {
    let size = Math.random() * 30 + 10; // Willekeurige grootte tussen 10 en 40
    triangles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: size,
      speed: (Math.random() * 1 + 0.5) * 0.05, // Snelheid
      upward: Math.random() > 0.5, // willekeurig omhoog of omlaag driehoek
      color: generateRandomColor(Math.random() > 0.5 ? 0 : 250), // Rood of blauwe hue
    });
  }
}

function generateRandomColor(hue) {
  let s = Math.random() * 50 + 50;
  let l = Math.random() * 50 + 50;
  let a = Math.random();
  return `hsla(${hue}, ${s}%, ${l}%, ${a})`;
}
signature();

function signature() {
  let right = canvasWidth - 500;
  let bottom = canvasHeight - 500;

  context.beginPath();
  context.fillStyle = "#f4f4f4";
  context.fillRect(right, bottom, 500, 500);

  context.fillStyle = "#e4848c";
  context.fillRect(right + 40, bottom + 40, 85, 85);
  context.fillRect(right + 210, bottom + 40, 85, 85);
  context.fillRect(right + 380, bottom + 40, 85, 85);
  context.fillRect(right + 40, bottom + 380, 85, 85);
  context.fillRect(right + 210, bottom + 380, 85, 85);
  context.fillRect(right + 380, bottom + 380, 85, 85);
  context.fillRect(right + 40, bottom + 295, 425, 85);
}
