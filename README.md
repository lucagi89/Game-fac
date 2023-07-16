What is it?

Death fight is a game that mixes a fight game with a bit of history knowledge as well.
The user can choose if they want to play in “1 player mode” or “2 players mode”.
In the first option the player uses the Super Warrior to fight against an array of monsters (each of them stronger than the previous), the fight is carried on by the user simply by pressing the “fight button” as fast as they can to try to kill the monster, before it kills them first.
Each character, the “super warrior” and the “monster” have a life bar shown underneath the each character picture, that shows how much life they’ve got.
Once the “super warrior” has a life bar that goes under 30 points, a pop-up with historical questions appears, and if the player answer them correctly, the “super warrior” gets his life bar topped up, to help him go on with the game.
If the player answer at least 2 questions incorrectly, the game continues without the warrior getting any life top up, but even so, when the warrior gets to “0” life energy, it gets a last chance to continue by topping up its life with a random number of points.
Throughout the game, the player gets maximum three helps by answering question, but the game is short for now, so it is more than enough to win the game.
The “2 players mode” on the other hand is way simpler, each player gets to choose their character and after that they fight against each other with specific assigned keys on keyboard and the fastest player wins.
In the game window I put on the bottom-left side three buttons. One of them controls the music and sounds, another one just pauses and plays the game, the last one is the instructions button.
In the “2 players mode” there’s not stop/play button and the instructions one gives obviously different instructions.
I tried to make the game layout as responsive as I could, even dough the “2 players mode” is not available on devices without keyboard.



How did you do it?

I used a lot of Javascript, backed by a fair amount of Css and a very little Html file. 
I created different JS files, one for the class that would render each fighter, another to keep the fighters-data-objects-array, another to host the questions-answer array and another to put the secondary functions that weren’t linked too much with the rest of the functions.
The real challenge of this game for me was “building on the go”, because I didn’t have everything planned out already.
I started with a simpler idea in mind, but as I was building, I ran across various issues and other ideas that made me change and revisit the code many times.
For the pictures of the monsters I searched online and I found the ones I used on Pinterest, the songs and sound effects have been downloaded from Youtube.
Throughout the game I use various conditions, “eventListeners” and “setTimeous” to keep the game running.
I made it so that the monsters would attack on a random speed and strength, depending on the monster. I thought that a real life fight wouldn’t be at constant speed and strength, and also the Super Warrior attacks are at random strength, but in a precise range of minimum and maximum.
To make the array of questions and answers instead I simply used chatGTP.
I checked and played the game many times, and I tried to fix all the bugs that I found. Many times happened that as I fixed a bug, another one would come up, and I must say It has been really fun.
As for now I fixed all the bugs that I found and that I intended to fix, but if I could  start from scratch I would probably develop this game in another slightly different and less heavy way and I would try to figure out how to display actual fighting characters, instead of fixed pictures.
About the layout I think I did good enough, even dough I didn’t put the right focus on it and there is certainly room for improvement.



Why did you do it?

I wanted to build a game that wasn’t a typical “Javascript Learning Game”, but something that would showcase a bit of creativity. 
I’m not a big games player, so I didn’t have much game knowledge to dip from. I started with the Idea of 2 characters fighting, but at the beginning I realised that my idea was too simple compared to other people’ ideas at the FAC meet-ups.
So I added much more conditions and features to make the game a bit more dynamic and enjoyable. 
For now it’s really easy and short, but there’s the possibility to add more fighters and maybe to make them fight for real, but I’m still learning this pa