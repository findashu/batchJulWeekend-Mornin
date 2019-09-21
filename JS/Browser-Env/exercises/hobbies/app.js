// list coming from db
let hobbies = ['coding','music', 'play'];
let list = document.querySelector('ul')

// for(var i=0; i< hobbies.length; i++) {
//     list.innerHTML += `<li>${hobbies[i]}</li>`
// }

// let hob = hobbies.map(ele => `<li>${ele}</li>`);

// console.log(hob);

// let inHt = hob.join('');

// console.log(inHt)

list.innerHTML = hobbies.map(ele => `<li>${ele}</li>`).join('');
