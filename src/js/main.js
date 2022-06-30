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

//=================================
//============================
// ============ ANIMATION FUNCTION SECTION START ==========================//

// FADEIN ANIMATION related with @keyframes animation and css class
let FadeIn =(SelectorElement) =>{
    SelectorElement.style.animation ="animatto-fadeIn 2s linear";
};

// FADEOUT ANIMATIONS related with @keyframes animation and css class
let FadeOut = (SelectorElement) =>{
    SelectorElement.style.animation= "animatto-fadeOut 2s ease-in";
    setTimeout(()=>{
        //after the fadeout animation, the item is set to display: none;
        SelectorElement.classList.add("animatto-display-none");
    }, 2000); //this miliseconds is similar to the timer
};

// SLIDE FADE-IN ANIMATION
let SlideFadeIn = (SelectorElement) =>{
    SelectorElement.style.animation = "animatto-slide-fadeIn 400ms ease-in";
};

// SLIDE FADE OUT ANIMATIOPN
const SlideFadeOut = (SelectorElement, animationTimer) =>{
    if(!animationTimer){
        animationTimer =400;
    }
    SelectorElement.style.animation= `animatto-slide-fadeOut ${animationTimer}ms ease-in`;
    setTimeout(()=>{
        SelectorElement.classList.add("animatto-display-none");
    },(animationTimer - 20/100)); //this will be similar to the animation timer
};

// ============ ANIMATION FUNCTION SECTION END ==========================//
//============================
//==============================




// this function will extract MILI_SECONDS in number from class name in DOM
let AnimattoTimer = (SelectorElement) =>{
    let GET_MILI_SECONDS;
    // for(let counter = 0; counter < QueryElement.length; counter++){
    //     // let timerClass = QueryElement[counter];
    //     // GET_MILI_SECONDS =timerClass.classList;
    //     // GET_MILI_SECONDS= GET_MILI_SECONDS.value;
    
    //     // //removing all the white space to extract number using regex otherwise it returns two null result and fails joins functions
    //     // GET_MILI_SECONDS = GET_MILI_SECONDS.replaceAll(" ", "");
    //     // GET_MILI_SECONDS = GET_MILI_SECONDS.match(/\d/g);
    //     // GET_MILI_SECONDS = GET_MILI_SECONDS.join("");
    //     // console.log(GET_MILI_SECONDS);
    //     // return GET_MILI_SECONDS;
    //     //update : successful
    // }

    let timerClass = SelectorElement;
    GET_MILI_SECONDS =timerClass.classList;
    GET_MILI_SECONDS= GET_MILI_SECONDS.value;

    //removing all the white space to extract number using regex otherwise it returns two null result and fails joins functions
    GET_MILI_SECONDS = GET_MILI_SECONDS.replaceAll(" ", "");
    GET_MILI_SECONDS = GET_MILI_SECONDS.match(/\d/g);
    GET_MILI_SECONDS = GET_MILI_SECONDS.join("");
    GET_MILI_SECONDS = parseFloat(GET_MILI_SECONDS);
    console.log(typeof GET_MILI_SECONDS);
    return GET_MILI_SECONDS;
};


// this function will get class  data related to the selector returns "string value" 
let EventTypeChecker = (QueryCurrentSelector) =>{
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




//running the events
// let testing =document.querySelectorAll(".animatto-slide-fadeOut");
// if(testing.length > 0){
//     SlideFadeOut(testing);
// }




let RunEvents = (Selector)=>{
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
