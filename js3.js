let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1,window.location.herf.lastIndexOf"."));
console.log(subdomain);
fetch('./js.json') 
    .then(response => response.json())
    .then(projects => {
        console.log('Projects loaded:', projects);
    })
    .catch(err => {
        console.error(`Error: ${err}`); 
    });