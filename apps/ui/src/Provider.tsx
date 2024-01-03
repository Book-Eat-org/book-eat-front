import { css, Global, ThemeProvider } from "@emotion/react";
import { FC, ReactNode, memo } from "react";
import "./assets/fonts/stylesheet.css";
import { YMaps } from "@pbe/react-yandex-maps";

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

  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  *::-webkit-scrollbar-thumb {
    background-color: #595959;
    border-radius: 4px;
  }
  a {
    text-decoration: none;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Inter, sans-serif;
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
      <ThemeProvider theme={{}}>
        <Global styles={styles} />
        {children}
      </ThemeProvider>
    </YMaps>
  );
};

export default memo(UIProvider);
