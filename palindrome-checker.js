function palindrome(str){
  let text = str.replace(/[\W_]/g, '').toLowerCase();
  let reversedText = str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');

  if(text === reversedText){
    return true;
  }else{
    return false;
  }
}

palindrome("eye");
