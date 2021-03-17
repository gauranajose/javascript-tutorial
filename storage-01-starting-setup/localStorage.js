const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'ul123';
const user = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

storeBtn.addEventListener('click', () => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('uid', userId);
});

retrBtn.addEventListener('click', () => {
  const extractedId = localStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  if (extractedId) {
    console.log(`Got the id - ${extractedId}`);
    console.log(extractedUser);
  } else {
    console.log('Could not find id.');
  }
});
