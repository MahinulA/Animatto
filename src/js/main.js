// START SIMPLE THEN MAKE IT COMPLEX
// DON'T START COMPLEX AT THE BEGENING

// ANIMATION SUMMARY
// FADEIN 
// FADEOUT ANIMATION
let twoSeconds = 2000;


// FADEIN ANIMATION
// MAKE IT INVISIBLE THEN VISIBLE 
// SET TRANSITION 
let fadeInSelectorInit =document.querySelectorAll(".animatto-fadeIn");
for(let counter =0; counter < fadeInSelectorInit.length; counter++){
    let fadeInSelector = fadeInSelectorInit[counter]; //selected all fadein elements
    window.addEventListener("load", ()=>{
        console.log("element loaded");
        fadeInSelector.style.opacity ="1";
        setTimeout(()=>{
            fadeInSelector.style.display = "none";
        }, twoSeconds);
    });

    // FIRST SIMPLE ANIMATION UPDATE: SUCCESSFUL
}

// CSS: MAKE IT OPACITY 1
// IN JAVASCRIPT MAKE MAKE IT OPACITY 0 (DOM MANIPULATIONS)
// FADEOUT ANIMATIONS
let fadeOutSelectorInit = document.querySelectorAll(".animatto-fadeOut");
for(let counter= 0; counter <fadeOutSelectorInit.length; counter++){

    let fadeOutSelector = fadeOutSelectorInit[counter];
    window.addEventListener("load", ()=>{
        fadeOutSelector.style.opacity = "0";
        setTimeout(()=>{
            fadeOutSelector.style.display = "none";
        }, twoSeconds);
    });
    
    // FIRST SIMPLE ANIMATION UPDATE: SUCCESSFUL
}

// SLIDE FADEIN ANIMATION
let slideFadeInSelectorInit = document.querySelectorAll(".animatto-slide-fadeIn");
for(let counter =0; counter < slideFadeInSelectorInit.length; counter++){
    let slideFadeInSelector = slideFadeInSelectorInit[counter];
    window.addEventListener("load" , ()=>{
        slideFadeInSelector.style.transform = "translateX(0%)";
        slideFadeInSelector.style.opacity = "1";
    });
}


// SLIDE FADEOUT ANIMATION
let slideFadeOutSelectorInit= document.querySelectorAll(".animatto-slide-fadeOut");
let oneSecond = 1000;
for(let counter = 0; counter < slideFadeOutSelectorInit.length; counter++){
    let slideFadeOutSelector =slideFadeOutSelectorInit[counter];
    window.addEventListener("load", ()=>{
        slideFadeOutSelector.style.transform= "translateX(30%)";
        slideFadeOutSelector.style.opacity = "0" ;
        setTimeout(()=>{
            slideFadeOutSelector.style.display= " none";
        },oneSecond);
    });
}
