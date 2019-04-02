// 11. Tower of Hanoi

function hanoi(discs, src, des, temp){
  if(discs === 1){
    console.log(`Move disc 1 from ${src} to ${des}.`);
  }
  else{
    hanoi(discs - 1, src, temp, des);
    console.log(`Move disc ${discs} from ${src} to ${des}.`);
    hanoi(1, src, des, temp);
  }

}

console.log(hanoi(4, 'A', 'C', 'B'));

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
  let product;
  for(let i = 0; i < exp; i++){
    product *= base;
  }
  return product;
}

// 3
function reverse(str){
  let rev = '';
  for(let i = str.length - 1; i >= 0; i--){
    rev += str[i];
  }
  return rev;
}

// 4
function trianglarNum(num){
  let sum;
  for(let i = 1; i <= num; i++){
    sum = i * (i + 1) / 2;
  }
  return sum;
}

// 5
function splitter(str, delim){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] === delim){
      newStr += '';
    }
    else{
      newStr += str[i];
    }
  }
  return newStr;
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