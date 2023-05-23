// Objects 

    // Creating an empty object
        // An empty object can be created using one of the two following syntaxes
        let user = new Object(); // "object constructor" syntax
        let user = {};  // "object literal" syntax
    // Creating an object with "key: value" pairs
        let user = {     // an object
        name: "John",  // by key "name" store value "John"
        age: 30        // by key "age" store value 30
    };
    // How to access property values of an object
        // Property values of accessed using the dot notation
        alert( user.name ); // John
        alert( user.age ); // 30
    // How to add new "key: value" pairs
        // Declare new "key: value" pair
        user.isAdmin = true;
    // How to delete "key: value" pairs
        // Remove properties by using the delete operator
        delete user.age;
    // When you need to use square bracket notation, instead of dot access
        // Use square brackets when keys are multiword
        user["likes birds"] = true; // Since the key is a string and not a valid variable name, square brackets are used to access key
        // Square brackets can also be used to access variables. This way we can access keys dynamically
        let key = "likes birds";
        user[key] = true; // Variable key is calculated at run time
        // The above technique can't be used with dot notation
        // We can compute the keys in an object by replace the key with a variable in square brackets. The property key is computed by the variable
        let fruit = prompt("Which fruit to buy?", "apple");
        let bag = {
        [fruit]: 5, // the name of the property is taken from the variable fruit
    };
        alert( bag.apple ); // 5 if fruit="apple"
        // There are no limitations on property names, like let, for, return etc
    // The in operator
        // Determine if a property exists in an object using the in operator
        let user = { name: "John", age: 30 };
        alert( "age" in user ); // True, user.age exists. Don't forget quotations around key
        alert( "height" in user ); // False, user.height doesn't exist
        // The same can be done with in operator on a variable for the key
        let user = { age: 30 };
        let key = "age";
        alert( key in user ); // True, property "age" exists
        // Storing undefined as a value of a key returns true using in operator
        let obj = {
        test: undefined
        };  
        alert( obj.test ); // It's undefined, so - no such property?
        alert( "test" in obj ); // True, the property does exist!
    // The for... in loop
        for (key in object) {
        // executes the body for each key among object properties
    }
        let user = {
        name: "John",
        age: 30,
        isAdmin: true
    };
        for (let key in user) {
        // keys
        alert( key );  // name, age, isAdmin
        // values for the keys
        alert( user[key] ); // John, 30, true
      }
        // Properties are looped over in a special order. Integers are ordered and other data types in the order added. Get around integer storage order by adding "+"
    // The this keyword
        // The this keyword refers to the current object the code is being written inside
        const person1 = {
            name: "Chris",
            introduceSelf() {
              console.log(`Hi! I'm ${this.name}.`);
            },
          };
          
          const person2 = {
            name: "Deepti",
            introduceSelf() {
              console.log(`Hi! I'm ${this.name}.`);
            },
          };
        // This keyword is useful not when declaring individual objects, but when using constructors to create objects from the same class
    // Constructors
        // Using the this keyword in constructors eliminates redudancy and the need to use the objects name to define properties
        const salva = createPerson("Salva");
        salva.name;
        salva.introduceSelf();
    // "Hi! I'm Salva."

        const frankie = createPerson("Frankie");
        frankie.name;
        frankie.introduceSelf();
    // "Hi! I'm Frankie."
    // These objects are created without using a constructor. Notice how the name of the object is used when declaring properties
    // Constructors replace the name of the object with this
        function Person(name) {
            this.name = name;
            this.introduceSelf = function () {
          console.log(`Hi! I'm ${this.name}.`);
        };
    }
