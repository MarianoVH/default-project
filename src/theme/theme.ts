import { breakpoints } from "./breakpoints";
import { Colors, colors } from "./colors";
import { Spacing, spacing } from "./spacing";
import { typography } from "./typography";

interface Theme {
  breakpoints: typeof breakpoints;
  colors: Colors;
  spacing: Spacing;
  typography: typeof typography;
}

export const theme: Theme = {
  breakpoints,
  colors,
  spacing,
  typography,
};
