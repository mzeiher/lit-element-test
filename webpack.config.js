const pkg = require('./package.json');
const path = require('path');
const glob = require('glob');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');

module.exports = (env) => {

  const webpackUMD = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    output: {
      library: pkg.name,
      libraryTarget: 'umd',
      filename: 'umd.js',
      umdNamedDefine: true,
      path: path.resolve(__dirname)
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          test: /(\.tsx?|\.js)$/,
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              '@babel/preset-typescript',
              ['@babel/preset-env', {
                targets: {
                  "chrome": "70",
                  "ie": 11
                },
                modules: false,
              }]
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", {
                legacy: false,
                decoratorsBeforeExport: true
              }],
              ["@babel/plugin-proposal-class-properties", {
                "loose": true
              }],
              ["@babel/plugin-transform-runtime",
                {
                  "corejs": false,
                  "helpers": false,
                  "regenerator": true,
                  "useESModules": true
                }
              ],
              ["@babel/plugin-proposal-optional-chaining"]
            ]
          }
        }
      ]
    }
  }

  const webpackUMDmin = merge(webpackUMD, {
    mode: 'production',
    devtool: 'none',
    output: {
      filename: "umd.min.js"
    },
    plugins: [
      new BundleAnalyzer({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: path.resolve('reports', 'webpack', 'report.html'),
        statsFilename: path.resolve('reports', 'webpack', 'stats.json'),
        generateStatsFile: true
      })
    ]
  });

  const devServer = merge(webpackUMD, {
    devServer: {
      contentBase: path.join(__dirname),
      compress: true,
      port: 9000
    }
  })

  const webpackIstanbul = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: glob.sync('./src/**/*.spec.ts'),
    output: {
      library: pkg.name,
      libraryTarget: 'umd',
      filename: 'test.js',
      umdNamedDefine: true,
      path: path.resolve(__dirname, 'test')
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          test: /(\.tsx?|\.js)$/,
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              '@babel/preset-typescript',
              ['@babel/preset-env', {
                targets: {
                  "chrome": "70",
                  "ie": 11
                },
                modules: false,
              }]
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", {
                legacy: false,
                decoratorsBeforeExport: true
              }],
              ["@babel/plugin-proposal-class-properties", {
                "loose": true
              }],
              ["@babel/plugin-transform-runtime",
                {
                  "corejs": false,
                  "helpers": false,
                  "regenerator": true,
                  "useESModules": true
                }
              ],
              ["@babel/plugin-proposal-optional-chaining"],
              ['babel-plugin-istanbul']
            ]
          }
        }
      ]
    }
  }

  if(env && env.DEV) {
    return devServer;
  } else {
    return [webpackUMD, webpackUMDmin];
  }
}
