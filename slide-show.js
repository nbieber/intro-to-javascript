// This first line ensures the document has loaded enough content where it's
// safe to start meddling with things
document.ready = function() {
  
  // How wide each image is
  var width = 991;
  
  // Dynamically resize the inner DIV element
  $('#inner').css('width', width * count);
  
  // Number of total slides
  var count = $('#slides img').length;

  // Current position of the slide show
  var n = 0;
  
  // On click, advance to the next slide
  $('#slides').click( function() {
    // YOUR CODE HERE - hide the current image, and show the next image
    




    
  }); // click event

}; // domready event
