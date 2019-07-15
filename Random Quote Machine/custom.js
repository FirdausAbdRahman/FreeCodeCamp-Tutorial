$(document).ready(function(){
  
  function getQuote(){
    const quotes = ["Hello World!", "Hello Sea!", "Hello Sky!"];
    const authors = ["-Author1", "-Author2", "-Author3"];
    const randomNum = Math.floor((Math.random()*quotes.length));
  
    const randomQuote = quotes[randomNum];
    const randomAuthor = authors[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
    
  $(".btn").on("click", function(){
    getQuote();
  });
      
});