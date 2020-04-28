describe("What Can I Drink", function(){

beforeEach(function(){
    drink = new whatCanIDrink();
})

    describe("checks age", function(){

        it("should exist", function(){
            expect(whatCanIDrink).toBeDefined();
        });

        it("should return Drink Toddy! when called as wahtCanIDrink(13)", function(){
            result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy!");
        });

        it("should return Drink Coke! when called as whatCanIDrink(17)", function(){
            result = whatCanIDrink(17);
            expect(result).toBe("Drink Coke!");
        });

        it("should return Drink Beer! when called as whatCanIDrink(20)", function(){
            result = whatCanIDrink(20);
            expect(result).toBe("Drink Beer!");
        });

        it("should return Drink Whiskey! when called as whatCanIDrink(45)", function(){
            result = whatCanIDrink(45)
            expect(result).toBe("Drink Whiskey!");
        });
    });
});