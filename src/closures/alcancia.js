function sumWithClosure(firstNum) {
  let a = firstNum;
  return function (secondNum) {
    let b = secondNum;
    if (!b) {
      //sino tenes B retorna A
      return a;
    } else {
      // pero si tenes b sumalo con a
      return a + b;
    }
  };
}

console.log(sumWithClosure(1));
