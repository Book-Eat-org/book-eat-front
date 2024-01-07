import { Preview } from "@storybook/react";
import ThemeDecorator from "./themeDecorator";

const preview: Preview = {
  decorators: [ThemeDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export default preview;
