let clikButton = document.getElementById('clikButton');
let dev = document.getElementById('dev');

function displayVisibility() {
    if (dev.style.display === 'none') {
        dev.style.display = "block";
    } else {
        dev.style.display = "none"
    }

}
clikButton.addEventListener('click', displayVisibility)