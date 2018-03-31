import { Options } from 'webpack';
import { isProd, ROOT } from './utils';

const optimization: Options.Optimization = {
  minimize: isProd,
  splitChunks: {
    chunks: 'all'
  }
};

export default optimization;
