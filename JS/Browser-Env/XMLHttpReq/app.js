let xhr = new XMLHttpRequest();
let displayPost = document.querySelector('.posts');

function handleData() {
    console.log(xhr);

    if(xhr.readyState < 4) {
        return;
    }

    if(xhr.status != 200) {
        return;
    }

    let data = JSON.parse(xhr.responseText);

    data.forEach(ele => {
        console.log(ele);
        let head = document.createElement('h3');
        head.innerText = ele.title;
        let para = document.createElement('p');
        para.innerText = ele.body

        displayPost.appendChild(head);
        displayPost.appendChild(para);
    })
}

xhr.onreadystatechange = handleData;

xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

xhr.send('');