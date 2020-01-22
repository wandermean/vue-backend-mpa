const { entries } = require("./utils/arguments.js");
const proxy = require("./proxy.json");

const pagesObj = entries();

module.exports = {
  lintOnSave: false,
  publicPath: "./",
  devServer: {
    disableHostCheck: true
  },
  pages: pagesObj,
  devServer: {
    ...proxy
  }
};
