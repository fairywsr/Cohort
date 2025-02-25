const Rname = document.getElementById('name');
const ReviewFor = document.getElementById('reason');
const Rmessage = document.getElementById('message');
const Parentreview = document.getElementById('reviewContainer')
const btn = document.getElementById('btn')


btn.addEventListener('click', () => {
    // name 
    const nameValue = Rname.value
     const span = document.createElement('span');
     span.innerText = nameValue
     console.log(span)

    // Review for Reason
    const reason = ReviewFor.value
    const h4 = document.createElement('h4');
    console.log(h4)
    h4.innerText = reason
    console.log(reason)

    // Message
    const ReviewMessage = Rmessage.value
    const p = document.createElement('p');
    p.innerText = ReviewMessage
    console.log(p)

       // container foe review 
   const reviewContainer = document.createElement('div')
   reviewContainer.classList.add('review');
   console.log(reviewContainer)
   reviewContainer.appendChild(h4)
   reviewContainer.appendChild(p)
   reviewContainer.appendChild(span)
   if (Rname.value !== '' && ReviewFor.value !== '' && Rmessage.value !== '') {
    Parentreview.appendChild(reviewContainer);
} else {
    alert('Provide all details')
}

   Rname.value ='';
   ReviewFor.value ='';
   Rmessage.value ='';
})


