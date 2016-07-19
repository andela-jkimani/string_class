(function() {
	'use strict';

	//return true if string contains vowels
	String.prototype.hasVowels = function() {
	  return (/([aeiou])/gi).test(this);
	};

	//returns a string in uppercase where applicable
	String.prototype.toUpper = function() {
	  return this.replace(/[a-z]/g, function(val) {
	  	return (String.fromCharCode(val.charCodeAt() - 32));
	  });
	};

	//returns string in lowercase as applicable
	String.prototype.toLower = function() {
	  return this.replace(/[A-Z]/g, function(val) {
	  	return (String.fromCharCode(val.charCodeAt() + 32));
	  });
	};

	// returns first character of string in uppercase
	String.prototype.ucFirst = function() {
	  return this.replace(/(^\S)/g, function(val){
	  	return val.toUpper();
	  });
	};

	//return each string with the first character in uppercase
	String.prototype.toTitleCase = function() {
		return this.replace(/((\b)([a-z]))/g, function(val) {
			return val.toUpper();
		});
	};

	//returns true if string ends with a question mark
	String.prototype.isQuestion = function() {
	  return /[?]$/.test(this);
	};

	//returns list of words in the string as an array
	String.prototype.words = function() {
	  return this.replace(/\W+/g, ' ').trim().split(' ');
	};

	//returns the number of words in the string
	String.prototype.wordCount = function() {
	  return (this.words()).length;
	};

	//returns currency representation of the string
	String.prototype.toCurrency = function() {
	  var number = Number(this).toFixed(2);
	  return number.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	};

	//returns a number representation from the currency string
	String.prototype.fromCurrency = function() {
	  var integer = this.replace(/,/g, '');
	  return Number(integer);
	};

}) ();