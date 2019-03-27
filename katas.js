 
// Reverse string

function reverse(str) {
  const newArray = str.split("")
  const  reversed= newArray.reverse()
  const reverse = reversed.join('')
  return reverse
  }

// Palindrome

function palindrome(str) {
  const reversed = str.split('').reverse().join('')
  return str === reversed
}

// reverse integer

function reverseInt(n) {
  const reverse =  parseInt(n.toString().split('').reverse().join(''))
    return reverse * Math.sign(n)
}

// Most common used character in a string

function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = '';
  for (let i of str){
    chars[i] = chars[i] + 1 || 1;
  }
  for ( let i in chars) {
    if(chars[i]>max){
      max = chars[i];
      maxChar = i
    }
  }
  return  maxChar
}


