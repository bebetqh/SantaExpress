/* =====================================================
   SANTA EXPRESS SERVICES
   MAIN JAVASCRIPT
===================================================== */



document.addEventListener("DOMContentLoaded", function(){



/* =====================
   NAVBAR SCROLL EFFECT
===================== */


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function(){


if(window.scrollY > 50){


navbar.classList.add("navbar-scroll");


}

else{


navbar.classList.remove("navbar-scroll");


}


});







/* =====================
   SMOOTH SCROLL
===================== */


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


anchor.addEventListener("click", function(e){


const target = document.querySelector(
this.getAttribute("href")
);


if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});








/* =====================
   GALLERY FILTER
===================== */


const filterButtons =
document.querySelectorAll(".gallery-filter button");


const galleryItems =
document.querySelectorAll(".gallery-card");



filterButtons.forEach(button => {


button.addEventListener("click", function(){



let category =
this.textContent.toLowerCase();





filterButtons.forEach(btn=>{


btn.classList.remove("active");


});



this.classList.add("active");





galleryItems.forEach(item=>{



if(category === "all"){


item.parentElement.style.display="block";


}


else{


let text =
item.innerText.toLowerCase();



if(text.includes(category)){


item.parentElement.style.display="block";


}


else{


item.parentElement.style.display="none";


}


}



});




});


});










/* =====================
   SCROLL ANIMATION
===================== */


const revealElements =
document.querySelectorAll(
".feature-card, .service-card, .service-box, .client-logo, .news-card, .contact-card"
);



function revealOnScroll(){


revealElements.forEach(element=>{


let position =
element.getBoundingClientRect().top;


let screen =
window.innerHeight - 100;




if(position < screen){


element.classList.add("fade-up");


}


});


}



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();










/* =====================
   BACK TO TOP BUTTON
===================== */


const backTop =
document.createElement("button");


backTop.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';



backTop.className =
"back-top";



document.body.appendChild(backTop);





window.addEventListener("scroll",function(){


if(window.scrollY > 500){


backTop.style.display="flex";


}

else{


backTop.style.display="none";


}


});





backTop.addEventListener(
"click",
function(){


window.scrollTo({

top:0,

behavior:"smooth"

});


});









/* =====================
   CONTACT FORM VALIDATION
===================== */


const contactForm =
document.querySelector("form");



if(contactForm){


contactForm.addEventListener(
"submit",
function(e){


e.preventDefault();



let inputs =
contactForm.querySelectorAll(
"input, textarea"
);



let empty=false;



inputs.forEach(input=>{


if(input.value.trim()===""){


empty=true;


}


});




if(empty){


alert(
"Please complete all required fields."
);


}


else{


alert(
"Thank you! Your message has been sent."
);


contactForm.reset();


}



});


}









/* =====================
   AUTO YEAR FOOTER
===================== */


const year =
new Date().getFullYear();



document.querySelectorAll("footer .text-center")
.forEach(function(element){


element.innerHTML =
"© "+year+
" Santa Express Services. All Rights Reserved.";


});



});



