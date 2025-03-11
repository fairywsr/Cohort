const startbtn = document.getElementById('startBtn');
const timeInput = document.getElementById('timeInput');
const countdownDisplay = document.getElementById('countdownDisplay');

function counter(){
    let timeValue = parseInt(timeInput.value);
     if (isNaN(timeValue)){
        countdownDisplay.innerText = 'Please Enter a valid number'
     }

     if(timeValue <= 0){
        countdownDisplay.innerText = 'Please enter seconds > 0'
     }
     
    const timer =  setInterval(function(){
        timeValue--;
        countdownDisplay.innerText = `Remaining time is ${timeValue} seconds`;

        if(timeValue<= 0){
            clearInterval(timer);
            countdownDisplay.innerText = `Time Up ⏰`;
          }
     }, 1 * 1000)
    
   
}

startbtn.addEventListener('click', counter)