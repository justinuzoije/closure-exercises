function counter(x) {
  var count = x;
  function actuallyCount() {
    count++;
    return count;
  } //remove
  return actuallyCount;  //no parenthesis to not execute it as a function
}

var count1 = counter(4);

// console.log(counter()());
console.log(count1());
console.log(count1());


//() means execute the function
