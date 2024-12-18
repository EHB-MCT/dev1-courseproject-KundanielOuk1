"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

signature();

function signature() {
  context.beginPath();
  context.fillStyle = "#f4f4f4";
  context.fillRect(0, 0, 500, 500);

  context.fillStyle = "#e4848c";
  context.fillRect(40, 40, 85, 85);

  context.fillRect(210, 40, 85, 85);

  context.fillRect(380, 40, 85, 85);

  context.fillRect(40, 380, 85, 85);

  context.fillRect(210, 380, 85, 85);

  context.fillRect(380, 380, 85, 85);

  context.fillRect(40, 295, 425, 85);
}
