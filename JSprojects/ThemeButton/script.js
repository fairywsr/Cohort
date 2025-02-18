function themeColor(color){
     document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById('themeMode');
themeButton.addEventListener('click', () => {
     currentColor = document.body.style.backgroundColor;
     if(!currentColor || currentColor === 'white'){
          themeColor('black')
          themeButton.innerText ='Light Mode';
     }else{
          themeColor('white')
          themeButton.innerText ='Dark Mode';
     } 
})




