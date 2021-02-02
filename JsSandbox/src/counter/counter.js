const { ce, ge } = (function () {
    const attrHandlers = {
        class: (element, value) => {
            element.className = value;
        },
        classes: (element, value) => {
            value.forEach(item => element.classList.add(item));
        },
    };

    function createElement(tag, attrs = {}, content = []) {
        const element = document.createElement(tag);

        for (const attr in attrs) {
            const value = attrs[attr];
            const handler = attrHandlers[attr];

            if (handler) {
                handler(element, value);
            } else {
                element.setAttribute(attr, value);
            }
        }

        if (!Array.isArray(content)) {
            content = [content];
        }

        content.forEach(child => element.append(child));

        return element;
    }

    return {
        ce: createElement,
        ge: (selector) => document.querySelector(selector),
    };
})();

function parseTime(totalMilliseconds) {
    const milliseconds = totalMilliseconds % 1000;
    const totalSeconds = (totalMilliseconds - milliseconds) / 1000;

    const seconds = totalSeconds % 60;
    const totalMinutes = (totalSeconds - seconds) / 60;

    const minutes = totalMinutes % 60;
    const hours = (totalMinutes - minutes) / 60;

    return [hours, minutes, seconds, milliseconds];
}

function zeros(value, length) {
    return value.toString().padStart(length, '0');
}

class Timer {
    constructor(callBack) {
        this.callBack = callBack;
        this.value = 0;
        this.intervalId = 0;
    }

    _start(){
        this.intervalId = setInterval(() => {
            this.callBack(this.value);
            this.value += 20;
        }, 20);
    };

    _stop(){
        clearInterval(this.intervalId)
    };

    _reset(){
       clearInterval(this.intervalId);
       this.value = 0;
    };

    _delete(element){
        this.value = 0;
        element.remove();
    };
}

class TimerUI extends Timer {
    constructor(onCreate) {

        super(time => this._renderUpdates(time));

        const buttons = this._createButtons();

        this.startButton.addEventListener('click', () => {
           this._start();
        })

        this.stopButton.addEventListener('click', () => {
           this._stop();
        })

        this.resetButton.addEventListener('click', () => {
            this._reset();
            this.timeElement.innerHTML = '00:00:00.000';
        })

        this.removeButton.addEventListener('click', () => {
            this._delete(this.container);
        })

        this.timeElement = ce('div', { class: 'time' }, '00:00:00.000');
        const controls = ce('div', { class: 'btn-group controls' }, buttons);

        this.container = ce('div', { class: 'timer' }, [this.timeElement, controls]);

        onCreate(this.container);
    }

    _renderUpdates(time) {
        let [hours, minutes, seconds, milliseconds] = parseTime(time);
        hours = zeros(hours, 2);
        minutes = zeros(minutes, 2);
        seconds = zeros(seconds, 2);
        milliseconds = zeros(milliseconds, 3);

        this.timeElement.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    _createButtons() {
        this.startButton = this._getButton('play', 'fa-play');
        this.stopButton = this._getButton('stop', 'fa-pause');
        this.resetButton = this._getButton('reset', 'fa-redo-alt');
        this.removeButton = this._getButton('remove', 'fa-trash');

        return [this.startButton, this.stopButton, this.resetButton, this.removeButton];
    }

    _getButton(buttonType, icon) {
        const iconElement = this._getIcon(icon);

        return ce('button', {
            classes: ['btn', 'btn-secondary', buttonType],
        }, iconElement);
    }

    _getIcon(icon) {
        return ce('i', {
            classes: ['fas', icon],
        });
    }
}

const timer = new TimerUI(timerElement => {
    document.body.append(timerElement);
});



const changeUserName = (name) => {
    const user = {
        age: 25,
        name: name,
    };

    return () => user;
}

const user = changeUserName('Lexa');

console.log(user());

console.log('ssss')
