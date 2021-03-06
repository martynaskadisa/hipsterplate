import * as dotenv from 'dotenv';

dotenv.config();

import * as webpack from 'webpack';
import entry from './entry';
import module from './module';
import optimization from './optimization';
import output from './output';
import plugins from './plugins';
import resolve from './resolve';
import { isProd, ROOT } from './utils';

const config: webpack.Configuration = {
  mode: isProd ? 'production' : 'development',
  context: ROOT,
  entry,
  output,
  optimization,
  module,
  plugins,
  resolve,
  target: 'web',
  devtool: isProd ? 'hidden-source-map' : 'cheap-module-eval-source-map'
};

export default config;
