require('babel-polyfill');
const configure = require('enzyme').configure;
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

const matchMediaMock = () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
});

window.matchMedia = window.matchMedia || matchMediaMock;
