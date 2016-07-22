describe('String class extension', function() {

  describe('vowels test', function() {
  	it('should return a boolean value', function() {
  		expect('hi'.hasVowels()).toBe(true);
  		expect('dwgb'.hasVowels()).toBe(false);
  	});

    it('should return true if string contains vowels', function() {
      expect('hello'.hasVowels()).toBeTruthy();
      expect('aeiou'.hasVowels()).toBeTruthy();
      expect('hEllo'.hasVowels()).toBeTruthy();
    });

    it('should return false if string does not contain vowels', function() {
      expect('qqwv'.hasVowels()).toBeFalsy();
      expect('KLNM'.hasVowels()).toBeFalsy();
      expect('X yd'.hasVowels()).toBeFalsy();
      expect('BS!!!'.hasVowels()).toBeFalsy();
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
      expect('Hello jacky'.ucFirst()).toBe('Hello jacky');
      expect('123jacky'.ucFirst()).toBe('123jacky');
    });
  });

  describe('Upper case first in each string', function() {
  	it('should return all strings with the first character as uppercase', function() {
  		expect('hi jacky'.toTitleCase()).toBe('Hi Jacky');
  		expect('123 jacky is awesome'.toTitleCase()).toBe('123 Jacky Is Awesome');
  	});
  });

  describe('isQuestion test', function() {
    it('should return true if the last character is a question mark', function() {
      expect('hello?'.isQuestion()).toBeTruthy();
      expect('A girl has no name, right?'.isQuestion()).toBeTruthy();
      expect('Where ?'.isQuestion()).toBeTruthy();
    });

    it('should return false if the last character is not a question mark', function() {
      expect('hello'.isQuestion()).toBeFalsy();
      expect('he?llo'.isQuestion()).toBeFalsy();
      expect('Hi? Jacky'.isQuestion()).toBeFalsy();
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
    it('returns a currency representation of the string', function() {
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
