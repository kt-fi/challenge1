
// USER INTERFACE *****************************

const UIController = (() => {
let i = 1;
    return {

        // DISPLAY CARD TO SCREEN

          getCard: function (newCard, questions) {
                document.querySelector('.card__header').textContent = questions[newCard].question;

                for(let i = 1; i < questions[newCard].answers.length; i++) {
                    document.querySelector(`.w${[i]}`).textContent = questions[newCard].answers[i]
                };
                
                this.getWord()
            },

            getWord: function(){
                document.querySelector(`.w${i}`).classList.toggle("currentWord")
            },

            correct: function(){
                if( i < 6){
                    document.querySelector(`.w${i}`).classList.toggle('currentWord')
                    document.querySelector(`.w${i}`).classList.add('correct')
                    document.querySelector(`.w${i + 1}`).classList.toggle('currentWord')
                i++;
                 }
            },

            incorrect: function(){
                if( i < 6){
                    document.querySelector(`.w${i}`).classList.toggle('currentWord')
                    document.querySelector(`.w${i}`).classList.add('incorrect')
                    document.querySelector(`.w${i + 1}`).classList.toggle('currentWord')
                i++;
                 }
            },

            clearBoard: function(){
                let n;
                for(n = 1; n < 6
                    ; n++){
                    document.querySelector(`.w${n}`).classList.remove('currentCard')
                    document.querySelector(`.w${n}`).classList.remove('correct')
                    document.querySelector(`.w${n}`).classList.remove('incorrect')
                    i=1;
                }
            }    

    }
  
     
 })()
 
 
 // Data *******************************************************
 
 const dataController = (() => {
 const questionsArray = []
 
 function Question(question, answers, used){
     this.question = question;
     this.answers = answers;
     this.used = used;
 }
 Question.prototype.used = function(used){
     this.used = used;
 }
 
 var q1 = new Question( 'Describing People', ["In his mid-Twenties", "Bald", "Beard", "Overweight", "grey Hair", "Fringe"]);
 var q2 = new Question( 'Personality', ["Selfish", "Bossy", "Moody", "Impatient", "Spoilt", "Shy"]);
 var q3 = new Question( 'Cinema', ["Horror Film", "Soundtrack", "Cast", "Dubbed", "Sequel", "Plot"]);
 var q4 = new Question( 'Education', ["State School", "Pupil", "Time Table", "Subject", "Professor", "Fail an Exam"]);
 var q5 = new Question( 'Food And Drinks', ["Seafood", "Spicy", "Bill", "Spoon", "Boiled", "Napkin"]);
 var q6 = new Question( 'Houses', ["Cottage", "Village", "Suburbs", "Gate", "Roof", "Dishwasher"]);
 var q7 = new Question( 'Shopping', ["Complain", "Discount", "Customer", "Butchers", "Refund", "Queue"]);
 var q8 = new Question( 'Sport', ["Referee", "Coach", "Tennis Court", "Beat", "Draw", "Warm Up"]);
 var q9 = new Question( 'Travel and Transport', ["Flight", "Railway Staton", "Luggage", "Lorry", "Seat Belt", "Traffic Jam,"]);
 var q10 = new Question( 'Phrasal Verbs', ["Check In", "Turn Down (Volume)", "Call Back", "Give Up", "Throw Away", "Take Off"]);
 var q11 = new Question( 'Money', ["Waste", "Inherit", "Loan", "Note", "Professor", "Fail an Exam"]);
 
 
 
 questionsArray.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11)
 
 return{
         getQuestions: function(){
         return questionsArray; 
     }()
 }

 
 
 })()
 
 
 // APP Control ********************************************************
 
 const appController = ((UICtrl, dataCtrl) => {
 
 // BUTTONS

 (eventListeners = () => {
    document.querySelector(".btn-start").addEventListener('click', initialise);
    document.querySelector(".btn__next").addEventListener('click', function(){
        nextCard()
        resetTimer()
    })
    document.querySelector(".btn__correct").addEventListener('click', UICtrl.correct)
    document.querySelector(".btn__pass").addEventListener('click', UICtrl.incorrect)
    document.querySelector(".timer__start").addEventListener('click', timer)
 })


    // INITIALIZE GAME
    
        initialise = () => {
            const newCard = selectCard();

            document.querySelector(".game").style.zIndex = 1;
            document.querySelector(".game").classList.add('game--start');
            UICtrl.getCard(newCard, dataCtrl.getQuestions)
        }


    // NEW CARD

        nextCard = () => {
            const newCard = selectCard();
            
            UICtrl.getCard(newCard, dataCtrl.getQuestions)
            UICtrl.clearBoard();
            
            
        }
           
            selectCard = () => {
                return Math.floor(Math.random()*11);      
         }


    //TIMER
    
    let seconds = 0;
    let mins = 2;
    let countdown;
         function timer(){

            if(mins >= 0){
countdown =  setTimeout(function(){
                 if(seconds < 10 && seconds > 0){
                      document.querySelector(".seconds").textContent = '0' + seconds
                    seconds--;  
                 }else if(seconds >=10 && seconds < 61){
                    document.querySelector(".seconds").textContent =  seconds
                    seconds--;  
                 }else if(seconds <= 0){
                     mins--;
                     seconds = 59;
                     document.querySelector(".seconds").textContent =  seconds
                     document.querySelector(".mins").textContent = '0' + mins
                 }
                 
               
                console.log(seconds)
               timer()
             }, 1000)
            }else{
                document.querySelector(".mins").textContent = "TIME"
                document.querySelector(".seconds").textContent = "UP"
            }
             
         }

         function resetTimer(){
             seconds = 0;
             mins = 2;
            document.querySelector(".seconds").textContent = '00'
            document.querySelector(".mins").textContent = '02'
            clearTimeout(countdown)
         }
         

        
      
         
 
 
 // Buttons ********************************************************************

 })(UIController, dataController)
 
 
 // Start **********************************************************************

 
 eventListeners();
 