let dta = {
    title: 'My Super Blog',
    body: 'Read this blog to know the reality about life.',
    userId: 1
}

let url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url, {
    method:'POST',
    body: JSON.stringify(dta),
    headers: {
        'Content-type':'application/json'
    }
}).then(resp => resp.json())
  .then(dt => console.log('Post response',dt))
  .catch(err => console.log('Post error ',err))