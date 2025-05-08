import store from "../stores/MainStore";

export const undo = () => {
  if (store.historyManager.canUndo) {
    store.historyManager.undo();
  }
};
export const redo = () => {
  if (store.historyManager.canRedo) {
    store.historyManager.redo();
  }
};
export const clearHistory = () => {
  store.removeAllBoxes();
  localStorage.clear();
  store.historyManager.clear();
};
