var countRegNumber=function(plateNumbers){
 var separate=plateNumbers.split(',');
  console.log(separate.length);
  return separate.length;
}
countRegNumber('CA 182736,CY 523519,CJ 812328');
countRegNumber('CA 42665, AA 12 RT GP');
