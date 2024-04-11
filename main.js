function checkAnswer(inputId) {
    var answer = document.getElementById(inputId).value.toLowerCase();
    var feedbackId = inputId.replace('answer', 'feedback');

    if (answer === 'keyboard') {
        document.getElementById(feedbackId).innerText = 'Correct!';
        // Add logic to unlock next part of the room
    } else {
        document.getElementById(feedbackId).innerText = 'Try again...';
    }
}
