function bg() {

    var imgCount = 3;
    var dir = 'assets/img/newpic/';
    var randomCount = (Math.floor(Math.random() * imgCount));
    var images = ['001.jpg', '002.jpg', '003.jpg'];
    document.getElementById('heri').setAttribute("style", "background-image: url(" + dir + images[randomCount] + ");background-repeat: no-repeat;transition: all 2s;");
  }
  
setInterval(bg, 5000);
