const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const imageFilenames = ['sketch.jpg', 'finalpitch.jpg', 'workinprogress.jpg', 'scatterplot.jpg', 'linegraph.jpg', 'finalgraph.jpg'];
const imageAlts = [
  'Sketching ',
  'Final pitch ',
  'progress graphs and visualizations',
  'Scatterplot ',
  'Line graph ',
  'final graphs'
];

for (let i = 0; i < imageFilenames.length; i++) {
  const imagePath = `img/${imageFilenames[i]}`;
  console.log(`Loading image: ${imagePath}`); // Debugging output

  const newImage = document.createElement('img');
  newImage.setAttribute('src', imagePath);
  newImage.setAttribute('alt', imageAlts[i]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImage.src = newImage.src;
    displayedImage.alt = newImage.alt;
  });
}
