import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import { Module, Rule } from 'webpack';
import { isProd, ROOT } from './utils';

const tsLoader: Rule = {
  test: /\.tsx?$/,
  use: 'ts-loader'
};

const tsLoaderDev: Rule = {
  test: /\.tsx?$/,
  loaders: ['react-hot-loader/webpack', 'ts-loader']
};

const scssLoader: Rule = {
  test: /\.s?css$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[local]--[hash:base64:5]',
        minimize: true,
        camelCase: false,
        importLoaders: 2
      }
    },
    {
      loader: 'postcss-loader'
    },
    {
      loader: 'sass-loader'
    }
  ]
};

const scssLoaderDev: Rule = {
  test: /\.s?css$/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[local]--[hash:base64:5]',
        minimize: true,
        camelCase: false,
        importLoaders: 2
      }
    },
    {
      loader: 'postcss-loader'
    },
    {
      loader: 'sass-loader'
    }
  ]
};

let webpackmodule: Module;

if (isProd) {
  webpackmodule = {
    rules: [tsLoader, scssLoader]
  };
} else {
  webpackmodule = {
    rules: [tsLoaderDev, scssLoaderDev]
  };
}

export default webpackmodule;
