/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if ( index === nums.length) {
    return 1
  }

  return nums[index] * product(nums, index + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, longestWord = 0) {
  if (index === words.length) {
    return longestWord
  }
  
  longestWord = Math.max(words[index].length, longestWord);

  return longest(words, index + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(sentence, index = 0, newSentence = "") {
  if (index >= sentence.length) {
    return newSentence
  } 
  
  newSentence += sentence[index]

  return everyOther(sentence, index + 2, newSentence)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(sentence, index = 0) {
  let leftIndex = index;
  let rightIndex = sentence.length - index - 1;

  if (leftIndex >= rightIndex) {
    return true;
  } 
  
  if (sentence[leftIndex] !== sentence[rightIndex]) {
    return false;
  }
  
  return isPalindrome(sentence, index + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(array, value, index = 0) {
  if (index === array.length) {
    return -1
  }

  if (array[index] === value) {
    return index;
  }
  
  return findIndex(array, value, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(sentence, index = 0, newSentence = "") {
  if (newSentence.length === sentence.length) {
    return newSentence;
  }
    
  newSentence += sentence[sentence.length - 1 - index];
  
  return revString(sentence, index + 1, newSentence);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(object) {
  let stringArray = [];
  for (let key in object) {
    if (typeof object[key] === "string") {
      stringArray.push(object[key])
    }
    if (typeof object[key] === "object") {
      stringArray.push(...gatherStrings(object[key]))
    }
  }

  return stringArray
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(array, value, left = 0, right = array.length) {
  if (left > right) {
    return -1;
  }
  
  let middle = Math.floor((right + left) / 2);
  
  if (array[middle] === value) {
    return middle;
  }

  if (array[middle] > value) {
    return binarySearch(array, value, left, middle - 1);
  }

  return binarySearch(array, value, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
