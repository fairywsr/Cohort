const colorInput = document.getElementById('colorInput');
const colorCode = document.getElementById('colorCode');
const copyBtn = document.getElementById('copyBtn');
const complementryContainer = document.getElementById('complementryContainer');
const saveColor = document.getElementById('saveColor');
const favouriteContainer = document.getElementById('favouriteContainer');


colorInput.addEventListener('input', () => {
     const colorValue = colorInput.value
     updateColorDisplay(colorValue);
     showComplementryColor(colorValue);
     
})

function updateColorDisplay(color){
     colorCode.innerText = color;
     colorCode.style.color = color;
}

function showComplementryColor(color){
    const complementryColor = getComplementryColor(color);
    complementryContainer.innerHTML ='';  // clear previous color
    complementryColor.forEach( (compColor) => {
        const colorBox = document.createElement('div');
        colorBox.classList.add('colorBox');
        colorBox.style.backgroundColor = compColor;
        complementryContainer.appendChild(colorBox);
    })


}

function getComplementryColor(color){
    const base = parseInt(color.slice(1), 16);
    const compliment = (0xffffff ^ base).toString(16).padStart(6, "0");
    return [`#${compliment}`];
}

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(colorCode.textContent)
    .then( () => alert('Color code copied'))
    .catch( (err) => console.error('Failed to copy', err))

})

saveColor.addEventListener('click', () => {
    const color = colorCode.textContent;
    addFavouriteColor(color);
})

function addFavouriteColor(color){
    const colorbox = document.createElement('div');
    colorbox.classList.add('colorBox');
    colorbox.style.backgroundColor = color;
    favouriteContainer.appendChild(colorbox)
}