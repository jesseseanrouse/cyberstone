# CapstoneProject

**Overview**

This is a cyperpunk themed text based game that will allow the user to go on an adventure to defeat a boss or two. This focuses on allowing muilitple ways to get through something or fight someone. There is no wrong way, just different paths.

**User Experience**

When the user gets onto the site, the will see a login screen that has the option to log in. From here they can navagate to see my about page or information about the game and how it works. They can then log in if they have already signed up or sign up. They will then see the character screen which has a list of characters they have created with the ability to create a new character. When they create a character it will lead straight into the game. They will read a description and will be presented with choices on how to proceed. This will continue until they either save thier progress, beat the game, or close the game.

**Links**

- github: https://github.com/jesseseanrouse/cyberstone/
- live site: https://cranky-ptolemy-d8636a.netlify.app/

**Backend Models**

Not all properties of the model will be used but are included if time permits usage

*User Model*
- username:
- password:
- arr_of active characters
- arr_of inactive characters
- achievements

*Character Model*
- name:
- stats_arr
- item_arr
- xp:
- equipment_arr
  - name:
  - mod1:
  - mod2:
  - mod3:
- game_ver
- secret_arr
- quests_arr
- time:
- score:
 
 **MVP**
 
 - Home page with login
 - about page
 - guide/instruction page
 - create character page
 - exploration area
 - power plant location
 - 'first' Boss
 - easy mode
 - simple story
 - some easter eggs
 
 **Post MVP Part 1**
 
 - medium mode
 - Modding Equipment
 - smelter/forge area
 - 'second' Boss
 - more easter eggs
 
 **Post MVP Part 2**
 
 - Hard Mode
 - Modding Character
 - 'crusher' area
 - 'third' Boss
 - even more easter eggs
 
 **Post MVP Part 3**
 
 - story depth
 - Factory area
 - Final Boss
 - score system
 - make a new model on the backend for high scores
 - I think I'm going to need more easter eggs
 
 ## Components

Will have more conponents depending on needs of the App. These are general aspects or base conponents with many children; its going to be more complicated with many components.

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include Base React Router| 
| Log-in | This is the home page | 
| Nav-Bar | This will have links to non game pages | 
| About | Gives information about me and what tech was used in the app | 
| Information | Gives information about game mechanics | 
| List of Characters | This becomes the new home page after log in | 
| Create Character | User creates a character here |
| Tutorial/Start | Basic user choice and set up the game and user enters the scapyard | 
| Scrapyard | Exploration/home location where character can find supplies and mod things | 
| Power Plant | 'first' boss is located here, electric themed battles | 
| Smelter | 'second' boss is located here, fire themed battles | 
| Crusher | 'third' boss is located here, physical themed battles |
| Factory | Final boss is located here, don't want to spoil surprise |
| Battle | Battler conponent for basic fights |
| Backend | Will host data and some functions |

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| App | H | 1 hrs| .75 hrs |
| Log-in | H | 1 hr| 2 hrs |
| Nav-Bar | H | .5 hrs |  .5 hrs |
| About | H | 2 hrs | 1 hrs |
| Information | L | 4 hrs | 1 hrs |
| List of Characters | M | 2 hr| 2 hrs |
| Create Character | H | 3 hr| 3 hrs |
| Tutorial/Start | M | 2 hr| 2 hrs |
| Scrapyard | H | 10 hr| 6 hrs |
| Power Plant | H | 20 hr| 12 hrs |
| Smelter | L | 12 hr| x hrs |
| Crusher | L | 8 hr| x hrs |
| Factory | L | 12 hr| x hrs |
| Battler | M | 4 hr| 6 hrs |
| First Boss | H | 4 hr| 10 hrs |
| Second Boss | L | 3 hr| x hrs |
| Third Boss | L | 3 hr| x hrs |
| Final Boss | L | 6 hr| x hrs |
| Backend | L | 3 hr| 6 hrs |
| Backend: User Data | L | 3 hr| 10 hrs |
| Backend: Functions | L | 3 hr| x hrs |
| Total | H | 106.5 hrs| 62.25 hrs |

I feel like I spent an additional 10-20 hours on this but honestly not sure

| Objective | Day | Actual Day |
| --- | :---: |  :---: |
| Firebase DB Setup | 1 | 5 |
| Basic Structure for Frontend App | 2 | 1 |
| Create Character | 3 | 2 |
| Basic Scrapyard | 4 | 6 |
| Battle Mechanics | 5 | 8 |
| Powerplant | 7 | 7 |
| Give Thanks | 8 | 8 |
| First Boss | 9 | 10 |
| Testing and Bug fixing | 10 | 11 |
| Present | 12 | 12 |

**Additional Libraries**
- React
- Firebase
