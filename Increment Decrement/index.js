let number = document.getElementById('number');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let reset = document.getElementById('reset');

plus.addEventListener('click', function() {
    number.value++;
})

minus.addEventListener('click', () => {
    number.value--;
})

reset.addEventListener('click', () => {
    number.value = 0;
})