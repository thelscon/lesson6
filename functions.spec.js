describe ('createMonster function', () => {
    it ('should create monster object', () => {
        const monster = {
            id : 1,
            userId : 1,
            name : 'Ktulhu',
            superpower : 'Oops',
            area : 'Cave' ,
        };
        expect(createMonster(1, 'Ktulhu', 'Oops', 'Cave')).to.deep.equal(monster);
    });
}) ;


describe ('Math', () => {
    it('should do pow', () => {
        expect (1).to.equal(1);
    });
});