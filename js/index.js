const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelectorAll('a');
nav[0].text = "Services";
nav[1].text = "Product";
nav[2].text = "Vision";
nav[3].text = "Features";
nav[4].text = "About";
nav[5].text = "Contact";

const codePic = document.getElementById('cta-img');
codePic.setAttribute('src', "img/header-img.png");

const title = document.querySelector(".cta-text h1").innerHTML = siteContent.cta.h1.split(" ").join("<br> ");
title.textContent = 'DOM IS AWESOME';

const button = document.querySelector(".cta-text button");
button.textContent = "Get Started";

const headers = document.querySelectorAll('.text-content h4');
const content = document.querySelectorAll('.text-content p');

headers[0].innerText= "Features";
headers[1].innerText= "About";
headers[2].innerText= "Services";
headers[3].innerText= "Product";
headers[4].innerText= "Vision";


content[0].innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
content[1].innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
content[2].innerText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
content[3].innerText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
content[4].innerText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const midPic = document.getElementById('middle-img');
midPic.setAttribute('src', "img/mid-page-accent.jpg");

const contact = document.querySelector('.contact h4').innerText = 'Contact';
const add = document.querySelectorAll('.contact p');
add[0].innerText = '123 Way 456 Street. Somewhere, USA';
add[1].innerText = '1 (888) 888-8888';
add[2].innerText = 'sales@greatidea.io';

const footer = document.querySelector('footer').innerText = 'Copyright Great Idea! 2018';



var node = document.createElement('a');                 
var textnode = document.createTextNode("Home");         
node.appendChild(textnode);                             
document.querySelector("nav").prepend(node);
var node2 = document.createElement('a');                 
var login = document.createTextNode("Login");  
node2.appendChild(login);                             
document.querySelector("nav").appendChild(node2);

const newNav = document.querySelectorAll('nav a');
newNav.forEach(a => {
  a.style.color = 'green';
});