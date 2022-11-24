function sumOfNumbers(n,m) {
    let firstNumber=Number(n);
    let secondNumber=Number(m);
    let sum=0;
    for(let i=firstNumber;i<=secondNumber;i++) {
        sum=sum+i;
    }
    return sum;
}
console.log(sumOfNumbers('1','5'));