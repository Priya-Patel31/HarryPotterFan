var score = 0;

var log = console.log

var readlineSync = require("readline-sync");
const chalk = require('chalk');


log(chalk.italic.blue("Welcome to the quiz !!"));

 var UserName =  readlineSync.question(chalk.red.bgBlack("What is your name ?? \n"));

log(chalk.green("Welcome "+ chalk.blue.bold(UserName)+"!! Lets play the quiz based on Harry Potter"));

log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


function quiz(options,question,answer,correctAnswer)
{
  var query ="Choose a no. from a list";
      var Userquestion = readlineSync.question(chalk.blue(question +"\n"+(chalk.magenta("Press Enter"))));
      // log(chalk.magenta("Press Enter"));
     var UserAnswer=  readlineSync.keyInSelect(options)


  if((UserAnswer+1) === answer)
  {
    log(chalk.green("Yayy !!You're answer is right"));
    score++;
  }
  else{
    log(chalk.red("Oops !! You're answer is wrong"));
    log(chalk.blue("The correct answer is : "+correctAnswer));
  }
 log(chalk.bgCyan.black("Your current Score is : "+ score));
  log("---------------------------------------------");

}

var arrOfQuestions = [
  {
    question : "Which harry potter word is now in oxford dictionary ?? ",
    options :[" Hogwartz "," Muggle "," Voldemort"],
    answer : 2,
    correctAnswer : "Muggle"
  },
  {
    question : "Who were harry's parents ?? ",
     options :[" Henry and maggi potter "," William and elizabeth potter "," James and lily potter  "],
    answer : 3,
     correctAnswer : "James and lily potter",
  },
  {
    question :"Which of these hogwarts professors teaches transfiguration ?? ",
    options :[" Snape"," Sprout"," Mcgonall"],
    answer :  3,
    correctAnswer : "Mcgonall"
  },
  {
    question : "At the end of harry potter and sorceres's stone , which professor removes his turban  to reveal Voldemort on his back of his head",
    options :["Quirell","LockHart","Snape"],
    answer : 1,
    correctAnswer :  "Quirell"
  },
  {
    question : "Who first shows diary of tom Riddle? ",
    options :["Moaning Myrtle","Fawkes","nearly headless nick"],
    answer : 1,
    correctAnswer : "Moaning Myrtle"
  },
  {
    question : "Who was Tom marvolo riddle ??",
    options :["The ghost of sirius black","Harry's Father","Voldemort"],
    answer :  3 ,
    correctAnswer : "Voldemort"
  },
  {
    question : "What hogwarts student is killed in little hangleton graveyard at the end of globet of fire??",
    options :[ "Draco Malfoy","Naville Longbottom","Cedric Diggory"],
    answer : 3 ,
    correctAnswer : "Cedric Diggory"
  },
  {
    question : "Who was not a member of order of Phoenix??",
    options :["Mad-eye moody","Ballastric lestarnge","Sirius Black"],
    answer : 2,
    correctAnswer : "Ballastric lestarnge" 
  },
  {
    question : "Who killed dumbledore at the end of Half-blood prince ??",
    options :["Lucius Malfoy","Draco Malfoy","Snape"],
    answer : 3 ,
    correctAnswer : "Snape"
  },
  {
    question : "In the epilogue to Harry potter and Deadly Hallows to whom harry married ??",
    options :["Hermoine Granger","Ginny Weasley","Cho chang"],
    answer : 2,
    correctAnswer : "Ginny Weasley"
  }
]

var highScore = [
  {
    name : "Priya",
    score : 10
  }
  ,{
    name :"Ankur",
    score : 9
  }
]
for(var i = 0 ; i < arrOfQuestions.length ; i++)
{
 log(chalk.yellow("question no.", i+1)); 
 quiz(arrOfQuestions[i].options,arrOfQuestions[i].question,arrOfQuestions[i].answer,arrOfQuestions[i].correctAnswer);
}
log(chalk.green("Yayy !! Your total score is : ",score+"/10"));
log(chalk.bgRedBright.black("Check current highScorers :"))
for(var i = 0 ; i < highScore.length ; i++)
{
log(chalk.blue(highScore[i].name));
}
