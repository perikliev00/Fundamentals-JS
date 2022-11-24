function roadRadar(speed,area) {
    let difference;
    let bool=false;
    let speedLimit;
    let status;
    speed=Number(speed);
    if(area=='motorway') {
        speedLimit=130;
        if(speed<=speedLimit) {
            bool=true;
        } else {
            difference=speed-speedLimit;
        }
    } else if(area=='interstate') {
        speedLimit=90;
        if(speed<=speedLimit) {
            bool=true;
        } else {
            difference=speed-speedLimit;
        }
    } else if(area=='city') {
        speedLimit=50;
        if(speed<=speedLimit) {
            bool=true;
        } else {
            difference=speed-speedLimit;
        }
    } else if(area=='residential') {
        speedLimit=20;
        if(speed<=speedLimit) {
            bool=true;
        } else {
            difference=speed-speedLimit;
        }
    }
    if(difference<=20&&bool==false) {
        status='speeding';
    } else if(difference>20&&difference<=40) {
        status='excessive speeding';
    } else {
        status='reckless driving';
    }
    if(bool==true) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}
roadRadar(200, 'motorway');