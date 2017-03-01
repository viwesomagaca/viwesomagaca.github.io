var isFromBellville = function(reg) {
  var isFrom = reg.startsWith("CY");
  var isNot = !reg.startsWith("CY");
  console.log(isFrom);
  console.log(isNot);
  return (isFrom);
}
isFromBellville("CY");