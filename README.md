Tray Tech Test
=================

My first weekend challenge was to create a simple application that allowed users to create airports and planes, advise those planes to land and take off all whilst accounting for a the weather. The user stories were as follows-

```
As a system designer 
So I can see how efficient my robotic hoover is 
I want to be able to see how many patches of dirt it cleans up

As an system designer 
So I can see where my hoover finishes 
I want to get co-ordinates to tell me where my hoover finishes

```

The application has 6 modules - an app module that is run in the terminal, a canRoombaMove module that's responsibility is to judge whether the Roomba can move or if it's outside the pre-determined size of the room, a changeElement module that changes arrays into strings and vice-versa, an infoNeedFromTextFile that looks at the text file and returns any relevant information from it, a moveRoomba module that moves the Roomba based on the given directions and a writeToOutPut file that writes the results of the program to an output file as well as the console. 

The application is tested using Mocha and can be run from the terminal.

### Screenshots

<img src="images/roombaCanMove.png?" width="400px">

A screenshot of the canRoombaMove class

<img src="images/writeToOutput.png?" width="400px">

A screenshot of the writeToOutput file - notice that it both writes the output to a new text file as well as to the console

<img src="images/tests_run.png?" width="400px">

A screenshot of one of the test specs
<img src="images/tests.png?" width="400px">

12/12 passing tests

Technologies Used
-----

* Node
  * I used node as my runtime environment and used NPM to download any relevant packages
* Javascript
  * The application was built in Javascript
* Mocha
  * I tested the application using Mocha and Chair

Installation
-----

* Git clone the project into your own local repository
* Using the terminal, move into the repository with the source code
* Run 'npm install' in your terminal to download the relevant node packages
* Run 'node src/app.js' to see the output of the application


Tests
-----

Run 'npm run test' in order to see the tests in the terminal