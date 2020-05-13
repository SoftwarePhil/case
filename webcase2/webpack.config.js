const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';

  return { 
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.(s?css)$/,
          use: [
            {
              loader:'style-loader'
            },
            {
              loader:'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }, {
          test: /\.(png|jpe?g|gif|woff)$/i,
          use: [
            'file-loader',
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        chunkFileName: 'styles.css'
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      port: 3000,
      proxy: {
        '/case_prod': {
          target: 'https://pzj9cridzd.execute-api.us-east-1.amazonaws.com',
          secure: false,
          changeOrigin: true
        }
      }
    }
  }
}

