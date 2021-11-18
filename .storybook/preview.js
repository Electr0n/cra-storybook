export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { "name": "light", "value": "#F8F8F8" },
      { "name": "dark", "value": "#333333" },
      { "name": "red", "value": "#DB5461" },
      { "name": "yellow", "value": "#F4D35E" }
    ]
  }
}
