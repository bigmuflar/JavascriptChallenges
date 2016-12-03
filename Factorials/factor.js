

// Recursive Factorials 

function RecursiveFactorial(num) { 
    
    if(num < 0){
        return -1;
    }
    else if(num === 0){
        return 1;
    }
    else{
        return (num * FirstFactorial(num - 1))
    }

  return num; 
         
}
   
RecursiveFactorial(8);                            


// While Loop - Factorials

function WhileFactorial(num) { 
    var count = num;

    if(count === 0 || count === 1){
        return 1;
    }
    while(count > 1){
        count --;
        num = num * count;
    }
  
  return num; 
         
}
    
WhileFactorial(8);                            


// For Loop - Factorials


function factorialize(num) {
  if (num === 0 || num === 1){
    return 1;
  } 
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }

  return num;

}

factorialize(8);
