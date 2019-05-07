// Your code goes here

const logo = document.querySelector('.logo-heading');
logo.addEventListener('dblclick', function(event) {
  logo.style.backgroundColor = "dodgerBlue";
   
})

 const h2 = document.querySelector('h2');
 console.log(h2);
h2.addEventListener("mouseover", function(event) {
   event.target.style.display = "none";
   console.log("cant touch this")
});

const button = document.querySelector(".btn");
console.log(button);
button.addEventListener('wheel', function(event) {
    button.style.color = 'pink';
});

const form = document.querySelector(".firstname");
form.addEventListener('keydown', function(event) {
   console.log(`A key was pressed. This is the event: ${event.code}`);
});

const body = document.querySelector("body");
body.addEventListener('click', function(e) {
    e.target.style.color = 'orange';
});

const header = document.querySelector("header");
header.addEventListener('scroll', function(e) {
    e.target.style.color = 'yellow';
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    console.log(scrolled);

});

window.addEventListener('load', function() {
    alert("This page is weird!!");
});

const html = document.querySelector('body');
window.addEventListener('mousewheel', function() {
   html.style.backgroundColor = 'lightBlue';
})

const para = document.querySelector('p');
para.addEventListener('copy', function() {
    console.log('copied');
});

const nav = document.querySelector('.nav');
nav.addEventListener('click', function(e) {
    console.log('clicked');
    e.preventDefault();
})
