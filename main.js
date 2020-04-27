var imagesArray = new Array('img/you-rock.jpg', 'img/you-amazing.png', 'img/stay-home-strong.jpg', 'img/in-this-together.png', 'img/braver-stronger.jpg', 'img/dont-give-up.jpg', 'img/stay-positive.jpg');

function displayImage() {
    var num = Math.floor(Math.random() * imagesArray.length);
    document.canvas.src = imagesArray[num];
}