const text = [
    "MuleSoft Developer",
    "API Developer",
    "Integration Engineer",
    "Backend Developer"
];

let index = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type(){

    if(charIndex < text[index].length){

        typing.innerHTML += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex>0){

        typing.innerHTML=text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }else{

        index++;

        if(index>=text.length){

            index=0;

        }

        setTimeout(type,500);

    }

}

document.addEventListener("DOMContentLoaded",type);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements=document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>observer.observe(el));

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.documentElement.scrollTop>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

};

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
const themeToggle=document.getElementById("theme-toggle");

themeToggle.onclick=()=>{

document.body.classList.toggle("light-mode");

localStorage.setItem(

"theme",

document.body.classList.contains("light-mode")

);

}

if(localStorage.getItem("theme")=="true"){

document.body.classList.add("light-mode");

}