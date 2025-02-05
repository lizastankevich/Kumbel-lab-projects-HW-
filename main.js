function DetermineMyJobChoise(){
  let myChoices = ["Apple","Amazon","Microsoft","Google","Facebook","Yandex","VK","Samsung","Tesla","Nvidia"];
  for(let i=0;i<myChoices.length;i++) {
  if(i === 0 ) {
    console.log("My 1st choise is " + myChoices[i]);
  }
  else if (i === 1 ) {
    console.log("My 2nd choise is " + myChoices[i]);
  }
  else if (i === 2) {
    console.log("My 3rd choise is " + myChoices[i]);
  }
  else {
    console.log("My "+ i+1 + "th choise is " + myChoices[i]);
  }
}
}
DetermineMyJobChoise();
