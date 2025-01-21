function convertDegree(celciusDegree){ 
  let forengeitDegree = (celciusDegree*9)/5+32; 
    console.log(celciusDegree ,"\u00b0C - " + forengeitDegree.toFixed(0),"\u00b0F");
}

convertDegree(30);
convertDegree(50);
convertDegree(100);

function convertTemperature(forengeitDegree){ 
  let celciusDegree = (forengeitDegree-32)*5/9; 
    console.log(forengeitDegree,"\u00b0F - " + celciusDegree.toFixed(0),"\u00b0C");
}
// use to fixed
convertTemperature(150);
convertTemperature(200);
convertTemperature(400);
