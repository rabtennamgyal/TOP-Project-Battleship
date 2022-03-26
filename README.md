Below are some issues that I'm working on currently:


0. Need to make sure players don't add extra ships after carrier. I tried updating the foo ( getting it       out of the setTimeout ) quickly but that causes can additional problem. It causes the div to changes it color ( sign of attacked ) while it is being placed. 


1. May also want to speed up the div changing for each loop up bit ( taking too much time ). Also, when no name
is submitted, the message won't change to playerOne wins/ playerTwo wins. ( return home -> pvp -> no name -> check ? 🤷‍♂️) 


🤷‍♂️ last hovering effect of carrier still lingers.
🤷‍♂️ Need to work on the function aiShipPlacement() !important
🤷‍♂️ make sure computer doesn't click on an already pressed div


// Notes on solved problems :
1. Realized I don't need to use recursion to make a random number legal. As if a numner isn't correct, then 
   it will get out of the loop and console log a message. But the problem will be taken care of the while 
   loop in the setInterval as the boolean won't be true. Maybe it is called again automatically.