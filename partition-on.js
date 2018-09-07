var items = [1, 3, 5, 2]
function isEven(n) {
  return n % 2 == 0
}
var i = partitionOn(isEven, items)
// items should now be [1, 3, 5, 2, 4, 6]
// i     should now be 3

function partitionOn(fun, items) {
  let index = 0;
  for (let j = 0; j < items.length - 1; j++) {
    for (let i = 0; i < items.length - 1; i++) {
      if (fun(items[i])) {
        if (!fun(items[i + 1])) {
          let buf = items[i + 1]
          items[i + 1] = items[i]
          items[i] = buf
        }
      }
    }
  }
  for (let i = 0; i < items.length; i++) {
    if (fun(items[i])) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(items)
console.log(i)
