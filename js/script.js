
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
    hunger: 0,
    tiredness: 0,
    exercise: 0,
    isAlive: true,
    age: 0,


feed(){
    this.hunger++;
    console.log(`I love the food!`);
    console.log(`hunger is at ${this.hunger}`);
    $("#hunger").text(`Hunger: ${this.hunger}`);
},

play() {
    this.exercise++;
    console.log('Having funn!');
    console.log(`exersise}is at ${this.exercise}`);
    $("#exercise").text(`Boredom: ${this.exercise}`);
},

sleep(){
    this.tiredness++;
    console.log('awwww sleepy!');
    console.log(`tiredness is at ${this.tiredness}`);
    $("#tiredness").text(`Boredom: ${this.tiredness}`);
},
}

$("#food").on('click',() => {game.feed()});
$("#playB").on("click", () => {game.play()});


/*---setting up timer and activating attributes ----*/



function worldTimer(){setInterval
    (setTimer,1000)};


    function setTimer(){
    
    time ++;
    $("#timer").text(`Timer: ${time}`)
    console.log("Let's go")
};


         function updateTime(){
            
            if (time% 60 === 60){console.log ("your baby shark has reached its life expectancy;(")

            game.age ++;
        }

            if(game.age === 6){
                console.warn(" your bay shar is not a baby anymore, it 6 y.o");
            }
            if (game.hunger === 0 || game.tiredness === 0) {
                game.isAlive === false;
                clearInterval(worldTimer);
                console.log("Your tamagotchi has died!")
            }
            if (game.isAlive === false) {
            
            }
    
            if (lightOn !== true && time % 5 === 0) {
                game.sleep();
            }

            if (time % 45 === 0 && lightOn === true) {
                game.sleep--;
                $("#tiredness").text(`Tiredness: ${game.tiredness}`);
            }
            if (time % 16 === 0 && game.exercise>=2) {
                game.exercise--;
                $("#exercise").text(`Exersise: ${game.exercise}`);
            }
            if (time % 15 === 0 && game.hunger >=1) {
                game.hunger--;
                $("#hunger").text(`Hunger: ${game.hunger}`);
            }
    };


let lightOn = true;

const toggleLights =function toggleLights(){
    lightOn =!lightOn
    
    let opacity =0.6;

    if(lightOn){
        opacity=0.0;
    }
const styles={
    "background-color": `rgba(0, 0, 0, ${opacity}`,
        display: "block",
}
$("#light-off").css(styles)
};

$("#light").on("click", toggleLights);


$("#light").on("click", toggleLights);


function startGame() {
    game.name = $('.user-entery').val();
    $('#petName').text(game.name);
    updateTime();
    worldTimer();
};

/*------------------------------------------------
buttons area
--------------------------------------*/
$("#light").on("click", toggleLights);
$(".start-btn").on('click', startGame);
$("#food").on('click',() => {game.feed()});
$("#playB").on("click", () => {game.play()});
