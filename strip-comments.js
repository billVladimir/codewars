function solution(input, markers) {
  let str = [...input];
  let trigger = false;
  let newStr = str.filter(function(el) {
    if (markers.indexOf(el) === -1 && !trigger) {
      return el;
    } else {
      trigger = true;
    }
    if (el === '\n') {
      trigger = false;
      return el;
    }
  });
  return newStr.join('').replace(/\s$/, '').replace(/\s\n/, '\n');
};

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);

console.log(result);