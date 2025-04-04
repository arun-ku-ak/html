const imageFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const gallery = document.getElementById('gallery');
const mainImage = document.getElementById('main-image');
const thumbnailContainer = document.getElementById('thumbnail-container');
const btnClass = document.getElementById('btn');


mainImage.src = "images/" + imageFilenames[0];

for (let i = 1; i <= imageFilenames.length; i++) {
  const thumb = document.createElement('img');
  thumb.src = "images/" + imageFilenames[i - 1];
  thumb.className = "thumbnail";
  thumbnailContainer.appendChild(thumb);

  thumb.addEventListener('click', function () {
    mainImage.src = thumb.src;
  });
  btn.addEventListener('click', function () {
    if (mainImage.classList.contains("dark")) {
      mainImage.style.filter = "brightness(1.2)";
      mainImage.classList.remove("dark");
      mainImage.classList.add("light");
      btn.innerHTML = "Darken";
    } else {
      mainImage.style.filter = "brightness(0.8)";
      mainImage.classList.remove("light");
      mainImage.classList.add("dark");
      btn.innerHTML = "Lighten";
    }
  });
}