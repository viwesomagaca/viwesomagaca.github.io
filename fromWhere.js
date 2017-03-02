var fromWhere=function(registration_number){
  switch(registration_number){
        case "CY":
      return "Bellville";
        case "CJ":
      return "Paarl";
        case "CA":
      return "Cape Town";
      
    default:
      return "Some other place!";
                            }
}
//assert.equal(fromWhere("CY"),"Bellville");
var result=fromWhere("CY");
 //console.log(result);                    

      