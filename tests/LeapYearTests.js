require('should');
var isLeapYear = require('../isLeapYear');

var notLeapYears = [1991, 2001, 2003,  1023, 955, 1935, 2229, 1987, 1999];
var yearsDivisibleBy4And100 = [1900, 1800, 1700];
var typicalLeapYears = [1996, 2004, 1992, 1988, 1984, 2016];
var aTypicalLeapYears = [2000, 1600, 1200, 2400];

describe('Leap Year', function(){
  it('returns false if the year is not a leap year', function(){
    notLeapYears.forEach(function(yr){
      isLeapYear(yr).should.be.false;
    });
  });
  it('returns false if the year is divislbe by 4 and 100', function(){
    yearsDivisibleBy4And100.forEach(function(yr){
      isLeapYear(yr).should.be.false;
    });
  });
  it('returns true if the year is divisible by 4 but not 100', function(){
    typicalLeapYears.forEach(function(yr){
      isLeapYear(yr).should.be.true;
    });
  });
  it('returns true if the year is divisible by 4 and 400', function(){
    aTypicalLeapYears.forEach(function(yr){
      isLeapYear(yr).should.be.true;
    });
  });
});
