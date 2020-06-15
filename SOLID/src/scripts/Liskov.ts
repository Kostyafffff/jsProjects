class Person {
    access() {
        console.log('well done');
    }
}

class Member extends Person {
    access() {
        console.log('Have access')
    }
}

class Guest extends Person {
    isGuest = true;
}


class Frontend extends Member {
    createUi() {

    }
}

class Backend extends Member {
    canCreateConnectToDb() {

    }
}

class Legioner extends Guest {
    access() {
        throw new Error('Go away')
    }
}

function openSecretConnection(member) {
    member.access();
}

openSecretConnection(new Frontend());
openSecretConnection(new Backend());

