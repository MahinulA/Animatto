// START SIMPLE THEN MAKE IT COMPLEX
// DON'T START COMPLEX AT THE BEGENING

// ANIMATION SUMMARY
// FADEIN 
// FADEOUT ANIMATION



// FADEIN ANIMATION
// MAKE IT INVISIBLE THEN VISIBLE 
// SET TRANSITION 
let fadeInSelectorInit =document.querySelectorAll(".fadeIn");
for(counter =0; counter < fadeInSelectorInit.length; counter++){
    let fadeInSelector = fadeInSelectorInit[counter]; //selected all fadein elements
    window.addEventListener("load", ()=>{
        console.log("element loaded");
        fadeInSelector.style.opacity ="1";
    });

    // FIRST SIMPLE ANIMATION UPDATE: SUCCESSFUL
}