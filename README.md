# MEANAuth - Login App
## Table of Content
1. [Introduction](#introduction)
2. [Used versions](#used-versions)
3. [Used tools](#used-tools)
4. [Used packages](#used-packages)
5. [How to run the API](#how-to-run-the-api)\
	5.1. [Build and run with Docker](#build-and-run-with-docker)\
	5.2. [Build and run with SDK](#build-and-run-with-sdk)\
	5.3. [Test and stop](#test-and-stop)
6. [Limitations](#limitations)\
    6.1. [Exception/error handling](#exception-error-handling)
7. [Some further development possibilities](#some-further-development-possibilities)
8. [Resources](#resources)
9. [Appendix](#appendix)

## 1. Introduction <a name="introduction"></a>
This is a basic MEAN stack (MongoDB, Express.js, Angular, Node.js) single-page web application project written in TypeScript. It is a simple user login/account management app with JWT authentication. You can register a new user account with your email address, name and password. After successful registration, you can log in and view your user data. This app was created for learning purpose, but is might be useful as a starting-point for other projects.
The API uses:
- MongoDB (Mongoose) noSQL database
- node.js (Express) RESTful API
- Angular 9 (Typescript) SPA
- Bootstrap 4 style
- JWT for authentication
If any question, please do not hesitate to contact me.
## 2. Used versions <a name="used-versions"></a>
1. Frameworks
- Express.js: 4.17.1
- Angular: 9.1.4
2. Runtime:
- node.js runtime: 12.16.3
3. Database:
- MongoDB: 4.2.6
## 3. Used tools <a name="used-tools"></a>
- Postman for API testing
- Git Extensions as git gui
- VSC as text editor
- Docker for containerization
- Windows 10 as OS
## 4. Used packages <a name="used-packages"></a>
1. Backend:
- express: 4.17.1,
- mongoose: 5.8.7,
- bcryptjs: 2.4.3,
- cors: 2.8.5,
- jsonwebtoken: 8.5.1,
- body-parser: 1.19.0,
- passport: 0.4.1,
- passport-jwt: 4.0.0
2. Frontend (except Angular packages):
- @auth0/angular-jwt: 3.0.1,
- angular2-flash-messages: 3.0.1,
- bootstrap: 4.4.1,
- jquery: 3.5.0,
- popper.js: 1.16.1,
- rxjs: 6.5.5,
- tslib: 1.10.0,
- zone.js: 0.10.2
## 5. How to run the API <a name="how-to-run-the-api"></a>
### 5.1. Build and run with Docker <a name="build-and-run-with-docker"></a>
- download and install Docker
- clone or download the content of the repository
- open a terminal and navigate to the containing folder
- write "docker build -t todowebapi:v1 ." and press Enter
- write "docker run -it --rm -p 5000:5000 todowebapi:v1" and press Enter
### 5.2. Build and run with SDK <a name="build-and-run-with-sdk"></a>
- download and install .NET Core SDK version v3.1.201 or greater (latest 3.1)
- clone or download the content of the repository
- open a terminal and navigate to the containing folder
- write "dotnet restore" and press Enter
- write "dotnet run" and press Enter
### 5.3. Test and stop <a name="test-and-stop"></a>
- if no error message in the terminal, open your browser (recommended: latest Chrome, Firefox, Safari, Edge Chromium or Chromium) and open: http://localhost:5000/swagger
- first register a user account, then log in and after that you can manage your TODO items and account
- after testing go back to the terminal and press "Ctrl+C" to stop the web server
## 6. Limitations <a name="limitations"></a>
### 6.1. Exception/error handling <a name="exception-error-handling"></a>
This application needs to be extended with exception handling and more response values. There are some already known issues which may cause error when it is not used correctly. I only tested the app with correct input values.
## 7. Some further development possibilities <a name="some-further-development-possibilities"></a>
- token refreshing
- Facebook sign-in
- adding roles (admin, user)
- OpenID Connect & IdentityServer4
- SPA frontend (Blazor webassembly)
- automated unit and integration tests
## 8. Resources <a name="resources"></a>
There are several online source which I used to create this web app.\
Including but not limited to:
- Microsoft:
	- https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.1
	- https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-3.1
	- https://docs.microsoft.com/en-us/aspnet/core/fundamentals/?view=aspnetcore-3.1
	- https://docs.microsoft.com/en-us/ef/core/
	- https://docs.microsoft.com/en-us/dotnet/csharp/
- Tutorialspoint:
	- https://www.tutorialspoint.com/csharp/
	- https://www.tutorialspoint.com/asp.net_core/
	- https://www.tutorialspoint.com/asp.net_mvc/index.htm
	- https://www.tutorialspoint.com/entity_framework/index.htm
	- https://www.tutorialspoint.com/linq/index.htm
- TutorialsTeacher:
	- https://www.tutorialsteacher.com/core
	- https://www.tutorialsteacher.com/webapi/web-api-tutorials
	- https://www.tutorialsteacher.com/mvc/asp.net-mvc-tutorials
	- https://www.tutorialsteacher.com/csharp/csharp-tutorials
	- https://www.tutorialsteacher.com/linq/linq-tutorials
	- https://www.entityframeworktutorial.net/efcore/entity-framework-core.aspx
- JWT:
	- https://medium.com/@ozgurgul/asp-net-core-2-0-webapi-jwt-authentication-with-identity-mysql-3698eeba6ff8
	- https://dotnetdetail.net/asp-net-core-3-0-web-api-token-based-authentication-example-using-jwt-in-vs2019/
	- https://code-maze.com/authentication-aspnetcore-jwt-1/
	- https://fullstackmark.com/post/19/jwt-authentication-flow-with-refresh-tokens-in-aspnet-core-web-api
	- https://www.c-sharpcorner.com/article/jwt-json-web-token-authentication-in-asp-net-core/
	- https://www.c-sharpcorner.com/article/asp-net-core-2-0-bearer-authentication/
	- https://www.blinkingcaret.com/2017/09/06/secure-web-api-in-asp-net-core/
	- https://salslab.com/a/jwt-authentication-and-authorisation-in-asp-net-core-web-api
	- https://jasonwatmore.com/post/2019/10/11/aspnet-core-3-jwt-authentication-tutorial-with-example-api

Thank to every hero on Stackoverflow and Github who helped me with their comments! (Not all heroes wear capes.)

## 9. Appendix <a name="appendix"></a>
### backend - express:
- initialize node.js project command: "npm init" and add dependencies, then "npm install"
- restart app when change: "nodemon"

### frontend - Angular:
- in angular.json we need to change the output folder to folder public
- ng serve ?--prod? command to run Angular app
- ng build --prod command to build Angular app
- component generation in the destination folder: ng g component "component name"
- service generation in the destination folder: ng g service "service name"
- class generation in the destination folder: ng g class "class name"
- interface generation in the destination folder: ng g interface "interface name"
- module generation in the destination folder: ng generate module app-routing --flat --module=app
  (--flat puts the file in src/app instead of its own folder,
   --module=app tells the CLI to register it in the imports array of the AppModule)
  
### Bootstrap import:
- npm install bootstrap --save
- npm install jquery --save
- npm install popper.js --save
```
"styles": [   
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "styles.css"
  ],
  "scripts": [  
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/popper.js/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ],
 ```