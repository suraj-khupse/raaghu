export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  toolbar: {
    icon: 'circlehollow',
    // Array of plain string values or MenuItem shape (see below)
    items: ['light', 'dark'],
    // Property that specifies if the name of the item will be displayed
    showName: true
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: true
  },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: 'theme-light', color: '#F8F8F8', default: true },
      { name: 'dark', class: 'theme-dark', color: '#333333' }
    ]
  }
};
