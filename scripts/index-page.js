const baseURL = "https://project-1-api.herokuapp.com/";
const APIKey = "844592e2-0f3f-48b8-b6a7-a111bd6d8554";

const comments = [];
axios
  .get(`${baseURL}comments/?api_key=${APIKey}`)
  .then((response) => {
    comments.push(...response.data);
    renderComments(comments);
  })

  .catch((error) => {
    console.log(error);
  });


const displayComment = (comment) => {
  const commentList = document.getElementById("comments__list");

  const commentCard = document.createElement("div");
  commentCard.className = "comments__card";
  commentList.appendChild(commentCard);

  const commentImage = document.createElement("div");
  commentImage.className = "comments__card-image";
  commentCard.appendChild(commentImage);

  const commentData = document.createElement("div");
  commentData.className = "comments__card-data";
  commentCard.appendChild(commentData);

  const commentDataNameDate = document.createElement("div");
  commentDataNameDate.className = "comments__card-name-date-container";
  commentData.appendChild(commentDataNameDate);

  const commentName = document.createElement("h4");
  commentName.className = "comments__card-name";
  commentName.innerText = comment.name;
  commentDataNameDate.appendChild(commentName);

  const commentDate = document.createElement("p");
  commentDate.className = "comments__card-date";
  const dateFormat = { month: "2-digit", day: "2-digit", year: "numeric" };
  commentDate.innerText = new Date(comment.timestamp).toLocaleDateString("en-US", dateFormat);
  
  commentDataNameDate.appendChild(commentDate);

  const commentReviewContainer = document.createElement("div");
  commentReviewContainer.className = "comments__card-review-container";
  commentData.appendChild(commentReviewContainer);

  const commentReview = document.createElement("p");
  commentReview.className = "comments__card-review";
  commentReview.innerText = comment.comment;
  commentReviewContainer.appendChild(commentReview);

  commentList.insertBefore(commentCard, commentList.firstChild);
};

const renderComments = () => {
  const commentList = document.getElementById("comments__list");
  commentList.innerText = "";

  comments.sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp));

  for (let i=0; i < comments.length; i++){
    displayComment(comments[i]);
  }
  
};

const addComment = (event) => {
  event.preventDefault();

  const nameInput = document.querySelector(".comments__name-label-input");
  const commentInput = document.querySelector(".comments__comment-label-input");

  const name = nameInput.value;
  const comment = commentInput.value;
  const timestamp = new Date().toLocaleDateString();

  const newComment = {
    name,
    timestamp,
    comment,
  };

  comments.unshift(newComment);

  nameInput.value = "";
  commentInput.value = "";
  
  axios
    .post(`${baseURL}comments/?api_key=${APIKey}`,{
      name,
      comment
    })
    .then((res)=> {
      console.log(res.data);
      renderComments();
    })
    .catch(error => console.log(error)); 

  renderComments();

};



const commentForm = document.querySelector(".comments__form");
commentForm.addEventListener("submit", addComment);

renderComments();
