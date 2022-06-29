class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    question.hide(); 

    background(Pontetrucha);
    fill(0);
    textSize(30);
    text("Ponte trucha con esto",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("*NOTA: Si te pusiste trucha, tienes color trucha y si no, tienes color salmon",130,230);

      for(var plr in allContestants){
        debugger;
        var correctAns = "2";


         if (correctAns === allContestants[plr].answer){
           fill("D1E7FA");
          
         }
         else{
           fill("5E5F4B");
         }

       /*  if (correctAns === allContestants[plr].answer){
           fill("red")
         }
         else{
           fill("green");
         }*/


        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }
  }
}
