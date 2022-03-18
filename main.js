var unique = function (array) {
  return array.reduce(function (accumulator, num) {
    var exists = accumulator.find(function (item) {
      return num === item;
    });

    if (!exists) {
      accumulator.push(num);
    };

    return accumulator;
  }, []);
}

var numbers = [1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5];
 
console.log(unique(numbers));
