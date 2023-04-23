/*
const fileInput = document.getElementById("file-input");
const imageGallery = document.querySelector(".image-gallery");

fileInput.addEventListener("change", function (event) {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const image = document.createElement("img");
    const span = document.createElement("span");
    image.src = URL.createObjectURL(file);
    span.textContent = file.name;
    imageGallery.appendChild(image);
    imageGallery.appendChild(span);
  }
});

imageGallery.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    event.target.previousSibling.remove();
    event.target.remove();
  }

const fileInput = document.getElementById("file-input");
const imageGallery = document.querySelector(".image-gallery");

fileInput.addEventListener("change", function (event) {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    image.src = URL.createObjectURL(file);
    span.textContent = file.name;
    deleteButton.textContent = "Удалить";
    deleteButton.addEventListener("click", function () {
      imageContainer.remove();
    });
    imageContainer.appendChild(image);
    imageContainer.appendChild(span);
    imageContainer.appendChild(deleteButton);
    imageGallery.appendChild(imageContainer);
  }
});


});*/





const fileInput = document.getElementById("file-input");
const imageGallery = document.querySelector(".image-gallery");

fileInput.addEventListener("change", function (event) {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const image = document.createElement("img");
    const span = document.createElement("span");
    image.src = URL.createObjectURL(file);
    span.textContent = file.name;
    imageGallery.appendChild(image);
    imageGallery.appendChild(span);
  }
});