function dayInMounth(mounth,year) {
    if(mounth==1||mounth==3||mounth==5||mounth==6||mounth==8||mounth==10||mounth==12) {
        console.log(31)
    } else if(mounth==2 && year%4==0) {
        console.log(29)
    } else if(mounth==2 && year%4!=0) {
        console.log(28)
    } else {
        console.log(30);
    }
} 
dayInMounth(4,2001)