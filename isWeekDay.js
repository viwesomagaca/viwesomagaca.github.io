var isWeekday = function(dayName){
  var weekday =!dayName.startsWith('S');
  var weekend = dayName.startsWith('S');
    console.log(dayName + ' is a weekday: ' + weekday);
    console.log(dayName + ' is a weekend: ' + weekend);
    return weekday;
}
isWeekday('Saturday');