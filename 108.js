function storeProvision(arr1,arr2) {
    let arr=[];
    class provision {
        constructor(name,number) {
            this.stock=name;
            this.amount=number;
        }
    }
    for(let i=0;i<arr2.length;i=i+2) {
        let number=Number(arr2[i+1]);
        if(arr1.includes(arr2[i])==true) {
            arr1[arr1.indexOf(arr2[i])+1]=Number(arr1[arr1.indexOf(arr2[i])+1])+number
        } else {
            arr1.push(arr2[i]);
            arr1.push(String(arr2[i+1]));
        }
    }
    for(let i=0;i<arr1.length;i=i+2) {
        arr.push(new provision(arr1[i],arr1[i+1]));
    }
    for(let k of arr) {
        console.log(`${k.stock} -> ${k.amount}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )