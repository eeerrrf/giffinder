// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){

  // WRITE A CLICK HANDLER HERE
  /*
    1. click handler function
    2. get the typed input from the search input box
    3. call the functions below!
  */
  
    $("button").click(function(){
      var input = $("input").val();
      callGiphyAPIWithSearchTerm(input);
    });
  
  function giphyURLWithSearchTerm(searchTerm) {
      // write a function that will return a url for the giphy API with
      // the searchTerm provided in the parameters
        
     appendImageToGallery(searchTerm); 
    return searchTerm;
  }

  function appendImageToGallery(srcURL) {
      // write a function that will append an <img> to the div with class="gallery"
      // using the URL provided in the parameters
       $('body').append('<img src=' + srcURL + '>');
  }

  function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
            var randomizer = (Math.floor(Math.random()*10));
          console.log(randomizer);
           var url= "<img src=" +response.data[randomizer].images.original.url;+ "/>"; 
           console.log(url);
            appendImageToGallery(url);
           // Log the "type" property of the first image object to the console
           //console.log(response.type);
           // Log the "title" property of the first image object to the console
           //console.log(response.title);
           // Log the whole response to the console
            //console.log(response);
           // Log the first image of the data to the console
      },
    }); 
}
});
