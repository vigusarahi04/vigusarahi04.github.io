fetch('./projects.json') 
    .then(response => response.json())
    .then(data => {
        console.log('Projects loaded:', data.projects);
        displayProjects(data.projects);
    })
    .catch(err => {
        console.error(`Error: ${err}`); 
    });

function displayProjects(projects) {
    const projectContainer = document.getElementById('projects');
    projects.forEach(project => {
        const projectHTML = `
            <a href="${project.link}" class="project-link">
                <div class="project-card">
                    <img src="images/${project.images[0] || 'default.jpg'}" alt="${project.name} project image" class="project-image">
                    <div class="project-info">
                        <h3>${project.name}</h3>
                        <p>${project.abstract}</p>
                        <p class="subtitle">Technologies: ${project.subtitle.join(', ')}</p>
                    </div>
                </div>
            </a>
        `;
        projectContainer.insertAdjacentHTML('beforeend', projectHTML);
    });
}

      const displayedImage = document.querySelector('.displayed-img');
      const thumbBar = document.querySelector('.thumb-bar');
      
      const imageFilenames = ['sketch.jpg', 'finalpitch.jpg', 'workinprogress.jpg', 'scatterplot.jpg', 'linegraph.jpg', 'finalgraph.jpg'];
      const imageAlts = [
        'Sketching',
        'Final pitch',
        'Progress graphs and visualizations',
        'Scatterplot',
        'Line graph',
        'Final graphs'
      ];
