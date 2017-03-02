var totalPhoneBill= function(total){
  var separate=total.split(',');
  var call=[];
  var sms=[];
  for(i=0; i<separate.length; i++){
    var list= separate[i].trim();
    
       if(list.startsWith('c')){
       call.push(separate[i]);
      }
    
      else if(list.startsWith('s')){
      sms.push(separate[i]);
      }
  }
  console.log(sms.length);
  var total1=call.length* 2.75;
  var total2 = sms.length * 0.65;
    
  var a= total1 + total2;
  var answer = a;
    
  console.log('R' +answer.toFixed(2));
  return 'R' + answer.toFixed(2);
  
   
}
 totalPhoneBill('call, sms, call, sms, sms');