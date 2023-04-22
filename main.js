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

// ChatGPT:
// const wordCounter = (value) => {
//   // select the HTML elements for displaying the word count and error message
//   const wordCount = document.querySelector('#word-count');
//   const error = document.querySelector('#error');

//   // display the input value in the console
//   console.log(value);

//   if (value) {
//     // count the number of words in the input value
//     const words = value.trim().split(/\s+/);
//     const count = words.length;

//     // display the word count on the page
//     // wordCount.innerHTML = `Word Count: ${count}`;
//     wordCount.innerHTML = `Word Count: 0`; 
//     error.innerHTML = ""; // clear any previous error message
//   } else {
//     // display an error message if the input is empty
//     error.innerHTML = "Please input text";
//     wordCount.innerHTML = ""; // clear the word count
//   }
// };

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
const toggleMode = (btnText) => {
  // complete the function
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
