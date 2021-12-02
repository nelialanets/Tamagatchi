
/* 1 ----[x]----------------------------------------------------
START 
Start the game after pet's name was inputed. The START Button will fire up the game.
1.1 ".buttonSetup", and "from the left and right ----> "submit button" disapears ----> music plays.  Toggle method?
-----------------------------------------------------------------/*


/* ---------------------------------------------------------2 [x]
create an object that holds the values on the pet conditions
Object 
let game ={
    name:"",
    hunger: 10,
    tiredness: 5,
    exercise: 10,
    isAlive: true,
    age: 0,
------------------------------------------------------------------*/

/* ----3 [x]----------------------------------------------------
Set timer 
TIMER -- when game begins the timer starts at 60s seconds and cont downs until 0
---->  hunder decreses in interval
-----> tiredness exersise decreses in interval
------> exersise -- exersise decreses in interval
------------------------------------------------------------------*/
//is any of the objects reach 0 pet dead

/*----4 [x]--------------------------------------
Buttons:
addEventListener to dim light, play, feed the pet;
------------------------------------------------*/

/*--------5 []----------------------
TOGGLE buttons
will add to the EventListener(toggle method) to the right and left side bars 
for them to show up and disappear.-----*/

 /*-------6 []--------
 sound button
 -----------------*/


/*--------------------------------------------
game object and methods
---------------------------------------------------*/
let time = 0;

let game ={
    name:"",
    hunger: 10,
    tiredness: 10,
    exercise: 10,
    isAlive: true,
    age: 1,

//callling methods to mmake buttons interect with attributs
feed(){
    this.hunger++;
    //console.log(`hunger is at ${this.hunger}`);
    $("#hunger").text(`Hunger: ${this.hunger}`);
},

play() {
    this.exercise++;
    //console.log(`exersise}is at ${this.exercise}`);
    $("#exercise").text(`Exercise: ${this.exercise}`);
},

sleep(){
    this.tiredness++;
    //console.log(`tiredness is at ${this.tiredness}`);
    $("#tiredness").text(`Tiredness: ${this.tiredness}`);

},
}

/*---setting up timer and activating attributes ----*/
function worldTimer(){setInterval
    (updateTime,1000)
};
         function updateTime(){
            time ++;
            $("#timer").text(`Timer: ${time}`)
            console.log("Let's go")
            
            if (time% 60 === 0){console.log ("your baby shark has reached its life expectancy;")
        }
             game.age ++;

              $("#age").text(`age:${game.age}`)
           
              if(game.age === 10){
                alert(" your bay shar is not a baby anymore, it's 8 y.o");
            }
            if (game.hunger === 0 || game.tiredness === 0) {

                game.isAlive === false;

                clearInterval(updateTime);
                alert("Your tamagotchi has died! Try again")
                gameOver();
            }
            if (game.isAlive === false) {
            
            }
    
            if (lightOn !== true && time % 2 === 0) {
                game.sleep();
            }

            if (time % 2 === 0 && lightOn === true) {
                game.tiredness--;
                $("#tiredness").text(`Tiredness: ${game.tiredness}`)
            }
            if (time % 2 === 0 && game.exercise>=2) {
                game.exercise--;
                $("#exercise").text(`Exersise: ${game.exercise}`);
            }
            if (time % 2 === 0 && game.hunger >=1) {
                game.hunger--;
                $("#hunger").text(`Hunger: ${game.hunger}`);
            }
    };

let lightOn = true;
let opacity = 0;
const toggleLights =function toggleLights(){
   
   if(lightOn =!lightOn){ 
     opacity =0.6;
    }else if (lightOn){
        opacity= 0.0;
    }
const styles={
    "background-color": `rgba(0, 0, 0, ${opacity}`,
        display: "block",
}
$("#light-off").css(styles)
};

$("#light").on("click", toggleLights);


$("#light").on("click", toggleLights);

function goGame() {
    game.name = $('.user-entery').val();
    $('#petName').text(game.name);
    updateTime();
    worldTimer();
    gameM();
    playPet();
};

 let gameSound = new Audio("./audio/underTheSea.mp3")

 function gameM(){
    gameSound.play()
    console.log("music paly")
}

function gameOver(){
    $('.buttonSetUp').hide();
    $('.attributes-section').hide();
    $('img').hide();
    $('.gameSt').hide();
    $('.petName').hide();
}
function playPet() {
    $('#pet1').css('animation-play-state', 'running');
}

 /*let muteBtn = document.getElementById('mute');
 $mute.click(function(){
     mute.pause();
})
/*------------------------------------------------
buttons area
--------------------------------------*/
$("#light").on("click", toggleLights);
$(".start-btn").on('click', goGame);
$("#food").on('click',() => {game.feed()});
$("#playB").on("click",() => {game.play()});
