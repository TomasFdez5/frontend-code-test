import store from "../stores/MainStore";
import BoxModel from "../stores/models/Box";

import uuid from "uuid/v4";
import getRandomColor from "../utils/getRandomColor";
import { getRandomPosition } from "../utils/getRandomPosition";

const BOX_WIDTH = 200;
const BOX_HEIGHT = 100;
const GRID_COLUMNS = 5;
const BOX_MARGIN = 50;
const PARENT_WIDTH = 1200;
const PARENT_HEIGHT = 675;

export const addBox = () => {
  const index = store.boxes.length;

  const column = index % GRID_COLUMNS;
  const row = Math.floor(index / GRID_COLUMNS);

  let left = column * (BOX_WIDTH + BOX_MARGIN);
  let top = row * (BOX_HEIGHT + BOX_MARGIN);

  if (left + BOX_WIDTH <= PARENT_WIDTH && top + BOX_HEIGHT <= PARENT_HEIGHT) {
    // Keep safe area
    left = Math.min(left, PARENT_WIDTH - BOX_WIDTH);
    top = Math.min(top, PARENT_HEIGHT - BOX_HEIGHT);
  } else {
    // Somewhere random
    const randomPosition = getRandomPosition(BOX_WIDTH, BOX_HEIGHT, PARENT_WIDTH, PARENT_HEIGHT);
    left = randomPosition.left;
    top = randomPosition.top;
  }

  const newBox = BoxModel.create({
    id: uuid(),
    color: getRandomColor(),
    left,
    top,
  });

  store.addBox(newBox);
};

const clearMsg = () => {
  const msg = document.getElementById("boxSelectedMsg");
  if (msg) {
    msg.textContent = `No boxes selected`;
  }
};

export const removeLastBoxAdded = () => {
  store.removeLastBoxAdded();
};

export const removeAllBoxes = () => {
  store.removeAllBoxes();
  clearMsg();
};

export const selectBox = (boxId) => {
  store.selectBox(boxId);
  const msg = document.getElementById("boxSelectedMsg");
  if (msg) {
    msg.textContent = `Box with id ${boxId} selected.`;
  }
};
export const deselectBox = (boxId) => {
  store.deselectBox(boxId);
  clearMsg();
};

export const removeSelectedBox = () => {
  store.removeSelectedBox();
  clearMsg();
};

export const changeSelectedBoxColor = (event) => {
  store.changeSelectedBoxColor(event.target.value);
};

export const changeBoxPosition = (id, top, left) => {
  store.changeBoxPosition(id, top, left);
};
