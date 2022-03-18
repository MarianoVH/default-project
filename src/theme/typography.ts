import { CSSObject } from "styled-components";
import { breakpoints } from "./breakpoints";

export interface Title {
  h1: CSSObject;
  h2: CSSObject;
  h3: CSSObject;
  h4: CSSObject;
  h5: CSSObject;
  h6: CSSObject;
}

const titles: Title = {
  h1: {
    fontSize: "56px",
    lineHeight: "64px",
    [breakpoints.up("md")]: {
      fontSize: "70px",
      lineHeight: "78px",
    },
  },
  h2: {
    fontSize: "48px",
    lineHeight: "56px",
    [breakpoints.up("md")]: {
      fontSize: "56px",
      lineHeight: "64px",
    },
  },
  h3: {
    fontSize: "40px",
    lineHeight: "48px",
    [breakpoints.up("md")]: {
      fontSize: "48px",
      lineHeight: "56px",
    },
  },
  h4: {
    fontSize: "32px",
    lineHeight: "40px",
    [breakpoints.up("md")]: {
      fontSize: "40px",
      lineHeight: "48px",
    },
  },
  h5: {
    fontSize: "24px",
    lineHeight: "32px",
    [breakpoints.up("md")]: {
      fontSize: "32px",
      lineHeight: "40px",
    },
  },
  h6: {
    fontSize: "24px",
    lineHeight: "32px",
  },
};

export interface Body {
  body1: CSSObject;
  body2: CSSObject;
  body3: CSSObject;
  body4: CSSObject;
  body5: CSSObject;
}

const body: Body = {
  body1: {
    fontSize: "18px",
    lineHeight: "24px",
  },
  body2: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  body3: {
    fontSize: "14px",
    lineHeight: "22px",
  },
  body4: {
    fontSize: "12px",
    lineHeight: "22px",
  },
  body5: {
    fontSize: "10px",
    lineHeight: "18px",
  },
};

export const typography = {
  ...body,
  ...titles,
};
