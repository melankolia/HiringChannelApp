# HiringChannelApp RESTful API
This repo contains a simple RESTful API hiring channel application

## Introduction
A Hiring partner app for company scouting and hiring an available Engineer based on preference (skill, location, etc).

---

## Feature
- Crud Company
- Crud Engineer
- Register and Login user
- Sort and filter engineer with multiple parameter
- Engineer Pagination
- Username and password validation (regex)
- Password Encryption (base64)
- Route Authorization
    -  Rescricted Data read (Based on token type)

## How to use
- Make a new database and import hiring_channel.sql
- Create .env file on your root project folder and fill with :
	- DB_HOST= Your database host
	- DB_USER= Your database username
	- DB_PASS= Your database password
	- DB_NAME= Your database name
	- PORT= Port to run the app
	- SECRET= Secret Key for JWT
- Open terminal at your root project folder and Run 'npm i node'
- Run 'npm start' to start the app
- Open Postman
	- Register as Company/Engineer
	- Login and get Token
	- Input Bearer Token in Authorization header in Postman
	- Enter desired route

## Postman Documentations
 ```
https://documenter.getpostman.com/view/9798453/SWTBexY7?version=latest
 ```
## Technologies

* **Project created with:**
	* ExpressJS : https://nodejs.org/en/docs/
	* NodeJS : https://expressjs.com/en/api.html
  * MySql : https://dev.mysql.com/doc/

* **NPM modules:**
	* bcryptjs
	* body-parser
	* cors
	* dotenv
	* express
	* helmet
	* jsonwebtoken
	* mysql
	* morgan
	* nodemon

## Testing
 - These project run in local computer. 
 - Tested with Postman : `https://www.getpostman.com/api-documentation-generator`

 
