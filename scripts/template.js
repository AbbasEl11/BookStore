function init() {
  for (let i = 0; i < books.length; i++) {
    getFromLocalStorage(i);
  }
  getBooksInformation();
}

function displayBook(indexBook, bookComments) {
  return `<div class="book-container">
    <div class="book-title">${books[indexBook].name}</div>
    <hr class="title-separator">
    <div class="book-image">
        <img src="./img/bookcover.png" alt="Buchcover">
    </div>
    <hr class="image-separator">
    <div class="book-info">
        <p><strong>Autor</strong> <br>${books[indexBook].author}</p>
        <p><strong>Genre</strong> <br>${books[indexBook].genre}</p>
        <p><strong>Veröffentlichung</strong> <br>${
          books[indexBook].publishedYear
        }</p>
        <p><strong>Preis</strong> <br>${books[indexBook].price} €</p>
        <div class="like-button">
            <button id="heart-button-${indexBook}" onclick= "heartButton(${indexBook})">${
    books[indexBook].liked ? "❤️" : "🤍"
  }</button>
            <span id="like-count-${indexBook}" class="like-count">${
    books[indexBook].likes
  }</span>
        </div>
    </div>
    <h2>Kommentare</h2>
    <div class="comments-section">
       
        <div class="comments">
            ${bookComments}
        </div>
    </div>
            <div class="webflow-style-input">
        <input id="comment_input_${indexBook}" placeholder="Kommentar hinzufügen..."></input>
        <button class "commButton" onclick = "commentButton(${indexBook})" >Absenden</button>
    </div>
</div>`;
}

function saveToLocalStorage(indexBook) {
  localStorage.setItem(
    `comments_${indexBook}`,
    JSON.stringify(books[indexBook].comments)
  );
  localStorage.setItem(
    `like-count-${indexBook}`,
    JSON.stringify(books[indexBook].likes)
  );
  localStorage.setItem(
    `heart-button-${indexBook}`,
    JSON.stringify(books[indexBook].liked)
  );
}

function getFromLocalStorage(indexBook) {
  let storedComments = localStorage.getItem(`comments_${indexBook}`);
  if (storedComments) {
    books[indexBook].comments = JSON.parse(storedComments);
  }
  let storedLikes = localStorage.getItem(`like-count-${indexBook}`);
  if (storedLikes) {
    books[indexBook].likes = JSON.parse(storedLikes);
  }
  let storedHeart = localStorage.getItem(`heart-button-${indexBook}`);
  if (storedHeart) {
    books[indexBook].liked = JSON.parse(storedHeart);
  }
}
