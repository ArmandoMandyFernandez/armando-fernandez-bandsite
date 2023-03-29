console.log('hello Mandy');

const axios = require('axios');

const APIKey = '844592e2-0f3f-48b8-b6a7-a111bd6d8554'

axios.get('https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js');

let comments = [
  get()
]

// let comments = [
//     { name: "Connor Walton", timestamp: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contatins." },
//     { name: "Emilie beach", timestamp: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life i could relive, this would be it. What an incredible day." },
//     { name: "Miles Acosta", timestamp: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." }
//   ];

  const displayComment = (comment) => {
    const commentList = document.getElementById('comments__list');
  
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comments__comment-container');
  
    const commentImage = document.createElement('div');
    commentImage.classList.add('comments__comment-image');
  
    const commentHeader = document.createElement('div');
    commentHeader.classList.add('comments__comment-header');
  
    const commentName = document.createElement('h4');
    commentName.classList.add('comments__comment-name');
    commentName.innerText = comment.name;
  
    const commentDate = document.createElement('span');
    commentDate.classList.add('comments__comment-date');
    commentDate.innerText = comment.timestamp;
  
    const commentBody = document.createElement('p');
    commentBody.classList.add('comments__comment-body');
    commentBody.innerText = comment.comment;
  
    commentHeader.appendChild(commentImage);
    commentHeader.appendChild(commentName);
    commentHeader.appendChild(commentDate);
  
    commentContainer.appendChild(commentHeader);
    commentContainer.appendChild(commentBody);
  
    commentList.insertBefore(commentContainer, commentList.firstChild);
  };
  
  const renderComments = () => {
    const commentList = document.getElementById('comments__list');
    commentList.innerHTML = '';
  
    for (let i = comments.length - 1; i >= 0; i--) {
      displayComment(comments[i]);
    }
  };
  
  const addComment = (event) => {
    event.preventDefault();
  
    const nameInput = document.querySelector('.comments__name-label-input');
    const commentInput = document.querySelector('.comments__comment-label-input');
  
    const name = nameInput.value;
    const comment = commentInput.value;
    const timestamp = new Date().toLocaleDateString();
  
    const newComment = {
      name,
      timestamp,
      comment
    };
  
    comments.unshift(newComment);
  
    nameInput.value = '';
    commentInput.value = '';
  
    renderComments();
  };
  
  const commentForm = document.querySelector('.comments__form');
  commentForm.addEventListener('submit', addComment);
  
  renderComments();
  
  