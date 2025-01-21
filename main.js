//My global scope
const globalVar = "I am the world itself";

//Function scope or local
function scopes() {
  const localVar = "It is Kazachstan";
  console.log(globalVar,"global var inside");
  console.log(localVar,"local var inside");
  //block scope
  {
    const blockVar = "The capital of Kazachstan is Astana";
    console.log(blockVar,"block var inside");
  }
  // console.log(blockVar, "- block var outside block"); //will cause an error because it is ou0tside the block scope
}
//2 function scope 
  function scopes2() {
    const localVar2 = "It is Russia";
    console.log(localVar2,"local var inside ");
    {
      //block scope of second function
      const blockVar2 = "The capital of Russia is Moscow";
      console.log(blockVar2,"block var inside");
    }
    // console.log(blockVar2, "- block var outside block"); //will cause an error because it is outside the block scope
}
scopes()
console.log(globalVar,"global var outside");//work in any part of the code because it is global
//console.log(localVar,"local var outside");//will cause error because it is outside the function scope
scopes2()
//console.log(localVar2,"local var outside");//LocalVar2 it not defined  because it is outside the function scope
