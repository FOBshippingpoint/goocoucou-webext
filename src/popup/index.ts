import browser from "webextension-polyfill";
import { translate } from "../utils/translate";

translate();

document.getElementById("options").addEventListener("click", () => {
  browser.runtime.openOptionsPage();
});
