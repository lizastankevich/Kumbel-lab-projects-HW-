const StudentsData = [
  {
    firstName:"Asem",
    lastName:"Isma",
    email:"asem2236@gmail.com",
    phone: +77777,
    country:"Germany",
    subject: "Math",
    score:0,
    favFood: ["lasagna","pasta",{
               kitchen : ["Evropean","Italian"]
             }]
  
  },
  {
      firstName:"Nastya",
      lastName:"Kalinina",
      email:"hhhh@gmail.com",
      phone: +877778423253,
      country:"Kazackstan",
      subject: "regional studies",
      score:100,
      favFood: ["mango","plov",{
                 kitchen : ["Evropean","Asian"]
               }]
  },
  {
      firstName:"Liza",
      lastName:"Stankevich",
      email:"liza.stankevich.2005@inbox.ru",
      phone: +77777,
      country:"Kazackstan",
      subject: "English",
      score:98,
      favFood: ["Tom Yam","avocado",{
                 kitchen : ["Taiwan","Asian"]
               }]
  },
  {
      firstName:"Enlik",
      lastName:"Dosan",
      email:"enlik@inbox.ru",
      phone: +74209785,
      country:"Kazackstan",
      subject: "art",
      score:60,
      favFood: ["udon","mango",{
                 kitchen : ["Japanese","Asian"]
               }]
  },
  {
      firstName:"Gulim",
      lastName:"Almangabetova",
      email:"guka@inbox.ru",
      phone: +77023689506,
      country:"Kazackstan",
      subject: "Algebra",
      score:70,
      favFood: ["Ice cream","coffee",{
                 kitchen : ["Evropean","French"]
               }]
  },
  {
      firstName:"Aitolkyn",
      lastName:"Zheksembaeva",
      email:"eaitogff@inbox.ru",
      phone: +774712223635,
      country:"Italy",
      subject: "math",
      score:80,
      favFood: ["pizza","ice",{
                 kitchen : ["Iralian","Asian"]
               }]
  },
  {
      firstName:"Aydana",
      lastName:"Yerkengazina",
      email:"enlik@inbox.ru",
      phone: +77777,
      country:"Thailand",
      subject: "math",
      score: 70,
      favFood: ["lagman","sushi",
        {
          kitchen : ["Dungan","Japanese"]
        }
      ]
  },
  {
      firstName:"Dasha",
      lastName:"Vasilenko",
      email:"dasha.vasilenko@inbox.ru",
      phone: +77777,
      country:"Kazackstan",
      subject: "physiks",
      score:50,
      favFood: ["ramen","steak",{
        kitchen : ["Evropean","Asian"]
      }]
  }
]
function gradeConverter (){
  for(let i=0;i<StudentsData.length;i++){
    if(StudentsData[i].score >= 90){
      console.log(StudentsData[i].firstName + " got A (≧◡≦)");
    } else if (StudentsData[i].score >=70 ) {
    console.log(StudentsData[i].firstName + " got B (◕‿◕)")
    } else if (StudentsData[i].score >=50 ) {
      console.log(StudentsData[i].firstName + " got C (≖͞_≖̥)")
    } else {
      console.log(StudentsData[i].firstName + " got D (ಥ﹏ಥ)")
    }
}
}
gradeConverter();
