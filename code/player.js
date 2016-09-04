(function (library, img, cjs) {

(library.playerAnimationObject = function() {
	 

	//Player animation, stuff, img  
	this.animationFrame1 = function() {
		this.stop ( );
	}
	this.animationFrame2 = function() {
		createjs.shoot=true;
	}
	this.animationFrame3 = function() {
		//calling shoot function, to realise ball
		createjs.shoot_bball();
	}

	 
	this.timeline.addTween(cjs.Tween.get(this).call(this.animationFrame1).wait(1).call(this.animationFrame2).wait(5).call(this.animationFrame3).wait(20));

	//player animation -> xy -> clip  	 
	this.basketPlayerAn1Var = new library.basketPlayerAn1(); 
	this.basketPlayerAn1Var.x=-43;
	this.basketPlayerAn1Var.y=-100;
	 
	this.basketPlayerAn2Var = new library.basketPlayerAn2();
	this.basketPlayerAn2Var.x=-46;
	this.basketPlayerAn2Var.y=-90;
	
 
	this.basketPlayerAn3Var = new library.basketPlayerAn3();
	this.basketPlayerAn3Var.x=-68;
	this.basketPlayerAn3Var.y=-255;
	 
	
	this.basketPlayerAn4Var = new library.basketPlayerAn4();
	this.basketPlayerAn4Var.x=-72;
	this.basketPlayerAn4Var.y=-216;
	 
	
	this.basketPlayerAn5Var = new library.basketPlayerAn5();
	this.basketPlayerAn5Var.x=-70;
	this.basketPlayerAn5Var.y=-220;
 
	
	this.basketPlayerAn6Var = new library.basketPlayerAn6();
	this.basketPlayerAn6Var.x=-71;
	this.basketPlayerAn6Var.y=-220;
	 
	//creating timline tweened aniamtion from objects created
	this.timeline.addTween(cjs.Tween.get({}).to(
		{
			state:[{t:this.basketPlayerAn1Var}]
		}).to(
		{	
			state:[{t:this.basketPlayerAn2Var}]
		},4).to(
		{
			state:[{t:this.basketPlayerAn3Var}]
		},3).to(
		{
			state:[{t:this.basketPlayerAn4Var}]
		},1).to(
		{
			state:[{t:this.basketPlayerAn5Var}]
		},1).to(
		{
			state:[{t:this.basketPlayerAn6Var}]
		},1).wait(16));

}).prototype  = new cjs.MovieClip();


(library.basketPlayerAn1 = function() {
	this.initialize(img.basketPlayerAn1);
}).prototype  = new cjs.Bitmap();
 


(library.basketPlayerAn2 = function() {
	this.initialize(img.basketPlayerAn2);
}).prototype  = new cjs.Bitmap();
 


(library.basketPlayerAn3 = function() {
	this.initialize(img.basketPlayerAn3);
}).prototype   = new cjs.Bitmap();
 


(library.basketPlayerAn4 = function() {
	this.initialize(img.basketPlayerAn4);
}).prototype  = new cjs.Bitmap();
 


(library.basketPlayerAn5 = function() {
	this.initialize(img.basketPlayerAn5);
}).prototype   = new cjs.Bitmap();
 


(library.basketPlayerAn6 = function() {
	this.initialize(img.basketPlayerAn6);
}).prototype = new cjs.Bitmap();
 



})(library = library||{}, images = images||{}, createjs = createjs||{});
var library, images, createjs;