function makeADictionary(arr) {
    let word=[];
    let keys=[];
    for(let i=0;i<arr.length;i++) {
     let obj=JSON.parse(arr[i]);
     let key=Object.keys(obj);
     if(keys.includes(key[0])==false){
     word.push(obj);
     keys.push(key[0]);
    }
}
keys.sort();
word=Object(word);
for(let i=0;i<word.length;i++) {
    let key=keys[i];
    for(let x=0;x<keys.length;x++) {
        let s=Object.keys(word[x]);
    if(s[0]==key){
console.log(`Term: ${keys[i]} => Definition: ${word[x][key]}`)
break;    
}    
}
}
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])