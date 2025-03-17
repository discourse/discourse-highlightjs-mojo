import { withPluginApi } from "discourse/lib/plugin-api";
import mojo from "../lib/mojo-highlightjs";

export default {
  name: "highlightjs-mojo",
  initialize() {
    withPluginApi((api) => {
      api.registerHighlightJSLanguage("mojo", mojo);
    });
  },
};
