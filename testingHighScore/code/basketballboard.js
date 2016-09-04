(function (library, img, cjs) {
//Board
(library.basketballboard = function() {
	
	this.initialize(undefined,undefined,undefined,{});
	
	
 
	this.animationFrame1 = function() {
		this.stop ( );
	}
	this.animationFrame2 = function() {
		playSound("shotwav");
	}
	this.animationFrame3 = function() {
		this.gotoAndStop(0);
	}

	 
	this.timeline.addTween(cjs.Tween.get(this).call(this.animationFrame1).wait(1).call(this.animationFrame2).wait(17).call(this.animationFrame3).wait(1));

	// Hit area -> Physical xy
	this.hit_area = new library.InvisibleSquareMovieclip();
	this.hit_area.x=0;
	this.hit_area.y=66;
	this.addChild(this.hit_area);

 
	this.ovalVar = new library.oval();
	this.ovalVar.x=-49;
	this.ovalVar.y=34;
	 
	this.timeline.addTween(cjs.Tween.get(this.ovalVar).wait(19));
	 

	 
	this.basketAn2Var = new library.basketAn2();
	 
	this.basketAn2Var.x=-48.7;
	this.basketAn2Var.y=35;

	this.basketAn3Var = new library.basketAn3();
	 
	this.basketAn3Var.x=-52;
	this.basketAn3Var.y=35;
	
	this.basketAn4Var = new library.basketAn4();
	 
	this.basketAn4Var.x=-48.7;
	this.basketAn4Var.y=35;
	
	this.basketAn5Var = new library.basketAn5();
	 
	this.basketAn5Var.x=-47.7;
	this.basketAn5Var.y=35;
	
	this.basketAn6Var = new library.basketAn6();
	 
	this.basketAn6Var.x=-51;
	this.basketAn6Var.y=35;
	
	this.basketAn7Var = new library.basketAn7();
	 
	this.basketAn7Var.x=-46.7;
	this.basketAn7Var.y=35;
	
	this.basketAn8Var = new library.basketAn8();
	this.basketAn8Var.setTransform(-50.2,35.2);
	this.basketAn8Var.x=-50;
	this.basketAn8Var.y=35;
	
	this.basketAn9Var = new library.basketAn9();
	this.basketAn9Var.setTransform(-48.7,35.2);
	this.basketAn9Var.x=-48.7;
	this.basketAn9Var.y=35;
	
	this.timeline.addTween(cjs.Tween.get({}).to(
	{
		state:[{t:this.basketAn2Var}]
	}).to(
	{
		state:[{t:this.basketAn3Var}]
	},2).to(
	{
		state:[{t:this.basketAn4Var}]
	},1).to(
	{
		state:[{t:this.basketAn5Var}]
	},1).to(
	{
		state:[{t:this.basketAn6Var}]
	},1).to(
	{
		state:[{t:this.basketAn7Var}]
	},1).to(
	{
		state:[{t:this.basketAn8Var}]
	},1).to(
	{
		state:[{t:this.basketAn9Var}]
	},1).wait(11));

	
	this.highlight = new library.basketballflash();
	 
	this.highlight.x= -4.8;
	this.highlight.y= 97;
	 this.timeline.addTween(cjs.Tween.get(this.highlight).wait(19));
	
	 this.boardVar = new library.board();
	this.boardVar.x=-101;
	this.boardVar.y=-92;
	 this.timeline.addTween(cjs.Tween.get(this.boardVar).wait(19));
	
	 

}).prototype  = new cjs.MovieClip();
 
(library.InvisibleSquareMovieclip = function() {
	 

	 //from AI script 
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,255,0)").beginStroke().moveTo(-50,50).lineTo(-50,-50).lineTo(50,-50).lineTo(50,50).closePath();

	this.addChild(this.shape);
}).prototype   = new cjs.Container();
 
 (library.higlightBoard = function() {
	this.initialize(img.higlightBoard);
}).prototype   = new cjs.Bitmap();
 


(library.oval = function() {
	this.initialize(img.oval);
}).prototype   = new cjs.Bitmap();
 
(library.basketballflash = function() {
	 

 
	this.higlightBoardVar = new library.higlightBoard();
 
	this.higlightBoardVar.x=-96;
	this.higlightBoardVar.y=-189;
	this.addChild(this.higlightBoardVar);
}).prototype =   new cjs.Container();
 


(library.basketAn2 = function() {
	this.initialize(img.basketAn2);
}).prototype   = new cjs.Bitmap();
 


(library.basketAn3 = function() {
	this.initialize(img.basketAn3);
}).prototype  = new cjs.Bitmap();
 


(library.basketAn4 = function() {
	this.initialize(img.basketAn4);
}).prototype  = new cjs.Bitmap();
 


(library.basketAn5 = function() {
	this.initialize(img.basketAn5);
}).prototype  = new cjs.Bitmap();
 


(library.basketAn6 = function() {
	this.initialize(img.basketAn6);
}).prototype   = new cjs.Bitmap();
 


(library.basketAn7 = function() {
	this.initialize(img.basketAn7);
}).prototype   = new cjs.Bitmap();
 


(library.basketAn8 = function() {
	this.initialize(img.basketAn8);
}).prototype  = new cjs.Bitmap();
 


(library.basketAn9 = function() {
	this.initialize(img.basketAn9);
}).prototype  = new cjs.Bitmap();
 



(library.board = function() {
	this.initialize(img.board);
}).prototype   = new cjs.Bitmap();
 

 
})(library = library||{}, images = images||{}, createjs = createjs||{});
var library, images, createjs;