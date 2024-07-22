function submitQuiz() {
    let username = document.getElementById('username').value;
    let score = 0;

    // Calculate the score
    // For example: 
    // let question1 = document.querySelector('input[name="q1"]:checked');
    // if (question1 && question1.value === "correctAnswer") {
    //     score += 20;
    // }

    alert(`${username}, your score is ${score}`);
}
