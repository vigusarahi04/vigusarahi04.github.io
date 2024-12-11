const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
console.log(thumbBar)

const imageFilenames = ['sketch.jpg', 'finalpitch.jpg', 'workinprogress.jpg', 'scatterplot.jpg', 'finalgraph.jpg'];
const imageAlts = [
  'Sketching',
  'Final pitch',
  'Progress graphs and visualizations',
  'Scatterplot',
  'Final graphs'
];
for (let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../img/${imageFilenames[i]}`);
    newImage.setAttribute('alt', imageAlts[i]);
    thumbBar.appendChild(newImage);
  
    newImage.addEventListener('click', () => {
      displayedImage.src = newImage.src;
      displayedImage.alt = newImage.alt;
    });
  }