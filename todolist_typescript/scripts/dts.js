'use strict';

const fs = require('fs');
const path = require('path');
const lodash = require('lodash');
const paths = require('../config/paths');
const rimraf = require('rimraf');
const shell = require('shelljs');

const sep = path.sep;

const checkError = error => {
    if (error) {
        throw error;
    }
};

const fixPath = (depth, alias) => `${lodash.fill(Array(depth), '..').join('/')}/${alias}`;

const _replace = (inputString, alias, quote, options) => inputString.replace(
    new RegExp(`import .+ from ${quote}${alias}.*${quote};`, 'gi'),
    it => {
        const newLine = it.replace(`${quote}${alias}`, `${quote}${fixPath(options.depth, alias)}`);

        console.log(`[${it} => ${newLine}] => ${options.dir}`);

        return newLine;
    }
);

const fixImport = (error, data, options) => {
    checkError(error);

    let dtsBundle = data.toString();

    options.alias.forEach(alias => {
        dtsBundle = _replace(dtsBundle, alias, "'", options);
        dtsBundle = _replace(dtsBundle, alias, '"', options);
    });

    fs.writeFile(options.dir, dtsBundle, checkError);
};

const fixFile = (dir, depth, alias) => {
    if (depth === 0) {
        return;
    }

    fs.readFile(
        dir,
        (error, data) => fixImport(
            error,
            data,
            {
                dir,
                depth,
                alias
            },
        )
    );
};

const findFile = (dir, fixFile, depth) => {
    const dirs = fs.readdirSync(dir);
    const newDepth = depth === undefined ? 0 : depth + 1;

    dirs
        .filter(it => fs.statSync(dir + sep + it).isFile())
        .forEach(it => fixFile(dir + sep + it, newDepth));

    dirs
        .filter(dirName => fs.statSync(dir + sep + dirName).isDirectory())
        .forEach(dirName => findFile(dir + sep + dirName, fixFile, newDepth));
};

module.exports = (options) => {
    rimraf(paths.appBuild, checkError);

    if (shell.exec('tsc').code !== 0) {
        shell.exit(1);
    } else {
        console.log('tsc files created');
    }

    findFile(
        options.dist,
        (dir, depth) => fixFile(dir, depth, options.alias)
    );
};
