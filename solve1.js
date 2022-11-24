function solve() {
    class dog {
        constructor(dogName,age) {
            this.dogName=dogName;
            this.age=age;
        }
        speak() {
            console.log(`${this.dogName} is ${this.age} years old and says woof!`);
        }
    }
    let newDog=new dog("Marki",10);
    newDog.speak();
}
solve();