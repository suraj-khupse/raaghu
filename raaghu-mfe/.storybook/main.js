module.exports = {
  "stories": [
    "../projects/**/*.stories.@(md|mdx)",
    "../projects/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    'storybook-addon-themes',
    "@storybook/addon-actions"
    
  ],
  "framework": "@storybook/angular",
  "staticDirs": [{"from": './assets', "to": '/assets'}],
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "features": {
    "babelModeV7": true,
    "storyStoreV7": true,
    "previewMdx2": true
  }
}