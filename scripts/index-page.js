const baseURL = 'https://project-1-api.herokuapp.com/'
const APIKey = '844592e2-0f3f-48b8-b6a7-a111bd6d8554';

const comments = [];
axios
.get(baseURL + 'comments/?api_key=844592e2-0f3f-48b8-b6a7-a111bd6d8554')
.then((response) =>{
  comments.push(...response.data);
  renderComments(comments);
  })

 .catch((error)=>{
  console.log(error);
 })
  


// let comments = [
//   { name: "Connor Walton", timestamp: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contatins." },
//   { name: "Emilie beach", timestamp: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life i could relive, this would be it. What an incredible day." },
//   { name: "Miles Acosta", timestamp: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." }
// ];

const displayComment = (comment) =>{
  const commentList = document.getElementById('comments__list');

  const commentCard = document.createElement('div');
  commentCard.className = 'comments__card';
  commentList.appendChild(commentCard);

  const commentImage = document.createElement('div');
  commentImage.className = 'comments__card-image';
  commentCard.appendChild(commentImage);

  const commentData = document.createElement('div');
  commentData.className = 'comments__card-data';
  commentCard.appendChild(commentData);

  const commentDataNameDate = document.createElement('div');
  commentDataNameDate.className = 'comments__card-name-date-container';
  commentData.appendChild(commentDataNameDate);

  const commentName = document.createElement('h4');
  commentName.className = 'comments__card-name';
  commentName.innerText = comment.name;
  commentDataNameDate.appendChild(commentName);

  const commentDate = document.createElement('p');
  commentDate.className = 'comments__card-date';
  commentDate.innerText = comment.timestamp;
  commentDataNameDate.appendChild(commentDate);

  const commentReviewContainer = document.createElement ('div');
  commentReviewContainer.className = 'comments__card-review-container';
  commentData.appendChild(commentReviewContainer);

  const commentReview = document.createElement('p');
  commentReview.className = 'comments__card-review';
  commentReview.innerText = comment.comment;
  commentReviewContainer.appendChild(commentReview);

  commentList.insertBefore(commentCard, commentList.firstChild);

}

const renderComments = () => {
  const commentList = document.getElementById('comments__list');
  commentList.innerText = '';

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



