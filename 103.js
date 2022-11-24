function convertToJson(name,lastName,hairColor) {
    let obj={};
    obj.name=name;
    obj.lastName=lastName;
    obj.hairColor=hairColor;
    let json=JSON.stringify(obj);
    console.log(json);
}