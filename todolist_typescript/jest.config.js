module.exports = {
    preset: "ts-jest/presets/js-with-babel",
    setupTestFrameworkScriptFile: "<rootDir>/config/setup.js",
    // testMatch: [
    //     "<rootDir>/test/**/?(*.)(spec|test).[jt]s?(x)"
    // ],
    "testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
    // testRegex: "<rootDir>/test/**/?(*.)(spec|test).{js,jsx,mjs,ts,tsx}",
    testEnvironment: "jsdom",
    testURL: "http://localhost",
    transform: {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest",
        "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/config/cssTransform.js",
        "^(?!.*\\.(js|jsx|ts|tsx|mjs|css|json)$)": "<rootDir>/config/fileTransform.js"
    },
    transformIgnorePatterns: [
        "/node_modules/"
    ],
    moduleDirectories: [
        "node_modules",
        "src",
        "test",
    ],
    moduleNameMapper: {
        "test/(.*)": "<rootDir>/test/$1",
    },
    moduleFileExtensions: [
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
    globals: {
        "ts-jest": {
            "diagnostics": true
        }
    },
    cacheDirectory: "./.jest-cache",
};