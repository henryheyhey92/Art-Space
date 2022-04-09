# Project 02 - React Art Space SG

## Project Summary

**Context**

The Art Space SG is a mobile-responsive, single page web application that allows creative individual to upload their artwork to online, views, search and promote. There are various different kind of artwork and medium for viewer to explore. There are online portal for artist across the world to share their creative content. However, the vast amount of information on internet makes it hard for user to narrow search for Singaporean made artwork. Singaporean could make paid visit to physical galleries or wait for yearly routine online art showcase.

**Organizational Goals**

The aim of the application is to build an online community where fine art lovers can view and share their idea and artworks and to show case artwork that are done by our beloved Singaporeans to the world.

**User Goal**

The aim of users is to post their self-made artworks to the website and showcase their talent and creativity to anyone who have great keen interest in art and leave reviews through the virtual art space. 

## Users:

**User Stories**

1. As a user, I want to be able to upload my artwork to internet. so that i can showcase my artwork on the virtual ground.
   Acceptance Criteria: The artwork must be original and no plagiarism act is allow. The artwork url url must be a valid url.

2. As a user, I want to be able to edit/amend my artwork description details and upload to the website again.

3. As a user, I want viewers to be able to add review or comments to my artwork, so that I will be able to know what i can further improve on  

4. As a user, I would like to have a platform where I can promote my artwork, so that I can make income/passive income with my work. 

# Content

1. [Design, UI, and UX](#1-design-ui-and-ux)
2. [Technologies Used](#2-technologies-used)
3. [Backend API](#3-backend-api)
4. [Future Features to Implement](#4-future-features-to-implement)
5. [Testing](#5-testing)
6. [Deployment](#6-deployment)
7. [Acknowledgemnts](#7-acknowledgemnts)

# 1. Design, UI, and UX

### Figma File with the wireframe and high fidelity prototype of the application can be found at the link below:



Documentation for UI/UX design, color palettes and font selection can also be found in the prototype.

# 2. Technologies used

- [React](https://reactjs.org/)

  React js is used to create the front-end framework.


- [Axios](https://github.com/axios/axios)

  Axios js is used to handle most API requests. Some static data calls with built-in fetch API.



- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)/[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

  The project relies on HTML5 and CSS technologies to create the front-end layout.



- [Material UI](https://mui.com/)/[MUI Get started](https://mui.com/material-ui/getting-started/installation/)

The project uses material UI for the textfield, dropdown, checkbox, radio button, form validation, mobile responsive



# 3. Backend API

This project uses a custom RESTful API to retrieve and display trail information. It is hosted on Heroku and is accessible from the front-end. The API is built using Node.js and Express.js. It uses [MongoDB](https://www.mongodb.com/) as the database and [Mongoose](https://mongoosejs.com/) as the ODM. The source code for the API can be found here: [Project 02 - Express-app](https://github.com/pratheesh1/Express-app)

The API enpoints are fully documented with Swagger and complies with the [OpenAPI 3.0](https://spec.openapis.org/oas/v3.1.0) specifications. The API is hosted at: https://ps-project02-express.herokuapp.com/

The API documentation can be found at [/api-docs](https://ps-project02-express.herokuapp.com/api-docs/) endpoint.

# 4. Future Features to Implement

## 4.1 Additional Features to be implemented in the future

| Feature                        | Description                                                             |
| ------------------------------ | ----------------------------------------------------------------------- |
| Login/Signup                   | User can login/signup to the application.                               |
| Customize Trail                | User can customize the trail information.                               |
| Session Management             | User can manage their session.                                          |
| Email Verification             | User can verify their email address.                                    |
| Access Control for Edit/Delete | User can only edit/delete their own information.                        |
| Email Newsletter               | User can subscribe to the newsletter.                                   |
| Photo Upload                   | User can upload photos to the application and save them to S3 bucket.   |
| Search Autocomplete            | Suggestions for search autocomplete is provided based on the api query. |

## 4.2 Feature fixes to be implemented in the future

| Feature                      | Description                            |
| ---------------------------- | -------------------------------------- |
| Better Routing               | Implement a better routing system.     |
| Photo Upload                 | Implement a photo upload system.       |
| Better UI to add Image links | Create a better UI to add Image links. |
| Improve navigation workflow  | Improve overall navigation workflow.   |

# 5. Testing

There is no automated testing for this project. The project is developed using a combination of manual testing and unit testing. The testing done for the critical functionality of this project is documented at the link below:

[Testing Documentation - Google Docs Link](https://docs.google.com/spreadsheets/d/1NdmoMiVTOYa_6QQPF1DB9nj-Geq7PeTOHpTLVGu_r94/edit#gid=0&range=B2:E37)

# 6. Deployment

This project is deployed on Netlify. The deployed version can be found at the link below:

```
Link: https://endearing-sopapillas-ef68c6.netlify.app/

```

# 7. Acknowledgemnts


