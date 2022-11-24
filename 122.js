function picolo(arr) {
    let result={};
    for(let i=0;i<arr.length;i++) {
        let tokens=arr[i].split(", ");
        let action=tokens[0];
        let carNumber=tokens[1];
        if(action=="IN") {
            result[carNumber]=carNumber;
        }
        else {
            delete result[carNumber];
        }
    }
    let keys=Object.keys(result);
    keys.sort((a,b)=>a.localeCompare(b))
    if(keys.length>0) {
        for(let k of keys) {
            console.log(`${result[k]}`)
        }
    } else {
        console.log(`Parking Lot is Empty`)
    }
}
picolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])