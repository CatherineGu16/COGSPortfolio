// expandable-image
//make image fake lightbox

var expandableImages = document.getElementsByClassName('expandable-image');
var expandedImg = document.querySelector('#expandedImage img');
var expandedImageContainer = document.getElementById('expandedImage');
var closeButton = document.getElementById('closeButton');

for (var i = 0; i < expandableImages.length; i++) {
  expandableImages[i].addEventListener('click', function () {
    expandedImg.src = this.src;
    expandedImageContainer.style.display = 'block';
  });
}

closeButton.addEventListener('click', function () {
  expandedImageContainer.style.display = 'none';
});