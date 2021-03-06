
module.exports = {
    entry: __dirname + '/client/src',
    
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
              }
          }
        },
        {
          test: /\.css$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            }
          ]
        }
      ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/client/dist'
      }
  };