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
        const boxToSelect = self.boxes.find((box) => box.id === boxId);
        if (boxToSelect.selected) {
          boxToSelect.deselect();
        } else {
          boxToSelect.select();
        }
      },
      deselectAllBoxes() {
        self.boxes.forEach((box) => box.deselect());
      },
      removeSelectedBoxes() {
        self.boxes = self.boxes.filter((box) => !box.selected);
      },
      changeSelectedBoxesColor(color) {
        self.boxes.filter((box) => box.selected).forEach((box) => box.setColor(color));
      },
      changeSelectedBoxesPosition(left, top) {
        self.boxes.filter((box) => box.selected).forEach((box) => box.setPosition(left, top));
      },
    };
  })
  .views((self) => ({
    get selectedBoxesCount() {
      return self.boxes.filter((box) => box.selected).length;
    },
  }));

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
