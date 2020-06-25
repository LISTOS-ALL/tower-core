const path = require('path');
const webpack = require('webpack');
const rules = require('./webpack.rules');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const DuplicatePackageCheckerPlugin =
    require('duplicate-package-checker-webpack-plugin');

const src = path.resolve(__dirname, '../src');
const build = path.resolve(__dirname, '../dist');

module.exports = (env, argv) => {
    const isDev = argv.mode !== 'production';

    const plugins = [
        new webpack.IgnorePlugin(/test\.ts(x?)$/),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(argv.mode),
        }),
    ];
    const devPlugins = [
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin(),
    ];

    const prodPlugins = [
        new DuplicatePackageCheckerPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new UglifyJsPlugin(),
    ];

    return {
        entry: {
            'index': `${src}/index.ts`,
        },
        output: {
            path: build,
            filename: '[name].js',
            libraryTarget: 'umd',
            library: 'TowerCoreComponents',
            umdNamedDefine: true,
        },
        externals: {
            'react': 'react',
            'react-dom': 'react-dom',
            'recharts': 'recharts',
        },
        devtool: isDev ? 'source-map' : undefined,
        module: {
            rules: rules(isDev),
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        plugins: [...plugins, ...(isDev ? devPlugins : prodPlugins)],
    };
};
