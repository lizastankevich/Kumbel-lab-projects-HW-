function wearCoat(degree) {
  if(degree<=0  ) {
    console.log( "Stay inside");
 } else if (degree<=30) {
      console.log("Wear a coat and hat");
    
 } else if (degree<=50) {
       console.log("Wear a coat");
 }
   else {
      console.log("Wear whatever you want");
 }
}
wearCoat(50);
wearCoat(25);
wearCoat(0);
wearCoat(60);
