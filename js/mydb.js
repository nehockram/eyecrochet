var db;
var request = window.indexedDB.open('myDB', 2);

request.onsuccess = function (event) {
    db = event.target.result;
    console.log('DB loaded successfully');
}

request.onerror = function (event) {

}

request.onupgradeneeded = function (event) {
    db = event.target.result;
    db.createObjectStore('croProjTbl', {
        keyPath: 'cpID',
        autoIncrement: true
    });
    console.log('DB created successfully');
}
