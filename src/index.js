import { AppRegistry } from "react-native";
import App from "./App";
import Intro from "./Intro";

AppRegistry.registerComponent("Intro", () => Intro);

AppRegistry.runApplication("Intro", {
  rootTag: document.getElementById("root")
});
