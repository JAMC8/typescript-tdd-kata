import {FizzBuzz} from "../fizzBuzz";


describe('FizzBuzz tdd test', () => {

    it('Un argument 3 doit retourner [1, 2, "Fizz"]', () => {
        const fizzBuzz = new FizzBuzz();
        const attendu : (string|number)[] = [1, 2, "Fizz"]
        const resultat : (string|number)[] = fizzBuzz.fizzBuzz(3);

        expect(resultat).toEqual(attendu);
    });


    it('Un argument 5 doit retourner [1, 2, "Fizz", 4, "Buzz"]', () => {
        const fizzBuzz = new FizzBuzz();
        const attendu : (string|number)[] = [1, 2, "Fizz", 4, "Buzz"]
        const resultat : (string|number)[] = fizzBuzz.fizzBuzz(5);

        expect(resultat).toEqual(attendu);
    }); 
    
    it('Un argument 15 doit retourner [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", "Fizz", 14, "FizzBuzz"]', () => {
        const fizzBuzz = new FizzBuzz();
        const attendu : (string|number)[] = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", "Fizz", 14, "FizzBuzz"]
        const resultat : (string|number)[] = fizzBuzz.fizzBuzz(15);

        expect(resultat).toEqual(attendu);
    });
    
    it('Un argument 55 doit retourner\n[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", "Fizz", 14, "FizzBuzz",  16, 17, "Fizz", 19, "Buzz", "Fizz", 22, "Fizz", "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz", "Fizz", "Fizz", "Fizz", "Fizz", "Buzz", 41, "Fizz", "Fizz" ,44, "FizzBuzz",46,47,"Fizz",49,"Buzz","FizzBuzz","Buzz","FizzBuzz","FizzBuzz","Buzz"]', () => {
        const fizzBuzz = new FizzBuzz();
        const attendu : (string|number)[] = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", "Fizz", 14, "FizzBuzz",  16, 17, "Fizz", 19, "Buzz", "Fizz", 22, "Fizz", "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz", "Fizz", "Fizz", "Fizz", "Fizz", "Buzz", 41, "Fizz", "Fizz" ,44, "FizzBuzz",46,47,"Fizz",49,"Buzz","FizzBuzz","Buzz","FizzBuzz","FizzBuzz","Buzz"]
        const resultat : (string|number)[] = fizzBuzz.fizzBuzz(55);

        expect(resultat).toEqual(attendu);
    }); 
});



// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]