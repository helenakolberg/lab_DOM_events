document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");

  const submit = document.querySelector("#new-item-form");
  submit.addEventListener("submit", handleFormSubmit);

  const deleteList = document.querySelector("#delete-form");
  deleteList.addEventListener("submit", handleFormDelete);
});

const handleFormSubmit = function (event) {
  event.preventDefault();

  const author = event.target.author.value;
  const title = event.target.title.value;
  const category = event.target.category.value;

  const authorPara = document.createElement("p");
  authorPara.textContent = `${author}`;
  authorPara.classList.add("author-item");

  const titlePara = document.createElement("p");
  titlePara.textContent = `${title}`;
  titlePara.classList.add("title-item");

  const categoryPara = document.createElement("p");
  categoryPara.textContent = `${category}`;
  categoryPara.classList.add("category-item");

  const newReadingListItem = document.createElement("li");

  newReadingListItem.appendChild(titlePara);
  newReadingListItem.appendChild(authorPara);
  newReadingListItem.appendChild(categoryPara);

  const readingList = document.querySelector("#reading-list");
  readingList.appendChild(newReadingListItem);

  event.target.reset();
};

const handleFormDelete = function (event) {
  const readingList = document.querySelector("#reading-list");
  readingList.removeChild("li");
};
