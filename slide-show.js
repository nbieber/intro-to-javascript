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
    //hide the current image
        // YOUR CODE HERE
    
    //increment n, reset back to 0 if it exceeds count
       // YOUR CODE HERE

    //show the next image
      // YOUR CODE HERE

  }); // click event

}; // domready event

function hide(n) {
  // YOUR CODE HERE
}

function show(n) {
  // YOUR CODE HERE
}
