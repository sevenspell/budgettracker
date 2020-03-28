const request = window.indexedDB.open("budget", 1);
let db;

request.onupgradeneeded = ({ target }) => {
    const db = target.result;
    db.createObjectStore("pending", { autoIncrement: true });
}

request.onsuccess = ({ target }) => {
    db = target.result;
    // check if app is online before reading from db
    if (navigator.onLine) {
        checkDatabase();
    }
}

request.onerror = function (event) {
    console.log(request.error)
}

function saveRecord(record) {
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    store.add(record);
}

function checkDatabase() {

    const transaction = db.transaction(["pending"], "readwrite");

    transaction.onsuccess = function (event) {
        const result = event.target.result
        console.log(result + "ALL DONE!");
    };

    transaction.onerror = function (event) {
        console.log(transaction.error)
    }

    const objectStore = transaction.objectStore("pending");

    // get all records from store and set to a variable
    const getAll = objectStore.getAll();

    getAll.onsuccess = function () {

        if (getAll.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(() => {
                    // if successful, open a transaction on your transactions db
                    const transaction = db.transaction(["pending"], "readwrite");

                    // access your transactions object store
                    const objectStore = transaction.objectStore("pending");

                    // clear all items in your store
                    const clearStore = objectStore.clear();

                    clearStore.onsuccess = function (event) {
                        console.log("store cleared")
                    }
                })
        }
    }
};

// listen for app coming back online
window.addEventListener("online", checkDatabase);
