let button = document.getElementById('clikButton')
let text = document.getElementById('text')

function chenjeText() {
    if (text.textContent == "Hello") { text.textContent = 'Good Luck '; } else {
        text.textContent = 'Hello ';
    }

}

button.addEventListener('click', chenjeText)