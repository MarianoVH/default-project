type Size = "xs" | "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
  xs: "320px",
  sm: "768px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};
export const breakpoints = {
  up: (size: Size): string => `@media (min-width: ${sizes[size]})`,
  down: (size: Size): string => `@media (max-width: ${sizes[size]})`,
  between: (from: Size, to: Size): string =>
    `@media (min-width: ${sizes[from]}) and (max-width: ${sizes[to]})`,
};
