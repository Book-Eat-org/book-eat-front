import UIProvider from "../src/Provider";

const ThemeDecorator = (storyFn) => <UIProvider>{storyFn()}</UIProvider>;

export default ThemeDecorator;
