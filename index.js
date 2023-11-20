/* 
This is a file demonstating data structures
*/

var a = "sawyer shelton";
let b = 4.62;
const c = true;
console.log(a);
console.log(b);
console.log(c);
const length = a.length;
console.log(length);
while(c){
    const num = Math.ceil(Math.random() * 1000)
    console.log(`random number is ${num}`)
    const mod = num % 3
    if(mod == 0) {
        console.log('Divisible by 3 \n')
    }
}
