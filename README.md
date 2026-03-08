# GitHub Issues Tracker

This project is a simple GitHub Issues Tracker built using **HTML, CSS, and Vanilla JavaScript**.
It loads issues from an API and displays them in cards. Users can filter issues, search for issues, and click on a card to see more details in a modal.

---

## 1️⃣ Difference between var, let, and const

`var`, `let`, and `const` are used to declare variables in JavaScript.

`var` is the older way to create variables. It has function scope and can also be redeclared. Because of this it can sometimes create unexpected behavior.

`let` is a newer way to declare variables. It has block scope and its value can be changed later, but it cannot be redeclared in the same block.

`const` is used when the value should not change after it is assigned. Once a value is set, it cannot be reassigned. I usually use `const` when I know the value should stay the same.

---

## 2️⃣ What is the spread operator (...)

The spread operator is written using three dots `...`. It is used to expand elements from an array or object.

For example, we can copy an array or combine arrays easily using the spread operator.

Example:

```javascript
const numbers = [1,2,3];
const newNumbers = [...numbers,4];
```

This creates a new array that includes the elements from the first array plus another value.

---

## 3️⃣ Difference between map(), filter(), and forEach()

These are all array methods but they are used for different purposes.

`map()` is used when we want to create a new array by transforming each item of the original array.

`filter()` is used when we want to return only the elements that match a certain condition.

`forEach()` simply loops through the array and runs a function for each element, but it does not return a new array.

---

## 4️⃣ What is an arrow function

An arrow function is a shorter way to write a function in JavaScript. It uses the `=>` syntax.

Example:

```javascript
const add = (a, b) => {
  return a + b;
}
```

Arrow functions help make the code shorter and cleaner, especially for small functions.

---

## 5️⃣ What are template literals

Template literals are used to create strings more easily in JavaScript. They use backticks `` ` ` ` instead of quotes.

The main advantage is that we can insert variables inside the string using `${}`.

Example:

```javascript
const name = "Rakib";
console.log(`Hello ${name}`);
```

This makes it easier than combining strings using the `+` operator.

---

##  Live Project

GitHub Repository: https://github.com/rrantor0219/B13-A05_Md-Rakibur-Rahman

Live Site: https://rrantor0219.github.io/B13-A05_Md-Rakibur-Rahman/
