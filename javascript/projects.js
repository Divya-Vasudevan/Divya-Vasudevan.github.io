let projects = [{
        name: 'Online Job Search Made Easy',
        img_url: 'images/profile-pic-05.jpg',
        summary: 'Looking for a job requires a heavy investment in time. Identifying the right resources is just as important as preparing and applying for the job and is very time consuming. This project is an initiative to indentify the issues in the online job application process and help make the experience easier.',
        tools: 'Axure RP, Illustrator, Photoshop',
        Contributors: 'UI / UX Design, Solo Project',
        details_link: 'projects/project1.html'
    },
    {
        name: 'Chinese Home-cooked Food Delivery Service',
        img_url: 'images/profile-pic-06.jpg',
        summary: 'One of the major difficulties faced by Chinese students living away from home is getting comfortable in a new environment. This can make them feel cut off from their culture and one way in which they try to reconnect is through food. Our Question: How could we design a food delivery app that provides home-cooked meals for Chinese students living away from home?',
        tools: 'Illustrator, Google Survey',
        Contributors: 'Design Research, Group Project with Om Patil and Yuna Lee',
        details_link: 'projects/project2.html'
    },
    {
        name: 'BYG CRM Mobile App',
        img_url: 'images/profile-pic-07.jpg',
        summary: 'BYG (Book Your Game) is a company that deals with marketing, CRM, websites and apps for gyms in mulitple cities in India. The initial focus of the company was on getting the CRM product up and running resulting in not much design being put into it. The goal of the project was to improve the UX and redo the UI of the product to create a better experience.',
        tools: 'Illustrator, Photoshop',
        Contributors: 'UI / UX Redesign, Group Project with Saurav Nag',
        details_link: 'projects/project3.html'
    },
    {
        name: 'Vurve Website',
        img_url: 'images/profile-pic-08.jpg',
        summary: 'This is a redesign concept for the website of Vurve salon, Chennai. The redesign was done to improve the UX of the website and also to seamlessly showcase the brand and what it stands for.',
        tools: 'Axure RP, Illustrator, Affinity Photo',
        Contributors: 'UI / UX Redesign Concept, Solo Project',
        details_link: 'projects/project4.html'
    },
    {
        name: 'Design for Social Media Marketing',
        img_url: 'images/profile-pic-09.jpg',
        summary: 'As a part of the Tablo Noir team we created social media marketing campaigns to promote a number of our clients online. The following are some of designs created for these campaigns on Instagram and Facebook.',
        tools: 'Illustrator, Affinity Photo',
        Contributors: 'Graphic Design: Self, Content Creation: Sharon',
        details_link: 'projects/project5.html'
    },
    {
        name: 'A Bite of France - Collateral',
        img_url: 'images/profile-pic-10.jpg',
        summary: 'A Bite of France was a food festival conducted by our design firm, Tablo Noir, in collaboration with Pondicherry tourism. The design team was responsible for creating collaterals for the event and taking care of promoting it online and via print mediums.',
        tools: 'Illustrator, Affinity Photo',
        Contributors: 'Graphic Design, Collaborative project as part of the Tablo Noir Design Team',
        details_link: 'projects/project6.html'
    }
]

let projectsContainer = document.querySelectorAll('.project .bounding_box');
let count = 0;
const addMovie = (project, count) => {
    let HTMLcontent = `<div class="project_content">
                            <div class="project_intro_content">
                                <div class="project_title_container">
                                    <p class="title">${project.name}</p>
                                    <p class="contributors">${project.Contributors}</p>
                                </div>
                                <div class="about_project">
                                    <p class="content">${project.summary}</p>
                                </div>
                            </div>
                            <div class="profile_pic">
                                <img src="${project.img_url}" alt="project profile picture">
                            </div>
                        </div>
                        <div class="details_link">
                            <div class="link">
                                <a href="${project.details_link}">View Details</a>
                            </div>
                            <div class="border_line"></div>
                        </div>`;
    projectsContainer[count].insertAdjacentHTML("beforeend", HTMLcontent);
}

projects.forEach(element => {
    addMovie(element, count);
    count++;
});