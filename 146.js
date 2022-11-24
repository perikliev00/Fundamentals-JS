function timeToWalk(steps,footPrint,speed) {
  speed=speed*1000;
  let hours=0;
  let minutes;
  let seconds;
  let distanceInMeters=steps*footPrint;
  let speedIndex=distanceInMeters/speed;
  minutes=(speedIndex*60).toFixed(2);
  seconds=Math.round((minutes-Math.floor(minutes))*60);
  minutes=Math.floor(minutes);
  hours=Math.floor(minutes/60);
  if(hours>0) {
    minutes=minutes-hours*60;
  }
  let bonusMinutes=Math.floor(distanceInMeters/500);
  if(minutes+bonusMinutes>59) {
    minutes=minutes+bonusMinutes-60;
    hours++;
  }
  else {
    minutes=minutes+bonusMinutes;
  }
  if(hours<=9) {
    hours=String('0'+hours)
  }
  if(minutes<=9) {
    minutes=String('0'+minutes);
  }
  if(seconds<=9) {
    seconds=String('0'+seconds);
  }
  console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(16000, 0.60, 5)
//////5000/60=83 meters in minute distance/83=minutes///
//////83.33/60=1.38 meters in second distance/1.38=seconds;
