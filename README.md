# Travel Tracker
### Contributor
- Becca Steinbrecher (GitHub: [b-stein](https://github.com/b-stein))

## Abstract
This application is a travel agency service platform. A viewer can sign in as a user or agent.

The travel user has the capabilities to view all their trips, past, present, future, pending; along with the details for each trip. They can also request a new booking.

An agent can view all user trips. Their landing page display the company's calendar-year revenue, trip requests, and trips active today. Using the search bar an agent can look up any user and view their entire trip log. The agent can approve or deny pending trips or delete upcoming trips.

## Learning Goals
- Use OOP to drive the design of the application and the code
- Work with an API to send and receive data
- Solidify the code review process
- Create a robust test suite that thoroughly tests all functionality of a client-side application

## Setup
Clone down this repository to your local machine.

Once cloned, change into this repo's directy.

Run `npm install`.

Run `npm start`.

In your browser, navigate to `localhost:8080`.

To login as a travel user, enter the username: `traveler1`, or any ending number up to 50.

To loging as an agent, enter the username: `agency`.

In both cases, use the password `travel2020`.

## In Action
#### Login page

<img width="975" alt="Screen Shot 2020-06-09 at 8 34 49 PM" src="https://user-images.githubusercontent.com/59381432/84221224-f6740580-aa91-11ea-90e4-b03f8002cc04.png">

#### User book request form

<img width="982" alt="Screen Shot 2020-06-09 at 8 39 37 PM" src="https://user-images.githubusercontent.com/59381432/84221234-fc69e680-aa91-11ea-9419-b15bfc084ec4.png">

#### Mobile view of the user's dashboard

![2020-06-09 20 41 30](https://user-images.githubusercontent.com/59381432/84221879-72228200-aa93-11ea-9e68-2d2e4e1189d1.gif)

#### Agent's view opening trips and denying requests

![2020-06-09 20 39 49](https://user-images.githubusercontent.com/59381432/84221922-89616f80-aa93-11ea-9708-7b2546636900.gif)

#### Agent searching for user's by name

![2020-06-09 20 40 33](https://user-images.githubusercontent.com/59381432/84221957-9b431280-aa93-11ea-9ee9-ce2ce079bc7c.gif)

### Wins
- Finishing all application functionality with a relatively clean, organized code base.
- Implementing inheritance in classes, along with using a class for all API fetch calls.
- Creating a responsive application with media queries.
- Lighthouse score of 98 for accessibility considerations.

### Future Iterations..
- Write a more robust testing suite with more tests for dom updates and fetches.
- Use more SCSS tools to further clean up the stylesheets.

## Technologies Used
- JavaScript, ES6
- Mocha & Chai
- SCSS/SASS
- Fetch API

## Systems/Practices
- git/Version Control
- Project Board ([on Trello](https://trello.com/b/LtYTSO9v/travel-tracker))
