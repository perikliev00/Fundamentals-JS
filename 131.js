function hashtag(text) {
    let textArr=text.split(" ");
    let arr=[];
    for(let i=0;i<textArr.length;i++) {
        if(textArr[i][0]=="#") {
            let t
            textArr[i].substring(1,textArr[i].length)
            arr.push(textArr[i]);
            }
        }
    
    for(let i=0;i<arr.length;i++) {
        console.log(arr[i]);
    }
} 

hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')