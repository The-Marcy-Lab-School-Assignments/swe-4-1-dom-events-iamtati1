# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector('#my-button').style.color = 'red';
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

1. The element is `null` because the **DOM** isn't loaded yet. That's because the button in the body of the HTML has not been created yet. When we type this `querySelector('#my-button')` it returns null. Javascript tries to access `.style` on `null` which then turns into a major error. The button must exist before Javascript runs.

One way to fix this is by moving the `<script>` tag to the bottom of the `<body>`, so the button is created before the JavaScript runs.

Before:
```
  <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

The script resides outside of the function body.

After:
```
<body>
  <h1>Button Clicker</h1>
  <button id="my-button">Click Me!</button>

  <script src="index.js"></script>
</body>
```
The script is nested within the function body and the script should run after the button exists in the `DOM`. This should then fix the error.
## Question 2: event.target vs event.currentTarget



```html
<div id='button-container'>
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector('#button-container');
div.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When we click a button, `event.target` refers to the element that actually triggered the event. In this case, the `<button>`.`event.currentTarget` refers to the element the event listener is attached to, the `<divid="button-container">`. 

They are different because of event bubbling, where the event starts at the button and propagates up to its parent elements. If the listener were attached directly to the button, both values would point to the same element.


## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: 'iPhone 17',
  price: 1099.99,
  img: './images/iphone17.png'
}

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement('div');
const productImage = document.createElement('img');
const productName = document.createElement('h3');
const productPrice = document.createElement('p');

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?


The issue with this code is as of now we are only appeneding an empty `div` to the body. In order to fix this we need to append the **image**, **name**, and **price** into the `productCard` first.

``` js
productCard.append(productImage, productName, productPrice);
document.body.append(productCard);
```
Now all elements are appended specifically to `productCard`.
Creating elements does not automatically place them inside each other.
You must explicitly append child elements to their parent.


## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class='description'>Walk the dog</p>
    <p class='is-complete'>✅</p>
  </li>
  <li id="todo-2">
    <p class='description'>Take out the trash</p>
    <p class='is-complete'>❌</p>
  </li>
  <li id="todo-3">
    <p class='description'>Wash the dishes</p>
    <p class='is-complete'>❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector('#todo-list');
todoList.addEventListener('click', (event) => {
  const clickedLi = event.target.closest('li');

  if (!clickedLi) return;

  clickedLi.querySelector('.is-complete').textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

This is called `Event Delegation`. Instead of attaching seperate event listenrs to each `li` element we rely on one event listener to attach it to the `<ul>` so that it handles events for its child elements as they bubble up.

Event delegation is better because it has fewer listeners in memeory leading to improved performance. It also automatically works for dynamically added list items without having to attach new listeners.

the `event.target.closest('li')`method grabs the nearest ancestor `<li>` element starting from the element that was actually clicked. This is essential because the user might click on a nested `<p>` inside the `<li>`, and `closest('li')` ensures we correctly identify and update the entire list item regardless of where inside it the click occurred.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?


`querySelector()` returns the first element that matches a CSS selector, while `querySelectorAll()` returns all matching elements as a NodeList. 

Use `querySelector()` when you only need one **specific** element for example, selecting a unique element like a header:

```js
const mainTitle = document.querySelector('h1');
```

We would use `querySelectorAll()` when selecting **multiple elements**, such as all items in a list or all elements with a shared class. 
```js
const todoItems = document.querySelectorAll('.todo-item');
```
A `NodeList` is a collection of `DOM` nodes returned by methods like `querySelectorAll()`. It looks like an array, but it is not a real array.

Because a NodeList isn’t a true array, you can’t call most array methods directly on it.