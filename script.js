let button = document.querySelector(".resultButton")
let killua = document.querySelector (".killua")
let title = document.querySelector (".title")
let questions = document.querySelector (".questions")
let answerOne = document.querySelector(".answer-one")
let answerTwo = document.querySelector(".answer-two")
let answerThree = document.querySelector(".answer-three")
let answerFour = document.querySelector(".answer-four")
let answerFive = document.querySelector(".answer-five")
let textOne = document.querySelector(".one")
let textTwo = document.querySelector(".two")
let textThree = document.querySelector(".three")
let textFour = document.querySelector(".four")
killua.onclick = function(){
  questions.style.display = "block"
  title.style.display = "none"
}
button.onclick = function() {
  let inputOne = document.querySelector(".input-one").value;
  let inputTwo = document.querySelector(".input-two").value;
  if (inputOne < 13 && inputTwo === "50 strangers") {
  answerOne.style.display = "block";
    textOne.innerHTML = "(You said you were " + inputOne + " years old and would save " + inputTwo + ".)"
   questions.style.display = "none";
} else if (inputOne >= 13 && inputTwo === "50 strangers"){
  answerTwo.style.display = "block";
    textTwo.innerHTML = "(You said you were " + inputOne + " years old and would save " + inputTwo + ".)"
   questions.style.display = "none";
} else if (inputOne < 13 && inputTwo === "2 friends"){
  answerThree.style.display = "block";
    textThree.innerHTML = "(You said you were " + inputOne + " years old and would save " + inputTwo + ".)"
   questions.style.display = "none";
} else if (inputOne >= 13 && inputTwo === "2 friends"){
  answerFour.style.display = "block";
    textFour.innerHTML = "(You said you were " + inputOne + " years old and would save " + inputTwo + ".)"
   questions.style.display = "none";
} else {
   answerFive.style.display = "block";
   questions.style.display = "none";
}
};