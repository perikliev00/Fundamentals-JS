function sameNumbers(number) {
    number=String(number);
    let bool=true;
    let sum=0;
    for(let i=1;i<number.length;i++) {
        if(number[i-1]!=number[i]) {
            bool=false;
            break;
        }
    }
    for(let i=0;i<number.length;i++) {
        sum=sum+Number(number[i]);
    }
    console.log(bool);
    console.log(sum);
}
sameNumbers(123)