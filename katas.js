 
// Reverse string

function reverse(str) {
  return str.split("").reverse().join('')

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

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
 }
 
 function cleanString (str){
  return str.toLowerCase().split('').sort().join().replace(/[^\w]/g,'')
 }

// capitalize the first letter of each word in the string

function capitalize(str) {
  const capitalized = [];
  for(let i of str.split(' ')){
    capitalized.push(i[0].toUpperCase() + i.slice(1))
  }
  return capitalized.join(' ')
}


// bubble sort numbers

BubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser
      }
    }
  }
  return arr
}

console.log(BubbleSort([30, -5, 90, 4, -8]))
  

selectionSort = (arr) => {

}

// Sort array of integers (how are they sorted)


function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}

console.log(isSortedAndHow([30, -5, 90, 4, -8]))

// Print out the n-th entry in the fibonacci series

function fib(n) {
  const arr = [0, 1]
  for (let i = 2; i <= n; i++) {
    const char = arr[i-1] + arr[i-2]
    arr.push(char)  
  }
return arr[n]
}