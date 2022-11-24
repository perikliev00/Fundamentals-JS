function greatestComonDivisors(firstNumber,secondNumber) {
    let divisiorsFirstNumber=[];
    let divisiorsSecondNumber=[];
    for(let i=0;i<=firstNumber;i++) {
        if(firstNumber%i==0) {
            divisiorsFirstNumber.push(i);
        }
    }
    for(let i=0;i<=secondNumber;i++) {
        if(secondNumber%i==0) {
            divisiorsSecondNumber.push(i);
        }
    }
    let comonDivisors=[]
    for(let i=0;i<divisiorsFirstNumber.length;i++) {
        if(divisiorsSecondNumber.includes(divisiorsFirstNumber[i])) {
            comonDivisors.push(divisiorsFirstNumber[i]);
        }
    }
    console.log(comonDivisors[(comonDivisors.length)-1]);
}
greatestComonDivisors(192, 18);