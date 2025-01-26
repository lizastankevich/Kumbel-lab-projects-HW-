function goForPresidentInKZ(age, citizenship,speaklanguage){
  if(age >=40 && citizenship ==="Kazachstan" && speaklanguage==="Kazakh"){
    console.log("You can be a canditate on the post of president");
  } else {
    console.log("You can not be a canditate on the post of president");
         }
}
goForPresidentInKZ(60,"Kazachstan","Kazakh");
goForPresidentInKZ(19,"Kazachstan","Russian");

function rigtsYouGetWhenYouTurn18(age){
  if(age >=18){
    console.log("You can vote,pay taxes,and get a job officially");
  } else {
    console.log("You are too young to have rights to vote,work without permission of parents,drink an alcohol or smoke cigarettes");
         }
}
rigtsYouGetWhenYouTurn18(60);
rigtsYouGetWhenYouTurn18(19);
rigtsYouGetWhenYouTurn18(17);
