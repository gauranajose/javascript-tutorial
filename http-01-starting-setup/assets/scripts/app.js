const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');

function sendHttpRequest(method, url, data) {
//   const promise = new Promise((resolve, reject) => {
    // const xhr = new XMLHttpRequest();
    // xhr.open(method, url);
    // xhr.responseType = 'json';
    // xhr.onload = function () {
    //     if (xhr.status >= 200 && xhr.status < 300) {
    //         resolve(xhr.response);
    //     } else {
    //         reject(new Error('Something went wrong'));
    //     }
    // };
    // xhr.onerror = function () {
    //   reject(new Error("Failed to send request"));
    // };
    // xhr.send(JSON.stringify(data));
//   });

  return fetch(url, {
      method: method,
    //   body: JSON.stringify(data),
      body: data,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
  }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json()
      } else {
        return response.json().then(error => {
            console.log(error);
            throw new Error ('Something went wrong - server-side.');
        })
      }
  }).catch(error => {
      console.log(error);
      throw new Error('Something went wrong!');
  })
}

function fetchPost() {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      const listOfPost = response.data;
      listElement.innerHTML = '';
      for (const post of listOfPost) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        postEl.querySelector('li').id = post.id;
        listElement.append(postEl);
      }
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.response);
    });
}

function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const fd = new FormData(form);
//   fd.append('title', title);
//   fd.append('body', content);
  fd.append('userId', userId);

  axios.post('https://jsonplaceholder.typicode.com/posts', fd).then(response => {
    console.log(response);
  });
}

fetchButton.addEventListener('click', fetchPost);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

listElement.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    listItem = event.target.closest('li');
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${listItem.id}`).then(() => listItem.remove());
  }
});
