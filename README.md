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
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Also on decimal numbers
- Use either screen or keyboard
- Adjust the color theme based on their preference
- Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![image](https://github.com/WitchDevelops/Calculator-JS/assets/112077394/91ddc1c0-e2e5-4790-a297-f7f24d3f538b)
![image](https://github.com/WitchDevelops/Calculator-JS/assets/112077394/1b3b804d-e9bb-4707-9a76-3048ca5102ba)
![image](https://github.com/WitchDevelops/Calculator-JS/assets/112077394/c0f39174-a38b-45cb-8752-08d1aaa78f97)





### Links

- Solution URL: [Solution hub](https://www.frontendmentor.io/solutions/calculator-with-theme-switch-and-keyboard-input-UNkkVlMQfw)
- Live Site URL: [live](https://witchdevelops.github.io/Calculator-JS/)

## My process

I consult MDN docs and W3Schools docs a lot and I also use chatGPT to help with debugging. It's really good at detecting typos and double checking variable and function names.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- vanilla JavaScript
- Flexbox
- CSS Grid
- Mobile-first workflow
- :has() and radio input for theme switcher

### What I learned

I learned how to implement a theme switcher. It is surprisingly easy! All you need to do is have all your colours defined as variables, then by the power of `:has()` combined with radio buttons you can easily toggle between various colour presents. For example:
```
:root:has(#theme2:checked) {
  --variable_name: #color;
}
```
As `:has()` [isn't currently supported in Mozilla Firefox](https://caniuse.com/css-has), I added a fallback with a class assigned with JavaScript.

### Continued development

One drawback of implementing a theme switcher combined with a radio input is that I couldn't make it work using SASS. This is probably because SASS declares variables without using the `:root` selector. Using `@at-root` didn't compile. I have yet to figure out a solution to implementing a theme switcher while having styles written in SASS.
Similarly, detecting user preference regarding color scheme and assigning a class with JavaScript for the theme switcher clashes, so in Mozilla the switcher doesn't work with manual input. I have yet to figure it out.

### Useful resources

- [CSS theme switcher using :has](https://www.youtube.com/watch?v=fyuao3G-2qg&ab_channel=KevinPowell) - This video was super helpful to understand both how `:has` selector works and how to use it to change the variables declared on the `:root` element to create a theme switcher with CSS.
- [Frontend Masters project by Brian Holt](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/putting-it-all-together/project) - This is a great course overall, so highly recommend, and this lesson in particular was very helpful to consult with whenever I felt stuck with JS logic.
- [Animated switch for radio buttons](https://p.bdir.in/demo/Animated-switch-for-radio-buttons-css-only/12042) - This codepen shows how to achieve smooth animation for theme toggler.
- [Take input from keyboard](https://codepen.io/thecountgs/pen/JReGNR) - This codepen helped me to implement keyboard input functionality.
- [Regex 101](https://regex101.com/) - This resource is very handy when working with regexes. It allows test a string against regex and debug it. It also comes with an inbuild quick reference for a refresher.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@WitchDevelops](https://www.frontendmentor.io/profile/WitchDevelops)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
