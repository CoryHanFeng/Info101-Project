// frequently asked questions javaScript//

// Get all elements with the class "question" and store them in the questions variable
var questions = document.getElementsByClassName("question");
var i;

// Loop through each question element
for (i = 0; i < questions.length; i++) {
    // Add a click event listener to each question
    questions[i].addEventListener("click", function() {
        // Toggle the "active" class on the clicked question element
        this.classList.toggle("active");
        
        // Toggle the "active" class on the clicked question
        this.parentElement.classList.toggle("active");

        // Get the corresponding answer.
        var answers = this.nextElementSibling;

        // returns the value of the css properties belonging to answers (current display)
        var style = window.getComputedStyle(answers);

        // Check if the question clicked is set to block, if it is then it changes the message
        if (style.display === "block") {
            // set the display to none so the answers are not shown
            answers.style.display = "none";
        } else {
            // else show the answers
            answers.style.display = "block";
        }
    });
    
}

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Show a popup message
    alert("Feedback submitted successfully!");
});

// document.querySelector('.lessonSelect').addEventListener('click', function() {
//     var loginForm = document.querySelector('.login-form');
//     var loginTitle = document.getElementById('loginTitle');
//     var welcomeBack = document.getElementById('Welcoming');
//     var mainTile = document.querySelector('.mainTile');
//     if (loginForm.style.display === 'none') {
//         loginForm.style.display = 'block';
//         loginTitle.style.display = 'block';
//         welcomeBack.style.display = 'none';
//         mainTile.style.display = 'none';
//     } else {
//         loginForm.style.display = 'none';
//         loginTitle.style.display = 'none';
//     }
// });

// document.querySelector('.logIn').addEventListener('click', function() {
//     var loginForm = document.querySelector('.login-form');
//     var loginTitle = document.getElementById('loginTitle');
//     var welcomeBack = document.getElementById('Welcoming');
//     var mainTile = document.querySelector('.mainTile');
//     if (loginForm.style.display === 'none') {
//         loginForm.style.display = 'block';
//         loginTitle.style.display = 'block';
//         welcomeBack.style.display = 'none';
//         mainTile.style.display = 'none';
//     } else {
//         loginForm.style.display = 'none';
//         loginTitle.style.display = 'none';
//     }
// });






