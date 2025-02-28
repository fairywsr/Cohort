const myText = document.getElementById('mainHeading');
const redBtn = document.getElementById('redButton');
const greenBtn = document.getElementById('greenButton');
const blueBtn = document.getElementById('blueButton');
const purpleBtn = document.getElementById('purpleButton');
const resetBtn = document.getElementById('resetButton')


redBtn.addEventListener('click', () => {
   myText.style.color = 'red'
})

greenBtn.addEventListener('click', () => {
   myText.style.color = '#2ecc71'
})

blueBtn.addEventListener('click', () => {
   myText.style.color = '#3498db'
})

purpleBtn.addEventListener('click', () => {
   myText.style.color = '#9b59b6'
})

const value = resetBtn.addEventListener('click', () =>{
   myText.style.color = '#34495e';
})
