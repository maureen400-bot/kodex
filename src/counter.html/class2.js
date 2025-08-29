function checkEligibility() {
  let age = document.getElementById("age").value;
  let result = document.getElementById("result");

  if (age >= 18) {
    result.innerHTML = "✅ You are eligible to vote!";
    result.style.color = "green";
  } else {
    result.innerHTML = "❌ You are NOT eligible to vote.";
    result.style.color = "red";
    
  }
}

