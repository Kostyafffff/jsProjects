import { configure, addDecorator, addParameters } from '@storybook/react';
import './styles.less';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';

const req = require.context('./stories', true, /\.tsx/);

function loadStories(): void {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.append(modalRoot);
    const root = document.getElementById('root');
    root!.style.width = '100%';
    root!.style.height = '100%';

    req.keys().sort().forEach(filename => req(filename));
}

addParameters({
    backgrounds: [
        { name: 'White', value: '#ffffff', default: true },
        { name: 'Twitter', value: '#00aced' },
        { name: 'Facebook', value: '#3b5998' },
    ],
    options: {
        theme: themes.dark,
    },
});

configure(loadStories, module);
addDecorator(withKnobs);
