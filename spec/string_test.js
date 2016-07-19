describe('String class extension', function() {

  describe('vowels test', function() {
    it('should return true if string contains vowels', function() {
      expect('hello'.hasVowels()).toBe(true);
      expect('aeiou'.hasVowels()).toBe(true);
      expect('hEllo'.hasVowels()).toBe(true);
    });

    it('should return false if string does not contain vowels', function() {
      expect('qqwv'.hasVowels()).toBe(false);
      expect('KLNM'.hasVowels()).toBe(false);
      expect('X yd'.hasVowels()).toBe(false);
      expect('BS!!!'.hasVowels()).toBe(false);
    });
  });


  describe('toUpperCase test', function() {
    it('should return the string in uppercase', function() {
      expect('hello'.toUpper()).toBe('HELLO');
      expect('123'.toUpper()).toBe('123');
      expect('123abc'.toUpper()).toBe('123ABC');
      expect('123aBC'.toUpper()).toBe('123ABC');
    });
  });


  describe('toLowerCase test', function() {
    it('should return a string in lowercase', function() {
      expect('HELLO'.toLower()).toBe('hello');
      expect('123'.toLower()).toBe('123');
      expect('123ABC'.toLower()).toBe('123abc');
      expect('123aBC'.toLower()).toBe('123abc');
    });
  });

  describe('Upper case first test', function() {
    it('should return a string with the first character as uppercase', function() {
      expect('jacky'.ucFirst()).toBe('Jacky');
      expect('hello jacky'.ucFirst()).toBe('Hello jacky');
      expect('HelLo jacky'.ucFirst()).toBe('HelLo jacky');
      expect('123jacky'.ucFirst()).toBe('123jacky');
    });
  });

  describe('isQuestion test', function() {
    it('should return true if the last character is a question mark', function() {
      expect('hello?'.isQuestion()).toBe(true);
      expect('A girl has no name, right?'.isQuestion()).toBe(true);
      expect('Where ?'.isQuestion()).toBe(true);
    });

    it('should return false if the last character is not a question mark', function() {
      expect('hello'.isQuestion()).toBe(false);
      expect('he?llo'.isQuestion()).toBe(false);
      expect('Hi? Jacky'.isQuestion()).toBe(false);
    });
  });


  describe('words list test', function() {
    it('should return a list of the words in the string', function() {
      expect('hi jacky'.words()).toEqual(['hi', 'jacky']);
      expect('Sasa'.words()).toEqual(['Sasa']);
      expect('1 dance'.words()).toEqual(['1', 'dance']);
      expect('Hello Jacky. How have*you been? Good?'.words()).toEqual(['Hello', 'Jacky', 'How', 'have', 'you', 'been', 'Good']);
      expect(typeof 'Andela'.words()).toBe('object');
    });
  });


  describe('number of words test', function() {
    it('should return the number of words in the string', function() {
      expect('hello jacky'.wordCount()).toBe(2);
      expect('Nicki'.wordCount()).toBe(1);
      expect(typeof 'Panda panda panda'.wordCount()).toBe('number');
    });
  });

  describe('number to currency test', function() {
    it('returs a currency representation of the string', function() {
      expect('100'.toCurrency()).toBe('100.00');
      expect('12000'.toCurrency()).toBe('12,000.00');
      expect('1000900876.11'.toCurrency()).toBe('1,000,900,876.11');
    });
  });


  describe('currency to number test', function() {
    it('should return the number representation of the currency string', function() {
      expect('12,000'.fromCurrency()).toBe(12000);
      expect('1,000,900,876.11'.fromCurrency()).toBe(1000900876.11);
    });
  });


});
