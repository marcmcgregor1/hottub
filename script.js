var myImage = document.getElementById("img-1");
var myImageTwo = document.getElementById("img-2");

var imageArray = ["/images/img-1.jpg", "/images/img-6.jpg"];
var imageArrayTwo = ["/images/img-2.jpg", "/images/img-7.jpg"];

var imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage, 1000);

function changeImageTwo() {
  myImageTwo.setAttribute("src", imageArrayTwo[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArrayTwo.length) {
    imageIndex = 0;
  }
}
setInterval(changeImageTwo, 1000);
