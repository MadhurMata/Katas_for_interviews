 
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

// fizzbuzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}


// divide the array into many subarrays

function chunk(array, size) {
  const newArray = [];
  const copyArray = [...array];
  const numDivisions = Math.ceil(copyArray.length / size);
  for (let i = 0; i < numDivisions; i++) {
    newArray.push(copyArray.splice(0,size));
  }
  return newArray
}

// anagranms

function capitalize(str) {
  const capitalized = [];
  for(let i of str.split(' ')){
    capitalized.push(i[0].toUpperCase() + i.slice(1))
  }
  return capitalized.join(' ')
}

// capitalize the first letter of each word in the string

function capitalize(str) {
  const capitalized = [];
  for(let i of str.split(' ')){
    capitalized.push(i[0].toUpperCase() + i.slice(1))
  }
  return capitalized.join(' ')
}

module.exports = capitalize;