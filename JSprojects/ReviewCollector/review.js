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


// const Rname = document.getElementById('name');
// const ReviewFor = document.getElementById('reason');
// const Rmessage = document.getElementById('message');
// const btn = document.getElementById('btn');
// const reviewContainer = document.getElementById('reviewContainer')

// btn.addEventListener('click', () => {
//     // Get values from input fields
//     const nameValue = Rname.value.trim();
//     const reason = ReviewFor.value.trim();
//     const ReviewMessage = Rmessage.value.trim();

//     // Validate inputs (ensure they are not empty)
//     if (!nameValue || !reason || !ReviewMessage) {
//         alert('Please fill out all fields before submitting.');
//         return; // Exit the function if any field is empty
//     }

//     // Create elements for the review
//     const span = document.createElement('span');
//     span.innerText = `Name: ${nameValue}`;

//     const h4 = document.createElement('h4');
//     h4.innerText = `Reason: ${reason}`;

//     const p = document.createElement('p');
//     p.innerText = `Message: ${ReviewMessage}`;

//     // Create a container for the review
//     reviewBox = document.createElement('div');
//     reviewBox.classList.add('review');
//     reviewBox.appendChild(span); // Add name
//     reviewBox.appendChild(h4);   // Add reason
//     reviewBox.appendChild(p);    // Add message

//     if (reviewsParent) {
//         reviewContainer.appendChild(reviewBox);
//     } else {
//         console.error('Parent container for reviews not found.');
//     }

//     // Clear input fields after submission
//     Rname.value = '';
//     ReviewFor.value = '';
//     Rmessage.value = '';
// });