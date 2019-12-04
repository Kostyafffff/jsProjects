'use strict';

const path = require('path');
const fs = require('fs');

const resolveApp = relativePath => path.resolve(fs.realpathSync(process.cwd()), relativePath);

module.exports = {
    appPath: resolveApp('.'),
    appIndex: resolveApp('src/index.tsx'),
    appHtml: resolveApp('public/index.html'),
    appPackageJson: resolveApp('package.json'),
    yarnLockFile: resolveApp('yarn.lock'),
    appAlias: {
        components: resolveApp('src/components/'),
    },
    appPublic: resolveApp('public'),
    appBuild: resolveApp('build'),
};

