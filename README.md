# Mixed Messages
> Codecademy Javacript project

## Table of contents
* [Overview](#overview)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Project Objectives](#project-objectives)
* [Project Tasks](#project-tasks)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## Overview
For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

## Screenshots
![Tarot cards from the Rider Waite Tarot deck. Photo by Viva Luna Studios](./viva-luna-studios-GLsAydqqgzs-unsplash.jpg) 

## Technologies
* Javascript - ES6

## Setup
Run locally using Node.js.

## Code Examples
Sample code:
```javascript
// generate a random number between within a certain interval min to max (min and max included)
let randomNumFromInterval = (min, max) => {
    return Math.floor(Math.random()*(max-min + 1) + min);
}
const randomIndex = randomNumFromInterval(0, tarotDeck.length -1);
let randomTarotCard = tarotDeck[randomIndex];
let tarotCardMeaning = tarotMeanings[randomIndex];
let tarotCardAffirmation = tarotAffirmations[randomIndex];
```

## Project Objectives
* Build a message generator program using JavaScript
* Use Git version control
* Use command line
* Develop locally on your computer

## Project Tasks
* Plan your project
* Come up with a topic
* Create script and run it locally
* Set up version control
* Store message components
* Create the message
* Put the program together


## Status
Project is: _completed as of 12-19-20_

## Inspiration
Mixed Messages Javascript project from Codecademy
Tarot card meanings and affirmations quoted from https://www.thetarotlady.com/.

## Contact
Created by Claudia de Lima [@claugia13](https://github.com/claugia13) - feel free to contact me!