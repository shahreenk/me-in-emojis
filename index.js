const emojiContainer = document.getElementById("emoji-container");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const emojiInput = document.getElementById("emoji-input"); 
const myEmojis = ["👩‍🚀", "📚", "🌮"];

function renderEmojis() {
    emojiContainer.innerHTML = ""; // Clear the emoji container
    for (i = 0; i < myEmojis.length; i++) { // Iterates through myEmojis array
        emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`; // Wraps each item in a span element, and adds the elements to the emoji-container div
    }
}

renderEmojis();

pushBtn.addEventListener("click", function() { // When the push button is clicked
    if (emojiInput.value) { // If there is something in the emoji-input field
        myEmojis.push(emojiInput.value); // Add the emoji-input value to the end of the myEmojis array
        emojiInput.value = ""; // Clear the emoji input field
        renderEmojis(); // Call function to render out the emojis in the container
    }
})

unshiftBtn.addEventListener("click", function(){ // When the unshift button is clicked
    if (emojiInput.value) { // If there is something in the emoji-input field
        myEmojis.unshift(emojiInput.value); // Add the emoji-input value to the beginning of the myEmojis array
        emojiInput.value = ""; // Clear the emoji input field
        renderEmojis(); // Call function to render out the emojis in the container
    }
})

popBtn.addEventListener("click", function() { // When the push button is clicked
        myEmojis.pop(); // Remove the last item from the myEmojis array
        renderEmojis(); // Call function to render out the emojis in the container
})

shiftBtn.addEventListener("click", function() { // When the push button is clicked
        myEmojis.shift(); // Remove the last item from the myEmojis array
        renderEmojis(); // Call function to render out the emojis in the container
})