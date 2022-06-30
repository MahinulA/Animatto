/* jshint esversion: 6 */
"use strict";
let fadeInSelectorInit =document.querySelectorAll(".animatto-fadeIn");
let fadeOutSelectorInit = document.querySelectorAll(".animatto-fadeOut");
let slideFadeInSelectorInit = document.querySelectorAll(".animatto-slide-fadeIn");
let slideFadeOutSelectorInit= document.querySelectorAll(".animatto-slide-fadeOut");
let initial =document.querySelectorAll(".animatto-timing");

//=================================
//============================
// ============ ANIMATION FUNCTION SECTION START ==========================//
// FADEIN ANIMATION related with @keyframes animation and css class
const FadeIn =(SelectorElement, animationTimer) =>{
    SelectorElement.style.animation =`animatto-fadeIn ${animationTimer}ms linear`;
};

// FADEOUT ANIMATIONS related with @keyframes animation and css class
const FadeOut = (SelectorElement, animationTimer) =>{
    SelectorElement.style.animation= `animatto-fadeOut ${animationTimer}ms ease-in`;
    setTimeout(()=>{
        SelectorElement.classList.add("animatto-display-none");
    }, (animationTimer - 20/100)); //this miliseconds is similar to the timer
};

// SLIDE FADE-IN ANIMATION
const SlideFadeIn = (SelectorElement, animationTimer) =>{
    SelectorElement.style.animation = `animatto-slide-fadeIn ${animationTimer}ms ease-in`;
};

// SLIDE FADE OUT ANIMATIOPN
const SlideFadeOut = (SelectorElement, animationTimer) =>{
    SelectorElement.style.animation= `animatto-slide-fadeOut ${animationTimer}ms ease-in`;
    setTimeout(()=>{
        SelectorElement.classList.add("animatto-display-none");
    },(animationTimer - 20/100)); //this will be similar to the animation timer
};

// ============ ANIMATION FUNCTION SECTION END ==========================//
//============================
//==============================




// this function will extract MILI_SECONDS in number from class name in DOM
const AnimattoTimer = (SelectorElement) =>{
    let timerClass = SelectorElement;
    let GET_MILI_SECONDS =timerClass.classList;
    if(timerClass.classList.contains("animatto-timing")){
        GET_MILI_SECONDS= GET_MILI_SECONDS.value;

        //removing all the white space to extract number using regex otherwise it returns two null result and fails joins functions
        // GET_MILI_SECONDS = GET_MILI_SECONDS.replaceAll(" ", "");
        GET_MILI_SECONDS = GET_MILI_SECONDS.match(/\d/g);
        GET_MILI_SECONDS = GET_MILI_SECONDS.join("");
        GET_MILI_SECONDS = parseFloat(GET_MILI_SECONDS);
        console.log(typeof GET_MILI_SECONDS);
        return GET_MILI_SECONDS; 
    }else{
        return 400;
    }
    
};


// this function will get class  data related to the selector returns "string value" 
const EventTypeChecker = (QueryCurrentSelector) =>{
    let ClassData = QueryCurrentSelector.classList;
    switch(true){
        // Statement update: successful
        case (ClassData.contains("Onload")):
            return "load";
            break;
        default: 
            return "load";
        
    }
}


const RunEvents = (Selector)=>{
    let QuerySelector =document.querySelectorAll(Selector); // the Selector value should be a query Class selector example ".animatto-slide-fadeOut"
    console.log(QuerySelector);
    for(let counter= 0; counter <QuerySelector.length; counter++){
        let ElementSelector = QuerySelector[counter];
        //event type checker
        let EventType = EventTypeChecker(ElementSelector);

        switch (true){
            case EventType == "load":
                window.addEventListener(EventType, ()=>{
                    SlideFadeOut(ElementSelector, AnimattoTimer(ElementSelector));
                });
        }
    }
}

RunEvents(".animatto-slide-fadeOut");
