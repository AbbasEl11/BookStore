function getBooksInformation() {
  let contentRef = document.getElementById("book-display");
  contentRef.innerHTML = "";

  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    let bookComments = "";
    if (books[indexBook].comments.length > 0) {
      for (let i = 0; i < books[indexBook].comments.length; i++) {
        bookComments += `<p><strong>[${books[indexBook].comments[i].name}]: </strong> <br> ${books[indexBook].comments[i].comment}</p> <hr>`;
      }
    } else {
      bookComments = "Keine Kommentare vorhanden.";
    }
    contentRef.innerHTML += displayBook(indexBook, bookComments);
  }
}

function commentButton(indexBook) {
  let inputComment = document.getElementById(`comment_input_${indexBook}`);
  let inputCom = inputComment.value;

  if (inputCom === "") {
    alert("Bitte geben Sie einen Kommentar ein.");
    return;
  }

  books[indexBook].comments.push({ name: "Anonym", comment: inputCom });
  saveToLocalStorage(indexBook);
  inputComment.value = "";
  getBooksInformation();
}

function heartButton(indexBook) {
  let likeElement = document.getElementById(`like-count-${indexBook}`);
  let heartButtonElement = document.getElementById(`heart-button-${indexBook}`);

  if (likeElement && heartButtonElement) {
    books[indexBook].liked = !books[indexBook].liked;
    heartButtonElement.innerHTML = books[indexBook].liked ? "❤️" : "🤍";
    if (books[indexBook].liked) {
      books[indexBook].likes += 1;
    } else {
      books[indexBook].likes -= 1;
    }

    likeElement.innerHTML = books[indexBook].likes;

    saveToLocalStorage(indexBook);
  }
}
