function song(arr) {
    let songCount=arr[0];
    let arrSongs=[];
    class song {
        constructor(type,name,time) {
            this.type1=type;
            this.name2=name;
            this.time3=time;
        }
    }
    for(let i=1;i<arr.length-1;i++) {
        let songData=arr[i].split(`_`);
        let type=songData[0];
        let name=songData[1];
        let time=songData[2];
        arrSongs.push(new song(type,name,time));
    }
    if(arr[arr.length-1]=="all") {
        for(let key of arrSongs) {
            console.log(key.name2);
        }
        } else {
            for(let i=0;i<arrSongs.length;i++) {
                if(arrSongs[i].type1==arr[arr.length-1]) {
                    console.log(arrSongs[i].name2);
                }
            }
        }
}
song([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])