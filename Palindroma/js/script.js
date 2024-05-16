//Palindroma
//Chiedere all’utente di inserire una parola:

//1) Creo una variabile per far digitare all'utente una parola;

const userWord = prompt('type a word');

//Creare una funzione per capire se la parola inserita è palindroma:

//2) Creo una funzione che mi permetta di capire se la parola digitata dall'utente sia uguale alla stessa parola inversa

function reverseUserWord(word){
    const palindroma = word;
    let reversePalindroma = '';
  

//questo grazie all'uso di un ciclo for 

    for(let i= palindroma.length-1; i>0; i--){
      reversePalindroma+= palindroma[i];
    }
    return(reversePalindroma);
  
  }
  
  let reverseWord = reverseUserWord(userWord);
       

// e una condizione.

  if(userWord == reverseWord){
    console.log(' It is a palindromic word');
  }else{
    console.log('It is not a palindromic word ');
  }
