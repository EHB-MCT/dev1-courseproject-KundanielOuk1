"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBackground();

function drawBackground() {
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
}
