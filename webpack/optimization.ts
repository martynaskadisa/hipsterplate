import { Options } from 'webpack';
import { isProd } from './utils';

const optimization: Options.Optimization = {
  minimize: isProd,
  splitChunks: {
    chunks: 'all'
  }
};

export default optimization;
