// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const defautlConfig = getDefaultConfig(__dirname);
defautlConfig.resolver.assetExts.push("cjs");

module.exports = defautlConfig;
