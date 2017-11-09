# hacktivpress
Hacktiv8 Final Live Coding Phase-2--mini blogging platform

Mini blogging platform using ExpressJS, MongoDB, & Vue

***

## Getting Started

Move to `server` directory and run
```
$ npm install
$ npm start
```
On default settings, server will run on port 3000

Move to `client` directory and run
```
$ npm install
$ npm start
```

***

## Endpoints

List of `user` endpoints:

| Endpoint                  | HTTP    | Description                                   |
|---------------------------|---------|-----------------------------------------------|
| `/login`                  | POST    | login to recieve access token                 |
| `/register`               | POST    | register user and recieve access token        |

List of `articles` endpoints:

| Endpoint                  | HTTP    | Description                                   |
|---------------------------|---------|-----------------------------------------------|
| `/articles`               | GET     | get all articles                              |
| `/articles/:id`           | GET     | get a single article                          |
| `/articles/category/:category`     | GET     | get all articles in a certain category        |
| `/articles/author/:author`       | GET     | get all articles wrote by a certain author    |
| `/articles`               | POST    | create an article                             |
| `/articles/:id`           | PUT     | update an article                             |
| `/articles/:id`           | DELETE  | delete an article                             |
