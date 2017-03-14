function counter() {
  var count = 0;
  function actuallyCount() {
    count++;
    return count;
  }
  return actuallyCount();
}

var count1 = counter();
var count2 = counter();

console.log(count1());
console.log(count1());
// console.log(count2());
// console.log(count2());
