const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const fortuneText = "You will be a :insertw: in :insertx:, and married to :inserty: with :insertz: kids.";

const jobTitles = ["Doctor", "Engineer", "Data Analyst", "Teacher", "UX Designer"];
const locations = ["New York", "Denver", "San Diego", "Madrid", "Paris"];
const partners = ["Hannia", "Layla", "Dani", "Olivia", "Xochi"];
const childrenCount = [1, 2, 3, 4, 5];

randomize.addEventListener('click', generateFortune);

function generateFortune() { 
    let newStory = fortuneText;

    const jobItem = randomValueFromArray(jobTitles);
    const locationItem = randomValueFromArray(locations);
    const partnerItem = randomValueFromArray(partners);
    const childrenItem = randomValueFromArray(childrenCount);

    newStory = newStory.replace(":insertw:", jobItem);
    newStory = newStory.replace(":insertx:", locationItem);
    newStory = newStory.replace(":inserty:", partnerItem);
    newStory = newStory.replace(":insertz:", childrenItem);

    if (customName.value !== '') {
        const customPartnerName = customName.value;
        newStory = newStory.replace(partnerItem, customPartnerName);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}



const calculateAgeButton = document.querySelector('.calculateAge');
const resultDisplay = document.querySelector('.result');

calculateAgeButton.addEventListener('click', calculateDogAge);

function calculateDogAge() {
    const humanAge = document.getElementById('dogAge').value;

    const dogAge = humanAge * 7;

    if (isNaN(humanAge) || humanAge < 1) {
        resultDisplay.textContent = "Please enter a valid dog's age!";
        resultDisplay.style.visibility = 'visible';
        return;
    }
    resultDisplay.textContent = `Your doggie is ${dogAge} years old in dog years!`;
    resultDisplay.style.visibility = 'visible'; }
    const reverseNumberButton = document.querySelector('.reverseNumber');
    const reversedNumberDisplay = document.getElementById('reversedNumber');

    reverseNumberButton.addEventListener('click', () => {
        const number = document.getElementById('numberToReverse').value;
        reversedNumberDisplay.textContent = reverseNumber(number);
    });

    function reverseNumber(x) {
        return x.toString().split('').reverse().join('');
    }


    const alphabeticalOrderButton = document.querySelector('.alphabeticalOrder');
    const sortedStringDisplay = document.getElementById('sortedString');

    alphabeticalOrderButton.addEventListener('click', () => {
        const string = document.getElementById('stringToSort').value;
        sortedStringDisplay.textContent = alphabeticalOrder(string);
    });

    function alphabeticalOrder(str) {
        return str.split('').sort().join('');
    }


    const capitalizeWordsButton = document.querySelector('.capitalizeWords');
    const capitalizedStringDisplay = document.getElementById('capitalizedString');

    capitalizeWordsButton.addEventListener('click', () => {
        const string = document.getElementById('stringToCapitalize').value;
        capitalizedStringDisplay.textContent = capitalizeWords(string);
    });

    function capitalizeWords(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }