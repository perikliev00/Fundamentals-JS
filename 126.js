function minnerTask(arr) {
    let result={};
    for(let i=0;i<arr.length;i=i+2) {
        if(result.hasOwnProperty(arr[i])) {
            result[arr[i]]=result[arr[i]]+Number(arr[i+1]);
        } else {
            result[arr[i]]=Number(arr[i+1]);
        }
    }
    let keys=Object.keys(result);
    for(let i=0;i<keys.length;i++) {
        console.log(`${keys[i]} -> ${result[keys[i]]}`) 
    }
}
minnerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])