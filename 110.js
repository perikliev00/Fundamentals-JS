function inventory(arr) {
    let arrayOfHeros=[];
    class heros {
        constructor(hero,level,items) {
            this.name=hero;
            this.points=Number(level);
            this.tools=items;
        }
    }
    for(let i=0;i<arr.length;i++) {
        let elements=arr[i].split(" / ");
        let tools=elements[2].split(", ");
        arrayOfHeros.push(new heros(elements[0],(elements[1]),tools));
    }
    arrayOfHeros.sort((a,b) => a.points-b.points);
    for(let i=0;i<arrayOfHeros.length;i++) {
        console.log(`Hero: ${arrayOfHeros[i].name}`);
        console.log(`level => ${arrayOfHeros[i].points}`);
        console.log(`items => ${arrayOfHeros[i].tools.join(", ")}`)
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])