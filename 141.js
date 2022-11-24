function squareOfStars(number) {
    if(number==null) {
        let str='* * * * *'
        for(let i=0;i<5;i++) {
            console.log(str);
        }
    } else {
        let str='';
        for(let i=0;i<number;i++) {
            str=str+'* '
        }
        for(let y=0;y<number;y++) {
            console.log(str);
        }
    }
}
squareOfStars()