const touch_menu = document.getElementsByClassName("hamburger")[0];
const touch_nav = document.querySelector("#touch_menu nav");
const projects = document.getElementsByClassName("projlink");

anime({
    targets: '#main_container',
    opacity: {
        value: 1,
        duration: 500
    },
    easing: 'linear'
});

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("mouseenter", function (event) {
        // highlight the mouseover target
        if (projects[i] !== event.target) return;
        event.target.firstElementChild.style.color = "black";
        //change image
        let onShow = document.getElementsByClassName("show")[0];
        let code = event.target.getAttribute("data-key");
        let toShow = document.querySelector(`img[data-key="${code}"]`);
        if (onShow && toShow) {
            onShow.classList.remove("show");
            toShow.classList.add("show");
        }
    }, false);
    projects[i].addEventListener("click", function (event) {
        event.preventDefault();
        // animate page transition to project
        anime({
            targets: ['#proj_list',
                '#menu'
            ],
            opacity: {
                value: 0,
                duration: 300
            },
            easing: 'linear'
        });
        anime({
            targets: '#change',
            flexGrow: '0',
            easing: 'easeInOutQuad',
            duration: 500
        });
        setTimeout(() => {
            window.location.href = event.target.href;
        }, 500);
        //once page changed to new one set home page back to normal - might not need this
    }, false);
}
for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("mouseleave", function (event) {
        event.target.firstElementChild.style.color = "white";
    }, false);
}

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

document.querySelectorAll("#proj_list ul")[0].addEventListener("mouseleave", function (event) {
    //change image
    let onShow = document.getElementsByClassName("show")[0];
    let toShow = document.querySelector(`img[data-key="0"]`);
    if (onShow && toShow) {
        onShow.classList.remove("show");
        toShow.classList.add("show");
    }
}, false);