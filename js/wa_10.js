
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they started talking for a few moments, then later on within the week :insertz:. Dani saw the whole thing, but was not surprised with new addition to the chapter a new penguin plush Penny Penguin weighs 300 pounds, so big all the sisters and the new members couldnt hold it."

const insertX = [ 
"Penny Penguin",
"Vicky",
"Penguin",
"Hannia",
];
const insertY = [ "Chapter",
"Strolling",
"KDCHI House",
"MGC Event"
]

const insertZ = [" at confrence",
"at the presentantion",
"at sisterhood"]

randomize.addEventListener('click', result);

function result() { 
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", customName);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + "stone";
    const temperature =  Math.round((94-32)*5/9) + "centigrade";
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}