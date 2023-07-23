//@type {import("prettier").Options} */
module.exports = {
  plugins: [
    require("prettier-plugin-svelte"),
    require("prettier-plugin-tailwindcss"),
  ],
  pluginSearchDirs: ["."],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
  // Other prettier options here
};
