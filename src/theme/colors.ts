export interface Brand {
  black: string;
  white: string;
}

export interface Colors {
  brand: Brand;
}

export const colors: Colors = {
  brand: {
    black: "#000000",
    white: "#FFFFFF",
  },
};
