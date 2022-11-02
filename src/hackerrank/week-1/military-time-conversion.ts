function convertToMilitaryTime(twelveHourFormatTime: string) {
  const meridianTime: string = getMeridianOfTime(twelveHourFormatTime);
  const timeIntoHHMMSS = splitTimeIntoHHMMSS(twelveHourFormatTime);
  if (meridianTime == 'AM') {
    if (timeIntoHHMMSS[0] == '12') timeIntoHHMMSS[0] = '00';
    return timeIntoHHMMSS.join(':');
  }
  const hourAsInt = parseInt(timeIntoHHMMSS[0]);
  if (hourAsInt < 12) {
    timeIntoHHMMSS[0] = (hourAsInt + 12).toString();
  }
  return timeIntoHHMMSS.join(':');
}

function getMeridianOfTime(time: string) {
  return time.toUpperCase().includes('AM') ? 'AM' : 'PM';
}

function splitTimeIntoHHMMSS(time: string): string[] {
  return time.replace('AM', '').replace('PM', '').split(':');
}

console.log(convertToMilitaryTime('07:01:01PM'));
console.log(convertToMilitaryTime('11:01:01AM'));
console.log(convertToMilitaryTime('01:01:01AM'));
console.log(convertToMilitaryTime('10:01:01AM'));
console.log(convertToMilitaryTime('12:01:01AM'));
console.log(convertToMilitaryTime('01:01:01PM'));
console.log(convertToMilitaryTime('11:01:01PM'));
console.log(convertToMilitaryTime('12:00:00PM'));
console.log(convertToMilitaryTime('12:00:00AM'));
