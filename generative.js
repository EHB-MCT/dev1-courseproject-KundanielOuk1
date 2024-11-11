"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBackground();
//drawLineOfTriangles();
drawMultipleLinesOfTriangles();

function drawBackground() {
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
}

function drawTriangle(x, y, size) {
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x - size / 2, y + size);
  context.lineTo(x + size / 2, y + size);
  context.closePath();

  context.fillStyle = "blue";
  context.fill();
  context.strokeStyle = "black";
  context.stroke();
}

function drawMultipleLinesOfTriangles() {
  let canvasWidth = canvas.width;
  let canvasHeight = canvas.height;

  let margin = 0.05 * canvasWidth; // 5% van canvas width als margiin gebruiken
  let size = 0.1 * canvasWidth; //Driehoek is even groot als 10% van canvas width
  let spacingX = size; //Driehoeken raken elkaar horizontaal aan
  let spacingY = size; //Driehoeken raken elkaar verticaal aan
  let numLines = 5; // Aantal lijnen
  let trianglesPerLine = Math.floor((canvasWidth - 2 * margin) / spacingX); //aantal driehoeken per lijn

  for (let line = 0; line < numLines; line++) {
    let startY = margin + line * spacingY; //y positie van elke lijn
    for (let i = 0; i < trianglesPerLine; i++) {
      //tekent een lijn met driehoeken op huidige y positie
      let x = margin + i * spacingX; //x positie van elke driehoek
      drawTriangle(x, startY, size); //tekent driehoek
    }
  }
}

// function drawLineOfTriangles() {
//   let canvasWidth = canvas.width;
//   let canvasHeight = canvas.height;

//   let margin = 0.05 * canvasWidth;
//   let size = 0.1 * canvasWidth;
//   let spacing = 0.15 * canvasWidth;
//   let numberOfTriangles = Math.floor((canvasWidth - 2 * margin) / spacing);

//   let startY = canvasHeight * 0.5;

//   for (let i = 0; i < numberOfTriangles; i++) {
//     let x = margin + i * spacing;
//     drawTriangle(x, startY, size);
//   }
// }

//Nieuwe idee: verschillende driehoekenpatronen
