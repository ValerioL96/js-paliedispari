//Palindroma
//Chiedere all’utente di inserire una parola:

//1) Creo una variabile per far digitare all'utente una parola;

let userWord = prompt('type a word').trim().toLowerCase();

while(userWord.length<1){
  userWord = prompt('type a word').trim().toLowerCase();
}

//Creare una funzione per capire se la parola inserita è palindroma:

//2) Creo una funzione che mi permetta di capire se la parola digitata dall'utente sia uguale alla stessa parola inversa

reverseUserWord(userWord);

function reverseUserWord(word){
   
  if(word.length ==1){
    return true;
  }else{

    //questo grazie all'uso di un ciclo for 

    for(let i= palindroma.length-1; i>0; i--){
      const palindroma = word;
      let reversePalindroma = '';
      reversePalindroma+= palindroma[i];
    }
    return(reversePalindroma);
  
  }
  
  let reverseWord = reverseUserWord(userWord);
       

// e una condizione.

  if(reverseWord == word){
    return true;
  }else{
   return false;
  }

  }


