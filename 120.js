function wordOccurrences(arr) {
    let result={};
    for(let i=0;i<arr.length;i++) {
        let name=arr[i];
        if(!result.hasOwnProperty(name)) {
            result[name]=1;
        } else {
            result[name]=result[name]+1;
        }
    }
    let entries=Object.entries(result);
    entries=entries.sort((a,b) => b[1]-a[1]
    )
    for(let i=0;i<entries.length;i++) {
        console.log(`${entries[i][0]} -> ${entries[i][1]} times`)
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])