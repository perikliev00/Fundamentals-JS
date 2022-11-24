function negativeOrPositive(arr) {
    let result=[];
    for(let el of arr) {
        el=Number(el);
        if(el<0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }
    console.log(result.join("\n"));
}
negativeOrPositive([-1,1,-6,-2,31])