export class FizzBuzz {
    fizzBuzz(n : number): (string|number)[] {
        let resultat: (string|number)[] = [];
        let chiffre : number = 0;
        let isFizzBuzz : boolean = false;

        for(let i=0;i<n;i++) {
            chiffre = i+1;
            resultat[i] = "";
            isFizzBuzz = false;
            
            if(chiffre % 3 == 0 || chiffre.toString().includes("3")) {
                resultat[i] += "Fizz";
                isFizzBuzz = true;
            } 
            
            if(chiffre % 5 == 0 || chiffre.toString().includes("5")) {
                resultat[i] += "Buzz";
                isFizzBuzz = true;
            }

            if(!isFizzBuzz) {
                resultat[i]=chiffre;
            }
        }

        return resultat;
    }
            
}