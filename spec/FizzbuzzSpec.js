describe('Fizzbuzz', function() {

  var fizzbuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when it is not', function() {

    it('divisible by 3', function() {
      fuzzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe('when playing game, says', function() {

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"FizzBuzz" when a number is divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });

  });

});
