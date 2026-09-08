
const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");

const boy = document.getElementById("boy");
const girl = document.getElementById("girl");

const countdown = document.getElementById("countdown");
const hitText = document.getElementById("hitText");

const girlWinsText = document.getElementById("girlWins");
const maxWinsText = document.getElementById("maxWins");

const winScreen = document.getElementById("winScreen");
const finalText = document.getElementById("finalText");

let targetWins = 0;
let girlWins = 0;

const hits = [
    "💥 BAM!",
    "👊 POW!",
    "💢 SMASH!",
    "⚡ BOOM!",
    "🥊 WHACK!"
];


// התחלת משחק

startButton.addEventListener("click", ()=>{

    targetWins = Number(
        document.getElementById("pazamInput").value
    );

    if(targetWins <= 0){

        alert('מה הפז"ם שלך?');
        return;

    }

    maxWinsText.innerHTML = targetWins;

    startScreen.style.display="none";

    startCountdown();

});




// ספירה לאחור

function startCountdown(){

    let count = 3;

    countdown.innerHTML = count;

    let timer = setInterval(()=>{

        count--;

        if(count > 0){

            countdown.innerHTML = count;

        }

        else{

            clearInterval(timer);

            countdown.innerHTML = "FIGHT!!";

            setTimeout(()=>{

                countdown.innerHTML="";

                startBattle();

            },1000);

        }

    },1000);

}





// הקרב מתחיל

function startBattle(){

    // כמה זמן לכל נקודה
    // תמיד יסתיים בערך אחרי 7 שניות

    let speed = 7000 / targetWins;

    let battle = setInterval(()=>{

        if(girlWins >= targetWins){

            clearInterval(battle);

            finishGame();

            return;

        }

        fightRound();

    },speed);

}





// סיבוב אחד מהיר

function fightRound(){

    // מתקרבים

    boy.style.left="80%";
    girl.style.right="80%";


    setTimeout(()=>{

        boy.src="boy-2.png";
        girl.src="girl-2.png";

        boy.classList.add("fighting");
        girl.classList.add("fighting");

        showHit();


        setTimeout(()=>{

            boy.classList.remove("fighting");
            girl.classList.remove("fighting");


            // הבת מנצחת נקודה

            girlWins++;

            girlWinsText.innerHTML = girlWins;


            // הבן נדחף

            boy.style.left="55%";


            // חזרה להתחלה

            setTimeout(()=>{

                boy.style.left="420px";
                girl.style.right="420px";
                boy.style.bottom="250px";
                girl.style.bottom="250px";
                

                boy.src="boy-1.png";
                girl.src="girl-1.png";

            },100);


        },100);


    },100);

}






// מילת מכה אקראית

function showHit(){

    let random =
        hits[Math.floor(Math.random()*hits.length)];

    hitText.innerHTML=random;


    setTimeout(()=>{

        hitText.innerHTML="";

    },400);

}






// סיום המשחק

function finishGame(){

    boy.src="boy-2.png";

    girl.src="girl-2.png";


    boy.classList.add("lose");


    setTimeout(()=>{

        winScreen.style.display="flex";

        finalText.innerHTML =
        " ניצחת " + targetWins +
        " - 0 !<br><br>";

        createConfetti();


    },1000);


}






// קונפטי

function createConfetti(){

    for(let i=0;i<80;i++){

        let piece = document.createElement("div");

        piece.className="confetti";

        piece.style.left =
        Math.random()*100+"vw";


        piece.style.animationDelay =
        Math.random()*3+"s";


        document.body.appendChild(piece);

    }

}






