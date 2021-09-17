# To-do List App

https://steppan26.github.io/To-do-List/

The idea behind this project was to create a simple to-do app using HTML, CSS and vanilla Javascript. The main idea behind this project is to make use of storing information locally no the browsers as opposed to using databases and servers. The intention of this app is to have a solid framwork from which to continue adding features and/or try out new methods and techniques as I learn them.
As always, this app was designed using a mobile-first approach, which helps make it much easier to have a responsive design.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

My firs thought when deciding to do a 'to-do list' app was to create an app where I could add more and more features over time as my competences develop and I learn new techniques and methods. I had initally designed the app to use a server and database and despite actually having a working server that stored the information on a database, I decided that this was over-complicating things. As such I decided that I wanted to learn how to store information locally on the browser, which would avoid having to have users create a profile and log in each time they wish to use the app.

### Screenshots


<img alt="desktop-mode screenshot using theme 1" src="./screenshots/Screenshot_0.png" height="600" />

<img alt="desktop-mode screenshot using theme 2" src="./screenshots/Screenshot_1.png" height="600" />

<img alt="mobile-mode screenshot using theme 3" src="./screenshots/Screenshot_2.png" height="600" />



### Links

- Live Site URL: [steppan26.github.io/To-do-List/](https://steppan26.github.io/To-do-List/)
- Github repository: [github.com/steppan26/To-do-List](https://github.com/steppan26/To-do-List)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox + Grid
- Vanilla Javascript
- Mobile-first workflow


### What I learned

Despite this being a seemingly simple project, for sure simpler than some of the previous projects I have worked on, I still learned a huge amount. My very first attemp at this app I had create a working app using React.js and a server + database, which was fully functioning with drag and drop elements. However I realised that I had over-complicated it, and I also figured that using a backend server + database was a bit overkill and would have required users to create a profile for their list to be saved to the database, this is something I felt did not suit this project.
I then started the project from scratch with the intent to use local browser storage to keep the users' lists, and some simple HTML, CSS + vanilla JS to create the app. After a couple of projects using React it was nice to be able to go back to the basics, creating boiler-plate HTML and a single JS file.

One of the key takeways from this project was the ability to use data-attributes and a query selector to more easily grab a DOM element without having to dish out nmerous classes/ID's. This is something very useful which I have no doubt I will be using more in future projects.
Another key takeaway from this project was the use of the <template> tag which allows you to create an HTML structure to be re-used multiple times in javascript, this is yet another feature that I did not know existed and I can see how useful it could be (I already envisioned some exampels where this would have been useful to know in some previous projects)

For this project I also wanted to make more of an effort at making sure that I took into consideration the accessibility of the app.

This was not the first time that I have used media queries, but it is the first time that I have used them within the JS code to change the functionality of the app depending on the screen resolution. It turns out that this is easier than I expected, still I am pretty happy with having figured it out:

```js
const minWidth = window.matchMedia("(max-width: 680px)")

function toggleNewListMenu(){
    if(minWidth.matches){
        newListForm.classList.toggle('hidden')
        !newListForm.classList.contains('hidden') ? newListMenuBtn.innerText = 'Ｘ' : newListMenuBtn.innerText = '＋'
    } else {
        newListForm.classList.remove('hidden')
    }
}
```

### Continued development

The intent for this app is to have a solid platform to come back to whenever there are new techniques that I wish to try out, as such I expect this project to continue to evolve as my skills evolve.
For my personal development, I will be attending a full-stack development bootcamp in 2 weeks, as such I intend on researching new techniques/methods/laguages to prepare for the course. I will also start to think about the design for my portfolio.

### Useful resources

- [Stack Overflow](https://www.stackoverflow.com) - This website is a fantastic place to find answers to questions which may have already been asked by somebody else. The community is extremely useful and you can often find multiple responses to a problem, which is a great way or learning about new techniques, methods and functions.
- [MDN](https://developer.mozilla.org) - Still being rather new to web development there are still a lot of features and techniques which I am either not familiar, or comfortable, with. This site is always there to help me better understand a method/function and what methods/functions I have access to.


## Author

- Github - [Stéphane Baroux](https://github.com/steppan26)
- Frontend Mentor - [@steppan26](https://www.frontendmentor.io/profile/steppan26)