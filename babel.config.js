module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: [
    //   // Needs to be listed last
    //   'react-native-reanimated/plugin',
    // ],
  };
};
