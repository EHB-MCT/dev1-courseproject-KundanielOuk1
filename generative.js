"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

const cx = 200;
const cy = 100;

let width = context.canvas.width;
let height = context.canvas.height;

//drawBackground();
drawTriangle();

function drawBackground() {
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
}

function drawTriangle() {
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.lineTo(200, 300);
  context.closePath();

  context.fillStyle = "blue";
  context.fill();
  context.strokeStyle = "black";
  context.stroke();
}

//bovenste helft hexagon patroon en onderste helft onderbroken rechte lijnen
