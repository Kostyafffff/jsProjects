const paths = require('./paths');
const postcssNormalize = require('postcss-normalize');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const sourceLoader = require.resolve('@storybook/source-loader');

const regex = {
    css: /\.css$/,
    cssModule: /\.module\.css$/,
    less: /\.less$/,
    lessModule: /\.module\.less$/,
    tsAndTsx: /\.(ts|tsx)$/,
    urlFile: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
    component: /\.tsx$/,
};

const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                    }),
                    postcssNormalize(),
                ],
            },
        },
    ].filter(Boolean);

    if (preProcessor) {
        loaders.push({
            loader: require.resolve(preProcessor),
        });
    }

    return loaders;
};

module.exports = {
    resolve: {
        alias: paths.appAlias,
        extensions: ['.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: regex.urlFile,
                loader: require.resolve('url-loader'),
            },
            {
                test: regex.tsAndTsx,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [['react-app', { flow: false, typescript: true }]],
                },
            },
            {
                test: regex.css,
                exclude: regex.cssModule,
                use: getStyleLoaders({
                    importLoaders: 1,
                }),
                sideEffects: true,
            },
            {
                test: regex.cssModule,
                use: getStyleLoaders({
                    importLoaders: 1,
                    modules: true,
                    getLocalIdent: getCSSModuleLocalIdent,
                }),
            },
            {
                test: regex.less,
                exclude: regex.lessModule,
                use: getStyleLoaders(
                    {
                        importLoaders: 2,
                    },
                    'less-loader'
                ),
                sideEffects: true,
            },
            {
                test: regex.lessModule,
                use: getStyleLoaders(
                    {
                        importLoaders: 2,
                        modules: true,
                        getLocalIdent: getCSSModuleLocalIdent,
                    },
                    'less-loader'
                ),
            },
            {
                test: regex.component,
                loaders: [sourceLoader],
                enforce: 'pre',
            },
        ],
    },
};
