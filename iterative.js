"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let triangles = [];

let mouseX = width / 2;
let mouseY = height / 2;

canvas.addEventListener("mousemove", (event) => {
  let rect = canvas.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
});

//100 of meer driehoeken maken
function createNumTriangles(num) {
  for (let i = 0; i < num; i++) {
    let size = Math.random() * 30 + 10; // Willekeurige grootte tussen 10 en 40
    triangles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: size,
      speed: (Math.random() * 1 + 0.5) * 5, // Snelheid
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

function drawTriangles() {
  triangles.forEach((triangle) => {
    context.beginPath();
    if (triangle.upward) {
      context.moveTo(triangle.x, triangle.y);
      context.lineTo(
        triangle.x - triangle.size / 2,
        triangle.y + triangle.size
      );
      context.lineTo(
        triangle.x + triangle.size / 2,
        triangle.y + triangle.size
      );
    } else {
      context.moveTo(triangle.x, triangle.y);
      context.lineTo(
        triangle.x - triangle.size / 2,
        triangle.y - triangle.size
      );
      context.lineTo(
        triangle.x + triangle.size / 2,
        triangle.y - triangle.size
      );
    }
    context.closePath();
    context.fillStyle = triangle.color;
    context.fill();
  });
}

//Update triangles gebaseerd op positie van muis

function updateTriangles() {
  let middleStartX = width / 2 - 25; //Begin zone in het midden waarbij niets beweegt (horizontaal)
  let middleEndX = width / 2 + 25; //Einde van zone
  let middleStartY = height / 2 - 25; //Begin zone in het midden waarbij niets beweegt (verticaal)
  let middleEndY = height / 2 + 25; //Einde van zone

  let directionX = mouseX < middleStartX ? -1 : mouseX > middleEndX ? 1 : 0;
  let directionY = mouseY < middleStartY ? -1 : mouseY > middleEndY ? 1 : 0;

  triangles.forEach((triangle) => {
    //update de positie van elke driehoek gebaseerd op richting en snelheid
    triangle.x += directionX * triangle.speed;
    triangle.y += directionY * triangle.speed;

    if (triangle.x < -triangle.size) {
      //keert rechts terug wanneer het links van het scherm gaat
      triangle.x = width + triangle.size;
    }
    if (triangle.x > width + triangle.size) {
      //keert links terug wanneer het rechts van het scherm gaat
      triangle.x = -triangle.size;
    }
    if (triangle.y < -triangle.size) {
      //keert beneden terug wanneer het boven van het scherm gaat
      triangle.y = height + triangle.size;
    }
    if (triangle.y > height + triangle.size) {
      //keert boven terug wanneer het beneden van het scherm gaat
      triangle.y = -triangle.size;
    }
  });
}

function drawBackground() {
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
}

function signature() {
  let right = width - 500;
  let bottom = height - 500;

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

function animate() {
  context.clearRect(0, 0, width, height);
  drawBackground();
  updateTriangles();
  drawTriangles();
  signature();
  requestAnimationFrame(animate);
}

createNumTriangles(300);
animate();
