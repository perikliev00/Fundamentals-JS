function schoolGrades(arr) {
    let result={};
    for(let i=0;i<arr.length;i++) {
        let tokens=arr[i].split(' ');
        let name=tokens[0];
        let grades=[];
        if(!result.hasOwnProperty(name)) {
            for(let x=1;x<tokens.length;x++) {
                grades.push(Number(tokens[x]));
            }
            result[name]=grades;
        } else {
            let oldGrades=result[name];
            delete result[name];
            result[name]=oldGrades;
            for(let x=1;x<tokens.length;x++) {
                (result[name]).push(Number(tokens[x]));
            }
        }
    }
    for(let k in result) {
        let avrgGrde=0;
        for(let i=0;i<result[k].length;i++) {
            avrgGrde=avrgGrde+result[k][i];
        }
        avrgGrde=avrgGrde/result[k].length;
        console.log(`${k}: ${avrgGrde.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])
