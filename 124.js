function cardGame(arr) {
    let typePowers= {
        S:4,
        H:3,
        D:2,
        C:1
    };
    let players={}
    for(let i=0;i<arr.length;i++) {
        let myArr=arr[i].split(": ");
        let name=myArr[0];
        let cards=myArr[1].split(", ");
        let arrayWithCardsPower=[]
        if(players.hasOwnProperty(name)) {
            arrayWithCardsPower=players[name];
        }
        for(let x=0;x<cards.length;x++) {
                let card=cards[x];
                if(arrayWithCardsPower.includes(card)) {

                } else {
                    arrayWithCardsPower.push(card);
                }
            }
                players[name]=arrayWithCardsPower;
            } 
        
    
    let keys=Object.keys(players);
    for(let k=0;k<keys.length;k++) {
        let a=keys[k];
        let sum=0;
        for(let i=0;i<players[a].length;i++) {
            let card=players[a][i];
            if(card[0]=="A") {
                sum=sum+14*typePowers[card[1]];
            } else if(card[0]=="K") {
                sum=sum+13*typePowers[card[1]];
            } else if(card[0]=="Q") {
                sum=sum+12*typePowers[card[1]];
            } else if(card[0]=="J") {
                sum=sum+11*typePowers[card[1]];
            } else if(card[0]==1&&card[1]==0) {
                sum=sum+10*typePowers[card[2]];
            } 
             else  {
                sum=sum+Number(card[0])*typePowers[card[1]]
            }
        }
        console.log(`${keys[k]}: ${sum}`)
    } 
} 
 cardGame([
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
        ]
        )
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ])