const getString = window.location.search;
console.log(getString)


const myInfo =new URLSearchParams(getString)
console.log(myInfo)


console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('location'));



const results =document.querySelector('#results')

results.innerHTML =`This apointment is scheduled for <br>
<h1>${(myInfo.get('first'))} ${(myInfo.get('last'))}</h1>
<p>From ${(myInfo.get('location'))} </p>`;