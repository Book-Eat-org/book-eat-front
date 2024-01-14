import "styled-system";

declare module "styled-system" {
  export interface Theme {
    color: {
      primary: string;
      positive: string;
      negative: string;
    };
  }
}

// You are also able to use a 3rd party theme this way:
import "@emotion/react";
import { Theme as LibTheme } from "styled-system";

declare module "@emotion/react" {
  export interface Theme extends LibTheme {
    color: {
      primary: string;
      positive: string;
      negative: string;
    };
  }
}
