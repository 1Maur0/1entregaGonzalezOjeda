//Questions and answers
confirm("Welcome stranger,are you ready to play?")
let questions = [
    {
      question: "What was the year that Abraham Lincoln was murdered?",
      choices: ["1809", "1866", "2013", "1865"],
      correctAnswer: "1865"
    },
    {
      question: "What is the most deadliest animals to humans?",
      choices: ["Spiders", "Mosquitos", "Humans", "Sharks"],
      correctAnswer: "Mosquitos"
    },
    {
      question: "What is the most spoken language?",
      choices: ["English", "Spanish", "Chinese", "Guaraní"],
      correctAnswer: "Chinese"
    }
  ];
  
  //Initial score in 0
  let score = 0;
  
  // Ask questions
  let i = 0;
  do {
    let question = questions[i].question;
    let choices = questions[i].choices;
    let correctAnswer = questions[i].correctAnswer;
  
    //Get the user's answer
    let answer = prompt(question + "\n" + choices.join("\n"));
  
   
    // Isansweris correct plus a point
if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
  alert("Correct!");
  score++;
} else {
  alert("Incorrect. The correct answer is " + correctAnswer);
}
  
    i++;
  } while (i < questions.length);
  
  // Display the final score
  alert("You got " + score + " out of " + questions.length + " questions correct.");