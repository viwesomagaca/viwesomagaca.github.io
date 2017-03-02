 describe( 'Iterms over 20 function',  function() {
    
         it('Should return iterms that are over 20' ,function(){
              assert.deepEqual(findItemsOver20(itemList), [{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}] );
         });
     
         });
