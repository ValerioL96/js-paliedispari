Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

1) chiedo all'utente pari o dispari con una variabile prompt:

    - let oddOrEven = prompt('pari o dispari').trim().toLowerCase();

2) creo un ciclo while in cui dico che finchè la variabile dell'utente è diversa da pari o è diversa da dispari continuo a chiedere:
    
    - while(oddOrEven != 'pari' && oddOrEven != 'dispari){
        oddOrEven = prompt('pari o dispari').trim().toLowerCase();
    }

3) chiedo all'utente un numero da 1 a 5 con una variabile prompt:

    - let userNumbers = Number.parseInt(prompt('Scegli un numero da 1 a 5').tirm(),10);

4) creo un ciclo while in cui dico che finchè la variabile dell'utente non è un numero o è minore di 1 o è maggiore di 5 continuo a chiedere:
    
    - while(Number.IsNaN(userNumbers) || userNumbers<1 ||userNumbers>5){
        let userNumbers = Number.parseInt(prompt('Scegli un numero da 1 a 5').tirm(),10);
    }    

    - console.log('L\'utente ha scelto ${oddOrEven}, e il numero è $(userNumbers)');

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

5) creo una funzione che mi dia un numero randomico da 1 a 5:

    - const numberIA = getRandomInt(1,5);

    - function getRandomInt(min,max){
        return randomNumber = Math.floor(Math.random()* (max - min + 1)+ min);
    }


Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

6) creo una variabile che sarà la somma del numero dato dal computer con quello dell'utente:

    - const sum = userNumbers + numberIA;
    - console.log('il numero del computer è ${numerbIA}, e la somma dei numeri è ${sum}');

7) creo una funzione per vedere se la somma è pari o dispari e stabilisco il vincitore:

    - function oddOrEvenSum(number){
        if(number%2 == 1){
            return 'pari';
        }else{
            return 'dispari';
        }
    };

8) creo una variabile risultato della somma e mi creo una condizione:

    - const result = oddOrEvenSum(sum);
    - if(result == oddOrEven){
        console.log('L\'utente vince!');
    }else{
        console.log('L\'utente perde!');
    };