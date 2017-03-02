  var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var findItemsOver20 = function(items){
  var newList= [];
  for( i=0; i< items.length; i ++){
    var fruits = items[i];
    var name= fruits.name;
    var quantity= fruits.qty;
    
    if( quantity > 20){
      newList.push(items[i]);
    }
    
  }
    
    console.log(newList);
  return newList;

};


findItemsOver20( itemList);
