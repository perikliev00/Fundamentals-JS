function phoneBook(arr) {
    let result={};
    for(let i=0;i<arr.length;i++) {
        let tokens=arr[i].split(" ");
        let name=tokens[0];
        let number=tokens[1];
        result[name]=number;
    }
    for(let k in result) {
        console.log(`${k} -> ${result[k]}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])