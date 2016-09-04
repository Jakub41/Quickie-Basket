(function (library, img, cjs) {

(library.basketBallGame = function() {
	 
 
	
	
	// play again btn
	 this.playAgain = new library.playAgainBtnObject();
	 this.playAgain.visible=false;
	 this.playAgain.x=290;
	 this.playAgain.y=380;

	 
	// win Screen
	this.winMc = new library.winScreenObject();

	
	// lost Screen
	this.lostMc = new library.lostScreenObject();
	

	// titleScreen
	this.titleScreen = new library.titleScreenObject();

	
	
	// texts 
	this.made_baskets_txt = new cjs.Text("", "15px 'Arial'", "#FFFFFF");
	this.made_baskets_txt.name = "made_baskets_txt";
	this.made_baskets_txt.textAlign = "center";
	this.made_baskets_txt.x=539;
	this.made_baskets_txt.y=5;
	

	this.time_txt = new cjs.Text("", "15px 'Arial'", "#FFFFFF");
	this.time_txt.name = "time_txt";
	this.time_txt.textAlign = "center";
	this.time_txt.x=323;
	this.time_txt.y=5;
	 

	this.score_txt = new cjs.Text("", "15px 'Arial'", "#FFFFFF");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "center";
	this.score_txt.x=145;
	this.score_txt.y=5;
	 
	 
	this.scorTimeBasketArtVar = new library.scorTimeBasketArt();
	 
	this.scorTimeBasketArtVar.x=-10;
	this.scorTimeBasketArtVar.y=-1;
	 
	// bonus Prompt
	this.before_bonus_prompt = new library.beforeBonusprompt();
	this.before_bonus_prompt.x=290;
	this.before_bonus_prompt.y=205;
	

	// level start Instructions
	this.level_prompt = new library.LevelPrompt();
	

	// player
	this.player1 = new library.playerAnimationObject();
	this.player1.scaleX=0.7;
	this.player1.scaleY=0.7;
	this.player1.x=-100;
	this.player1.y=330;
	
	// ball
	this.bball = new library.BasketballShootArc();
	 
	// bonus point art
	this.bonusPoints = new library.bonusPoints();
	this.bonusPoints.x=60;
	this.bonusPoints.y=90;

	// bonusroundBaskets
	this.basket3 = new library.basketballboard();
	 
	this.basket3.scaleX=0.625;
	this.basket3.scaleY=0.625;
	this.basket3.x=504;
	this.basket3.y=105;

	this.basket2 = new library.basketballboard();
 
	this.basket2.scaleX=0.625;
	this.basket2.scaleY=0.625;
	this.basket2.x=290;
	this.basket2.y=105;

	this.basket1 = new library.basketballboard();
	 
	this.basket1.scaleX=0.625;
	this.basket1.scaleY=0.625;
	this.basket1.x=70;
	this.basket1.y=105;
	
 

	// basketball Board Shooting Round
	this.basket = new library.basketballboard();
	this.basket.scaleX=0.625;
	this.basket.scaleY=0.625;
	this.basket.x=70;
	this.basket.y=105;

	// bg
	this.bgVar = new library.BG();
	this.bgVar.scaleX=1.1;
	this.bgVar.scaleY=1.1;
	 
	//adding childs in order
	this.addChild(this.bgVar );
	this.addChild(this.basket );
	this.addChild(this.basket1,this.basket2,this.basket3);
	this.addChild(this.bonusPoints);
	this.addChild(this.bball);
	this.addChild(this.player1);
	this.addChild(this.level_prompt);
	this.addChild(this.before_bonus_prompt);
	
	this.addChild(this.titleScreen);
	this.addChild(this.lostMc);
	this.addChild(this.winMc);
	 this.addChild(this.playAgain);
	 this.addChild(this.scorTimeBasketArtVar );
	 this.addChild( this.score_txt);
	this.addChild( this.made_baskets_txt);
	this.addChild( this.time_txt);
	
	 setTimeout(createjs.mainCodeFunction,100)
	 
}).prototype   = new cjs.MovieClip();
 

})(library = library||{}, images = images||{}, createjs = createjs||{});
var library, images, createjs;