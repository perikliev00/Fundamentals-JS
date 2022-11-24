function adressBook(arr) {
    let result={};
    for(let i=0;i<arr.length;i++) {
        let tokens=arr[i].split(':');
        let name=tokens[0];
        let adress=tokens[1];
        result[name]=adress;
    }
    let myArr=Object.entries(result);
    myArr.sort((a,b) => a[0].localeCompare(b[0]));
    for(let k of myArr) {
        console.log(`${k[0]} -> ${k[1]}`);
    }

}
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)