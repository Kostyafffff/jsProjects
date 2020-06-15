var Fetch = /** @class */ (function () {
    function Fetch() {
    }
    Fetch.prototype.request = function (url) {
        // @ts-ignore
        return Promise.resolve('Data from fetch');
    };
    return Fetch;
}());
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.get = function () {
        var dataFromLs = 'data from ls';
        return dataFromLs;
    };
    return LocalStorage;
}());
var Databse = /** @class */ (function () {
    function Databse(client) {
        this.client = client;
    }
    Databse.prototype.getData = function (key) {
        return this.client.clientGet();
    };
    return Databse;
}());
var FetchClient = /** @class */ (function () {
    function FetchClient() {
        this.fetch = new Fetch();
    }
    FetchClient.prototype.clientGet = function () {
        return this.fetch.request('google.com');
    };
    return FetchClient;
}());
var LocalStorageClient = /** @class */ (function () {
    function LocalStorageClient() {
        this.fetch = new LocalStorage();
    }
    LocalStorageClient.prototype.clientGet = function () {
        return this.fetch.localStorage.get();
    };
    return LocalStorageClient;
}());
var db = new Databse(new LocalStorageClient());
console.log(db.getData('a'));
