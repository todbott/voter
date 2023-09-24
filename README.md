# Voting App

This project is for the Udacity React Nanodegree project on Redux.  It's kind of hacky, in terms of styling and UI, as I just used simple react-bootstrap stuff.  All the functionality is there, however, and the usage details are below.

## Getting started

This app is meant to be run on the local server (localhost), so this section will detail how to get the app running on your computer, with npm.

### Installing Prerequisites

This app relies on Node.js.  It was built on my system which has Node v16.16.0 installed.  The particular libraries you need to run it are all, as usual for a React app, in the package.json file in this repo, so before running the app, simply run:

### `npm install`

That will install all the dependencies via Node Package Manager (npm).

### Running

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

To run the tests, simply run either of the following commands in the project directory:

### `npm test`
### `npm run test`

## Deployment

As this is a proof-of-concept app only, it is not meant to be deployed to the cloud or a server anywhere.  It would be possible though, and I would recommend AWS Amplify for deployment.  It's very cheap and very easy.

## Authors, License etc.

Todd Gillies [here on LinkedIn](www.linkedin.com/in/todd-gillies-0ab0a8105) wrote this app, for the Udacity React nanodegree program.  There is no particular license associated with it, so feel free to copy and alter it.  Of course, if you are enrolled in the Udacity React nanodegree program, copying this code is of course prohibited by Udacity's rules.  Other than that, do what you'd like with the code!
