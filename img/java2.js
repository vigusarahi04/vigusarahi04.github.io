fetch('./js.json') 
    .then(response => response.json())
    .then(projects => {
        console.log('Projects loaded:', projects);
        parseData(projects);
    })
    .catch(err => {
        console.error(`Error: ${err}`); 
    });

function parseData(data) {
    for(let i = 0; i < data.projects.length; i++) {
        document.getElementById("projects").insertAdjacentHTML('beforeend', `
            <a href="/portfolio/${data.projects[i].subdomain}.html">
                <div class="row project" id="${data.projects[i].subdomain}">
                    <div class="projimg">
                        <img src="img/${data.projects[i].image}" alt="${data.projects[i].name}">
                    </div>
                    <div class="description">
                        <h2>${data.projects[i].name}</h2>
                        <p class="subtitle">${data.projects[i].subtitle}</p>
                        <p>${data.projects[i].abstract}</p>
                    </div>
                </div>
            </a>
        `);
    }
}

