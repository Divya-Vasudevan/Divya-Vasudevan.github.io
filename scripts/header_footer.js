//for inserting the menu into the pages
let header = document.getElementById('header');
let content;
if (document.URL.includes("about.html")) {
    content = '<div id="header_inner"> <div class = "name" > Divya Vasudevan </div><div class = "menu_icon"><img src = "images/menu.png" alt = "menu"> </div> <ul id = "menu"><li><a href = "index.html">work</a></li><li class="selected"><a href = "about.html">about</a></li></ul></div>';
} else if (document.URL.includes("index.html") || !document.URL.includes(".html")) {
    content = '<div id="header_inner"> <div class = "name" > Divya Vasudevan </div><div class = "menu_icon"><img src = "images/menu.png" alt = "menu"> </div> <ul id = "menu"><li class="selected"><a href = "index.html">work</a></li><li><a href = "about.html">about</a></li></ul></div>';
} else {
    content = '<div id="header_inner"> <div class = "name" > Divya Vasudevan </div><div class = "menu_icon"><img src = "images/menu.png" alt = "menu"> </div> <ul id = "menu"><li><a href = "index.html">work</a></li><li><a href = "about.html">about</a></li></ul></div>';
}

header.insertAdjacentHTML('beforeend', content);

//for toggle menu in mobile view
let menu_icon = document.getElementsByClassName("menu_icon")[0];
let menu = document.getElementById('menu');

menu_icon.addEventListener("click", function (e) {
    menu.classList.toggle("show");
    if (menu.classList.contains("show")) {
        //img has to be close
        menu_icon.innerHTML = '<img src="images/close.png" alt="menu">';
    } else {
        //img has to be menu icon
        menu_icon.innerHTML = '<img src="images/menu.png" alt="menu">';
    }
});

//insert footer
let footer = document.getElementById('footer');
content = `<div id="footer_inner">`;
content += `<p class="section_heading">contact</p>`;
content += `<ul class="sm_links">`;
content += `<li><a href="https://www.linkedin.com/in/divya-vasudevan" target="_blank"><img src="images/linkedin-icon.png" alt="linkedin"></a></li>`;
content += `<li><a href="https://github.com/Divya-Vasudevan" target="_blank"><img src="images/github-icon.png" alt="github"></a></li>`;
content += `</ul>`;
content += '<p class="email">divya.vasudevan1939@gmail.com</p>';
content += '<p class="copyright">Site designed and coded by Divya Vasudevan</p>';
content += '</div>';
footer.insertAdjacentHTML('beforeend', content);
