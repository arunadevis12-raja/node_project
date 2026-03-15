function reverseNumber(num){
    let reversed=num.toString().split("").reverse().join("");
    return Number(reversed);
}

console.log(reverseNumber(1234));
console.log(reverseNumber(4500));
