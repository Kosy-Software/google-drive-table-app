const path = require("path");
const resolve = (file) => path.join(__dirname, file);
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const fs = require("fs");
const sveltePreprocess = require("svelte-preprocess");

const getWebpackConfig = (env) => { 
    return {
        mainAppEntry: "./src/index.ts",
        pickerEntry: "./src/picker.ts",
        cssEntry: "./src/styles/style.scss",
        outputDir: "./dist/" + env.type,
        assetsDir: "./src/assets",
        mainAppTemplate: "./src/index.html",
        pickerTemplate: "./src/picker.html"
    }
}


const getEntryPoints = (config, isProduction) => {
    if (isProduction) {
        return {
            app: [resolve(config.mainAppEntry), resolve(config.cssEntry)],
            picker: [resolve(config.pickerEntry), resolve(config.cssEntry)]
        };
    }
    return {
        app: [resolve(config.mainAppEntry)],
        style: [resolve(config.cssEntry)],
        picker: [resolve(config.pickerEntry)]
    };
}

const getAppSettings = (isProduction) =>
    isProduction ? require("./settings.json") : require("./settings_test.json");

const getDevServerSettings = (config, isProduction) => {
    //Don't run the dev server in prod...
    if (isProduction) return undefined;

    const devServerSettings = getAppSettings(isProduction).devServer || {};
    let devServerSsl;
    if (((devServerSettings || {}).ssl || {}).certPath) {
        let sslSettings = devServerSettings.ssl;
        devServerSsl = {
            cert: fs.readFileSync(resolve(sslSettings.certPath)),
            key: sslSettings.keyPath ? fs.readFileSync(resolve(sslSettings.keyPath)) : undefined,
            ca: sslSettings.caPath ? fs.readFileSync(resolve(sslSettings.caPath)) : undefined
        };
    } else {
        devServerSsl = devServerSettings.ssl;
    }
    return {
        https: devServerSsl,
        hot: true,
        static: {
            directory: resolve(config.assetsDir),
            publicPath: "/assets"
        },
        host: devServerSettings.host,
        port: devServerSettings.port
    };
}

const getPlugins = (config, isProduction, env) => {
    const googleSettings = getAppSettings(isProduction).google || {};
    let basePlugins = [
        //Cleans the distribution directory
        new CleanWebpackPlugin(),
        //Replaces all keys with the value in the entire application
        new webpack.DefinePlugin({
            __GOOGLE_API_KEY__: JSON.stringify(googleSettings.api_key),
            __GOOGLE_CLIENT_ID__: JSON.stringify(googleSettings.client_id),
            __BUILD_TYPE__: JSON.stringify(env.type)
        }),
        new HtmlWebpackPlugin({            
            filename: "index.html",
            hash: true,
            template: resolve(config.mainAppTemplate),            
            //Should correspond to the entry points for admin
            chunks: isProduction ? ["app"] : ["app", "style"]            
        }),
        new HtmlWebpackPlugin({
            filename: "picker.html",
            hash: true,
            template: resolve(config.pickerTemplate),
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
    const config = getWebpackConfig(env);

    return {
        entry: getEntryPoints(config, isProduction),
        output: {
            path: resolve(config.outputDir),
            publicPath: process.env.ASSET_PATH,
            filename: isProduction ? "[name].[chunkhash].js" : "[name].js",
        },        
        mode: isProduction ? "production" : "development",
        devtool: isProduction ? undefined : "eval-source-map",
        devServer: getDevServerSettings(config, isProduction),
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
        plugins: getPlugins(config, isProduction, env)
    }
};