function cats(arr) {
    let cats=[];
    class cat {
        constructor(name,age) {
            this.name=name;
            this.age=age;
        } 
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
        }
        for(let i=0;i<arr.length;i++) {
            let catData=arr[i].split(` `);
            let name=catData[0];
            let age=catData[1];
            cats.push(new cat(name,age));
        }
        for(let cat of cats) {
            cat.meow();
        }
    }
    cats(['Mellow 2', 'Tom 5'])
