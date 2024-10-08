const flashcard = document.getElementById('flashcard');
const flipButton = document.getElementById('flip-button');
const nextButton = document.getElementById('next-button');
const termDisplay = document.getElementById('term');
const definitionDisplay = document.getElementById('definition');

// Predefined flashcards
const flashcards = [
    { term: "Xargs", definition: "Pass input as arguments to another command" },
    { term: "Grep", definition: "Search for patterns in files" },
    { term: "Awk", definition: "A programming language used for pattern scanning and processing" },
    { term: "Sed", definition: "A stream editor for filtering and transforming text" },
    { term: "Curl", definition: "A command-line tool for transferring data with URLs" },
    // Add more entries as needed
];

// Function to display the current flashcard
let currentIndex = 0;
function displayFlashcard(index) {
    if (index >= 0 && index < flashcards.length) {
        termDisplay.textContent = flashcards[index].term;
        definitionDisplay.textContent = flashcards[index].definition;
    }
}

// Initialize with the first flashcard
displayFlashcard(currentIndex);

flipButton.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
});

// Function to show the next flashcard
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length; // Move to the next card
    displayFlashcard(currentIndex);
    flashcard.classList.remove('flipped'); // Reset to front side
});

// Optional: Function to navigate through flashcards with keyboard
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % flashcards.length; // Go to next card
        displayFlashcard(currentIndex);
        flashcard.classList.remove('flipped'); // Reset to front side
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length; // Go to previous card
        displayFlashcard(currentIndex);
        flashcard.classList.remove('flipped'); // Reset to front side
    }
});
