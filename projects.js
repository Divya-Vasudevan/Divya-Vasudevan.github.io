const projects = [
    {
      title: 'FinanceTrack Mobile App',
      description: 'A comprehensive mobile app redesign that simplifies personal finance management with intuitive dashboards and automated tracking features.',
      imageUrl: 'https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Mobile App', 'UX Research', 'UI Design'],

    },
    {
      title: 'HealthConnect Platform',
      description: 'A healthcare platform that connects patients with providers through a user-friendly interface, improving access to care and health outcomes.',
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Web App', 'Service Design', 'Prototyping'],

    },
    {
      title: 'EduLearn Course Dashboard',
      description: 'An e-learning platform dashboard redesign that enhances student engagement and progress tracking through improved information architecture.',
      imageUrl: 'https://images.pexels.com/photos/8617799/pexels-photo-8617799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Web Design', 'Information Architecture', 'UX Research'],

    },
    {
      title: 'TravelBuddy App',
      description: 'A travel companion app that helps users discover, plan, and share travel experiences with personalized recommendations and social features.',
      imageUrl: 'https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Mobile App', 'User Testing', 'UI Design'],
    },
  ];

  let htmlContent = "";

  for (let p of projects) {
    htmlContent += `<a class="projectCard" href="#">
    <img src="${p.imageUrl}" alt="${p.title}" />
    <h2>${p.title}</h2>
    <p class="body_md">${p.description}</p>
    <ul class="project-tags">
      ${p.tags.map(tag => `<li><p class="body_sm">${tag}</p></li>`).join('')}
    </ul>
  </a>`;
  }
  document.getElementById("work").innerHTML = htmlContent;