 
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


