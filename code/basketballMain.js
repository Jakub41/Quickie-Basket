(function(library, img, cjs) {


    createjs.mainCodeFunction = function() {
        var scorePerShot = 10;
        var scorePerShotMiss = 5;
        var showPlayAgain = true //to show or not to show paly again button after win/loss
        var levelArray = [
            [1 /*how much baskets per level*/ , 1 /*player number ,possibility to add more players in afuture*/ , 45000 /*level time millsec*/ , true /*is bonus round available*/ , 10000 /*  bonus round time milisec*/ , 6000 /*milisecodns on how fast board moves from on side to another for currentlevel*/ ],
            [12 /*how much baskets per level*/ , 1 /*player number ,possibility to add more players in afuture*/ , 45000 /*level time millsec*/ , true /*is bonus round available*/ , 10000 /*  bonus round time milisec*/ , 5000 /*milisecodns on how fast board moves from on side to another for currentlevel*/ ],
            [13 /*how much baskets per level*/ , 1 /*player number ,possibility to add more players in afuture*/ , 45000 /*level time millsec*/ , true /*is bonus round available*/ , 10000 /*  bonus round time milisec*/ , 4000 /*milisecodns on how fast board moves from on side to another for currentlevel*/ ],
            [14 /*how much baskets per level*/ , 1 /*player number ,possibility to add more players in afuture*/ , 45000 /*level time millsec*/ , true /*is bonus round available*/ , 10000 /*  bonus round time milisec*/ , 3000 /*milisecodns on how fast board moves from on side to another for currentlevel*/ ]

        ]

        mainParentLibrray.titleScreen.addEventListener("mousedown", startScreen);
        createjs.Touch.enable(stage);
        stage.mouseMoveOutside = true;
        mainParentLibrray.level_prompt.addEventListener("mousedown", startLevel);
        mainParentLibrray.level_prompt.visible = false;
        mainParentLibrray.playAgain.visible = false;
        mainParentLibrray.lostMc.visible = false;
        mainParentLibrray.winMc.visible = false;
        mainParentLibrray.lostMc.addEventListener("mousedown", lostClick)
        mainParentLibrray.winMc.addEventListener("mousedown", winClick)
        mainParentLibrray.playAgain.addEventListener("mousedown", playAgainClick)
        mainParentLibrray.bonusPoints.visible = false;
        mainParentLibrray.before_bonus_prompt.visible = false;
        mainParentLibrray.before_bonus_prompt.addEventListener("mousedown", startBonus)
        mainParentLibrray.basket1.visible = false;
        mainParentLibrray.basket2.visible = false;
        mainParentLibrray.basket3.visible = false;
        var side = 0;
        var currentLeve = 0;
        var player;
        var playerNR = 1;
        var madeBasket = 0;
        var score = 0;
        var levelSec;
        var bonSec;
        var tweenShouldEnd = false;
        var currentBonusBasket = mainParentLibrray.basket1;
        var bonus = false;
        var isNormal = true;
        var bonustimerInterVal;
        var startX = mainParentLibrray.basket.x
        var basketBoardSpeed;
        //Start Screen set
        function startScreen() {
            side = 0;
            basketBoardSpeed = levelArray[currentLeve][5];
            mainParentLibrray.basket.visible = true;
            mainParentLibrray.basket.x = startX;
            mainParentLibrray.player1.x = -200;

            mainParentLibrray.player1.visible = false



            bonus = false;
            createjs.shoot = true;
            madeBasket = 0

            mainParentLibrray.score_txt.text = score;
            mainParentLibrray.made_baskets_txt.text = madeBasket;
            mainParentLibrray.titleScreen.visible = false;
            if (levelArray[currentLeve][1] == 4) {
                playerNR = Math.floor((Math.random() * 3) + 1)
            } else {
                playerNR = levelArray[currentLeve][1]
            }

            mainParentLibrray.basket.highlight.visible = false; //Basket higlifhts -> not highlited
            player = mainParentLibrray["player" + playerNR]
            player.visible = true;
            player.gotoAndStop(playerNR - 1);
            mainParentLibrray.level_prompt.level_txt.text = "LEVEL: " + (currentLeve + 1)
            mainParentLibrray.level_prompt.instructions.text = "Make at least " + levelArray[currentLeve][0] + " baskets before time runs out to go to the next level. You have " + (levelArray[currentLeve][2] / 1000) + " seconds. Use mouse to move and left click for shoot the ball. " + " Let's get ready to rumble ";

            mainParentLibrray.level_prompt.visible = true;
            mainParentLibrray.level_prompt.gotoAndStop(playerNR - 1);

        }
        //Level start -> player -> ball -> basket moving
        function startLevel() {
            mainParentLibrray.bball.gotoAndStop(0);
            mainParentLibrray.bball.visible = false;

            mainParentLibrray.level_prompt.visible = false;
            levelSec = (levelArray[currentLeve][2]) / 1000
            mainParentLibrray.time_txt.text = levelSec;
            timerInterVal = setInterval(timeCount, 1000)
            mainParentLibrray.titleScreen.visible = false;
            stage.addEventListener("stagemousemove", mouseMove);
            isNormal = true;
            tweenShouldEnd = false;
            addTweens()
            stage.addEventListener("mousedown", shootAnimationStart);
            setTimeout(setShoot, 50)
        }

        function setShoot() {

            createjs.shoot = false;
        }

        function lostClick() {



        }

        function winClick() {

        }

        function playAgainClick() {
            location.reload();
        }

        function timeCount() {
            levelSec--;
            mainParentLibrray.time_txt.text = levelSec;
            if (levelSec <= 0) {
                isNormal = false;
                tweenShouldEnd = true;
                createjs.Tween._tweens = [];
                clearInterval(timerInterVal)
                stage.removeEventListener("stagemousemove", mouseMove);
                stage.removeEventListener("mousedown", shootAnimationStart);

                if (levelArray[currentLeve][0] > madeBasket) {
                    doLostScreen()
                } else {


                    if (levelArray[currentLeve][3]) {
                        console.log("bonus round is true");
                        doBonusLevel();
                    } else {

                        doNextLevel();
                    }
                }
            }
        }
        //Play again -> when lost game
        function doLostScreen() {
            if (showPlayAgain) {
                mainParentLibrray.playAgain.visible = true;
            }
            mainParentLibrray.lostMc.visible = true;
            mainParentLibrray.lostMc.scoreText.text = score;
        }
        // Winn screen
        function doWinScreen() {
            if (showPlayAgain) {
                mainParentLibrray.playAgain.visible = true;
            }
            mainParentLibrray.winMc.visible = true;
            mainParentLibrray.winMc.scoreText.text = score;
        }
        // Next level 
        function doNextLevel() {
            currentLeve++;
            tweenShouldEnd = true;
            mainParentLibrray.basket1.visible = false;
            mainParentLibrray.basket2.visible = false;
            mainParentLibrray.basket3.visible = false;
            mainParentLibrray.basket.visible = false;
            console.log(tweenShouldEnd);
            mainParentLibrray.bonusPoints.visible = false;
            if (currentLeve >= levelArray.length) {
                doWinScreen();
            } else {
                startScreen();
            }

        }
        //Bonus level -> Basket highlits only to indicate to which one shoot
        function doBonusLevel() {

            mainParentLibrray.basket1.visible = true;
            mainParentLibrray.basket2.visible = true;
            mainParentLibrray.basket3.visible = true;
            mainParentLibrray.basket.visible = false;
            mainParentLibrray.bonusPoints.visible = true;
            mainParentLibrray.basket1.highlight.visible = false;
            mainParentLibrray.basket2.highlight.visible = false;
            mainParentLibrray.basket3.highlight.visible = false;
            mainParentLibrray.before_bonus_prompt.visible = true;

        }
        //Start the bonus stage 
        function startBonus() {
            mainParentLibrray.bball.gotoAndStop(0);
            mainParentLibrray.bball.visible = false;
            createjs.shoot = true;
            mainParentLibrray.before_bonus_prompt.visible = false;
            stage.addEventListener("mousedown", shootAnimationStart);
            setTimeout(setShoot, 50)
            stage.addEventListener("stagemousemove", mouseMove);

            bonSec = (levelArray[currentLeve][4]) / 1000
            mainParentLibrray.time_txt.text = bonSec;
            bonustimerInterVal = setInterval(bonusTimeCount, 1000)
            bonus = true;
            makeAbonus();
        }
        //Countdown
        function bonusTimeCount() {
            bonSec--
            mainParentLibrray.time_txt.text = bonSec;
            if (bonSec <= 0) {
                bonus = false;
                clearInterval(bonustimerInterVal)
                stage.removeEventListener("stagemousemove", mouseMove);
                stage.removeEventListener("mousedown", shootAnimationStart);
                doNextLevel();

            }
        }
        //Different baskets with bonus -> 30pt 50pt 10 pt
        function makeAbonus() {
            var nr = Math.floor((Math.random() * 3) + 1);
            currentBonusBasket.highlight.visible = false;
            currentBonusBasket = mainParentLibrray["basket" + nr];
            currentBonusBasket.highlight.visible = true;
            switch (nr) {
                case 1:
                    currentBonusBasket.nr = 30;
                    break;

                case 2:
                    currentBonusBasket.nr = 50;
                    break;

                case 3:
                    currentBonusBasket.nr = 10;
                    break;
            }

        }

        function addTweens() {
            if (tweenShouldEnd) {
                return;
            }
            var toGoSide;
            switch (side) {
                case 0:
                    toGoSide = 530;
                    break;

                case 1:
                    toGoSide = 63;
                    break;
            }
            createjs.Tween.get(mainParentLibrray.basket).to({
                x: toGoSide
            }, basketBoardSpeed, createjs.Ease.liner).call(addTweens);

            switch (side) {
                case 0:
                    side = 1;
                    break;

                case 1:
                    side = 0;
                    break;
            }

        }
        createjs.shoot_bball = function() {
            mainParentLibrray.bball.visible = true;

            mainParentLibrray.bball.x = player.x;
            mainParentLibrray.bball.y = player.y - 90;
            mainParentLibrray.bball.gotoAndPlay(0);

        }
        //Sound in random positiv and negative 
        function makeAPositiveSound() {
            var tmpString = Math.floor((Math.random() * 25) + 1)
            if (tmpString < 10) {
                playSound("app" + tmpString);
            }

        }

        function makeAnegatSound() {
            var tmpString = Math.floor((Math.random() * 3) + 1)

            playSound("neg" + tmpString);


        }
        //######SOUND END##################################
        //Check if the basket is made 
        createjs.check_made_basket = function() {
            if (bonus) {
                var pt = mainParentLibrray.bball.localToGlobal(mainParentLibrray.bball._mc.x, mainParentLibrray.bball._mc.y);
                var pt2 = currentBonusBasket.localToGlobal(currentBonusBasket.hit_area.x, currentBonusBasket.hit_area.y);
                if (circlesIntersect(pt.x, pt.y, 20, pt2.x, pt2.y, 20)) {
                    currentBonusBasket.play();
                    madeBasket++;
                    mainParentLibrray.made_baskets_txt.text = madeBasket;
                    score += currentBonusBasket.nr;

                    mainParentLibrray.score_txt.text = score;
                    var tmpNr = Math.floor((Math.random() * 1000) + 300)
                    setTimeout(makeAPositiveSound, tmpNr)
                    makeAbonus();
                    console.log("check made");
                } else {
                    var pt = mainParentLibrray.bball.localToGlobal(mainParentLibrray.bball._mc.x, mainParentLibrray.bball._mc.y);
                    var pt2 = currentBonusBasket.localToGlobal(currentBonusBasket.highlight.x, currentBonusBasket.highlight.y);
                    if (circlesIntersect(pt.x, pt.y, 20, pt2.x, pt2.y, 70)) {
                        console.log("board made");
                        var tmpString = Math.floor((Math.random() * 2) + 1)
                        playSound("rim" + tmpString); //Sound of the rim when ball touch the basket
                        console.log(tmpString);
                    } else {
                        var tmpNr = Math.floor((Math.random() * 1000) + 300)
                        setTimeout(makeAnegatSound, tmpNr)

                    }
                    console.log("miss"); // Shoot missed
                    bonus = false;
                    clearInterval(bonustimerInterVal)
                    stage.removeEventListener("stagemousemove", mouseMove);
                    stage.removeEventListener("mousedown", shootAnimationStart);
                    doNextLevel();
                }
                mainParentLibrray.bball.gotoAndStop(0);
                mainParentLibrray.bball.visible = false;
                createjs.shoot = false;
                return;
            }
            if (isNormal) {


                var pt = mainParentLibrray.bball.localToGlobal(mainParentLibrray.bball._mc.x, mainParentLibrray.bball._mc.y);
                var pt2 = mainParentLibrray.basket.localToGlobal(mainParentLibrray.basket.hit_area.x, mainParentLibrray.basket.hit_area.y);
                //Score Made Shot -> increase points
                if (circlesIntersect(pt.x, pt.y, 20, pt2.x, pt2.y, 20)) {
                    mainParentLibrray.basket.play();
                    madeBasket++;
                    mainParentLibrray.made_baskets_txt.text = madeBasket;
                    score += scorePerShot;
                    var tmpNr = Math.floor((Math.random() * 1000) + 300)
                    setTimeout(makeAPositiveSound, tmpNr)
                    mainParentLibrray.score_txt.text = score;

                } else {

                    var pt = mainParentLibrray.bball.localToGlobal(mainParentLibrray.bball._mc.x, mainParentLibrray.bball._mc.y);
                    var pt2 = mainParentLibrray.basket.localToGlobal(mainParentLibrray.basket.highlight.x, mainParentLibrray.basket.highlight.y);
                    if (circlesIntersect(pt.x, pt.y, 20, pt2.x, pt2.y, 70)) {
                        console.log("board made");
                        var tmpString = Math.floor((Math.random() * 2) + 1)
                        playSound("rim" + tmpString); //Sound of the rim when ball touch the basket
                        console.log(tmpString);
                    } else {
                        var tmpNr = Math.floor((Math.random() * 1000) + 300)
                        setTimeout(makeAnegatSound, tmpNr)

                    }
                    //Score Miss Shot -> takes points
                    score -= scorePerShotMiss;
                    mainParentLibrray.score_txt.text = score;
                }

                mainParentLibrray.bball.gotoAndStop(0);
                mainParentLibrray.bball.visible = false;
                createjs.shoot = false;
            }
        }

        function mouseMove(evt) {
            player.x = evt.stageX;

        }

        function shootAnimationStart() {
            if (createjs.shoot) {
                console.log("return");
                return;
            }

            console.log("click");
            player.gotoAndPlay(1);



        }

        function circlesIntersect(c1X, c1Y, c1Radius, c2X, c2Y, c2Radius) {

            var distanceX = c2X - c1X;

            var distanceY = c2Y - c1Y;



            var magnitudeSquared = distanceX * distanceX + distanceY * distanceY;

            return magnitudeSquared < (c1Radius + c2Radius) * (c1Radius + c2Radius);



        }
    }




})(library = library || {}, images = images || {}, createjs = createjs || {});
var library, images, createjs;