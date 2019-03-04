const navbar = document.getElementById("main_menu");
const intro = document.getElementById("intro");
const project = document.getElementById("all_projects");
const contact = document.getElementById("contact");
const links = document.getElementsByClassName("main_menu_link");

//main menu______________________________________________________
const sticky = navbar.offsetTop;
window.onscroll = function () {
    const project_pos = project.offsetTop;
    const contact_pos = contact.offsetTop;
    scrollSpy(project_pos, contact_pos);
};

function scrollSpy(project_pos, contact_pos) {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
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
    if ( /*window.pageYOffset >= contact_pos*/ (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
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

//form__________________________________________________________________________
function submitmyform() {
    let xhttp = new XMLHttpRequest();
    let name = document.getElementsByName("name")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let message = document.getElementsByName("message")[0].value;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xhttp.open("POST", "email_form.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let data = `name=${name}&email=${email}&message=${message}`;
    xhttp.send(data);
}