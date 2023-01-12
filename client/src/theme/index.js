import * as colorsLight from "./colors.light";
import * as colorsDark from "./colors.dark";
import { Appearance } from "react-native";

const colors = Appearance.getColorScheme() === "dark" ? colorsDark : colorsLight;

export { colors };