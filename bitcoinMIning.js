function bitcoinMine(input) {
    let total=0;
    let bitcoins=0;
    let firstDay=0;
    let day=0;
    let j=0;
    for(let i=0;i<input.length;i++) {
        day++;
        if(day%3==0) {
            let discount=Number(input[i])*0.3;
            total=total+Number(input[i])-discount;
        } else {
        total=(total+Number(input[i]));
        }
        if(total*67.51>=11949.16&&j==0) {
            firstDay=day;
            j++
        }   
    }
    bitcoins=Math.trunc(total*67.51/11949.16 );
    console.log(`Bought bitcoins: ${Math.trunc(total*67.51/11949.16 )}`);
    if(firstDay>0) {

    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${(total*67.51-bitcoins*11949.16).toFixed(2)} lv.`)
}
bitcoinMine([100, 200, 300])