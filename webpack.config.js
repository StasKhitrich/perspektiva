const path = require('path');
const glob = require('glob');
const miniCss = require('mini-css-extract-plugin');

/*  CONSTANTS   */
const PATH = {
        assets: 'assets',
        dev: 'src',
        pub: 'dist'
    },
    PATH_DEV = path.resolve(__dirname, PATH.assets, PATH.dev),
    PATH_PUB = path.resolve(__dirname, PATH.assets, PATH.pub);

/*  Handlers    */
const getHandledPath = (obj, el, ext) => {
    ext = ext.replace('.', '');
    const name = path.parse(el).name;
    const fullPath = path.parse(el).dir;
    const clearedPath = fullPath.substr(fullPath.indexOf(PATH.dev) + PATH.dev.length).replace('/', '').replace(ext, '');
    return `${clearedPath}/${name}`;
};

module.exports = {
    entry: {
        ...glob.sync(PATH_DEV + '/**/*.+(js|ts|tsx)').reduce(function (obj, el) {
            if (path.parse(el).name.includes('.service')) return obj;

            obj[getHandledPath(obj, el, path.parse(el).ext)] = el;
            return obj
        }, {}),
    },
    output: {
        path: path.resolve(PATH_PUB, 'js'),
        filename: "[name].js",
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/env',
                                {targets: {browsers: ["last 1 version", "ie >= 11"]}}
                            ]
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            ["@babel/plugin-transform-runtime", {"regenerator": true}]
                        ],
                    }
                }
            }, {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader?name=img/[name].[ext]'
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: '../css/[name].css',
        }),
    ],
    resolve: {
        alias: {
            SCSS: path.resolve(PATH_DEV, 'scss'),
        },
        extensions: ['.tsx', '.ts', '.js']
    }
};