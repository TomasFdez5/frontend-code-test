import store from "../stores/MainStore";
import BoxModel from "../stores/models/Box";

import uuid from "uuid/v4";
import getRandomColor from "../utils/getRandomColor";

// [ AUX FUNCTIONS ]

const clearMsg = () => {
  const msg = document.getElementById("boxSelectedMsg");
  if (msg) {
    msg.textContent = `No boxes selected`;
  }
};

// [ CREATE BOX ACTION ]

export const addBox = () => {
  const newBox = BoxModel.create({
    id: uuid(),
    color: getRandomColor(),
    left: 0,
    top: 0,
  });

  store.addBox(newBox);
};

// [ SELECT BOXES ACTIONS ]

export const selectBox = (id, event) => {
  if (event.ctrlKey || event.metaKey) {
    store.selectMultipleBoxes(id);
  } else {
    store.selectOneBox(id);
  }
  const msg = document.getElementById("boxSelectedMsg");
  if (msg) {
    const selectedBoxes = store.boxes.filter((box) => box.selected);
    msg.textContent = `Selected boxes: ${selectedBoxes.map((box) => box.id).join(", ")}`;
  }
};

export const deselectAllBoxes = () => {
  store.deselectAllBoxes();
  clearMsg();
};

// [ REMOVE BOXES ACTIONS ]

export const removeAllBoxes = () => {
  store.removeAllBoxes();
  clearMsg();
};

export const removeAllSelectedBoxes = () => {
  if (store.selectedBoxesCount > 0) {
    store.removeAllSelectedBoxes();
    clearMsg();
  }
};

// [ BOXES MUTATIONS ACTIONS ]

export const changeAllSelectedBoxesColor = (event) => {
  store.changeAllSelectedBoxesColor(event.target.value);
};

export const changeBoxPosition = (boxId, left, top) => {
  store.changeBoxPosition(boxId, left, top);
};
export const changeAllSelectedBoxesPosition = (left, top) => {
  store.changeAllSelectedBoxesPosition(left, top);
};
