describe('isFromBellville', function () {

    it('should return true if the registration number is from belville', function () {
        assert.equal(isFromBellville("CY 123"),true);
    });
        
    it('should return false if the registration number is not from belville', function(){
        assert.equal(isFromBellville("CB 598"),false);
    });
});

