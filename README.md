# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

It Was A fun App to Develop and design it and Easy one also

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./design/Screencapture.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/advicegeneratorappmain-BOEmv4Mtyg](https://www.frontendmentor.io/solutions/advicegeneratorappmain-BOEmv4Mtyg)
- Live Site URL: [https://abdelrhmankh.github.io/advice-generator-app-main/](https://abdelrhmankh.github.io/advice-generator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS pure

### What I learned

```js
if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
  copyed.classList.add("copyed");
  copyed.textContent = "Copied!";
  return navigator.clipboard.writeText(e);
}
return Promise.reject("The Clipboard API is not available.");
```

## Author

- Website - [AbdelRahman Khalil](https://abdelrhmankh.github.io/abdelrhmankhalil/)
- Frontend Mentor - [@abdelrhmanKh](https://www.frontendmentor.io/profile/abdelrhmanKh)
- LinkedIn - [@Abdelrhman-khalil](https://www.linkedin.com/in/abdelrhman-khalil-ali-9716a0188/)
