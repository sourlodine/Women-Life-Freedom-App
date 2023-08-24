const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    assert: require.resolve("assert"),
  });
  config.resolve.fallback = fallback;

  // Configure webpack to ignore specific warnings
  config.ignoreWarnings = [/Failed to parse source map/];

  // This is deprecated in webpack 5 but alias false does not seem to work
  config.module.rules.push({
    test: /node_modules[\\\/]https-proxy-agent[\\\/]/,
    use: "null-loader",
  });
  return config;
};
