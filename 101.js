function city(obj) {
    let keys=Object.keys(obj);
    for(let key of keys) {
        console.log(`${key} -> ${obj[key]}`)
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})