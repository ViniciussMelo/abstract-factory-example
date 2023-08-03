import { createUI } from "./ui";

; (async function main() {
  const isWindows = process.platform === "win32";
  const platform = isWindows ? 'windows' : 'macOS';

  const { default: DefaultGUIFactory } = await import(`./platforms/${platform}/index.js`);
  const components = createUI(new DefaultGUIFactory());

  components.button.click();
  components.checkbox.check();
})()