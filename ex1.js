function counter() {
  var count = 0;
  function actuallyCount() {
    count++;
    return count;
  } //remove
  return actuallyCount;  //no parenthesis to not execute it as a function
}

var count1 = counter();
var count2 = counter();

// console.log(counter()());
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());

//() means execute the function
