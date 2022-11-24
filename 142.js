function aggregateElements(arr) {
    let sum=0;
    let secondSum=0;
    let concatenation="";
    for(let i=0;i<arr.length;i++) {
        sum=sum+arr[i];
        secondSum=secondSum+(1/arr[i])
        concatenation=concatenation+String(arr[i]);
    }
    console.log(sum);
    console.log(secondSum);
    console.log(concatenation);
}
aggregateElements([1,2,3,4])