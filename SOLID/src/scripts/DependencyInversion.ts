class Fetch {
    request(url) {
        // @ts-ignore
        return Promise.resolve('Data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLs = 'data from ls';
        return dataFromLs;
    }
}


class Databse {
    private fetch;

    constructor(client) {
        this.client = client;
    }

    getData(key) {
        return this.client.clientGet();
    }
}

class FetchClient {
    [x: string]: any;
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet(){
        return this.fetch.request('google.com')
    }
}

class LocalStorageClient {
    [x: string]: any;
    constructor() {
        this.fetch = new LocalStorage();
    }

    clientGet(){
        return this.fetch.localStorage.get()
    }
}

const db = new Databse(new LocalStorageClient());



console.log(db.getData('a'))