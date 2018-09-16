const path = require('path');

const CLI_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: {
    businessPage: `${CLI_DIR}/index.jsx`,
    employeePage: `${CLI_DIR}/employeeIndex.jsx`,
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_DIR,
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: CLI_DIR,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
      },
    }],
  },
};
