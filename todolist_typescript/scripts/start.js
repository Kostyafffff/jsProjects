'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', (err) => {
    throw err;
});

const fs = require('fs');

const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const {
    choosePort,
    createCompiler,
    prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');

const paths = require('../config/paths');
const config = require('../config/webpack.config.js');


const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;

if (!checkRequiredFiles([paths.appHtml, paths.appIndex])) {
    process.exit(1);
}

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

choosePort(HOST, DEFAULT_PORT)
    .then(port => {
        if (port == null) {
            return;
        }
        const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
        const appName = require(paths.appPackageJson).name;
        const urls = prepareUrls(protocol, HOST, port);
        const compiler = createCompiler({ webpack, config: config(process.env.NODE_ENV), appName, urls, useYarn });
        const devServer = new WebpackDevServer(compiler, {
            publicPath: "../",
            contentBase: "../public",
            hot: true
        });

        devServer.listen(port, HOST, (err) => {
            if (err) {
                return console.log(err);
            }
            if (isInteractive) {
                clearConsole();
            }
            console.log(chalk.cyan('Starting the development server...\n'));

            openBrowser(urls.localUrlForBrowser);
        });

        ['SIGINT', 'SIGTERM'].forEach((sig) => {
            process.on(sig, () => {
                devServer.close();
                process.exit();
            });
        });
    })
    .catch((err) => {
        if (err && err.message) {
            console.log(err.message);
        }
        process.exit(1);
    });
