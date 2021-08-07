module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathSuffix: './src'
          },
          {
            rootPathPrefix: '~screens',
            rootPathSuffix: './src/screens/index'
          },
          {
            rootPathPrefix: '~assets',
            rootPathSuffix: './src/assets/index'
          },
          {
            rootPathPrefix: '~request/*',
            rootPathSuffix: './src/request/*'
          },
          {
            rootPathPrefix: '~components',
            rootPathSuffix: './src/components/index'
          },
          {
            rootPathPrefix: '~configs',
            rootPathSuffix: './src/configs/index'
          },
          {
            rootPathPrefix: '~utils/*',
            rootPathSuffix: './src/utils/*'
          },
          {
            rootPathPrefix: '~redux',
            rootPathSuffix: './src/redux/index'
          },
          {
            rootPathPrefix: '~theme',
            rootPathSuffix: './src/theme/index'
          }
        ]
      }
    ]
  ]
};
