const button = document.querySelector('button');

const buttonClickedHandler = event => {
    // event.target.disabled = true;
    console.log(event);
}

// button.addEventListener('click', buttonClickedHandler);

// setTimeout(() => {
//     button.removeEventListener('click', buttonClickedHandler);
// }, 2000);

// buttons.forEach(btn => {
//     btn.addEventListener('mouseenter', buttonClickedHandler);
// });

// window.addEventListener('scroll', event => {
//     console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
});

button.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Clicked Button');
    console.log(event);
    console.log(this);
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('Clicked Div');
    console.log(event);
});

// const listItems = document.querySelectorAll('li');

// // Working but cumbersome to add multiple listeners and bad in a performance perspective
// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     })
// });

const list = document.querySelector('ul');

list.addEventListener('click', function(event) {
    event.target.closest('li').classList.toggle('highlight');
    // form.submit();
    console.log(this);
    button.click();
});

