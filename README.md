# String Class
Extends the string methodds with custom methods.

### The methods include:

`hasVowels()`

Returns true if the string contains vowels. 
For example `'jacky'.hasVowels()` should return true while `'ABD'.hasVowels()` should return false.

`toUpper()`

Returns the String in question but with all characters in upper cases as applicable without using the `toUpperCase()` method.
For example `'Andela the Dojo'.toUpper()` should return 'ANDELA THE DOJO'

`toLower()`

Returns the String in question but with all characters in their lower cases as applicable without using the `toLowerCase()` method.
For example `'JACKY'.toLower()` method should return 'jacky'.

`ucFirst()`

Returns the String in question but changes the First Character to an Upper case.
For example `'andela the dojo'.ucFirst()` should return 'Andela the dojo'.

`toTitleCase()`

Returns all words in the string with the first character as uppercase.
For example `'andela the dojo'.toTitleCase()` should return 'Andela The Dojo'.

`isQuestion()`

Return true if the string is a question (ending with a question mark).
For example, returns true for `'hi?'.isQuestion()`

`words()`

Returns a list of the words in the string, as an Array.
For example, `'andela the dojo'.words()` should return ['andela', 'the', 'dojo'].

`wordCount()`

Returns the number of words in the string.
For example `'andela the dojo'.wordCount()` should return 3

`toCurrency()`

Returns a currency representation of the String.
For example, `'11111.11'.toCurrency()` should be represented as 11,111.11

`fromCurrency()`

Returns a number representation of the Currency String.
For example, `'11,111.11'.fromCurrency()` should return 11111.11
