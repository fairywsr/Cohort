const bulb = document.getElementById('bulb');
const btn = document.getElementById('toggleButton');
const statusBulb = document.getElementById('status');
const btnDark = document.getElementById('dark-mode');

btnDark.addEventListener('click', () => {
   const darkMode = document.body;
   const dark = darkMode.classList.toggle('body')
    if(dark){
        btnDark.innerText = 'white Mode';
    } else{
        btnDark.innerText = 'Dark Mode';
    }
})

btn.addEventListener('click', () => {
  const bulbToggle =  bulb.classList.toggle('off');

    if (bulbToggle) {
        btn.innerText = 'Turn ON';
        statusBulb.innerText = 'Status OFF';
      } else {
        btn.innerText = 'Turn OFF';
        statusBulb.innerText = 'Status ON';
      }
})


