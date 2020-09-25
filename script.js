/* Slideshow for Billboard Ad */
var myImage = document.querySelector("#img-1");

var imageArray = ["/images/img-1.jpg", "/images/img-6.jpg"];

var imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage, 1500);
