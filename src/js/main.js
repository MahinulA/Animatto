/* jshint esversion: 6 */
"use strict";
// START SIMPLE THEN MAKE IT COMPLEX
// DON'T START COMPLEX AT THE BEGENING
// ANIMATION SUMMARY
// FADEIN 
// FADEOUT ANIMATION











// animation timer function
let initial =document.querySelectorAll(".animatto-timing");
let AnimattoTimer = (QueryElement) =>{
    let GET_MILI_SECONDS;
    for(let counter = 0; counter < QueryElement.length; counter++){
        let timerClass = QueryElement[counter];
        GET_MILI_SECONDS =timerClass.classList;
        GET_MILI_SECONDS= GET_MILI_SECONDS.value;
    
        //removing all the white space to extract number using regex otherwise it returns two null result and fails joins functions
        GET_MILI_SECONDS = GET_MILI_SECONDS.replaceAll(" ", "");
        GET_MILI_SECONDS = GET_MILI_SECONDS.match(/\d/g);
        GET_MILI_SECONDS = GET_MILI_SECONDS.join("");
        console.log(GET_MILI_SECONDS);
        return GET_MILI_SECONDS;
        //update : successful
    }
};




// FADEIN ANIMATION, MAKE IT INVISIBLE THEN VISIBLE, SET TRANSITION  
// let fadeInSelectorInit =document.querySelectorAll(".animatto-fadeIn");
let FadeIn =(QueryElement) =>{
    for(let counter =0; counter < QueryElement.length; counter++){
        let Selector = QueryElement[counter]; //selected all fadein elements
        window.addEventListener("load", ()=>{
            Selector.style.opacity ="1";
        });
    }
};


// CSS: MAKE IT OPACITY 1, IN JAVASCRIPT MAKE MAKE IT OPACITY 0 (DOM MANIPULATIONS)
// FADEOUT ANIMATIONS
let fadeOutSelectorInit = document.querySelectorAll(".animatto-fadeOut");

let FadeOut = (QueryElement) =>{
    for(let counter= 0; counter <QueryElement.length; counter++){
        let Selector = QueryElement[counter];
        window.addEventListener("load", ()=>{
            //setting the opacity to 0 which was value 1 in "animatto-fadeOut" class
            Selector.style.opacity = "0";
            setTimeout(()=>{
                Selector.style.display = "none";
            }, 2000); //this miliseconds is similar to the timer
        }); // FIRST SIMPLE ANIMATION UPDATE: SUCCESSFUL
    }
};


// SLIDE FADE-IN ANIMATION
let slideFadeInSelectorInit = document.querySelectorAll(".animatto-slide-fadeIn");
let SlideFadeIn = (QueryElement) =>{
    for(let counter =0; counter < QueryElement.length; counter++){
        let Selector = QueryElement[counter];
        window.addEventListener("load" , ()=>{
            Selector.style.transform = "translateX(0%)";
            Selector.style.opacity = "1";
        });
    }
};



// SLIDE FADE-OUT ANIMATION
let slideFadeOutSelectorInit= document.querySelectorAll(".animatto-slide-fadeOut");

let SlideFadeOut = (QueryElement) =>{
    for(let counter = 0; counter < QueryElement.length; counter++){
        let Selector =QueryElement[counter];
        window.addEventListener("load", ()=>{
            Selector.style.transform= "translateX(30%)";
            Selector.style.opacity = "0" ;
            setTimeout(()=>{
                Selector.style.display= " none";
            },1000); //this will be similar to the animation timer
        });
    }
};








//running the events
let fadeInSelectorInit =document.querySelectorAll(".animatto-slide-fadeOut");
if(fadeInSelectorInit.length > 0){
    SlideFadeOut(fadeInSelectorInit);
}

