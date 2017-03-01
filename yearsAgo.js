var yearsAgo=function (year){
  var date= new Date();
  var fullyear=date.getFullYear();
  var whichYear = fullyear-year
  console.log(whichYear);
  return whichYear;
}
yearsAgo(1995);
