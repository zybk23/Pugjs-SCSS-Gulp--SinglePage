const menu =document.querySelector("#menu")
const nav=document.querySelector(".nav-links")
const navLinks=document.querySelectorAll(".nav-links li")


eventListeners();

function eventListeners(){
    menu.addEventListener("click",function(){
        menu.classList.toggle("toggle");
        nav.classList.toggle("nav-active");
        navLinks.forEach(function(link,index){
            if(link.style.animation){
                link.style.animation=``;
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index/5+0.5}s`
            }
        })

    })
}