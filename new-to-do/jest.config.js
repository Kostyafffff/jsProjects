module.exports = {
    "preset": "ts-jest/presets/js-with-babel",
    "setupFiles": [
        "<rootDir>/config/polyfills.js"
    ],
    "setupFilesAfterEnv": ["<rootDir>/config/jest/setup.js"],
    "testMatch": [
        "**/test/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    "testEnvironment": "jsdom",
    "testURL": "http://localhost",
    "transform": {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest",
        "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|ts|tsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    "transformIgnorePatterns": [
        "/node_modules/"
    ],
    "moduleDirectories": [
        "node_modules",
        "src",
        "test"
      //  "declaration-files"
    ],
    "moduleNameMapper": {
        "test/(.*)": "<rootDir>test/$1",
     //   "^lodash-es$": "<rootDir>/node_modules/lodash/index.js"
    },
    "moduleFileExtensions": [
        "web.js",
        "mjs",
        "js",
        "json",
        "web.jsx",
        "jsx",
        "ts",
        "tsx",
        "node"
    ],
    "globals": {
        "ts-jest": {
            "diagnostics": true
        }
    },
    "cacheDirectory": "./.jest-cache"
};