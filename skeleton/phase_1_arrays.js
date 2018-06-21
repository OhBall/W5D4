// 
// Array.prototype.uniq = function () {
//   let uniques = [];
//   let i = 0;
// 
//   while (i < this.length) {
//     if (!uniques.includes(this[i])) {
//       uniques.push(this[i]);
//     }
// 
//     i++;
//   }
// 
//   return uniques;
// };
// 
// Array.prototype.twosum = function () {
//   let i = 0;
//   let sums = [];
//   while (i < this.length){
//     let j = i + 1;
//     while (j < this.length){
//       if (this[i] + this[j] === 0) {
//         sums.push([i,j]);
//       }
//       j++;
//     }
//     i++;
//   }
//   return sums;
// };
// 
Array.prototype.transpose = function() {
  let transposed = new Array(this[0].length);
  for (let i = 0; i < transposed.length; i++) {
    transposed[i] = [];
  }
  
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      transposed[j][i] = this[i][j];
    }
  }

  return transposed;
};

// a = [[1,2],[3,4],[5,6],[7,8]];
// console.log(a.transpose());


Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

const cb = (el) => { return (el * 2)};
// calbak = function cb(el) {
//   return (el * 2);
// };

// a = [1,2,3,4];
// (a.myEach(calbak));

Array.prototype.myMap = function(callback) {
  let mapped = [];
  let mapFunc = function(el) {
      mapped.push(callback(el));
    };
    
  this.myEach(mapFunc);
  return mapped;
};

// a = [1,2,3];
// console.log(a.myMap(calbak));

Array.prototype.myReduce = function(callback, acc){
  let i = (acc ? 0 : 1);
  acc = (acc ? acc : this[0]);
  
  let accFunc = function(el) {
    acc = callback(el, acc);
  };
  
  this.slice(i).myEach(accFunc);
  return acc;
};

calbak = function cb(el1, el2) {
  return (el1 + el2);
};

// a = [1,2,3];
// console.log(a.myReduce(calbak));
// console.log(a.myReduce(calbak, 5));

Array.prototype.bubbleSort = function(callback){
  callback = (callback ? callback : (el1,el2) => { return el1 > el2; });
  let sortedArray = this.slice(0);
  
  let sorted = false;
  for (let i = sortedArray.length - 1; i > 0; i--) {
    sorted = true;
    
    for (let j = 0; j < i; j++) {
      if (callback(sortedArray[j], sortedArray[j + 1])) {
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1]; 
        sortedArray[j + 1] = temp;
        sorted = false;
      }
    }
    
    if (sorted) {
      return sortedArray;
    }
  }
  
  return sortedArray;
};

a = [2,1,3,7,5,8,4];
// console.log(a.bubbleSort());
// console.log(a.bubbleSort(callback));

String.prototype.subStrings = function(callback) {
  let subStringArr = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      subStringArr.push(this.slice(i,j));
    }
  }
  return subStringArr;
};

// s = "cat";
// console.log(s.subStrings());

function range(start,end){
  if (start === end){
    return [start];
  }
  
  return [start].concat(range(start + 1, end));
}

// console.log(range(1,5));

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  
  return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec(range(1, 5)));


function exponent(base, exp) {
  if (exp === 1) {
    return base;
  }
  
  if (exp === 0) {
    return 1;
  }
  
  return base * exponent(base, exp - 1);
}

// console.log(exponent(2, 1))


function fibonacci(n) {
  if (n === 1) {
    return [1];
  }
  
  if (n === 2) {
    return [1,1];
  }
  let fibArr = fibonacci(n - 1);
  let nextFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
  fibArr.push(nextFib);
  return fibArr;
}

// console.log(fibonacci(10));

let getType = function (elem) {
  return Object.prototype.toString.call(elem);
};

function deepDup(arr) {
  let duplicate = [];
  for (var i = 0; i < arr.length; i++) {
    if (getType(arr[i]) === "[object Array]"){
      duplicate[i] = deepDup(arr[i]);
    } else { 
        duplicate[i] = arr[i];
    }
  }
  return duplicate;
}

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1) {
    if (arr[0] === target) {
      return 0;
    } else {
      return -1;
    }
  }
  
  
  let midIdx = Math.floor(arr.length / 2);
  if (arr[midIdx] === target){
    return midIdx;
  }
  
  let leftArr = arr.slice(0, midIdx);
  let rightArr = arr.slice(midIdx + 1, arr.length);
  
  if (target < arr[midIdx]) {
    let searchRes = bsearch(leftArr, target);
    if (searchRes === -1){
      return -1;
    } else {
      return searchRes;
    }
  } else {
    let searchRes = bsearch(rightArr, target);
    if (searchRes === -1) {
      return -1;
    } else {
      return midIdx + 1 + searchRes;
    }
  }
  
}
// arr1 = [0,1,2,3,4,5,6,7];
// console.log(bsearch(arr1, -1));
// console.log(bsearch(arr1, 0));
// console.log(bsearch(arr1, 1));
// console.log(bsearch(arr1, 2));
// console.log(bsearch(arr1, 3));
// console.log(bsearch(arr1, 4));
// console.log(bsearch(arr1, 5));
// console.log(bsearch(arr1, 6));
// console.log(bsearch(arr1, 7));
// console.log(bsearch(arr1, 8));

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  
   
} 
