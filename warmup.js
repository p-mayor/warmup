// Instructions:
// Write a separate JavaScript file that adds
// the words "Hello, World!" to your page using
// document.getElementById(), document.createElement(),
//  document.createTextNode(), and Node.appendChild().

// get the element with an id of warmup off the page
let warmupDiv = document.getElementById("warmup");

// create an h1 element
let headingElement = document.createElement("h1");

// create a text node
let headingText = document.createTextNode("Hello World!")

// append headingText to the headingElement
headingElement.appendChild(headingText)

// append headingElement to the warmupDiv (which is on the page)
warmupDiv.appendChild(headingElement)









