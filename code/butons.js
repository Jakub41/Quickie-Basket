(function (library, img, cjs) {

(library.playAgainBtnObject = function() {
	 this.playAgainBtnTmp = new library.playAgainBtn();

	this.addChild(this.playAgainBtnTmp);
}).prototype  = new cjs.Container();

(library.playAgainBtn = function() {
	this.initialize(img.playAgainBtn);
}).prototype  = new cjs.Bitmap();
 
(library.playBtn = function() {
	this.initialize(img.playBtn);
}).prototype  = new cjs.Bitmap();
 
/*(library.highScoreBtn = function() {
	this.initialize(img.highScoreBtn);
}).prototype  = new cjs.Bitmap();*/


})(library = library||{}, images = images||{}, createjs = createjs||{});
var library, images, createjs;