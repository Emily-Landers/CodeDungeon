
let canMove = true;
let keyPress = 0;
let lives = 4;
document.onkeydown = detectKey;
// let correctAnswers = ['Declaration statements', "Function/Method", "if(a!==null)", '=','let','HTML','net','False','Both',"Not-a-Number","[]" ]
// addEventListeners();
function Questions(question, answers, correctAnswer){
    this.question = question
    this.answers = answers
    this.correctAnswer = correctAnswer
}

  let question1 = new Questions("The 'function' and 'var' are known as:",
 ["Keywords", "Data types", "Declaration statements", "Prototypes"], 2)

  let question2 = new Questions("Which one of the following is the correct way for calling the JavaScript code?",
  ["Preprocessor", "Triggering Event", "DRMI", "Function/Method"], 3,)
  
  let question3 = new Questions('Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":',["if(a!==null)", "if (a!)", "if(a!null)", "if(a!=null)"],0)
  
  let question4 = new Questions('The symbol used for the assignment operator is?":',["-", "+", "=", ">"], 1,)

  let question5 = new Questions('Which is not a JavaScript variable?":', ["let", "net", "var", "const"], 1)

  let question6 = new Questions('Hyper Text Markup Language Stands For?":', ["JavaScript", "CSS", "Java", "HTML"], 3,)
   
  let question7 = new Questions('In JavaScript can you use a number as an identifier (name)":',["True", "False"], 1,)

  let question8 = new Questions('Does a boolean only do true statements?":', ["True", "False", "Both", "Truthy"], 2,)

  let question9 = new Questions('What is a NaN property in JavaScript?":', ["Not-a-Nemo", "Not-a-Number" ,"Nor-a-Number", "Number-a-Note"], 1,)

  let question10 = new Questions('What symbol does an array use?":', ["()", "{}", "[]", "<>"], 2,)
  

//   Questions.prototype.findAnswer = function(){
//     for(let i = 0; i < this.answers.length; i++){
//     if(this.answer[i] === this.correctAnswer){
//         console.log('Thats Right!')
//     } else {
//       lives -= 1
//       console.log(lives)
//     }
//   }
// }
//diff id if 


Questions.prototype.render = function(){
    let ask = document.getElementById('quest-container')
    let quest = document.createElement('div')
    quest.textContent = this.question;
    ask.appendChild(quest);
    for (let i = 0; i < this.answers.length; i++){
        let ans = document.createElement('li')
        ans.textContent = this.answers[i]
        quest.appendChild(ans)
        ask.addEventListener('click' , handleClick);
        
        } 
        
    }
   



function handleClick(event) {
  // if(event.target.id === 'correct'){ compare click to correct answer
    canMove = true;
    stopEventListeners();
  } else if (event.target.id !== 'correct') {
    canMove = false;
    lives -= 1;
    console.log(lives)
    console.log(event.target.id)
  } else if (lives < 1){
    stopEventListeners();
  }
}
// function attachEventListeners() {
    

// }

function stopEventListeners() {
    const container = document.getElementById('ansElem');
    container.removeEventListener('click', this.findAnswer);
}

console.log(question1.answers)
// function handleClick(event) {
// let answer1 = document.getElementById('ansElem')
// answer1.addEventListener

  
//   function showQuestion(q) {
//     let questionDiv = document.getElementById("question");
//     questionDiv.textContent = q.question;
//     let answers = document.querySelectorAll(".answers");
//   console.log(q);

//     answers.forEach(function (element, index) {
//         element.setAttribute('id',`${q.answers[index]}`)
//       element.textContent = q.answers[index];
  
//       element.addEventListener("click", function checkAnswer (e) {
//           console.log("target id " , e.target.id)
//           console.log("correctanswer " , q.correctAnswer)
//           console.log(e.target.text)
//           console.log(correctAnswers.includes(e.target.id))
//         if (correctAnswers.includes(e.target.id)) {
//           canMove = true;
//           document.getElementById("knight").hidden = true;
//           // console.log("Correct Answer!");
//         } else {
//           console.log("Wrong Answer!");
//           lives -= 1;
//           livesCheck();
//         //   console.log(lives);
//         }
//       });
      
//     });
//   }

function detectKey(e) {
  if (canMove) {
    let posLeft = document.getElementById("spooky").offsetLeft;
    e = e || window.event;
   
    if (e.keyCode == "37") {
      document.getElementById("spooky").style.marginLeft = posLeft + 38 + "px";
      keyPress -= 1;
    } else if (e.keyCode == "39") {
      document.getElementById("spooky").style.marginLeft = posLeft - 38 + "px";
      keyPress++;
    }

    // console.log(keyPress);

    posPrompt();
  }
}


const hearts = [
  document.getElementById("heart1"),
  document.getElementById("heart2"),
  document.getElementById("heart3"),
  document.getElementById("heart4"),
];

function livesCheck() {
  for (i = 0; i < hearts.length; i++) {
    if (lives === 3) {
      hearts[0].remove();
    } else if (lives === 2) {
      hearts[1].remove();
    } else if (lives === 1) {
      hearts[2].remove();
    } else if (lives === 0) {
      hearts[3].remove();
      document.getElementById("gameover").hidden = false;
      // document.getElementById('restart').style.display = 'inline-block';
    } else {
      console.log("nice");
    }
  }
}

function posPrompt() {
  let hotbod = document.getElementById("hotbod");
  if (keyPress === 21) {
    console.log("working");
    question1.render();
    // hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    canMove = false;
  } else if (keyPress > 21) {
    document.getElementById("knight").hidden = true;
    canMove = true;
    hotbod.style.overflow = "auto";
  } else if (keyPress < 21) {
    document.getElementById("knight").hidden = true;
    canMove = true;
    hotbod.style.overflow = "auto";
  } else {
    canMove = true;
    hotbod.style.overflow = "auto";
  } if (keyPress === 59) {
    console.log("working");
    document.getElementById("knight").hidden = false;
    document.getElementById("knight").style.marginLeft = 1450 + 'px';
    question2.render();
    hotbod.style.overflow = "hidden";
    
    canMove = false;
  }
  if (keyPress === 98) {
    console.log("working");
    question3.render();
    // hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    document.getElementById("knight").style.marginLeft = 2820 + 'px';
    canMove = false;
  } 
  if (keyPress === 147) {
    console.log("working");
    question4.render();
    // hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    document.getElementById("knight").style.marginLeft =  + 4794 + 'px';
    canMove = false;
  }
  if (keyPress === 191) {
    console.log("working");
    question5.render();
    // hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    document.getElementById("knight").style.marginLeft =  + 6466 + 'px';
    canMove = false;
  }
}
