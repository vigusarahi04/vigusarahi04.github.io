fetch('./js.json') 
    .then(response => response.json())
    .then(projects => {
        console.log('Projects loaded:', projects);
        if (!projects || !projects.projects) {
            console.error('Data or projects array is missing');
            return;
        }
        parseData(projects);
    })
    .catch(err => {
        console.error('Error loading projects:', err);
    });

function parseData(data) {
    if (!data || !data.projects) {
        console.error('Data or projects array is missing');
        return;
    }
    for(let i = 0; i < data.projects.length; i++) { 
        if (!data.projects[i].subtitle) {
            console.warn(`Missing subtitle for project at index ${i}:`, data.projects[i]);
        }
        document.getElementById("projects").insertAdjacentHTML('beforeend',`
          <a href="/portfolio/${data.projects[i].subdomain}.html">
              <div class="row project" id="${data.projects[i].subdomain}">
                  <div class="description">
                      <h2>${data.projects[i].name}</h2>
                      <p class="subtitle">${data.projects[i].subtitle || 'No subtitle available'}</p>
                      <p>${data.projects[i].abstract}</p>
                  </div>
              </div>
          </a>
        `);
    }
}
