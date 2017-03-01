describe('Reg Check', function () {

    it('should return true if the registration number is from the same Location', function () {
        assert.equal(regCheck("DV 23 NB GP","GP"),true);
    });
        
    it('should return false if the registration number is not from the same location', function(){
        assert.equal(regCheck("DV 23 NB GP","CY"),false);
    });
});
