<h1 align="center">Travel Advisor 🛫</h1>

<h4 align="center">A `React and Rails` App designed as a rating traveling app that offers a large selection of destinations throughout the world.</h4>

<p align="center">
  <img max-height: 90% width="100%" src="src/images/tone.gif" alt="gif of the app">
</p>
  
***➡️ Link to [Demo](https://youtu.be/t04bmG8gYdw)***<br/>
***➡️ Link to [Live website](https://traveladvisor-app.herokuapp.com/)***<br/>


## Features
- Users can sign up or sign in. 
- Upon Sign in Users are taken to the Home page and gain access to their Profile 
- User is able to see a list of destinations, search for a specific destination
- Users can add Destinations to their bucketlist
- Users can Review Destinations 
- User can also see their amount of contributions to the website(reviews), the number of destinations in their bucketlist
- Users can Delete, Bucketlist Items, Reviews and their Profile


## Technologies

***Link to [Back End Repository](https://github.com/saimaar/Travel-Advisor-Backend)***<br />

**Front End:** 
- React [16.12.0]
- React Router [^5.1.2] - Declarative Routing
- React Router Dom [^5.1.2] - Declarative Routing
- React TextArea AutoSize [^7.1.2] - Textarea component which automatically resizes textarea as content changes.
- Semantic UI [^0.88.2] - A UI component framework for theming websites
- CSS3 for customization

**Back End:**
- Ruby [2.6.1]
- Rails [~> 6.0.2, >= 6.0.2.1] - MVC web framework used as an API
- Bcrypt [~> 3.1.7] - Encrypt and secure user passwords
- Rack-cors - Handles Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
- Jwt [~> 2.2] - Cryptographic signing
- PostgreSQL [>= 0.18, < 2.0] - Database
- Active Model Serializers - Serializing API routes to JSON

## Prerequisites
Before you begin, ensure you have installed the latest version of:

- Ruby
- Rails
- PostgreSQL
- React

## Installation 

To launch the app you'll have to follow the following steps:

**Back End setup**
- Clone this following repo here: [Back End Repository](https://github.com/saimaar/Travel-Advisor-Backend) and `cd` into it
- Run `bundle install` to install all required dependencies
- Ensure you have PostgreSQL up and running
- Run `rails db:create` to create the database locally
- Run `rails db:migrate` to create the tables in the database
- Run `rails db:seed` to create the seed data
- Run `rails s -p 4000` to run the server

**Front End setup**
- Clone the repo and `cd` into it
- Run `npm install` to install all dependencies
- Run `npm start` to run the server
- Ensure it is running locally on `http://localhost:3000` to view it in the browser
