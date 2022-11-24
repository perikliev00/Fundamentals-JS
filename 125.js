function companyUsers(arr) {
    let result={};
    for(let i=0;i<arr.length;i++) {
        let myArr=arr[i].split(" -> ");
        let array=[]
        if (result.hasOwnProperty(myArr[0])) {
            if(result[myArr[0]].includes(myArr[1])==false) {
                result[myArr[0]].push(myArr[1]);
            } 
        } else {
            array.push(myArr[1]);
            result[myArr[0]]=array;
        }
    }
    let finalResult=Object.entries(result);
finalResult.sort((a,b)=>a[0].localeCompare(b[0]));
for(let i=0;i<finalResult.length;i++) {
    console.log(`${finalResult[i][0]}`);
    let employes=finalResult[i];
    for(let x=0;x<employes[1].length;x++) {
        console.log(`-- ${employes[1][x]}`)
    }
}
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])