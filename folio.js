let preloader = document.querySelector("#preloader");
let mobile = document.querySelector(".fa-align-justify");
let nav = document.getElementById("nav");
let close = document.getElementById('close');

mobile.addEventListener('click', function(e){
    nav.classList.remove('hide-mobile');
    nav.classList.add('mobile-view')
    mobile.style.display = 'none';
})

close.addEventListener('click', function(e){
	nav.classList.add('hide-mobile');
	mobile.style.display = 'block';
})

fade(preloader)

  // Function to FadeOut An Element
 function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

// Function to unfade an Element
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}