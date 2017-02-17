/**
 * Created by superman on 17/2/17.
 */
var path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    }
}