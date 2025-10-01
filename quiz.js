// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Identify the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user’s selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    // If no option is selected
    if (!selectedOption) {
        feedback.textContent = "⚠️ Please select an answer.";
        feedback.style.color = "#dc3545"; // red
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare answers
    if (userAnswer === correctAnswer) {
        feedback.textContent = "✅ Correct! Well done.";
        feedback.style.color = "#28a745"; // green
    } else {
        feedback.textContent = "❌ That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // red
    }
}

// Step 5: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
