var mostProfitableDepartment = function(salesData){

	var hardwareValue = [];
	var outdoorValue = [];
	var carpentryValue = [];

	var hardwareCount = 0;
	var outdoorCount = 0;
	var carpentryCount = 0;
	for (var i=0; i<salesData.length; i++){
    var curObj = salesData[i]; // curObj is the 'i' value which will be the index
   	var ObjectDep = curObj.department; //call the department for each index
    var ObjectSales = curObj.sales; // call the sales for each index

    if (ObjectDep == 'hardware'){
      hardwareValue.push(ObjectSales);

    } else if(ObjectDep == 'carpentry'){
    	carpentryValue.push(ObjectSales);

    } else if(ObjectDep == 'outdoor'){
    	outdoorValue.push(ObjectSales);
    }

  }

  for (var a=0; a<hardwareValue.length; a++){
  	hardwareTotal = hardwareValue[a] ;
  	hardwareCount = hardwareCount + hardwareTotal;

  	var outdoorTotal = outdoorValue[a] ;
  	outdoorCount = outdoorCount + outdoorTotal;

  	var carpentryTotal = carpentryValue[a] ;
  	carpentryCount = carpentryCount + carpentryTotal;

  }

  var obj = {'hardwareCount': hardwareCount, 'outdoorCount': outdoorCount, 'carpentryCount': carpentryCount};
  console.log(obj);

	var biggest = '';
	for (var name in obj) {
	    if(biggest !== '' && obj[name] > obj[biggest]) {
	        biggest = name;
	    } else if (biggest === '') {
	        biggest = name;
	    }
	}
	if (biggest == 'outdoorCount'){
		return 'outdoor';

	}else if (biggest == 'hardwareCount'){
		return 'hardware';

	} else if (biggest == 'carpentryCount'){
		return 'carpentry';

	}
};


var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];

console.log(mostProfitableDepartment(salesData))
