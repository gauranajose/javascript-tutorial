const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy', 1);

let db;

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;

  const objectStore = db.createObjectStore('products', { keyPath: 'id' });

  objectStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productsStore.add({
      id: 'p1',
      title: 'A First Product',
      price: 12.99,
      tags: ['expensive, luxury'],
    });
  };
};

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

dbRequest.onerror = function (event) {
  console.log('ERROR!');
};

storeBtn.addEventListener('click', () => {
  if (!db) return;
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  productsStore.add({
    id: 'p2',
    title: 'A Second Product',
    price: 2.99,
    tags: ['cheap'],
  });
});

retrBtn.addEventListener('click', () => {
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const requestObj = productsStore.get('p2');

  requestObj.onsuccess = function() {
    console.log(requestObj.result);
  }

  requestObj.onerror = function() {

  }
});
