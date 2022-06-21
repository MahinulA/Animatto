// START SIMPLE THEN MAKE IT COMPLEX
// DON'T START COMPLEX AT THE BEGENING

// ANIMATION SUMMARY
// FADEIN 
// FADEOUT ANIMATION



// FADEIN ANIMATION
// MAKE IT INVISIBLE THEN VISIBLE 
// SET TRANSITION 
let fadeInSelectorInit =document.querySelectorAll(".animatto-fadeIn");
for(let counter =0; counter < fadeInSelectorInit.length; counter++){
    let fadeInSelector = fadeInSelectorInit[counter]; //selected all fadein elements
    window.addEventListener("load", ()=>{
        console.log("element loaded");
        fadeInSelector.style.opacity ="1";
    });

    // FIRST SIMPLE ANIMATION UPDATE: SUCCESSFUL
}


// CSS: MAKE IT OPACITY 1
// IN JAVASCRIPT MAKE MAKE IT OPACITY 0 (DOM MANIPULATIONS)
// FADEOUT ANIMATIONS
let fadeOutSelectorInit = document.querySelectorAll(".animatto-fadeOut");
for(let counter= 0; counter <fadeOutSelectorInit.length; counter++){
    let fadeOutSelector = fadeOutSelectorInit[counter];
    fadeOutSelector.style.opacity = "0";

    // FIRST SIMPLE ANIMATION UPDATE: SUCCESSFUL
}



