# Tamagatchi

// 
//





USER STORY 
 
This simple yet interactive tamagotchi game is designed for users who would like to have an extraordinary comfort pet  that they may not be able to have in real life. 
 
The few basic game attributes will allow the user to take care  of the pet’s well being  by feeding, playing and chatting with their pet. The user will be able to freely engage into the conversation with their pet via interactive chat.
 
The duration of the game is 60 seconds which indicates that the pet’s life cycle  is short. The age of the shark will be changing every 10 seconds until it reaches the age of 50 years. 
 
Game blueprint: 
 
LANDING PAGE 
 
// 1. 1 Upon arrival  on the main screen user will see the following:
 
The name of the game in the middle of the page, and  the “start button”  on the right left corner, along with  the baby- shark located  on the bottom on the page “waiting” “hovering” 
 Once clicked in the button the user will receive an alert text  as a greetings and quick intro
 
“ Hello there! You're one of few people
 in the world that decided to adopt a 
shark and protect them from
 the shark finning hunters! 
THANK YOU for your Care !”
 
And prompt to click “ ok” to meet and name the baby shark.
 
//1.2 . Once the name has been assigned the following attributes and features will show up on the  left and right sidebar:
 
Left sidebar
Hunger: 0-10;
Gratitude: 0-10;
Exercise: 0-10 
 
Right sidebar 
Light on/off
Feed me
 
//1.3. The “PLAY” button will start ‘hovering’ to prompt the user to click play.
//1.4. Once “PlAY” the pet starts moving “left-right’’ and the “Start” button will disappear.
 
GAME INTERACTIVITY (JS) 
 
//2.1 Game duration : 60 seconds
//2.2 The pet’s age will increase every 10 seconds until it reaches 50. The alert message will show up every 10 seconds to notify the user. 
//2.3 The left sidebars attributes values will increase from 0 -10  to stop values increase user will have to click on the attributes buttons;
 
 Left sidebar
Hunger: 0-10;
Gratitude: 0-10;
Exercise: 0-10 
 
//2.4 when the light button is activated the game stops for 2 seconds and computer light is deams. After 2 seconds the game activates again from the stopping point.
//2.5When clicked on the “ feed me” button the pet will “hover’’ and plays “ under the sea” song for 10 seconds. 
//2.6. When clicked “chat” an alert text will show up “ hello there! How have you been” the user will be able to text a string and receive a response.
2.6// If any of the attributes on the left sidebar go to 0, the game ends.
