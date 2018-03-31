import { Entry } from 'webpack';

let entry: Entry;

if (process.env.NODE_ENV === 'production') {
  entry = {
    app: './src/client/index.tsx'
  };
} else {
  entry = {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      './src/client/index.tsx'
    ]
  };
}

export default entry;
