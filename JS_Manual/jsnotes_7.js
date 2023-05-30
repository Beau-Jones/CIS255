// Script tag to include JQuery library on your webpage
<script src="jquery.js"></script> // You can import the library from your local machine, useful if users are in your area
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> // You can import the library from repositories on the web, useful if users are worldwide
// How to use.ready()
$(document).ready(function(){ // The .ready() function used on the document will run the block of code once the document is fully loaded
	// JQuery detects the state of readiness for you
    $("#hide").click(function(){
      $("#demo").hide();
    });
    
    $("#show").click(function(){
      $("#demo").show();
    });
  
  });
// How to use JQuery selectors
    // By Element
    $("p");  // Dotting off this will select the p tags on the page
    // By ID
    $("#demo"); // Dotting off this will select the element with the demo ID
    // By Class
    $(".demo"); // Dotting off this will seelct the element with the demo class
    // Selecting multiple targets
    $("#demo,p"); // Dotting off this will select the element with the demo ID as well as all the p tags on the document
// How to use JQuery Events
    // .click()
    $("p").click(function() {      // The anonymous function will fire when the selected element (p) is clicked
        $(this).css("color","#cc0000"); // Notice the this keyword referring to the selected tag
      }); // Notice the closing tag has a parenthesis following the closing curly brace followed by a semi-colon
    // .mouseenter()
    $("p")
    .mouseenter(function() {         // The anonymous function will fire when the selected element is moused over 
      $(this).css("color","#cc0000"); 
    }) 
    // .mouseleave()
    .mouseleave(function() {        // The anonymous function will fire when the mouse leaves the selected element
        $(this).css("color","#000000");
      }); 
// How to use JQuery Effects
    // .show()
    $("#show").click(function() { // The element with the ID demo will be shown when the element with the ID show is clicked
        $("#demo").show(2000); // The argument for the show function is an integer representing thousands of a second
    });
        // .hide()
    $("#hide").click(function() { // The element with the ID demo will be hidden when the element with the ID hide is clicked
        $("#demo").hide(); // No argument for the hide method indicates it will happen instantly
    });
        // .slideDown()
    $("#hide").click(function() { // The element with the ID demo will slide up at a default 400 ms on click of the element with the ID hide
        $("#demo").slideUp();
    });
        // .slideUp()
    $("#show").click(function() {
        $("#demo").slideDown(2000); // The element with the ID demo will slidedown over 2 seconds when the element with the ID show is clicked
    });
        // .toggle()
    $("#toggle").click(function() { // The element with the ID demo will be toggled between hidden and shown when the element with the ID toggle is clicked
        $("#demo").toggle(500) // Will fire after a half second delay
    });
        // .stop()
    $("#stop").click(function() { // The animation affecting the element with the ID demo will be stopped when the element with the ID stop is clicked
        $("#demo").stop(); 
    });
// Chaining in JQuery
    // No chaining
$("p").css("color","#cc0000");
$("p").hide(2000);
$("p").show(2000);
    // Multiple selector statements, dotting off each selector exactly once
// jQuery chaining
$("p")
.css("color","#cc0000")
.hide(2000)
.show(2000);
    // Multiple instances of dotting off the same selector
// Callbacks
    // Multiple nested statements. Each function call being nested in the call before it
    // Each function is fired after the function before it
$(document).ready(function() {
    
    $("#demo").hide(2000,function() { 
      $("#demo").show(2000,function() {    
        $("#demo").css("color","#cc0000"); 
      });
    });
  
  });