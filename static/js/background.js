let i = 0;
setInterval(function() {
  let images = ['park2.jpg','park3.jpg','park4.jpg']
      document.body.style.backgroundImage = "url(../static/img/" + images[i] + ")";
      i += 1;
      if (i > images.length) {
        i =  0;
        document.body.style.backgroundImage = "url(../static/img/park.jpg)";
      }
}, 10000);
