(function (library, img, cjs) { // (library, img, cjs) my lib createjs img elements called

(library.BasketballShootArc = function(mode,startPosition,loop) {
	 //Shooting animation 
	this.animationFrame1 = function() {
		this.stop()
	}
	this.animationFrame2 = function() {
		this.stop();
		
		
		createjs.check_made_basket ( ); // Check the basket is made or not -> score, sound -> levels
	}

	 
	this.timeline.addTween(cjs.Tween.get(this).call(this.animationFrame1).wait(14).call(this.animationFrame2).wait(1));

	 

	// Ball -> animation
	this._mc = new library.ballObjectAnimation();

	this.timeline.addTween(cjs.Tween.get(this._mc).to({scaleX:0.81,scaleY:0.81,guide:{path:[0.2,0,13.7,-395,50,-110]}},13).to({_off:true},1).wait(1));

}).prototype  = new cjs.MovieClip();
 
 
(library.ballObjectAnimation = function() {
	 

	//Fisical position -> ball move 
	this.ballAn1Var = new library.ballAn1();
	this.ballAn1Var.x=-22.6;
	this.ballAn1Var.y=-22.6;
	 

	this.ballAn2Var = new library.ballAn2();
	this.ballAn2Var.x=-22.6;
	this.ballAn2Var.y=-22.6;

	this.ballAn3Var = new library.ballAn3();
	this.ballAn3Var.x=-22.6;
	this.ballAn3Var.y=-22.6;
	
	//creating timline tweened aniamtion from objects created
	this.timeline.addTween(cjs.Tween.get({}).to(
	{
		state:[{t:this.ballAn1Var}]
	}).to(
	{
		state:[{t:this.ballAn2Var}]
	},2).to(
	{
		state:[{t:this.ballAn3Var}]
	},2).wait(2));

}).prototype   = new cjs.MovieClip();
 



(library.ballAn1 = function() {
	this.initialize(img.ballAn1);
}).prototype  = new cjs.Bitmap();
 


(library.ballAn2 = function() {
	this.initialize(img.ballAn2);
}).prototype  = new cjs.Bitmap();
 


(library.ballAn3 = function() {
	this.initialize(img.ballAn3);
}).prototype   = new cjs.Bitmap();
 


})(library = library||{}, images = images||{}, createjs = createjs||{});
var library, images, createjs;