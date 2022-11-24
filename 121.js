function wordsTracker(arr) {
    let result={};
    let words=arr[0].split(" ");
    for(let i=0;i<words.length;i++) {
        let name=words[i];
        result[name]=0;
    }
    for(let i=1;i<arr.length;i++) {
        if(result.hasOwnProperty(arr[i])) {
            result[arr[i]]=result[arr[i]]+1
        }
    }
    let entries=Object.entries(result);
    entries.sort((a,b) => b[1]-a[1]);
    for(let k of entries) {
        console.log(`${k[0]} - ${k[1]}`);
    }
}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])