// Array Methods

    // .forEach()
        // Allows you to run a function for every element of an array
        arr.forEach(function(item, index, array) {
            // ... do something with item
          });
    // .indexOf()
        // Looks for item starting from index. Method takes one or two parameters
        let arr = [1, 0, false];
        alert( arr.indexOf(0) ); // 1. Searches from beginning of array
        alert( arr.indexOf(false) ); // 2
        alert( arr.indexOf(null) ); // -1. Returns -1 because it isn't in the array
        alert( arr.includes(1) ); // true
    // .lastIndexOf()
        // Does the same as above, but treats the array as reversed/counts indices from the right
        let fruits = ['Apple', 'Orange', 'Apple']
        alert( fruits.indexOf('Apple') ); // 0 (first Apple)
        alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)
    // .find()
        // Takes arguments for element, index and array. However usually uses one argument
        let users = [
            {id: 1, name: "John"},
            {id: 2, name: "Pete"},
            {id: 3, name: "Mary"}
        ];
          
        let user = users.find(item => item.id == 1);
        alert(user.name); // John
        // For items in object users, declare user to be item with id 1
    // .sort()
        // Sorts the array in place. Array itself is modified. To use our own sorting method, we have to pass a function
        function compareNumeric(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
          }
        
          let arr = [ 1, 2, 15 ];
          arr.sort(compareNumeric);
          alert(arr);  // 1, 2, 15
    // .reverse()
        // Simply reverses the order of elements in an array
        let arr = [1, 2, 3, 4, 5];
        arr.reverse();
        alert( arr ); // 5,4,3,2,1
    // .split()
        // Splits string into an array by a given delimiter
        let names = 'Bilbo, Gandalf, Nazgul';

        let arr = names.split(', ');

        for (let name of arr) {
            alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
    }   
    // .join()
        // Does the reverse of .split(). Creates string from array items and glue between them
        let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

        let str = arr.join(';'); // glue the array into a string using ;
        alert( str ); // Bilbo;Gandalf;Nazgul
    // .reduce()
        // Used to calculate a single value based on the array
        let arr = [1, 2, 3, 4, 5];

        let result = arr.reduce((sum, current) => sum + current, 0);
        alert(result); // 15
        // Arguments include sum/operated value, current element and the index of current element
    // .isArray()
        // Returns true if argument is an array, false if not. Used because typeof array returns object
        alert(Array.isArray({})); // false, object
        alert(Array.isArray([])); // true, array
// JSON 

    // Syntax rules
        // JavaScript Object Notation
            // JSON is a text-based data format following JavaScript object syntax
            // Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript
            // and many programming environments feature the ability to read (parse) and generate JSON.
            // JSON exists as a string — useful when you want to transmit data across a network.
            // It needs to be converted to a native JavaScript object when you want to access the data.
        // JSON is a string whose format very much resembles JavaScript object literal format.
        [
            {
              "name": "Molecule Man", // Double quotes around strings and property names
              "age": 29, // Only properties, no methods
              "secretIdentity": "Dan Jukes", // Purely a string with specified data format
              "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
            },
            {
              "name": "Madame Uppercut",
              "age": 39,
              "secretIdentity": "Jane Wilson",
              "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
              ]
            }
          ]
    // Converting from JSON text to a JavaScript object
          // Use the JavaScript function JSON.parse() to convert text into a JavaScript object
          const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
    // How to access data in JSON hierarchy (include example of deeply nested data)
          // You can include the same basic data types inside JSON as you can in a standard JavaScript object —
          // strings, numbers, arrays, booleans, and other object literals.
          // This allows you to construct a data hierarchy, like so:
          {
            "squadName": "Super hero squad",
            "homeTown": "Metro City",
            "formed": 2016,
            "secretBase": "Super tower",
            "active": true,
            "members": [
              {
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes",
                "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
              },
              {
                "name": "Madame Uppercut",
                "age": 39,
                "secretIdentity": "Jane Wilson",
                "powers": [
                  "Million tonne punch",
                  "Damage resistance",
                  "Superhuman reflexes"
                ]
              },
              {
                "name": "Eternal Flame",
                "age": 1000000,
                "secretIdentity": "Unknown",
                "powers": [
                  "Immortality",
                  "Heat Immunity",
                  "Inferno",
                  "Teleportation",
                  "Interdimensional travel"
                ]
              }
            ]
          }
        // When parsed, we can access data based on the hierarchy using dot and bracket notation
        superHeroes.homeTown;
        superHeroes["active"];
        // or
        superHeroes["members"][1]["powers"][2];
    // How to validate JSON
        // Validate JSON using third-party software like jsonlint.com