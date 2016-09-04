(function(library, img, cjs) {

    (library.winScreenObject = function() {

        //For backgrouds -> if win if lose 
        this.scoreText = new cjs.Text("", "bold 43px 'Comic Sans MS'");
        this.scoreText.name = "scoreText";
        this.scoreText.textAlign = "center";
        this.scoreText.lineHeight = 45;
        this.scoreText.lineWidth = 173;

        this.scoreText.x = 300;
        this.scoreText.y = 240;
        this.backgroundForWinLoseTmp = new library.backgroundForWinLose();

        this.addChild(this.backgroundForWinLoseTmp, this.scoreText);
    }).prototype = new cjs.Container();


    //lost screen -> points score
    (library.lostScreenObject = function() {

        this.scoreText = new cjs.Text("", "bold 43px 'Comic Sans MS'");
        this.scoreText.name = "scoreText";
        this.scoreText.textAlign = "center";
        this.scoreText.lineHeight = 45;
        this.scoreText.lineWidth = 173;
        this.scoreText.setTransform(304.2, 221.5);
        this.scoreText.x = 300;
        this.scoreText.y = 222;
        this.backgroundForWinLoseTmp = new library.backgroundForWinLose();

        this.addChild(this.backgroundForWinLoseTmp, this.scoreText);

    }).prototype = new cjs.Container();

    //BG from lib
    (library.BG = function() {

        this.backroundVar = new library.backround();


        this.addChild(this.backroundVar);
    }).prototype = new cjs.Container();


    (library.titleScreenObject = function() {

        //Button play
        this.playBtnTmp = new library.playBtn();

        this.playBtnTmp.x = 190;
        this.playBtnTmp.y = 280;
        this.titleScreenObjectBg = new library.backgroundForWinLose();

        this.addChild(this.titleScreenObjectBg, this.playBtnTmp);

    }).prototype = new cjs.Container();


    (library.backgroundForWinLose = function() {
        this.initialize(img.backgroundForWinLose);
    }).prototype = new cjs.Bitmap();



    (library.backround = function() {
        this.initialize(img.backround);
    }).prototype = new cjs.Bitmap();

    (library.scorTimeBasketArt = function() {
        this.initialize(img.scorTimeBasketArt);
    }).prototype = new cjs.Bitmap();


})(library = library || {}, images = images || {}, createjs = createjs || {});
var library, images, createjs;