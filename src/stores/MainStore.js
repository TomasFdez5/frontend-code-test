import { onSnapshot, types } from "mobx-state-tree";
import uuid from "uuid/v4";
import BoxModel from "./models/Box";
import getRandomColor from "../utils/getRandomColor";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel),
  })
  .actions((self) => {
    return {
      addBox(box) {
        self.boxes.push(box);
      },
      removeLastBoxAdded() {
        self.boxes.pop();
      },
      removeAllBoxes() {
        self.boxes.clear();
      },
      selectBox(boxId) {
        store.boxes.forEach((Box) => Box.deselect());
        const boxToSelect = self.boxes.find((box) => box.id === boxId);
        if (boxToSelect) {
          boxToSelect.select();
        }
      },
      deselectBox(boxId) {
        const boxToDeselect = self.boxes.find((box) => box.id === boxId);
        if (boxToDeselect) {
          boxToDeselect.deselect();
        }
      },
      removeSelectedBox() {
        const selectedBoxIndex = self.boxes.findIndex((box) => box.selected === true);
        if (selectedBoxIndex !== -1) {
          store.boxes.splice(selectedBoxIndex, 1);
        }
      },
      changeSelectedBoxColor(color) {
        const selectedBox = self.boxes.find((box) => box.selected);
        if (selectedBox) {
          selectedBox.setColor(color);
        }
      },
      changeBoxPosition(boxId, left, top) {
        const boxToChangePosition = self.boxes.find((box) => box.id === boxId);
        if (boxToChangePosition) {
          boxToChangePosition.setPosition(left, top);
        }
      },
    };
  })
  .views((self) => ({}));

const store = MainStore.create();

const box1 = BoxModel.create({
  id: uuid(),
  color: getRandomColor(),
  left: 0,
  top: 0,
});

store.addBox(box1);

// Observe store changes
onSnapshot(store, (snapshot) => console.log(snapshot));

export default store;
