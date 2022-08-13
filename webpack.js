const path = require("path");

module.exports = {
    entry: "./source/TypeScript/index.ts",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public", "js")
    }
}
