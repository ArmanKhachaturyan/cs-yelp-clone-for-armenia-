const btnBlue = document.getElementById('btnBlue');
const btnOrange = document.getElementById('btnOrange');
const btnGreen = document.getElementById('btnGreen');
const btnRed = document.getElementById('btnRed');

btnBlue.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue'
})
btnOrange.addEventListener('click', function() {
    document.body.style.backgroundColor = 'orange';
});
btnGreen.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});
btnRed.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});