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

  let randomShiftToRight = Math.random() > 0.5; //Elke keer je de browser refresht zullen de even of oneven lijnen naar rechts gaan en de kans is 50% dat de even of oneven lijnen dat doen

  for (let line = 0; line < numLines; line++) {
    let startY = margin + line * spacingY; //y positie van elke lijn
    let random =
      (line % 2 === 0 && randomShiftToRight) || //Dit kan enkel true zijn als de lijn even is en als de randomShiftToTheRight true is OF
      (line % 2 !== 0 && !randomShiftToRight) //als de lijn oneven is en de randomShiftToTheRight false is
        ? size / 2
        : 0; //als de conditie voor ? true is dan zullen we de waarde van random delen door 2, als het false is dan is de waarde van random 0 -> er gebeurt niets
    for (let i = 0; i < trianglesPerLine; i++) {
      //tekent een lijn met driehoeken op huidige y positie
      let x = margin + i * spacingX + random; //x positie van elke driehoek + waarde random
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
