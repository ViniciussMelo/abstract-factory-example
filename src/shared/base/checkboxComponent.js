import NotImplementedException from "../exceptions/notImplementedException";

export default class CheckboxComponent {
  check() {
    throw new NotImplementedException(this.check.name);
  }
}