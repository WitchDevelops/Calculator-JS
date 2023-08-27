# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- vanilla JavaScript
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to implement a theme switcher. It is surprisingly easy! All you need to do is have all your colours defined as variables, then by the power of `:has()` combined with radio buttons you can easily toggle between various colour presents. For example:
```
:root:has(#theme2:checked) {
  --variable_name: #color;
}
```

### Continued development

One drawback of implementing a theme switcher combined with a radio input is that I couldn't make it work using SASS. This is probably because SASS declares variables without using the `:root` selector. Using `@at-root` didn't compile. I have yet to figure out a solution to implementing a theme switcher while having styles written in SASS.

### Useful resources

- [CSS theme switcher using :has](https://www.youtube.com/watch?v=fyuao3G-2qg&ab_channel=KevinPowell) - This video was super helpful to understand both how `:has` selector works and how to use it to change the variables declared on the `:root` element to create a theme switcher with CSS.
- [Frontend Masters project by Brian Holt](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/putting-it-all-together/project) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
