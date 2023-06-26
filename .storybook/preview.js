import "../src/index.css";
import { initialize, mswDecorator } from 'msw-storybook-addon';
/** @type { import('@storybook/react').Preview } */
initialize()

const preview = {
  decorators: [mswDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
