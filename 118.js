function storage(arr) {
    let map=new Map();
    for(let i=0;i<arr.length;i++) {
        let tokens=arr[i].split(' ');
        let product=tokens[0];
        let quantity=Number(tokens[1]);
        if(!map.has(product)) {
            map.set(product,quantity);
        } else {
            let curentQuantity=map.get(product);
            let newQuantity=curentQuantity+quantity;
            map.set(product,newQuantity);        
        }
        
    }
    let key=Array.from(map.keys());
        let valuse=Array.from(map.values());
        for(let i=0;i<key.length;i++) {
            console.log(`${key[i]} -> ${valuse[i]}`);
        }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])