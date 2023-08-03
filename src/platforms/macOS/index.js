import GUIFactory from "../../shared/base/GUIFactory";
import MacOSCheckbox from "./macOSCheckbox";
import MacOSButton from "./macOSButton";

export default class MacOSGUIFactory extends GUIFactory {
  createButton() {
    return new MacOSButton();
  }

  createCheckbox() {
    return new MacOSCheckbox();
  }
}