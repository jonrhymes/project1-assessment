// console.log('It works');
// console.log($);

// ========>
// Functions

// let num = 0;
// num++

// const add = () => {
//     return ++num;
// }

// const add = () => {
//     let newNum = parseInt($input.val())++;
// }

// const minus = () => {
//     return --num;
// }


// ========>
// Event Handlers

let $count = $('.counter');
let $input = $('.set-num');
const $add = $('.plus');
const $subtract = $('.minus');
let num = parseInt($count.html());

console.log($count.html())
console.log($input.val())
console.log($count.html())

// !! Problem: I am able to update the value of the counter but I cannot pass it to the next argument

// console.log(parseInt($input.val()))
// console.log(parseInt($count.html()))
// console.log(newnum)

$input.change(() => {
    $count.html($input.val());
})

const add = () => {
    return ++num;
}

const minus = () => {
    return --num;
}

// console.log(parseInt($count.html()));
// let num = parseInt($count.html());

$add.on('click', () => {
    add();
    $count.html(num);
    console.log(num)
})

$subtract.on('click', () => {
    minus();
    $count.html(num);
    console.log(num)
})
