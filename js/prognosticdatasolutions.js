(function() {

  // Get Images
  var images = [];
  var counter = 0;
  var imageElements = $('#images').children();
  imageElements.each(function() {
    images.push(this);
    if (counter !== imageElements.length-1) {
      $(this).fadeOut();
    }
    counter++;
  })

  // Rotate Images
  var imageIndex = images.length-1;
  var currentImage = images[imageIndex];
  var newImage = images[0];
  var timeoutId;
  function rotateImage() {
    // Transition
    $(newImage).fadeIn(2000);
    $(currentImage).fadeOut(2000);

    // Prep for Next Cycle
    currentImage = newImage;
    if (imageIndex+1 >= images.length) {
      imageIndex = 1;
      newImage = images[imageIndex];
    } else {
      imageIndex++;
      newImage = images[imageIndex];
    }
    timeoutId = window.setTimeout(rotateImage, 5000);
  }
 
  // Bootstrap
  window.setTimeout(rotateImage, 5000);
 
})()