function submitQuiz() {
    let username = document.getElementById('username').value;
    let fruits = document.querySelectorAll('input[name="fruit"]:checked');
    let score = 0;
    let correctAnswers = ['apple', 'banana', 'orange', 'grape', 'mango', 'strawberry'];
    
    fruits.forEach(fruit => {
        if (correctAnswers.includes(fruit.value)) {
            score += 20;
        }
    });

    if (score > 100) score = 100;

    alert(`${username}, your score is ${score}`);
}
