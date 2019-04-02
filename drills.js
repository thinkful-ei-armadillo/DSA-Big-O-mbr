// 11. Tower of Hanoi

function hanoi(){
  // :thinking:
}

console.log(hanoi(5, 'A', 'B', 'C'));

// 12. Iterative version of recursion drills

// 1
function countSheep(num){
  for(let i = 0; i < num; i++){
    console.log((num - i) + ': Another sheep jumped over the fence')
    if(i === (num - 1)){
      console.log('All sheep jumped over the fence')
    }
  }
}

// 2
function powerCalculator(base, exp){
  return base ** exp;
}

// 3
function reverse(str){
  let split = str.split('');
  let reverse = split.reverse();
  let join = reverse.join('');
  return join;
}

// 4
function trianglarNum(num){
  return num * (num + 1) / 2
}

// 5
function splitter(str){
  let split = str.split('/');
  let join = split.join('');
  return join;
}

// 6
function fibonacci(num) {
  let fib = [];
  for (let i = 1; i <= num; i++) {
      if (i === 1) {
          fib.push(0);
      }
      else if (i == 2) {
          fib.push(1);
      }
      else {
          fib.push(fib[i - 2] + fib[i - 3]);
      }
  }
  return fib;
}

// 7
function factorial(num){
  let result = num;
  if(num === 0 || num === 1){
    return 1;
  }
  while(num > 1){
    num--;
    result *= num;
  }
  return result;
}