process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const configFactory = require('../config/webpack.config');
const dts = require('./dts');
const paths = require('../config/paths');
const chalk = require('react-dev-utils/chalk');
const webpack = require('webpack');
const { checkBrowsers } = require('react-dev-utils/browsersHelper');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const isInteractive = process.stdout.isTTY;
const config = configFactory('production');

checkBrowsers(paths.appPath, isInteractive)
    .then(() => measureFileSizesBeforeBuild(paths.appBuild))
    .then(previousFileSizes => {
        return build(previousFileSizes);
    })
    .catch(err => {
        if (err && err.message) {
            console.log(err.message);
        }
        process.exit(1);
    });

function build(previousFileSizes) {
    dts({
        dist: paths.appBuild,
        alias: Object.keys(paths.appAlias),
    });

    const compiler = webpack(config);

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            let messages;

            if (err) {
                if (!err.message) {
                    return reject(err);
                }
                messages = formatWebpackMessages({
                    errors: [err.message],
                    warnings: [],
                });
            } else {
                messages = formatWebpackMessages(
                    stats.toJson({ all: false, warnings: true, errors: true })
                );
            }

            if (messages.errors.length) {
                if (messages.errors.length > 1) {
                    messages.errors.length = 1;
                }
                return reject(new Error(messages.errors.join('\n\n')));
            }

            if (
                process.env.CI
                    && (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false')
                    && messages.warnings.length
            ) {
                console.log(
                    chalk.yellow(
                        '\nTreating warnings as errors because process.env.CI = true.\n' +
                        'Most CI servers set it automatically.\n'
                    )
                );
                return reject(new Error(messages.warnings.join('\n\n')));
            }

            return resolve({ stats, previousFileSizes, warnings: messages.warnings });
        });
    });
}
