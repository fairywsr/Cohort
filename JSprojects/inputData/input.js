//  selecting all inputs fields
const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const ageInput = document.getElementById('ageInput');
const bioInput = document.getElementById('bioInput');

//  selecting display values 
const nameDisplay = document.getElementById('nameDisplay');
const jobDisplay = document.getElementById('jobDisplay');
const ageDisplay = document.getElementById('ageDisplay');
const bioDisplay = document.getElementById('bioDisplay');


//  add event lisners to all inputs
nameInput.addEventListener('input', update);
jobInput.addEventListener('input', update);
ageInput.addEventListener('input', update);
bioInput.addEventListener('input', update)


function update(){
   nameDisplay.textContent = nameInput.value || `Not Provided`;
   jobDisplay.textContent = jobInput.value || `Not Provided`;
   ageDisplay.textContent = ageInput.value || `Not Provided`;
   bioDisplay.textContent = bioInput.value || `Not Provided`;
}