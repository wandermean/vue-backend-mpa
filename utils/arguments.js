const glob = require("glob");
const path = require("path");

const setArguments = argument => {
  return argument.original.slice(1)[0].substring(1);
};

const PAGE_PATH = path.resolve(
  __dirname,
  `../src/${setArguments(JSON.parse(process.env.npm_config_argv))}`
);

const entries = () => {
  const entryFiles = glob.sync(PAGE_PATH + "/*/main.js");
  const map = {};
  entryFiles.forEach(filePath => {
    const ary = filePath.split("/");
    const filename = ary[ary.length - 2];
    const pageObj = {
      entry: filePath,
      template: "public/index.html",
      filename: `${filename}.html`,
      chunks: ["chunk-vendors", "chunk-common", `${filename}`]
    };
    map[filename] = pageObj;
  });
  return map;
};

module.exports = {
  entries
};
