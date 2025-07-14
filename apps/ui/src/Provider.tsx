import { css, Global, ThemeProvider } from "@emotion/react";
import { FC, ReactNode, memo } from "react";
import "./assets/fonts/stylesheet.css";
import { YMaps } from "@pbe/react-yandex-maps";
import { theme } from "$theme";
import {Toaster} from "react-hot-toast";

interface IProps {
  children: ReactNode;
}

const styles = css`
  * {
    position: relative;
    box-sizing: border-box;
  }
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #595959;
    border-radius: 4px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100dvh;
    font-family: Inter, sans-serif;
  }
  #root {
    height: 100%;
    --color-primary: #bae48f;
    --color-primary-light: #dbf5c0;
    --color-primary-dark: #87b15c;
    --color-black: #282828;
    --color-white: #ffffff;
    --color-gray: #d9d9d9;
    --color-gray-light: #ebebeb;
    --color-red: #b60000;
    --color-blue: #0113af;
  }
`;

const UIProvider: FC<IProps> = ({ children }) => {
  return (
    <YMaps
      query={{
        lang: "ru_RU",
        apikey: "8967a948-97db-411f-9d9c-9d385338e42f",
        suggest_apikey: "6501403a-310f-415d-81b6-d420fcf17c0f",
        load: "package.full",
      }}
    >
      <ThemeProvider theme={theme}>
        <Global styles={styles} />
        {children}
          <Toaster />
      </ThemeProvider>
    </YMaps>
  );
};

export default memo(UIProvider);
