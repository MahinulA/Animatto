/* jshint esversion: 6 */
"use strict";
// START SIMPLE THEN MAKE IT COMPLEX
// DON'T START COMPLEX AT THE BEGENING
// ANIMATION SUMMARY
// FADEIN 
// FADEOUT ANIMATION
let fadeInSelectorInit =document.querySelectorAll(".animatto-fadeIn");
let fadeOutSelectorInit = document.querySelectorAll(".animatto-fadeOut");
let slideFadeInSelectorInit = document.querySelectorAll(".animatto-slide-fadeIn");
let slideFadeOutSelectorInit= document.querySelectorAll(".animatto-slide-fadeOut");
let initial =document.querySelectorAll(".animatto-timing");






// this function will extract MILI_SECONDS in number from class name in DOM
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


// this function will get class  data related to the selector returns "string value" 
let EventTypeChecker = (QueryCurrentSelector) =>{
    let ClassData = QueryCurrentSelector.classList;
    console.log(ClassData);
    switch(true){
        // Statement update: successful
        case (ClassData.contains("Onload")):
            return "load";
            break;
        default: 
            return "load";
        
    }
}



// FADEIN ANIMATION related with @keyframes animation and css class
let FadeIn =(QueryElement) =>{
    for(let counter =0; counter < QueryElement.length; counter++){
        let Selector = QueryElement[counter]; //selected all fadein elements
        window.addEventListener("load", ()=>{
            Selector.style.animation ="animatto-fadeIn 2s linear";
        });
    }
};


// FADEOUT ANIMATIONS related with @keyframes animation and css class
let FadeOut = (QueryElement) =>{
    for(let counter= 0; counter <QueryElement.length; counter++){
        let Selector = QueryElement[counter];
        window.addEventListener("load", ()=>{
            Selector.style.animation= "animatto-fadeOut 2s ease-in";
            setTimeout(()=>{
                //after the fadeout animation, the item is set to display: none;
                Selector.classList.add("animatto-display-none");
            }, 2000); //this miliseconds is similar to the timer
        }); // FIRST SIMPLE ANIMATION UPDATE: SUCCESSFUL
    }
};


// SLIDE FADE-IN ANIMATION
let SlideFadeIn = (QueryElement) =>{
    for(let counter =0; counter < QueryElement.length; counter++){
        let Selector = QueryElement[counter];
        window.addEventListener("load" , ()=>{
            Selector.style.animation = "animatto-slide-fadeIn 400ms ease-in";
        });
    }
};



// SLIDE FADE-OUT ANIMATION
let SlideFadeOut = (QueryElement) =>{
    for(let counter = 0; counter < QueryElement.length; counter++){
        let Selector =QueryElement[counter];
        window.addEventListener("load", ()=>{
            Selector.style.animation= "animatto-slide-fadeOut 400ms ease-in";
            let k =EventTypeChecker(Selector);
            console.log(k);
            setTimeout(()=>{
                Selector.classList.add("animatto-display-none");
            },400); //this will be similar to the animation timer
        });
    }
};








//running the events
let testing =document.querySelectorAll(".animatto-slide-fadeOut");
if(testing.length > 0){
    SlideFadeOut(testing);
}

