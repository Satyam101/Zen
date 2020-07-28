var securityQuestions = [
    {
    question: "What was your first pet's name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
   function chksecurityQuestions(securityQuestions,question,ans) {
   
       let isCorrect = false;
       for(let i = 0 ; i < securityQuestions.length ; i++){
           if(securityQuestions[i].question == question){
               if(securityQuestions[i].expectedAnswer == ans){
                   isCorrect = true;
               }
           }
   
       }
    return isCorrect; 
   }