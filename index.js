alert('Please Enter a number  Between 1 and 10')

// let min = 1
// let max = 10


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

 let number = getRndInteger(1,10)
 console.log(number);

let guess = prompt('Enter A number for Guessing')
    guess = parseInt(guess)
 


for(let i = 1; i <= 4;i++){


    if( number==guess){
        alert('You win  !!!')
        break
    }
    else if( guess < number){
        alert('corrcet number is greater ')
    }
    else {
        alert('corrcet number is smaller ')
    }
    
    let a
    
    if(i==3){
        alert('you lost ! ')
        break;
    }
    guess = prompt('Please try again !')
    

}