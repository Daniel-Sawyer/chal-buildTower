


const pyramid = (n) => {
  let string = []
   
    for(let i=1; i<= n; i++){

        let str = ' '.repeat(n-i);
    
        let str2 = '*'.repeat(i*2 -1)
        
        string.push(str + str2 + str)
        
    }
    return(string);
 }
   

console.log(pyramid(10));