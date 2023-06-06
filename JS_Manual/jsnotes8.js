// What is the difference between frontend and backend development?
    "The front end refers to the interface the web user interacts with when using the web."
    "It consists of three languages, HTML for markup, CSS for presentation and JavaScript for scripting."

    "The backend refers to what happens behind the scenes on web servers to make the experience possible."
    "Backend can run any language because it isn't dependent on the browser."
    "Handles the business logic for buttons, forms and other functionality."
// How is dynamic webpage content generated?
    "A script that runs on the web server is ran when the page is accessed."
    "These scripts generate the page content and send it to the web browser."

// What steps happen when a client makes a request to a server?
    "1. User clicks on an interface element that sends a unique request to the server"
    "2. The server receives the request from across the internet"
    "3. Event listeners match the unique identifiers of the users request and run a script"
    "4. The script makes a database query to get information on the interface element"
    "5. The server receives the query response and constructs a response back to the user"
    "6. The users web page shows the information from the request"
// What is a framework?
    "A frame work is a collection of code that cover the basic tasks for an application"
    "They force you to organize your files and keep your code clean and modularized"
    "Frameworks provide a consistent format for application features"
// Describe some popular framework?
    "For front end, Vue is easy to learn, fast, has well packaged tools, optimizes parts from other frameworks"
    "React bundles frontend code into components, organizes code and data to make code more reusable and has a steep learning curve"

    "For back end, Django uses python, gives a lot of functionality like user authentication, and reasonably flexible"
    "Express uses JavaScript, is customizable, lightweight and has less built in features"
// What is Node.js?
    "Node is a JavaScript runtime environment, so your server or local machine can run JavaScript outside of a web browser"
    "It is asynchronous and event driven. This means that the code is not executed in sequence, but instead relies on events to fire"
    "Code is executed in an order based on which events fire and when"

// What is the event loop?
    "The event loop takes the first item on the task queue and pushes it to the stack"
    "It allows for the functionality of asychronicity in JavaScript"

// .env files
    "Environement files are used to store sensitive data such as passwords."
    "Stored in key-value format"
    "Used to pass variables into a process using .env files"
// HTTP module
    "Use the Axios library to perform a simple HTTP request"
    
    const axios = require('axios');

axios
  .get('https://example.com/todos')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });

    "GET requests using standard modules is more verbose"

    const https = require('https');

    const options = {
      hostname: 'example.com',
      port: 443,
      path: '/todos',
      method: 'GET',
    };
    
    const req = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`);
    
      res.on('data', d => {
        process.stdout.write(d);
      });
    });
    
    req.on('error', error => {
      console.error(error);
    });
    
    req.end();

    "PUT, POST, AND DELETE requests are also possible. They use the same format at a POST request"

// fs module
    "The fs module provides a lot of functionality to access and interact with the file system"

    const fs = require('fs'); // Used simply by requiring it

    /* fs.access(): check if the file exists and Node.js can access it with its permissions
    fs.appendFile(): append data to a file. If the file does not exist, it's created
    fs.chmod(): change the permissions of a file specified by the filename passed. Related: fs.lchmod(), fs.fchmod()
    fs.chown(): change the owner and group of a file specified by the filename passed. Related: fs.fchown(), fs.lchown()
    fs.close(): close a file descriptor
    fs.copyFile(): copies a file */

    "Above are just some of the commands for the fs module. They are asychronous by default but can be made sychronous by appending Sync"
    
// URL class
    "The node:url module provides utilities for URL resolution and parsing. It can be accessed using:"
    import url from 'node:url';

    "A URL string is a structured string containing multiple meaningful components. When parsed, a URL object is returned containing properties for each of these components"
    "The WHATWG API parses the URL string. The URL components can be constructed to get the URL string"
    
// NPM
    "Node Package Manager"
    "It started as a way to download and manage dependencies of Node.js packages, but it has since become a tool used also in frontend JavaScript"

    "npm manages downloads of dependencies of your project"
    "Install packages, update, manage versioning and run tasks"

// Events
    "Require the EventEmitter class which will handle our back end events"
    const EventEmitter = require('events');

    const eventEmitter = new EventEmitter();

    eventEmitter.on('start', () => { // On is used to add a callback function thats executed when the event is triggered
        console.log('started'); 
      });

    "Emit is used to trigger an event"

    eventEmitter.emit('start'); // The event handler is triggered and we the the console log

// Useful takeaways on debugging Node
    "Use the VS Code built-in Node debugger"
        "Use auto attach to debug processes you run in VS Code's integrated terminal"
        "Use the JavaScript debug terminal, similar to using the integrated terminal"
        "Use a launch config to start your program, or attach to a process launched outside of VS Code"
      
    "Use the Chrome DevTools to debug Node"
        "Set up your app for debugging"
        "Set up a remote app for debugging"

        "chrome://inspect, click open dedicated DevTools for Node"
        "Use breakpoints and reload the application to debug"


