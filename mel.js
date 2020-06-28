//correct and wrong functions
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
    element.classList.add('wrong') 
    }}
    //console.log(element);
function keepScore(element, correct, wrong) {
     clearStatusClass(element)
     if(element === correct) {
         console.log(score++);
     } else (element === wrong) 
        {console.log(score);            
     }  
 };
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}