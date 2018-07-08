/* Flashcard game

Create an game that will cycle through a list of questions and present three possible answers
When a user answers one correctly, mark that question as solved
display a counter of number of questions solved
*/

const app = {}

// create init funciton
app.init = () => {

  // global variable questions and answers.
  let sequence = 0

  let score = 0

  const $label1 = $(`label[for="option1"]`);  // create jQuery value for each label
  const $label2 = $(`label[for="option2"]`);  
  const $label3 = $(`label[for="option3"]`);  

  // change the question and answers on submit button click
    $('.form').on('submit', function(e){
        e.preventDefault();  // prevent default on submit

      if(sequence < myQuestions.length) { //check if the question has run out

        // Step 1: Swiping the questions
        console.log('submitted.');
        const question = myQuestions[sequence].question
        const option1 = myQuestions[sequence].answers.a
        const option2 = myQuestions[sequence].answers.b
        const option3 = myQuestions[sequence].answers.c
        const answer = myQuestions[sequence].correctAnswer

        // console.log(sequence)
          // change the content of each label on submit
        $label1.text(`${option1}`)
        $label2.text(`${option2}`)
        $label3.text(`${option3}`)
        $('#question').text(question)

       // get the user input for question
        const input = $('input:checked').val();
        
       // Step 2: compare user submitted questions with the correct answer.
        if(input===answer){
           score++
           $('#score').text(`${score}`)
        }

        sequence ++;

      } else {
        console.log(`Your total score is ${score}.`)
      }

       
       
    });

}



// Document ready
$(document).ready(function() {
    app.init();
});


// We’ll use object literals to represent the individual questions and an array to hold all of the questions that make up our quiz. 
// Using an array will make the questions easy to iterate over.

const myQuestions = [
  {
    question: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question: "What's my favorite thing at McDonald's?",
    answers: {
      a: "Double Cheese Burger",
      b: "Fillet-O-Fish",
      c: "Large Fries"
    },
    correctAnswer: "a"
  },
  {
    question: "Where is Waldo really?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Sitting in a tree",
      d: "Minding his own business, so stop asking"
    },
    correctAnswer: "d"
  }
];
