let widthMatch = window.matchMedia("(max-width: 570px)");
// mm in the function arg is the matchMedia object, passed back into the function
widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
        // it matches the media query: that is, max-width is <= 570px
        document.getElementById("card").addEventListener("onmouseover", showGif);



        function showGif(src) {
           var gif = document.createElement("gif");
           gif.src = src;

           // This next line will just add it to the <body> tag
            document.body.appendChild(gif);
          }
        
        
    }

});
