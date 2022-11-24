function revealWords(arr,text) {
    let words=arr.split(", ");
    let textArr=text.split(" ");
    for(let i=0;i<words.length;i++) {
        for(let x=0;x<textArr.length;x++) {
            if(textArr[x].length==words[i].length&&textArr[x][0]=="*") {
                text=text.replace(textArr[x],words[i]);
            }
        }
    }
    console.log(text);
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
)