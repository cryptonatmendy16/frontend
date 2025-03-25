function submitAssessment() {
    
    let stress = parseInt(document.getElementById("stress").value);
    let sleep = parseInt(document.getElementById("sleep").value);
    let motivation = parseInt(document.getElementById("motivation").value);

    
    let totalScore = stress + (4-sleep) + (4-motivation);

    
    let resultText = "";
    if (totalScore <= 4) {
        resultText = "Your mental state appears balanced. Keep maintaining healthy habits!";
    } else if (totalScore <= 7) {
        resultText = "You have a moderate level of stress. Consider relaxation techniques.";
    } else {
        resultText = "Your stress level seems high. It might help to talk to someone or seek professional advice.";
    }

    
    localStorage.setItem("assessmentResult", resultText);

    
    window.location.href = "results.html";
}
