var allPaarl  = function (regNumbersForPaarl) {
  var separate = regNumbersForPaarl.split(',');
  var newL = [];
  
  for (i = 0; i<separate.length; i++) {
  
   if (separate[i].startsWith('CJ')) {
     newL.push(separate[i]);
   }
  }
 // console.log(newL);
  return newL;
}
     