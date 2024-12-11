let proj;
proj = projects;
for (const b of document.querySelectorAll("#button button")) {
    b.addEventListener("click", e => {
        console.log(e.target.value); 
        sortProjects(e.target.value);
    });
}

function sortProjects(button) {
    if (!proj || !proj.projects) {
        console.error('Projects not loaded yet');
        return;
    }

    if (button === "clear") { 
        for (let i = 0; i < proj.projects.length; i++) { 
            const projectElement = document.getElementById(proj.projects[i].subdomain);
            if (projectElement) projectElement.style.display = "flex";
        }
    } else if (button !== undefined) { 
        for (let i = 0; i < proj.projects.length; i++) {
            const projectElement = document.getElementById(proj.projects[i].subdomain);
            if (!projectElement) continue;
            
            if (typeof proj.projects[i].subdomain === 'string' && 
                proj.projects[i].subdomain.toLowerCase().includes(button.toLowerCase())) {
                projectElement.style.display = "flex";
            } else {
                projectElement.style.display = "none";
            }
        }
    } else {
        console.log("error, button value is undefined");
    }
}