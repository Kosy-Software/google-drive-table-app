const path = require("path");
const resolve = (file) => path.join(__dirname, file);
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const fs = require("fs");
const devServerSettings = require("./settings.json").devServer || {};
const sveltePreprocess = require("svelte-preprocess");

const getDevServerSslSettings = () => {
    if (!devServerSettings.ssl) return false;

    const sslSettings = devServerSettings.ssl;
    if (sslSettings.certPath) {
        return {
            cert: fs.readFileSync(resolve(sslSettings.certPath)),
            key: sslSettings.keyPath ? fs.readFileSync(resolve(sslSettings.keyPath)) : undefined,
            ca: sslSettings.caPath ? fs.readFileSync(resolve(sslSettings.caPath)) : undefined
        };
    } else {
        return sslSettings;
    }
}

const CONFIG = {
    mainAppEntry: "./src/index.ts",
    pickerEntry: "./src/picker.ts",
    cssEntry: "./src/styles/style.scss",
    outputDir: "./dist",
    assetsDir: "./src/assets",
    mainAppTemplate: "./src/index.html",
    pickerTemplate: "./src/picker.html",
    devServerPort: devServerSettings.port,
    devServerHost: devServerSettings.host,
    devServerSsl: getDevServerSslSettings()
}

const getEntryPoints = (isProduction) => {
    if (isProduction) {
        return {
            app: [resolve(CONFIG.mainAppEntry), resolve(CONFIG.cssEntry)],
            picker: [resolve(CONFIG.pickerEntry), resolve(CONFIG.cssEntry)]
        };
    }
    return {
        app: [resolve(CONFIG.mainAppEntry)],
        style: [resolve(CONFIG.cssEntry)],
        picker: [resolve(CONFIG.pickerEntry)]
    };
}

const getPlugins = (isProduction) => {
    let basePlugins = [
        //Cleans the distribution directory
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({            
            filename: "index.html",
            hash: true,
            template: resolve(CONFIG.mainAppTemplate),            
            //Should correspond to the entry points for admin
            chunks: isProduction ? ["app"] : ["app", "style"]            
        }),
        new HtmlWebpackPlugin({
            filename: "picker.html",
            hash: true,
            template: resolve(CONFIG.pickerTemplate),
            //Should correspond to the entry points for picker
            chunks: isProduction ? ["picker"] : ["picker", "style"]
        })
    ];

    if (isProduction) {
        return [ 
            ...basePlugins, 
            new MiniCssExtractPlugin({
                filename: "style.[contenthash].css"
            }),
            new CopyWebpackPlugin({ 
                patterns: [
                    { from: "./src/assets", to: "./assets" },
					{ from: "./icon.png", to: "icon.png" }
                ]
            })
        ]; 
    }

    return [
        ...basePlugins,
        new webpack.HotModuleReplacementPlugin()
    ];
}

module.exports = (env, options) => {
    const isProduction = options.mode === "production";

    return {
        entry: getEntryPoints(isProduction),
        output: {
            path: resolve(CONFIG.outputDir),
            publicPath: process.env.ASSET_PATH,
            filename: isProduction ? "[name].[chunkhash].js" : "[name].js",
        },        
        mode: isProduction ? "production" : "development",
        devtool: isProduction ? undefined : "eval-source-map",
        devServer: {
            https: CONFIG.devServerSsl,
            hot: true,
            publicPath: "/",
            contentBase: resolve(CONFIG.assetsDir),
            contentBasePublicPath: "/assets",
            host: CONFIG.devServerHost,
            port: CONFIG.devServerPort
        },
        module: {
            rules: [
                //Allows use of typescript
                {
                    test: /\.ts?$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                },
                //Allows use of modern javascript
                {
                    test: /\.js?$/,
                    exclude: /node_modules/, //don"t test node_modules folder
                    use: {
                        loader: "babel-loader",
                    },
                },
                //Allows use of svelte
                {
                    test: /\.svelte$/,
                    use: {
                        loader: "svelte-loader",
                        options: {
                            emitCss: true,
                            preprocess: sveltePreprocess({})
                        }
                    },
                },
                //Allows use of (S)CSS
                {
                    test: /\.(scss|css)$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 
                        "css-loader", 
                        "sass-loader"
                    ],
                },
                //Allows use of images
                {
                    test: /\.(jpg|jpeg|png|svg)$/,
                    use: "file-loader",
                },
            ]
        },
        resolve: {
            extensions: [".mjs", ".ts", ".tsx", ".js", ".svelte"],
            alias: {
                svelte: path.resolve("node_modules", "svelte")
            },
            mainFields: ["svelte", "browser", "module", "main"]
        },
        plugins: getPlugins(isProduction)
    }
};