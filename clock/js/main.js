const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = calculateDegress(seconds);
  setDegress(secondHand, secondsDegrees);

  const mins = now.getMinutes();
  const minsDegrees = calculateDegress(mins);
  setDegress(minHand, minsDegrees);

  const hours = now.getHours();
  const hoursDegrees = calculateDegress(hours, 12);
  setDegress(hourHand, hoursDegrees);
}

function calculateDegress(time, segments = 60){
  return ((time / segments) * 360) + 90;
}

function setDegress(hand, degrees){
  hand.style.transform = `rotate(${degrees}deg)`;
}

setInterval(setDate, 1000);
