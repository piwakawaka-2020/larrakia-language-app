# Larrakia Language App

## Introduction
### Motivation:

The Larrakia Language App (LLA) has been a vision of the project director, Laniyuk, for years. As a Larrakia person, she understands the challenges of trying to learn a language with limited accessibility for daily engagement. She also understands the importance of language in the practise of culture, connection to kin and understanding of land. 

As of the 2016 census there were 14 people in the city of Darwin who claimed to know the Larrakia Language (Gulumirrgin), with Larrakia people numbering around 2,000 out of a total population of 136, 828.

It was her wish that an app be created that allowed Larrakia people, and those living on Larrakia Land, to have access to learning and practising Gulumirrgin while strengthening its presence in the day to day.

### Goals:

The Larrakia Language App For Kids brings Larrakia language to the mouths and minds of children between the ages of 7-10 through fun, interactive games.

The LLA For Kids encourages the learning of animals, plants and landscape through an interactive map, games and a dictionary for children! 

We hope to encourage children to maintain culture and connection with Larrakia Land through language. In time, the work done today will hopefully lead to a world in which Larrakia people are fluent in their language, have access to their culture and control over their lands.

### Members:
| Name | Role |
| --- | --- |
| Laniyuk | Product Owner/Creative Director |
| Simone | Product Manager |
| Zac | Git Lead / Deployment Lead |
| Boyd | Backend Lead |
| Richard | Frontend Lead |

## Technologies

The technologies in use:

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/introduction/getting-started)
* [Express.js](https://expressjs.com/en/starter/installing.html)
* [Knex.js](http://knexjs.org/)
* [Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
* [React DnD](https://react-dnd.github.io/react-dnd/about)

## User Stories
## MVP
## As a user:

## Landing Page
- [x] I want to be able to see a map of Larrakia country
- [x] I want to be able to click on an icon so that I can enter a game
- [x] I want to be able to interact with a menu burger

## Game - Drag-and-drop
- [x] I want to be able to play a drag-and-drop image association game
- [x] I want to be able to be able to drag from 2 images into a box
- [x] I want to be able to see if my answer is correct or incorrect
- [x] I want to be able to see a demo of the game
- [x] I want to see a progress bar to see how far along in the game I am
- [x] I want to be able to see a win page
- [x] I want to be able to go back to the landing page when I am done

## MVP Stretch

## As a user:

## Game - Memory Game
- [x] I want to be able to flip tiles to match
- [x] I want to be able to see a demo of how to play the game
- [x] I want to be able to see a win page

## Other
- [ ] I want to be able to see a loading screen

## Views (Client Side)
## MVP
 | Component | Purpose |
 | --- | --- |
 | Home | View for the landing page
 | Menu | View for the menu bar
 | Map | View for the map
 | DragDropGame | View for the drag-and-drop game
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
