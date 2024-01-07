const spaces = new Array(10).fill(0).map((_, index) => index * 4);

export const theme = {
  colors: {
    primary: "#BAE48F",
    primaryLight: "#DBF5C0",
    primaryDark: "#87B15C",
    black: "#282828",
    white: "#FFFFFF",
    gray: "#D9D9D9",
    grayLight: "#EBEBEB",
    red: "#B60000",
    blue: "#0113AF",
  },
  spaces,
};

export type ITheme = typeof theme;
