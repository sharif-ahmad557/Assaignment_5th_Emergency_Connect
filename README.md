# Some questions and answers related to assayngmen_5:
## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
## Answer to the question:
 getElementById("id")  Selects one element by its unique id. Returns a single element.
getElementsByClassName("class")  Selects all elements with the given class name. Returns an HTMLCollection.
querySelector("selector") Selects the first element that matches the CSS selector.
querySelectorAll("selector") Selects all elements that match the CSS selector. Returns a NodeList.
In a word, it can be said: getElementById is for IDs only, getElementsByClassName works for multiple elements with the same class, and querySelector/querySelectorAll are more powerful since they use CSS selectors.

## 2. How do you **create and insert a new element into the DOM**?
## Answer to the question:
A new element is created with document.createElement("tagName").
Then the content or attribute is set (e.g. element.innerText, element.classList.add() etc.).
To add to the DOM, use:
appendChild() Appends to the end of the parent.
prepend() Appends to the beginning of the parent.
insertBefore() Used when you want to insert a new element before a specific element inside a parent element.
It takes two parameters:
newNode The element to insert.
referenceNode The element you want to insert before.

## 3. What is **Event Bubbling** and how does it work?
## Answer to the question:
Event Bubbling means when an event is triggered on an element, it first runs on that element, then moves upward to its parent, then to the parent’s parent, and so on until the root (document).

## 4. What is **Event Delegation** in JavaScript? Why is it useful?
## Answer to the question:
Event Delegation is a technique where instead of adding event listeners to multiple child elements, we add a single event listener to their parent, and use event.target to detect which child triggered the event.

## 5. What is the difference between **preventDefault() and stopPropagation()** methods?
## Answer to the question:
preventDefault()  Prevents the default behavior of an event.
Example: Clicking on a link won’t navigate if preventDefault() is used.
stopPropagation()  Stops the event from bubbling up (or capturing down). Prevents the event from moving to parent/ancestor elements.
In a word, it can be said: preventDefault() controls the default action, while stopPropagation() controls the event flow.
