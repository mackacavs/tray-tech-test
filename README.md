Tray Tech Test
=================

For the Tray Tect Test my user storeis could be broken down as follows-

```
As a system designer 
So I can see how efficient my robotic hoover is 
I want to be able to see how many patches of dirt it cleans up

As an system designer 
So I can see where my ends its route 
I want to get co-ordinates to tell me where my hoover finishes
```

I built my application with 6 modules. A main *app* module that is run in the terminal, a *canRoombaMove* module that's responsibility is to judge whether the Roomba can move or if it's outside the pre-determined size of the room, a *changeElement* module that changes arrays into strings and vice-versa, an *infoNeededFromTextFile* that looks at the text file and returns any relevant information from it, a *moveRoomba* module that moves the Roomba based on the given directions and a *writeToOutPut* file that writes the results of the program to an output file as well as the console. 

The application is tested using Mocha and can be run from the terminal.

### Screenshots

<img src="images/roombaCanMove.png?" width="400px">

A screenshot of the *canRoombaMove* class

<img src="images/writeToOutput.png?" width="400px">

A screenshot of the *writeToOutput* file - notice that it both writes the output to a new text file as well as to the console

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
  * I tested the application using Mocha and Chai

Installation and Running The Program
-----

* Git clone the project into your own local repository
* Using the terminal, move into the repository with the source code
* Run 'npm install' in your terminal to download the relevant node packages
* Run 'node src/app.js' to see the output of the application

Tests
-----

Run 'npm run test' in order to see the tests in the terminal

Final Note on Retrieving the input.txt File
-----

I wasn't certain where to source the input.txt file from. Because of this and because of time constraints I created my own input.txt file in the repo itself as you can see above. If I had had more time - and was certain that the task wanted me to retrieve a text file that was hosted either remotely by myself or in a different location - I'd have used Axios to retrieve the relevant data.

The main difference that this would have made is that sourcing the file would have been an asynchronous process, so I'd have had to wait for the text file to have been fetched by my Axios GET request before running the rest of the code. My request may have looked something like this-

```
function getTextFile() {
  axios.get('https://relevantwebaddress.com')
    .then(res =>  infoNeededFromTextFile(res))
    .catch(err => console.error(err))
}
```
