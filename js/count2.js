//initialise global variables
  var score = 0;
  var answer = 0;
  var question = 0;
  var firstQuestion = document.getElementById('firstQuestion');
  var answerText = 0

  function keyCheck(e){
            if(e.key == "Enter"){
                    submit();
      }
  }

  function createQuestion() {
    if (score == 0){
            document.getElementById("scoreArea").setAttribute("class", "hideMe");}

    numOne = Math.floor((Math.random() * 10) + 1);
    numTwo = Math.floor((Math.random() * 10) + 1);
    answer = numOne + numTwo;
    document.getElementById("firstNumber").innerHTML = numOne;
    document.getElementById("secondNumber").innerHTML = numTwo;
    answerText = document.getElementById('answerField');
      }

  function submit() {
    if (answerText.value == answer) {
      //copy the current questions line to a new line
      //get the main div that holds all the questions
      var element = document.getElementById("questionSet");
      //create a new div element
      var questionDiv = document.createElement("div");
      //give this new elements an id of newQuestionLine
      questionDiv.setAttribute("id", "newQuestionLine");
      //add this new element to the main questions div
      element.appendChild(questionDiv);
      //now add the row class to the newly added div
      var newQuestionClasses = document.getElementById("newQuestionLine").classList;
      newQuestionClasses.add("row");
      //now we have cerated our new div,  we need to get it
      var newQuestion = document.getElementById('newQuestionLine');
      //put a copy of the question into the newly created div
      newQuestion.innerHTML = firstQuestion.innerHTML;
      //now start telling the user if they are correct and replace the correct answer textarea with static text.
      document.getElementById("result").setAttribute("class", "correct");
      document.getElementById("result").innerHTML = "correct!";
      document.getElementById("answer").innerHTML = answer;
      //rename the old question ID
      document.getElementById("firstQuestion").setAttribute("id", "oldQuestion");
      document.getElementById("newQuestionLine").setAttribute("id", "firstQuestion");
      document.getElementById("answer").setAttribute("id", "oldAnswer");
      document.getElementsByClassName("firstNumberBox")[0].setAttribute("id", "oldNumberbox");
      document.getElementsByClassName("secondNumberBox")[0].setAttribute("id", "oldNumberbox");
      document.getElementsByClassName("firstNumberBox")[0].setAttribute("class", "oldNumberbox col-md-2 col-xs-2");
      document.getElementsByClassName("secondNumberBox")[0].setAttribute("class", "oldNumberbox col-md-2 col-xs-2");

      createQuestion()
      firstQuestion = document.getElementById('firstQuestion');
      //move focus to new input
      document.getElementById("answerField").focus();
      //increment score
      score = score + 1;
      document.getElementById("scoreBoard").innerHTML = score;
        document.getElementById("scoreArea").setAttribute("class", "well");
      window.scrollTo(0,document.body.scrollHeight);
    } else {
      document.getElementById("result").setAttribute("class", "incorrect");
      document.getElementById("result").innerHTML = "Sorry, that's not right. try again!";
      document.getElementById("answerField").value = "";
    };
  }
