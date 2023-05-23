// Document Object Model (DOM)
    // The DOM is a tree-like representation of the contents of a webpage - a tree of "nodes" with different relationships depending on how they're arranged in the HTML documents
    
        // Query Selectors
            // CSS Style Selectors - to select div with the class display
                div.display
                .display
                #container > .display 
                div#container > div.display
            // Relational Selectors - identifies a certain node based on its relationship to the nodes around it
                firstElementChild 
                //or 
                lastElementChild
            // DOM Methods
                element.querySelector(selector); // returns a reference to the first match of selector
                element.querySelectorAll(selectors); // returns a nodelost containing references to all the matches of the selectors

        // Element Creation
            document.createElement(tagName, [options]) // creates a new element of tag type tagName. Options refers to additional parameters that will be covered later
        const div = document.createElement('div'); // does not place new element in the DOM, just in memory
                                                    // you can manipulate the above element before placing it on the page
        // Appending Elements
            parentNode.appendChild(childNode) // appends childNode as the last child of parentNode
            parentNode.insertBefore(newNode, referenceNode) // inserts newNode into parentNode before referenceNode
        // Removing Elements 
            parentNode.removeChild(child) // removes child from parentNode on the DOM and returns a reference to child
        // Altering Elements
            // When you have a reference to an element, you can use that reference to alter the elements own properties such as:
                // adding/removing and altering attributes, changings classes, adding inline style information and more
                const div = document.createElement('div'); // creates a new div referenced in the variable 'div'                 
        // Adding Inline Styles
                div.style.color = 'blue'; // adds the indicated style rule
                div.style.cssTest = 'color: blue; background: white;'; // adds several style rules
                div.setAttribute('style', 'color: blue; background: white;'); // adds several style rules
        // Editing Attributes
                div.setAttribute('id', 'theDiv'); // if id exists, update it to 'theDiv', else create an id
                // with value "theDiv"
                div.getAttribute('id'); // returns value of specified attribute, in this case
                // "theDiv"
                div.removeAttribute('id'); div.removeAttribute('id');                                     
                // removes specified attribute
        // Working with Classes
            div.classList.add('new'); // adds class "new" to your new div
            div.classList.remove('new'); // removes "new" class from div
            div.classList.toggle('active'); // if div doesn't have class "active" then add it, or if
            // it does, then remove it
        // Adding Text Content
            div.textContent = 'Hello World!'
            // creates a text node containing "Hello World!" and
            // inserts it in div
        // Adding HTML Content
            div.innerHTML = '<span>Hello World!</span>';
            // renders the HTML inside div

// Example of DOM manipulation with HTML file and JS file

            //<!-- your HTML file: -->
                <body>
              <h1>
                THE TITLE OF YOUR WEBPAGE
              </h1>
              <div id="container"></div>
            </body>

            // your JavaScript file
            const container = document.querySelector('#container');
            
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'This is the glorious text-content!';
            
            container.appendChild(content);

            /* In the JavaScript file, first we get a reference to the container div that already exists in our HTML.
            Then we create a new div and store it in the variable content.
            We add a class and some text to the content div and finally append that div to container.
            All in all it’s a simple process.
            After the JavaScript code is run, our DOM tree will look like this: */

            // <!-- The DOM -->
            <body>
                <h1>
                THE TITLE OF YOUR WEBPAGE
                </h1>
            <div id="container">
  	            <div class="content">
            This is the glorious text-content!
                </div>
                </div>
            </body>
    
        // How to defer a <script> tag until the page loads
            // Include your JavaScript at the bottom of your HTML file so that it gets run after the DOM nodes are parsed and created.
            // OR include JavaScript in the head tag with the keyword defer 
                // getElementsByTagName
                    const collection = document.getElementsByTagName("li"); // get all elements with the tag name "li"
                    const collection = document.getElementsByTagName("*"); // get all elements in the document 
                    document.getElementsByTagName("p")[0].innerHTML = "Hello World!"; // change the inner HTML of the first <p> element in the document
                // getElementsByClassName
                    const collection = document.getElementsByClassName("example"); // get all elements with the class="example"
                    const collection = document.getElementsByClassName("example color"); // get all elements with both the "example" and "color" classes
                // getElementsById
                    document.getElementById("demo"); // get the element with the specific id
                    const myElement = document.getElementById("demo"); // get the element and change its color
                    myElement.style.color = "red";
                    document.getElementById("demo").style.color = "red"; // or just change the color

// Events

        // 3 methods for implementing an onClick function for a button
            // 1, in the HTML file
            <button onclick="alert('Hello World')">Click Me</button>
            // 2, in the HTML file
            <button id="btn">Click Me</button>
            // in the JS file
            const btn = document.querySelector('#btn');
            btn.onclick = () => alert("Hello World");
            // 3, in the HTML file 
            <button id="btn">Click Me Too</button>
            // in the JS file 
            const btn = document.querySelector('#btn');
            btn.addEventListener('click', () => {
                alert("Hello World");
            });

        // Passing a parameter into your event listener function
            btn.addEventListener('click', function (e) {
            console.log(e); // e is a reference the to event itself. E is an object with its own useful methods and properties
          });
        // Some useful events besides "click"
        click
        dblclick // on doubleclick
        keydown // on key pressed down
        keyup // on key up after press