import NotImplementedException from "../exceptions/notImplementedException";

export default class GUIFactory {
  createButton() {
    throw new NotImplementedException(this.createButton.name);
  }
  createCheckbox() {
    throw new NotImplementedException(this.createButton.name);
  }
}