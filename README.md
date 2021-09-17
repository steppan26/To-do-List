<<<<<<< HEAD
# Smart Brain App - Full-stack project

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
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

My firs thought when deciding to do a 'to-do list' app was to create an app where I could add more and more features over time as my competences develop and I learn new techniques and methods. I had initally designed the app to use a server and database and despite actually having a working server that stored the information on a database, I decided that this was over-complicating things. As such I decided that I wanted to learn how to store information locally on the browser, which would avoid having to have users create a profile and log in each time they wish to use the app.

### Screenshots


<img alt="desktop-mode screenshot using theme 1" src="/screenshots/Screenshot_0.png" height="600" />

<img alt="desktop-mode screenshot using theme 2" src="/screenshots/Screenshot_1.png" height="600" />

<img alt="mobile-mode screenshot using theme 3" src="/screenshots/Screenshot_2.png" height="600" />



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

I fully intend to continue my development as a web developper. For my next project i intend to use a lot of the same methods and techniques learnt during this course, but on my own project without a guiding hand all the way through.
I hope to someday come back to this project once I have learnt more techniques, and I feel more comfortable working with servers and databases, to add more features.

### Useful resources

- [Stack Overflow](https://www.stackoverflow.com) - This website is a fantastic place to find answers to questions which may have already been asked by somebody else. The community is extremely useful and you can often find multiple responses to a problem, which is a great way or learning about new techniques, methods and functions.
- [W3 Schools](https://www.w3schools.com/) - Still being rather new to web development there are still a lot of features and techniques which I am either not familiar, or comfortable, with. This site is always there to help me better understand a method/function and what methods/functions I have access to.


## Author

- Github - [Stéphane Baroux](https://github.com/steppan26)
- Frontend Mentor - [@steppan26](https://www.frontendmentor.io/profile/steppan26)

## Acknowledgments

I would like to thank **Andrei Naegoie** for his fantastic enthusiasm and detailed information. I particularly liked the way the course has been updated throughout the years and how he still keeps old content, which may not be seen as relevant after an update or new software has been released, but instead teaches you the old ways of doing things so that you have a better understanding of why certain tools exist.

I would also like to thank **Wolfgang**, the teacher's assistant over on Udemy, who is always very quick to respond to any question and/or comment to help us keep up with the course. This is so valuable to help students not get discouraged when it becomes difficult to follow the video.
=======
## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/steppan26/To-do-List/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/steppan26/To-do-List/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
>>>>>>> 2469d6a14eb55aaa68dfb8e96414ea16e79da3e2
