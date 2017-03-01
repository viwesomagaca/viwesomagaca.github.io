describe('greet', function(){

    it('should greet Inga correctly', function(){
        assert.equal('Hello, Viwe', greet('Viwe'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});