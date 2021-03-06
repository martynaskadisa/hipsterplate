import * as AssetsPlugin from 'assets-webpack-plugin';
import { CheckerPlugin } from 'awesome-typescript-loader';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { isProd } from './utils';

let plugins: any[];

if (isProd) {
  plugins = [
    new webpack.DefinePlugin({
      __PROD__: JSON.stringify(true),
      __DEVTOOLS__: JSON.stringify(
        process.env.IS_REDUX_DEVTOOLS_ENABLED === 'true'
      ),
      __CLIENT__: JSON.stringify(true),
      __IS_SENTRY_CLIENT_ENABLED__: JSON.stringify(
        process.env.IS_SENTRY_CLIENT_ENABLED === 'true'
      ),
      __SENTRY_CLIENT_DSN__: JSON.stringify(process.env.SENTRY_DSN_CLIENT),
      __IS_REDUX_LOGGING_MIDDLEWARE_ENABLED__: JSON.stringify(
        process.env.IS_SENTRY_SERVER_ENABLED
      )
    }),
    new AssetsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]__[hash].css',
      chunkFilename: '[id]__[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/client/index.ejs',
      minify: {
        collapseWhitespace: true
      }
    })
  ];
} else {
  plugins = [
    new webpack.DefinePlugin({
      __PROD__: JSON.stringify(false),
      __DEVTOOLS__: JSON.stringify(
        process.env.IS_REDUX_DEVTOOLS_ENABLED === 'true'
      ),
      __CLIENT__: JSON.stringify(true),
      __IS_SENTRY_CLIENT_ENABLED__: JSON.stringify(
        process.env.IS_SENTRY_CLIENT_ENABLED === 'true'
      ),
      __SENTRY_CLIENT_DSN__: JSON.stringify(process.env.SENTRY_DSN_CLIENT),
      __IS_REDUX_LOGGING_MIDDLEWARE_ENABLED__: JSON.stringify(
        process.env.IS_SENTRY_SERVER_ENABLED
      )
    }),
    new AssetsPlugin(),
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/client/index.ejs'
    })
  ];
}

if (JSON.parse(process.env.IS_WEBPACK_STATS_ENABLED)) {
  plugins.push(new BundleAnalyzerPlugin());
}

export default plugins;
