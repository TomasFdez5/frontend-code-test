import { types } from "mobx-state-tree";

const BoxModel = types
  .model("Box", {
    id: types.identifier,
    width: 200,
    height: 100,
    color: "#FFF000",
    left: 200,
    top: 100,
    selected: false,
  })
  .views((self) => ({}))
  .actions((self) => ({
    select() {
      if (!self.selected) {
        self.selected = true;
      }
    },
    deselect() {
      if (self.selected) {
        self.selected = false;
      }
    },
    setColor(color) {
      self.color = color;
    },
    setPosition(left, top) {
      self.left += left;
      self.top += top;
    },
  }));

export default BoxModel;
