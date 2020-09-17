const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "production",
  entry: {
    db: "./public/assets/js/db.js",
    index: "./public/assets/js/index.js",
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js"
  },
  mode: "production",
  plugins: [
    new WebpackPwaManifest({
      filename: "manifest.json",
      inject: false,
      fingerprints: false,

      name: "Your Budget App",
      short_name: "BudgetApp",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      start_url: "/",
      display: "standalone",

      icons: [
        {
          src: path.resolve(__dirname, "public/assets/images/icons/icon-512x512.png"),
          size: [72, 96, 128, 144,152, 192, 384, 512],
          destination: path.join("assets", "icons")
        }
      ]
    })
  ]
};
module.exports = config;