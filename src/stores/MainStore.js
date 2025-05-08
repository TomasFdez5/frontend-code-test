import { applySnapshot, onSnapshot, types } from "mobx-state-tree";
import uuid from "uuid/v4";
import BoxModel from "./models/Box";
import getRandomColor from "../utils/getRandomColor";
import { UndoManager } from "mst-middlewares";

const STORAGE_KEY = "main-store";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel),
    historyManager: types.optional(UndoManager, {}),
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

      saveToLocalStorage(snapshot) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
      },
      loadLocalStorage() {
        const rawSnapshot = localStorage.getItem(STORAGE_KEY);
        if (!rawSnapshot) return null;
        applySnapshot(self, JSON.parse(rawSnapshot));
      },
    };
  })
  .views((self) => ({
    get selectedBoxesCount() {
      return self.boxes.filter((box) => box.selected).length;
    },
  }));

const store = MainStore.create();

store.loadLocalStorage();

if (store.boxes.length === 0) {
  const box1 = BoxModel.create({
    id: uuid(),
    color: getRandomColor(),
    left: 0,
    top: 0,
  });

  store.addBox(box1);
}

// Observe store changes
onSnapshot(store, (snapshot) => {
  console.log(snapshot);
  store.saveToLocalStorage(snapshot);
});

export default store;
