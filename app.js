// Create a new speechSynthesis object
const synth = window.speechSynthesis;

// Arrays of words for constructing sentences
const subjects = ["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const places = ["on the moon", "on the chair", "on the spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variable to hold the text to be spoken
let textToSpeak = "";

// Function to speak the current sentence
function speakNow(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

// Function to update the displayed sentence
function updateStoryOutput() {
    document.getElementById('storyContainer').innerText = textToSpeak;
}

// Event listeners for each button to add a random word to the sentence
document.getElementById('subjectButton').addEventListener('click', () => {
    textToSpeak += `${subjects[Math.floor(Math.random() * subjects.length)]} `;
    updateStoryOutput();
});

document.getElementById('verbButton').addEventListener('click', () => {
    textToSpeak += `${verbs[Math.floor(Math.random() * verbs.length)]} `;
    updateStoryOutput();
});

document.getElementById('adjectiveButton').addEventListener('click', () => {
    textToSpeak += `${adjectives[Math.floor(Math.random() * adjectives.length)]} `;
    updateStoryOutput();
});

document.getElementById('nounButton').addEventListener('click', () => {
    textToSpeak += `${nouns[Math.floor(Math.random() * nouns.length)]} `;
    updateStoryOutput();
});

document.getElementById('placeButton').addEventListener('click', () => {
    textToSpeak += `${places[Math.floor(Math.random() * places.length)]} `;
    updateStoryOutput();
});

// Event listener for the speak button to speak the current text
document.getElementById('speakButton').addEventListener('click', () => {
    speakNow(textToSpeak);
});

// Event listener for the random story button to generate and speak a random sentence
document.getElementById('randomStoryButton').addEventListener('click', () => {
    textToSpeak = `${subjects[Math.floor(Math.random() * subjects.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]} ${places[Math.floor(Math.random() * places.length)]}`;
    updateStoryOutput();
    speakNow(textToSpeak);
});

// Event listener for the reset button to clear the current sentence
document.getElementById('resetButton').addEventListener('click', () => {
    textToSpeak = "";
    updateStoryOutput();
});
