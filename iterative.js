"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let canvasWidth = context.canvas.width;
let canvasHeight = context.canvas.height;

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
