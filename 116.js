function meeteings(arr) {
    let result={};
    for(let i=0;i<arr.length;i++) {
        let tokens=arr[i].split(' ');
        let day=tokens[0];
        let name=tokens[1];
        if(result.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            result[day]=name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for(let k in result) {
        console.log(`${k} -> ${result[k]}`);
    }
}
meeteings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])