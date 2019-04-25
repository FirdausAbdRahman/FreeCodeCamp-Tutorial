function rot13(str) {
  //split str into a char string
  return str.split('')
  //iterate over each char in the array
  .map.call(str, function(char) {
    //convert char to a char code
    let x = char.charCodeAt(0);
    //check if char lies between A-Z
    if (x < 65 || x > 90) {
       //return un-converted char
       return String.fromCharCode(x);
        
      //if char code is less than 78, shift forward 13 places
      }else if (x < 78) {
        return String.fromCharCode(x + 13);
      }//otherwise, shift the char 13 places backward
      return String.fromCharCode(x - 13);
      }).join(''); //rejoin the array into a string
    }

console.log(rot13("SERR PBQR PNZC"));
