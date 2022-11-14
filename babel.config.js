module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          box: "./src",
          styles: "./src/app/styles",
          types: "./src/shared/types",
          assets: "./src/assets",
        },
      },
    ],
  ],
};
