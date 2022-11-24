function party(arr) {
    let vipGuests={};
    let regularGuests={};
    let x=0
    for(let i=x;i<arr.length;i++) {
        let str=arr[i];
        let test=str.charCodeAt(0)
        if(str.charCodeAt(0)>=48&&str.charCodeAt(0)<=57) {
            vipGuests[str]=str;
        } else {
            regularGuests[str]=str;
        }
        x=i;
        if(str=="PARTY") {
            break;
        }
    }
    
    for(let i=x;i<arr.length;i++) {
        let str=arr[i];
        if(vipGuests.hasOwnProperty(str)) {
            delete vipGuests[str];
        } else if(regularGuests.hasOwnProperty(str)) {
            delete regularGuests[str];
        }
    }
    let keysVip=Object.keys(vipGuests);
    let keysRegular=Object.keys(regularGuests);
    let length=keysVip.length+keysRegular.length;
    console.log(length)
    for(let k of keysVip) {
        console.log(k)
    }
    for(let k of keysRegular) {
        console.log(k);
    }
}
party(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])