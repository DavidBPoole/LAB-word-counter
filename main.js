// // YOU WILL MODIFY THIS FUNCTION TO GET THE PROGRAM TO WORK
// const wordCounter = (value) => {
//   // Type into the input and press submit, you will see the value you entered in your console
//   console.log(value);

//   if (value) {
//     // COMPLETE THE LOGIC 
//     wordCount.innerHTML = `Word Count: 0`; 
//   } else {
//     // if the value is empty, set the error message value to "Please input text"
//     error.innerHTML = "Please input text"; // UPDATE THIS
//   }
// }

const wordCounter = (value) => {
  console.log(value);

  // Remove leading/trailing white spaces and split the string into an array of words
  const wordsArray = value.trim().split(/\s+/);

  if (value) {
    // Display the number of words in the array
    wordCount.innerHTML = `Word Count: ${wordsArray.length}`;
  } else {
    // If the value is empty, set the error message value to "Please input text"
    error.innerHTML = "Please input text";
  }
}

// OPTIONAL CHALLENGE
// const toggleMode = (btnText) => {
  // complete the function
  const toggleMode = (btnText) => {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      btnText.textContent = 'Dark Mode';
    } else {
      body.classList.add('dark-mode');
      btnText.textContent = 'Light Mode';
    }
  }

// ************************************************ //
// **** DO NOT MODIFY THE CODE BELOW THIS LINE **** //
// ************************************************ //

// These are query selectors. We will focus on them later in the course
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

// These are event listeners. We will focus on them later in the course
form.addEventListener("submit", (event) => {
  event.preventDefault(); // the default behavior of a form is to reload the page, we do not want that so we want to prevent that behavior
  error.innerHTML = ""; // clear out the innerHTML on submit
  wordCount.innerHTML = ""; // clear out the innerHTML on submit
  const value = textarea.value; // grab the value of the text area on submit
  wordCounter(value); // call the function and pass it the value
});

form.addEventListener("reset", () => {
  error.innerHTML = ""; // on reset, clear the innderHTML
  wordCount.innerHTML = ""; // on reset, clear the innderHTML
});

toggleButton.addEventListener("click", (event) => {
  toggleMode(event.target.innerHTML);
});
