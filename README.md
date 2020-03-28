# week18-assignment - The Budget Tracker App

Github link: https://github.com/sevenspell/week18-assignment  

Heroku app link: https://week18budgettracker.herokuapp.com/

## Description 

This project is to create an app that allows users to track their incoming and outgoing money flow while they are travelling, regardless of whether they are online or offline. The app utilizes mongodb (while online) and indexeddb (while offline) to record the transactions, and when the user goes back online, all temporary data stored in indexeddb will be uploaded to mongodb for consolidation.

## Usage 

1. Go to Heroku app link: https://week18budgettracker.herokuapp.com/
https://github.com/sevenspell/week18-assignment/blob/master/screenshots/Screenshot1.png
2. Enter a transaction to start the process. Notice on the top right it indicates 'online'.
https://github.com/sevenspell/week18-assignment/blob/master/screenshots/Screenshot2.png
3. Continue adding as many transactions as user likes. Notice the "total" will change according to their transactions by adding or deducting from the budget.
https://github.com/sevenspell/week18-assignment/blob/master/screenshots/Screenshot3.png
4. The latest 2 entries were input while offline. Notice on the left that the latest 2 entries are recorded in indexedDB instead.
https://github.com/sevenspell/week18-assignment/blob/master/screenshots/Screenshot4.png
5. Once it goes back online, there will be an auto update to mongodb as reflected by "/api/transaction/bulk".
https://github.com/sevenspell/week18-assignment/blob/master/screenshots/Screenshot5.png
6. User can continue to enter new transactions, whether online or offline. The switch between online and offline in the app will not be visible to them.
https://github.com/sevenspell/week18-assignment/blob/master/screenshots/Screenshot6.png
7. App performance and PWA rating are also very high.
https://github.com/sevenspell/week18-assignment/blob/master/screenshots/Screenshot7.png



## Credits
I got a deeper understanding of the PWA and indexeddb from Wagner (https://wagner-lopes.github.io/).