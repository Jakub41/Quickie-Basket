(function (library, img, cjs) {
(library.bonusPoints = function() {
 
 	//Show message on the screen
	this.bonusPromptArtworkVar = new library.bonusPromptArtwork();

	this.addChild(this.bonusPromptArtworkVar);
}).prototype  = new cjs.Container();
 
 
(library.LevelPrompt = function() {
	//Play Button
	this.playBtnVar = new library.playBtn();
	this.playBtnVar.x=220;
	this.playBtnVar.y=365;
	/*Hight Score???????????????
	this.highScoreBtnVar = new library.highScoreBtn();
	this.highScoreBtnVar.x=220;
	this.highScoreBtnVar.y=565;
	*/
	//Text Prompt
	this.instructions = new cjs.Text("", "bold 16px 'Arial'", "#FFFFFF");
	this.instructions.name = "instructions";
	this.instructions.textAlign = "center";
	this.instructions.lineHeight = 18;
	this.instructions.lineWidth = 148;
	this.instructions.x=334;
	this.instructions.y=147;
	
	this.level_txt = new cjs.Text("", "35px 'Comic Sans MS'");
	this.level_txt.name = "level_txt";
	this.level_txt.textAlign = "center";
	this.level_txt.x=327;
	this.level_txt.y=49;
	
	this.addChild(this.playBtnVar);
	//this.addChild(this.highScoreBtnVar);
	this.addChild(this.instructions);
	this.addChild(this.level_txt);
	 

}).prototype   = new cjs.MovieClip();
 
(library.bonusRoundsArt = function() {
	this.initialize(img.bonusRoundsArt);
}).prototype   = new cjs.Bitmap();
 

(library.bonusPromptArtwork = function() {
	this.initialize(img.bonusPromptArtwork);
}).prototype  = new cjs.Bitmap();
 

(library.beforeBonusprompt = function() {
	 

	 
	this.bonusRoundsArtVar = new library.bonusRoundsArt();
 
	this.bonusRoundsArtVar.x=-151;
	this.bonusRoundsArtVar.y=-80;
	this.addChild(this.bonusRoundsArtVar);
}).prototype   = new cjs.Container();
 
 
})(library = library||{}, images = images||{}, createjs = createjs||{});
var library, images, createjs;