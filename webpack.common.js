module.exports = {
  entry: { main: "./src/index.js" },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"], // for html file in dist
      },
    ],
  },
};
