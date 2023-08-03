import NotImplementedException from "../exceptions/notImplementedException";

export default class ButtonComponent {
  click() {
    throw new NotImplementedException(this.click.name);
  }
}