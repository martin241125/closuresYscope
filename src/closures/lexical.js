const myGlobal = 0;

function myFunction() {
  const myConst = 23;
  console.log(myGlobal);

  function parent() {
    //funcion interna
    const inner = 2;
    console.log(myConst, myGlobal);

    function child() {
      console.log(inner, myConst, myGlobal);
    }
    return child();
  }
  return parent();
}

console.log(myFunction());
