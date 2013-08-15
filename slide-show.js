// This first line ensures the document has loaded enough content where it's
// safe to start meddling with things
document.ready = function() {
  
  // How wide each image is
  var width = 991;
  
  // Current position of the slide show
  var n = 0;
  
  // Number of total slides
  var count = $('#slides img').length;
  
  // Dynamically resize the inner DIV element
  $('#inner').css('width', width * count);
  
  // On click, advance to the next slide
  $('#slides').click( function() {
    
    $($('#slides img')[n]).hide();

    // Increment the position by one
    // The modulo operator (%) resets n back to 0 if it exceeds count
    n = (n + 1) % count;
    
    // Slide the view to the correct position
    $($('#slides img')[n]).show();
    
  }); // click event

}; // domready event

