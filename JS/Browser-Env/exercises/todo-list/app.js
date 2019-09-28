let subBtn = document.querySelector('input[type=submit]');
let inpt = document.querySelector('input[type=text]');
let listItems = document.querySelector('.list-items');
let items = JSON.parse(localStorage.getItem('items')) || [];
console.log(items);

function addItems() {

    let value = inpt.value;

    let dt = {
        value:value,
        done: false
    }
    items.push(dt);
    console.log(items);
    localStorage.setItem('items',JSON.stringify(items));
    renderList(listItems,items)
    inpt.value = '';
}



function renderList(lists, items) {

    lists.innerHTML = items.map((ele,i) => {
        return `
        <li>
            <input type="checkbox" ${ele.done ? 'checked':'' } data-id=${i} />
            <label>${ele.value}</label>
        </li>`
    }).join('');

}

renderList(listItems, items);

function toggle(e) {
    if(!e.target.matches('input')) return;
    
    let ele = e.target;
    let index = parseInt(ele.dataset.id);
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items))
    //console.log(items[index]);
    //console.log(e.target)
}

subBtn.addEventListener('click', addItems);
listItems.addEventListener('click', toggle);