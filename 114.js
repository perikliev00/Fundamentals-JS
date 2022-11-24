function catalogue(arr) {
    arr.sort();
    let leathers=[];
    let obj=[];
    class namePrice {
        constructor(a,b) {
            this.name=a;
            this.price=b;
        }
    }
    for(let i=0;i<arr.length;i++) {
        let myArr=arr[i].split(" : ");
        for(let j=2;j<myArr.length;j++) {
            myArr[0]=myArr[0]+" "+myArr[j];
        }
        obj.push(new namePrice(myArr[0],myArr[1]));
        let word=myArr[0];
        char=word[0];
        leathers.push(char);

    }
    let s=0
    for(let i=0;i<obj.length;i=s) {
        console.log(leathers[i]);
        for(let x=i;leathers[i]==leathers[x];x++) {
            console.log(`  ${obj[x].name}: ${obj[x].price}`);
            s=x+1;
        }
    }
}
catalogue([
    
    ])