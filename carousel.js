const photos = document.querySelectorAll(".items");
const totalPhotos = photos.length;
let photoNo = 0;

document.querySelector(".prev-btn").addEventListener("click", movePrevPhoto);
document.querySelector(".next-btn").addEventListener("click", moveNextPhoto);

function hidePhotos() {
  for (let photo of photos) {
    photo.classList.remove("visibleItem");
  }
}

function moveNextPhoto() {
  hidePhotos();
  if (photoNo === totalPhotos - 1) {
    photoNo = 0;
  } else {
    photoNo++;
  }
  photos[photoNo].classList.add("visibleItem");
}

function movePrevPhoto() {
  hidePhotos();
  if (photoNo === 0) {
    photoNo = totalPhotos - 1;
  } else {
    photoNo--;
  }
  photos[photoNo].classList.add("visibleItem");
}
