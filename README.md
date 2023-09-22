# Voting App

This project is for the Udacity React Nanodegree project on Redux.  It's kind of hacky, in terms of styling and UI, as I just used simple react-bootstrap stuff.  All the functionality is there, however, and the usage details are below.


## Run the app in the browser

Run the following command in the project directory:

### `npm start`

This will start the app, and show it in your browser.   You can log in with one of 4 user names, and see the polls that you've answered or have yet to answer.  From the /home screen, you can see old polls (and their stats), as well as create a new poll.

The `Leaderboard` button in the header will display a leaderboard showing which users have asked and answered the most polls.

The `Create a poll` button in the header will allow you to create a new poll.

Finally, the `Logout` button in the header will log you out of the app.

## Testing

The app contains 10 tests

- 1 snapshot test
- 2 tests that simulate a button click, and check the results
- 5 tests that test functions in the database, and
- 2 tests that make sure things are present in the document

To run the tests, simply run the following command in the project directory:

### `npm test`