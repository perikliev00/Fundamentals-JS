function movies(array) {
    let arr=[];
    for(let i=0;i<array.length;i++) {
        let obj={};
        let comands=array[i].split(" ");
        if(comands[0]=="addMovie") {
            let string=comands[1];
            for(let x=2;x<comands.length;x++) {
                string=string+" "+comands[x];
            }
            obj.name=string;
            arr.push(obj);
        } else if(comands[1]=="directedBy") {
            for(let x=0;x<arr.length;x++) {
                let values=Object.values(arr[x]);
                if(values.includes(comands[0])==true) {
                    let string=comands[2]
                    for(let x=3;x<comands.length;x++) {
                        string=string+" "+comands[x];
                    }
                    arr[x].director=string;
                    break;
                }
            }
        } else if(comands[1]=="onDate") {
            for(let x=0;x<arr.length;x++) {
                let values=Object.values(arr[x]);
                if(values.includes(comands[0])==true) {
                    arr[x].date=comands[2];
                    break;
                }
            }
        }
    }
    for(let i=0;i<arr.length;i++) {
        let x=Object.values(arr[i]);
        if(x.length>=3) {
            console.log(JSON.stringify(arr[i]));
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])