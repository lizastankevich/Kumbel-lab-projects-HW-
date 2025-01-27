function GetResponseByName(name){
     if(name === "Jasmin") {
   console.log("Сегодня твой счастливый день! получи свой приз");
     } else if(name === "Aidana") {
   console.log("Сегодня и твой счастливый день! получи свою скидку");
   } else if(name === "Saya") {console.log("Добро пожаловать на страничку моей домашки") } else {
   console.log("Добро пожаловать "+ name);
   }
}
GetResponseByName("Jasmin");
GetResponseByName("Aidana");
GetResponseByName("Liza");
GetResponseByName("Saya");
