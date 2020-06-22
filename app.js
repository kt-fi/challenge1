
const UIController = (() => {
   let i = 1; 
   
    return{
       currentWord: function () {
        let i = 1;
        document.querySelector(`.q${i}`).classList.toggle('currentCard')
        },

        correct: function() {
            if( i < 6){
                        document.querySelector(`.q${i}`).classList.toggle('currentCard')
            document.querySelector(`.q${i}`).classList.add('correct')
            document.querySelector(`.q${i + 1}`).classList.toggle('currentCard')
            i++;
            }
    
        },

        
        pass: function() {
          if( i < 6){ 
              document.querySelector(`.q${i}`).classList.toggle('currentCard')
            document.querySelector(`.q${i}`).classList.add('incorrect')
            document.querySelector(`.q${i + 1}`).classList.toggle('currentCard')
            i++;
           }
            
        },
     
            nextCard: function(){
                let n;
                for(n = 1; n < 7; n++){
                    document.querySelector(`.q${n}`).classList.remove('currentCard')
                    document.querySelector(`.q${n}`).classList.remove('correct')
                    document.querySelector(`.q${n}`).classList.remove('incorrect')
                    i=1;
                }
            }    
        }
    
})()



const dataController = (() => {
const questionsArray = []

function Question(question, answers){
    this.question = question;
    this.answers = answers;
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
        getQuestions: function(allQuestions){
        return questionsArray; 
    }(questionsArray)
}

})()




const appController = ((UICtrl, dataCtrl) => {

    var answers = dataCtrl.getQuestions;

        startNewGame = () => {
            document.querySelector(".game").style.zIndex = 1;
            document.querySelector(".game").classList.add('game--start')
            console.log(dataCtrl.getQuestions)
          
            let newQuestion = Math.floor(Math.random()*11);
             document.querySelector(`.card__header`).textContent= answers[newQuestion].question
                
                for(let i = 1; i < dataCtrl.getQuestions[newQuestion].answers.length; i++) {
                    document.querySelector(`.q${[i]}`).textContent = answers[newQuestion].answers[i]
                };
              
             UICtrl.currentWord()
                
            }

            
        




(eventListeners = () => {
    document.querySelector(".btn-start").addEventListener('click', startNewGame)
    document.querySelector(".btn__next").addEventListener('click', function(){
        UICtrl.nextCard()
        startNewGame()
    })
    document.querySelector(".btn__correct").addEventListener('click', UICtrl.correct)
    document.querySelector(".btn__pass").addEventListener('click', UICtrl.pass)
    
})
})(UIController, dataController)


eventListeners();