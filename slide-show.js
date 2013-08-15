// This first line ensures the document has loaded enough content where it's
// safe to start meddling with things
document.ready = function() {
  
  // How wide each image is
  var width = 991;
  
  // Number of total slides
  var count = $('#slides img').length;
  
  // Dynamically resize the inner DIV element
  $('#inner').css('width', width * count);

  // Current position of the slide show
  var n = 0;
  
  // On click, advance to the next slide
  $('#slides').click( function() {
    // YOUR CODE HERE - hide the current image, and show the next image
    




    
  }); // click event

}; // domready event

// Hide the nth image
function hide(n) {
  $($('#slides img')[n]).fadeOut();  
}

// Show the nth image
function show(n) {
  $($('#slides img')[n]).fadeIn();  
}