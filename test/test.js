const { expect } = require('chai');
const fizzbuzz = require('../app');

// permet de décrire un bout de code
describe('A FizzBuzz counter', () => {
    // je vais faire un describe pour chacune des fonctions. Cela permet de découper le code.
    describe('NumberToFizzBuzz', () => {
        // mon premier test : "la fonction devrait exister"
        it('should exist', () => {
            // je m'attends à ce que la fonction existe
            expect(fizzbuzz.NumberToFizzBuzz).to.exist;
        });
        it('should return -1 when arg is not an integer', () => {
            expect(fizzbuzz.NumberToFizzBuzz('')).to.equal(-1);
            expect(fizzbuzz.NumberToFizzBuzz('salut')).to.equal(-1);
            expect(fizzbuzz.NumberToFizzBuzz(true)).to.equal(-1);
            expect(fizzbuzz.NumberToFizzBuzz()).to.equal(-1);
        });
        it('should return 1 when arg is 1', () => {
            expect(fizzbuzz.NumberToFizzBuzz(1)).to.equal(1);
        });
        it('should return 2 when arg is 2', () => {
            expect(fizzbuzz.NumberToFizzBuzz(2)).to.equal(2);
        });
        it('should return fizz when arg is 3', () => {
            expect(fizzbuzz.NumberToFizzBuzz(3)).to.equal('fizz');
        });
        it('should return buzz when arg is 5', () => {
            expect(fizzbuzz.NumberToFizzBuzz(5)).to.equal('buzz');
        });
        it('should return fizz when arg is 6', () => {
            expect(fizzbuzz.NumberToFizzBuzz(6)).to.equal('fizz');
        });
        it('should return fizz when arg is 9', () => {
            expect(fizzbuzz.NumberToFizzBuzz(9)).to.equal('fizz');
        });
        it('should return buzz when arg is 10', () => {
            expect(fizzbuzz.NumberToFizzBuzz(10)).to.equal('buzz');
        });
        it('should return fizzbuzz when arg is 15', () => {
            expect(fizzbuzz.NumberToFizzBuzz(15)).to.equal('fizzbuzz');
        });
        it('should return fizzbuzz when arg is 30', () => {
            expect(fizzbuzz.NumberToFizzBuzz(30)).to.equal('fizzbuzz');
        });
    });
    describe('CountWithFizzBuzz', function() {
        it('should exist', () => {
            // je m'attends à ce que la fonction existe
            expect(fizzbuzz.CountWithFizzBuzz).to.exist;
        });
        it('should return an array', () => {
            expect(fizzbuzz.CountWithFizzBuzz()).to.be.an('array');
        });
        it('should return an empty array when arg is not an integer > 0', () => {
            expect(fizzbuzz.CountWithFizzBuzz("salut")).to.eql([]); // use eql to deep compare object like array
            expect(fizzbuzz.CountWithFizzBuzz(true)).to.eql([]);
            expect(fizzbuzz.CountWithFizzBuzz()).to.eql([]);
            expect(fizzbuzz.CountWithFizzBuzz(-1)).to.eql([]);
        });
        it('should return [1] when arg is 1', () => {
            expect(fizzbuzz.CountWithFizzBuzz(1)).to.eql([1]); // use eql to deep compare object like array
        });
        it('should return [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"] when arg is 15', () => {
            expect(fizzbuzz.CountWithFizzBuzz(15)).to.eql([1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"]); // use eql to deep compare object like array
        });
    })
});