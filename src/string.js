//return true if string contains vowels
String.prototype.hasVowels = function() {
  var result = (/([aAeEiIoOuU])\w/g).test(this);
  return result;
};
//returns a string in uppercase where applicable
String.prototype.toUpper = function() {
  var convertedString = [];

  for (var i = 0; i < this.length; i++) {
    if (this.charCodeAt(i) >= 97 && this.charCodeAt(i) <= 122) {
      var code = String.fromCharCode(this.charCodeAt(i) - 32);
      convertedString.push(code);
    } else {
      convertedString.push(a[i]);
    }
  }
  return convertedString.join('');
};

//returns string in lowercase as applicable
String.prototype.toLower = function() {
  var convertedString = [];

  for (var i = 0; i < this.length; i++) {
    if (this.charCodeAt(i) >= 65 && this.charCodeAt(i) <= 90) {
      var code = String.fromCharCode(this.charCodeAt(i) + 32);
      convertedString.push(code);
    } else {
      convertedString.push(a[i]);
    }
  }
  return convertedString.join('');
};

//returns true if string ends with a question mark
String.prototype.isQuestion = function() {
  var question = /[?]$/.test(this);
  return question;
};

//returns list of words in the string as an array
var wordsArray;
String.prototype.words = function() {
  wordsArray = this.replace(/\W+/g, ' ').trim().split(' ');
  return wordsArray;
};

//returns the number of words in the string
String.prototype.wordCount = function() {
  return (this.words()).length;
};

//returns currency representation of the string
String.prototype.toCurrency = function() {
  return parseInt(this).toFixed().toLocaleString();
};

//returns a number representation from the currency string
String.prototype.fromCurrency = function() {
  var integer = this.replace(/,/g, '');
  return parseInt(integer).toFixed(2).toString();
};
