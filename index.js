function add(x, y){
    return(x + y)
}
const result = add(2, 4)
console.log(result)

function mult(x, y){
    let result =  0;
for(let i =0; i < y; i ++){
    result = add(result, x)

    }
    return result;
}
console. log(mult(6, 8))

function power(x, y){
    let result =  1;
for(let i =0; i < y; i ++){
    result = mult(result, x)

    }
    return result;
}
console.log(power(2, 8))

function factorialize(num){
if (num === 0 || num === 1){
    return 1;
}
for (var i = num - 1; i >=1; i--) {
    num = num * i;
}
console.log(num)
    return num;
}
factorialize(4)

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8))