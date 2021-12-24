# To-Do List :pencil: ![GitHub language count](https://img.shields.io/github/languages/count/Akshat-Maheshwari/To-Do-List)
As the name suggests, this is a **To-do list** with some _**special features**_. It is built on **Node.js** and **MongoDB** using *Express.js* framework, *EJS* templating and *Mongoose* library.
## Screenshot
![alt text](https://github.com/Akshat-Maheshwari/To-Do-List/blob/master/images/home.png)
## Technologies &nbsp;  &nbsp; <img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" /> &nbsp; <img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" /> &nbsp; <img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" /> &nbsp; <img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" /> &nbsp; <img height="32" width="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png" />
Build on Express.js.
The views are created with the **Embedded JavaScript templating (EJS)** view engine.  
A **MongoDB** database is used for data storage, with object modeling provided by Mongoose.  
**Bootstrap** framework is used for basic styling. 
## Installation
Install my-project with npm

```bash
  cd <location of the project>
  npm install
```
For Linux/Mac
```bash
  touch .env
```
For Windows create a file called **.env**  
Inside the file type username and password used in mongoDB Atlas like this without angle brackets: 
```bash
DB_USERNAME="<Username>"
DB_PASSWORD="<Password>"
```
    
Now after installing all the dependencies, inside terminal run
```bash
  node app.js
```
In the browser go to *http://localhost:3000*
## Feature 
This website allows you to create, access and edit *more than one list*, thus giving a privilege to manage many lists.
Making a new list is very easy, you just need to enter a list_name of your choice in the browser's address bar like this:
![alt text](https://github.com/Akshat-Maheshwari/To-Do-List/blob/master/images/shop.png)
The list of choice can be accessed in the same way.
## Lessons Learned
In the development of this website I learned 
 - Backend development using Express.js
 - Templating and Partials using EJS  
 - Connecting and working with databases using MongoDB (Mongoose)
 - and Deploying the website on *Heroku*
