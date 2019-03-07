const intro = document.getElementById("intro");
const project = document.getElementById("all_projects");
const contact = document.getElementById("contact");
const links = document.getElementsByClassName("main_menu_link");
const navbar = document.getElementById("main_menu");
let sticky;
let first = true;
//main menu______________________________________________________

window.onscroll = function () {
    if (first) {
        sticky = navbar.offsetTop;
        first = false;
    }
    const project_pos = project.offsetTop;
    const contact_pos = contact.offsetTop;
    scrollSpy(project_pos, contact_pos);
};

function scrollSpy(project_pos, contact_pos) {
    if (window.pageYOffset >= sticky) {
        navbar.classList.remove("bg_gradient");
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("bg_gradient");
    }
    if (window.pageYOffset <= project_pos) {
        links[0].classList.add("active");
        links[1].classList.remove("active");
        links[2].classList.remove("active");
    }
    if (window.pageYOffset >= project_pos && window.pageYOffset <= contact_pos) {
        const links = document.getElementsByClassName("main_menu_link");
        links[0].classList.remove("active");
        links[1].classList.add("active");
        links[2].classList.remove("active");
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        const links = document.getElementsByClassName("main_menu_link");
        links[0].classList.remove("active");
        links[1].classList.remove("active");
        links[2].classList.add("active");
    }
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", event => {
        for(let i=0;i<3;i++){
            links[i].classList.remove("active");
        }
        links[i].classList.add("active");
    });
}