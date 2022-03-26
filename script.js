
     questions = [
         {}, //Index 0, id=0
         {q: "What is the result of 2 + 2 =", a1: "4", a2: "5", a3: "6", a4: "1", correct_answer: "4", user_answer: ""},
         {q: "What is the result of 3 + 2 =", a1: "4", a2: "5", a3: "6", a4: "1", correct_answer: "5", user_answer: ""},
         {q: "What is the result of 4 + 2 =", a1: "4", a2: "5", a3: "6", a4: "1", correct_answer: "6", user_answer: ""},
         {q: "What is the result of 6 + 2 =", a1: "8", a2: "5", a3: "6", a4: "1", correct_answer: "8", user_answer: ""},
         {q: "What is the result of 7 + 2 =", a1: "9", a2: "5", a3: "6", a4: "1", correct_answer: "9", user_answer: ""}
     ];

     var current_question = 0;
     getNextQuestion();



     function getNextQuestion(){
        if (current_question == questions.length -1) {
            //alert("You have answered all questions.");
            displayResult();
            return;
        }
        console.log("Show next question ", current_question)
        current_question ++;

        var question_div = document.getElementById("question-div");

        //remove any HTML code from div before displaying new question.
        question_div.innerHTML = "";

        //Display the next question
        question_div.innerHTML = `
        <div class="card" style="width:80%; margin: 10px auto">
          <div class="card-body">
            <h5 class="card-title"> Math Quiz </h5>
            <p class="card-text"><span id="question-id">${current_question}</span>. ${questions[current_question].q}</p>
            <hr/>
            <p class="answer">${questions[current_question].a1}</p>
            <p class="answer">${questions[current_question].a2}</p>
            <p class="answer">${questions[current_question].a3}</p>
            <p class="answer">${questions[current_question].a4}</p>
            <a href="#" onclick="getNextQuestion()" class="btn btn-primary">Next</a>
          </div>
        </div>`;

        addEventListenersToElements();

     }



     function addEventListenersToElements(){
         var answers = document.getElementsByClassName("answer")
        // console.log(answers);
        for (var i=0; i < answers.length; i++){
            answers[i].addEventListener("mouseover", changeAnswerBackgroundColor);
            answers[i].addEventListener("mouseout", changeAnswerBackgroundColor);
            answers[i].addEventListener("click", selectAnswer);
        }

        function changeAnswerBackgroundColor(e){
            if (e.target.style.background == "yellow"){

            } else if(e.target.style.background !== "" ){
                e.target.style.background = "";
            } else {
                e.target.style.background="gray";
            }
            
        }

        function selectAnswer(e){
            var question_id = parseInt((document.getElementById("question-id").innerHTML).trim());

            var user_answer = e.target.innerHTML;

            questions[question_id].user_answer = user_answer; 

            removeBackgroundColorFromAllElements();
            e.target.style.background="yellow";
            //alert(user_answer)

        }

        function removeBackgroundColorFromAllElements(){
            var answers = document.getElementsByClassName("answer")
        for (var i=0; i < answers.length; i++){
            answers[i].style.background = "";
        }

        }
     }

     function calculateQuizResult(){
         console.log("Calculating result. NUmber of questions ", questions.length);
         var points = 0;
         for (var i=1; i < questions.length; i++){
             var user_answer = (questions[i].user_answer).trim();
             var correct_answer =  (questions[i].correct_answer).trim();

             if (correct_answer == user_answer) {
                 points ++;
             }
         }

         console.log(points);
         return points;
     }

     function displayResult(){
        var result = calculateQuizResult();

        var question_div = document.getElementById("question-div");

        //remove any HTML code from div before displaying new question.
        question_div.innerHTML = "";

        //Display the next question
        question_div.innerHTML = `
        <div class="card" style="width:80%; margin: 10px auto">
        <div class="card-body">
            <h5 class="card-title"> Math Quiz Result </h5>
            <p class="card-text">You got ${result} points </p>
            <hr/>
        </div>
        </div>`;

     }