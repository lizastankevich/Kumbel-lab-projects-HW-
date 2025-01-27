function verifyLoginAndPassword(login,password){
  if(login ==="lizalearnjavascript" && password ==="lizalearnjavascript")
  {
    console.log("You are logged in"); 
  }
 else if (login ==="lizalearnjavascript" && password !=="lizalearnjavascript"){
     console.log("your login is wrong");
 }
  else if(login !=="lizalearnjavascript" && password ==="lizalearnjavascript"){
     console.log("your password is wrong");
  }
  else {
     console.log("both inputs are wrong")
   } 
}
verifyLoginAndPassword("lizalearnjavascript","lizalearnjavascript");
verifyLoginAndPassword("lizalearnjavascript","lizalearnjavascrip");
verifyLoginAndPassword("lizalearnjavascrip","lizalearnjavascript");
verifyLoginAndPassword(0.0);
