const rules = isDev => [
    {
        test: /\.jsx?$/,
        exclude: /node_modules|dist/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                },
            },
        ],
    },
    {
        test: /\.tsx?$/,
        exclude: /node_modules|dist/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                },
            },
            {
                loader: 'ts-loader',
            },
        ],
    }
];

module.exports = rules;
