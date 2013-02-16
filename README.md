Demo code for large scale development with JavaScript
=====================================================

This is a collection of code samples illustrating patterns how to write JavaScript code in a Single Page Web Application 
project of considerable size. 

It uses Twitter Bootstrap, Angular.js, JavaScript, TypeScript, and a REST service written in Java. 

For a demo of the application and the use of a REST-Service visit

https://rest-demo-server.appspot.com/

The JavaScript for this demo can be found here

https://github.com/DJCordhose/large-scale-development-with-JavaScript-demo/blob/master/RESTFul%20Services%20Demo/war/app/persons-remote.js

Scenarios
---------

It actually demos two scenarios

1. You have a lean client where only the UI is in the browser and all the business logic runs on the server. 
2. You have as much business logic as possible on the client resulting in a fat client approach

The lean approach is illustrated here 

https://raw.github.com/DJCordhose/large-scale-development-with-JavaScript-demo/master/Application%20SPA%20Web%20Client%20-%20Lean.png

while the fat approch is shown in this figure

https://raw.github.com/DJCordhose/large-scale-development-with-JavaScript-demo/master/Application%20SPA%20Web%20Client%20-%20Fat.png

Steps
-----

There are several versions of the same application only differening in their extension. Each version shows a special 
JavaScript feature or pattern used to give more structure to the application. 

Eventually, there is a TypeScript version that shows how to express all that structure plus statsic types in this language.

