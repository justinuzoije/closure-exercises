var counter = function (parameter) {
  var x = parameter;

  function increment() {
    return ++x;  //Adding beforehand then returning that value
  }

  function decrement() {

    return --x;
  }

  return {  //This is the object it is returning, using the functions as the values
    decrement : decrement,
    increment : increment
  };


};

var count = counter(4);


console.log(count.increment());
