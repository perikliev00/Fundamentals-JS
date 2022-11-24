function employers(array) {
    let arr=[];
    class employers {
        constructor(name,number) {
            this.y=name;
            this.x=number;
        }
    }
    for(let i=0;i<array.length;i++) {
        let points=0;
        points=array[i].length;
        let name=array[i];
        arr.push(new employers(name,points));
    }
        for(let i=0;i<arr.length;i++) {
        console.log(`Name: ${arr[i].y} -- Personal Number: ${arr[i].x}`);
        }
}
employers([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
