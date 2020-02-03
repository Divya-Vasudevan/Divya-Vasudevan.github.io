const touch_menu = document.getElementsByClassName("hamburger")[0];
const touch_nav = document.querySelector("#touch_menu nav");
const proj_container = document.getElementsByClassName("proj_content_container")[0];

anime({
    targets: proj_container,
    opacity: {
        value: 1,
        duration: 500
    },
    easing: 'linear'
});

touch_menu.addEventListener("click", function (event) {
    // highlight the mouseover target
    touch_menu.classList.toggle("is-active");
    if (touch_nav.classList.contains("show")) {
        anime({
            targets: touch_nav,
            opacity: {
                value: 0,
                duration: 300
            },
            easing: 'linear'
        });
        setTimeout(() => {
            touch_nav.classList.remove("show");
        }, 300);
    } else {
        touch_nav.classList.add("show");
        anime({
            targets: touch_nav,
            opacity: {
                value: 1,
                duration: 300
            },
            easing: 'linear'
        });
    }
}, false);



//slideshow

let arrows = document.getElementsByClassName("arrow");
arrows[0].addEventListener("click", function (event) {
    event.preventDefault();
    prevSlide();
}, false);
arrows[1].addEventListener("click", function (event) {
    event.preventDefault();
    nextSlide();
}, false);

function nextSlide() {
    let current = document.querySelector(".slideshow_container .active");
    if (current.nextSibling != null && current.nextSibling.nextSibling != null) {
        console.log("next ok");
        current.nextSibling.nextSibling.classList.add("active");
    } else {
        console.log("next not ok");
        document.getElementsByClassName("mySlides")[0].classList.add("active");
    }
    current.classList.remove("active");
}

function prevSlide() {
    let current = document.querySelector(".slideshow_container .active");
    console.log(current.previousSibling);
    if (current.previousSibling != null && current.previousSibling.previousSibling != null) {
        console.log("prev ok");
        current.previousSibling.previousSibling.classList.add("active");
    } else {
        console.log("prev not ok");
        document.getElementsByClassName("mySlides")[5].classList.add("active");
    }
    current.classList.remove("active");
}