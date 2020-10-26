//webpack: p cada tipo de arquivo (.js, .css, .png) fará uma conversao específica. Automatiza esse processo

const path = require('path'); //convoca a lib path do node js

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), //aqui determinamos qual e o arquivo de entrada da nossa app a ser convertido
  output: { //aqui determinamos qual arquivo vai ser gerado depois de ser convertido
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }
    ]
  }
};
