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
1. Register as Company/Engineer
2. Login and get Token
3. Input Bearer Token in Authorization header in Postman
4. Enter desired route

## APP Route
 ```
 '/'
 '/api/Company'
 '/api/Engineer'
 '/api/Engineer/Skills'
 '/api/Engineer/showcase'
 '/api/Engineer/search'
 '/auth/login'
 `/auth/register`
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

 
