const path = require('path')
const CURRENT_WORKING_DIR = process.cwd()
const nodeExternals = require('webpack-node-externals')

const config = {
    name: "server",
    entry: [path.join(CURRENT_WORKING_DIR, './server/server.js')],
    target: "node",
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: "server.generated.js",
        publicPath: '/dist/',
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    
    module: {
        rules: [
            {
                test: /\.(js|tsx|ts|jsx)?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png|pdf)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader",],
              },
        ]
    }
}
module.exports = config
