# Larrakia Language App

## Introduction

## Technologies

The technologies in use:

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/introduction/getting-started)
* [Express.js](https://expressjs.com/en/starter/installing.html)
* [Knex.js](http://knexjs.org/)
* [Passport.js](http://www.passportjs.org/docs/)
* [Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
* [React DnD](https://react-dnd.github.io/react-dnd/about)

## User Stories
## MVP
## As a user:

## Landing Page
- [ ] I want to be able to see a map of Larrakia country
- [ ] I want to be able to click on an icon so that I can enter a game
- [ ] I want to be able to interact with a menu burger

## Game - Drag-and-drop
- [ ] I want to be able to play a drag-and-drop image association game
- [ ] I want to be able to be able to drag from 2 images into a box
- [ ] I want to be able to see if my answer is correct or incorrect
- [ ] I want to be able to see a demo of the game
- [ ] I want to see a progress bar to see how far along in the game I am
- [ ] I want to be able to see a win page
- [ ] I want to be able to go back to the landing page when I am done

## MVP Stretch

## As a user:

## Landing Page
- [ ] I want to be able to see the names of cities on a map
- [ ] I want to be able to see a greyed out version of the icon of a game I have already played

## Game - Memory Game
- [ ] I want to be able to flip tiles to match
- [ ] I want to be able to see a demo of how to play the game
- [ ] I want to be able to see a win page

## Other
- [ ] I want to be able to see a loading screen

## Stretch

## As a user:
TBD

## Views (Client Side)
## MVP
 | Component | Purpose |
 | --- | --- |
 | Home | View for the landing page
 | Menu | View for the menu bar
 | Map | View for the map
 | DragDropGame | View for the drag-and-drop game
 | Game | View for the game itself
 | HowToPlay | View for how to play section
 | Instructions | View for the text instructions of the game
 | Congratulations | View for the win screen

## Reducers (Client Side)
| name | purpose |
| --- | --- |
| wordsList | Store the list of words that are used by the game |
## Actions
| type | data | purpose |
| --- | --- | --- |
| RECEIVE_WORDS | words | Retreive words from the database and store in redux |

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| GET | /api/v1/words | Yes | Get all words in the database | An array of Words objects |
| GET | /api/v1/words/:id | Yes | Get a word in the database by ID | A Wor object |
| GET | /api/v1/words/:category | Yes | Get words in the database by category | An array of Words object |

## Database (Server Side)
### MVP

### Words
| Column Name | Data Type |
| --- | --- |
| id | Integer |
| gulumirrgin_word | String |
| english_word | String |
| category | String |
| image_url | String |
| audio_url | String |
