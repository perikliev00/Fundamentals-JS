function towns(arr) {
    let array=[];
    class towns {
        constructor(name,n1,n2) {
            this.x=name;
            this.y=n1;
            this.z=n2;
        }
        }
    
    for(let i=0;i<arr.length;i++) {
        let temp=arr[i].split(` | `);
        let name=temp[0];
        let n1=Number(temp[1]);
        let n2=Number(temp[2]);
        array.push(new towns(name,n1.toFixed(2),n2.toFixed(2)));

    }
    for(let i=0;i<array.length;i++) {
        console.log(`{ town: '${array[i].x}', latitude: '${array[i].y}', longitude: '${array[i].z}' }`);
    }

}