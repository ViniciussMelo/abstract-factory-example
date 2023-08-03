import GUIFactory from "../shared/base/GUIFactory";
import ButtonComponent from "../shared/base/buttonComponent";
import CheckboxComponent from "../shared/base/checkboxComponent";

/**
 * 
 * @param {GUIFactory} factory 
 * @returns {{button: ButtonComponent, checkbox: CheckboxComponent}}
 */
export function createUI(factory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  return { button, checkbox };
}