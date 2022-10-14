import { setCompodocJson } from "@storybook/addon-docs/angular";
// import docJson from "../documentation.json";
// setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // options: {
  //   storySort: (a, b) =>
  //     a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  // },
  toolbar: {
    icon: 'circlehollow',
    // Array of plain string values or MenuItem shape (see below)
    items: ['light', 'dark'],
    // Property that specifies if the name of the item will be displayed
    showName: true,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: true
  }
}