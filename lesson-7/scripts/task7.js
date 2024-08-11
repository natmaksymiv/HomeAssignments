
`use strict`



      function showRandomImage(a = '<img src="../img/1.jpg">', b = '<img src="../img/2.jpg">', c = '<img src="../img/3.jpg">', d = '<img src="../img/4.jpg">') {

         const randomNumber =  Math.floor(Math.random() * 4) + 1;

         let selectedImage;

    switch(randomNumber) {
      case 1:
          selectedImage = a;
          break;
      case 2:
          selectedImage = b;
          break;
      case 3:
          selectedImage = c;
          break;
      case 4:
          selectedImage = d;
          break;
      default:
          console.error("404");
  }
  return selectedImage
}

document.write(showRandomImage())