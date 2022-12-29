/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {

        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};



// exclusionList is a function that takes an array of regexes and combines
// them with the default exclusions to return a single regex.

