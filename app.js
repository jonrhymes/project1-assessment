// console.log('It works');
// console.log($);

// ========>
// Functions

let num = 0;
// num++

const add = () => {
    return ++num;
}

// console.log(add());

const minus = () => {
    return --num;
}

// minus();
// minus();
// console.log(minus())
// const minus = (num) => {
//     num = num--;
// }
// minus();
// console.log(num)


// ========>
// Event Handlers

const $count = $('.counter');
const $input = $('.set-num');
const $add = $('.plus');
const $subtract = $('.minus');



$add.on('click', () => {
    add();
    console.log(num)
})

$subtract.on('click', () => {
    minus();
    console.log(num)
})

console.log($count.text())
