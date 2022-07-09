
const Animation_Category = {
    FadeIn :(SelectorElement, animationTimer) =>{
        SelectorElement.style.animation =`animatto-fadeIn ${animationTimer}ms linear`;
    },
    
    // FADEOUT ANIMATIONS related with @keyframes animation and css class
    FadeOut : (SelectorElement, animationTimer) =>{
        SelectorElement.style.animation= `animatto-fadeOut ${animationTimer}ms ease-in`;
        setTimeout(()=>{
            SelectorElement.classList.add("animatto-display-none");
        }, (animationTimer - 20/100)); //this miliseconds is similar to the timer
    },
    
    // SLIDE FADE-IN ANIMATION
    SlideFadeIn : (SelectorElement, animationTimer) =>{
        SelectorElement.style.animation = `animatto-slide-fadeIn ${animationTimer}ms ease-in`;
    },
    
    // SLIDE FADE OUT ANIMATIOPN
    SlideFadeOut : (SelectorElement, animationTimer) =>{
        SelectorElement.style.animation= `animatto-slide-fadeOut ${animationTimer}ms ease-in`;
        setTimeout(()=>{
            SelectorElement.classList.add("animatto-display-none");
        },(animationTimer - 20/100)); //this will be similar to the animation timer
    },
    
    // FADEUPOne ANIMATION
    FadeUpOne :(SelectorElement, animationTimer)=>{
        SelectorElement.style.animation= `animatto-fadeUp-One ${animationTimer}ms ease-in`;
        setTimeout(()=>{
            SelectorElement.classList.add("animatto-display-none");
        },(animationTimer - 20/100)); //this will be similar to the animation timer
    },
    
    // FADEUPTWO ANIMATION
    FadeUpTwo:(SelectorElement, animationTimer)=>{
        SelectorElement.style.animation= `animatto-fadeUp-two ${animationTimer}ms ease-in`;
        console.log(animationTimer)
        setTimeout(()=>{
            SelectorElement.classList.add("animatto-display-none");
        },(animationTimer - 20/100)); //this will be similar to the animation timer
    }
}

export {Animation_Category};







// const FadeIn =(SelectorElement, animationTimer) =>{
//     SelectorElement.style.animation =`animatto-fadeIn ${animationTimer}ms linear`;
// };

// // FADEOUT ANIMATIONS related with @keyframes animation and css class
// const FadeOut = (SelectorElement, animationTimer) =>{
//     SelectorElement.style.animation= `animatto-fadeOut ${animationTimer}ms ease-in`;
//     setTimeout(()=>{
//         SelectorElement.classList.add("animatto-display-none");
//     }, (animationTimer - 20/100)); //this miliseconds is similar to the timer
// };

// // SLIDE FADE-IN ANIMATION
// const SlideFadeIn = (SelectorElement, animationTimer) =>{
//     SelectorElement.style.animation = `animatto-slide-fadeIn ${animationTimer}ms ease-in`;
// };

// // SLIDE FADE OUT ANIMATIOPN
// const SlideFadeOut = (SelectorElement, animationTimer) =>{
//     SelectorElement.style.animation= `animatto-slide-fadeOut ${animationTimer}ms ease-in`;
//     setTimeout(()=>{
//         SelectorElement.classList.add("animatto-display-none");
//     },(animationTimer - 20/100)); //this will be similar to the animation timer
// };

// // FADEUPOne ANIMATION
// const FadeUpOne =(SelectorElement, animationTimer)=>{
//     SelectorElement.style.animation= `animatto-fadeUp-One ${animationTimer}ms ease-in`;
//     setTimeout(()=>{
//         SelectorElement.classList.add("animatto-display-none");
//     },(animationTimer - 20/100)); //this will be similar to the animation timer
// }

// // FADEUPTWO ANIMATION
// const FadeUpTwo=(SelectorElement, animationTimer)=>{
//     SelectorElement.style.animation= `animatto-fadeUp-two ${animationTimer}ms ease-in`;
//     console.log(animationTimer)
//     setTimeout(()=>{
//         SelectorElement.classList.add("animatto-display-none");
//     },(animationTimer - 20/100)); //this will be similar to the animation timer
// }

// ============ ANIMATION FUNCTION SECTION END ==========================//
//============================
//==============================
