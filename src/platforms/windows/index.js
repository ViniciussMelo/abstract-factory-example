import GUIFactory from "../../shared/base/GUIFactory";
import WindowsCheckbox from "./windowsCheckbox";
import WindowsButton from "./windowsButton";

export default class WindowsGUIFactory extends GUIFactory {
  createButton() {
    return new WindowsButton();
  }

  createCheckbox() {
    return new WindowsCheckbox();
  }
}