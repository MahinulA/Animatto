let universalFunctions =(()=>{
    let functionAnimationReset = (elementSelect, timer)=>{
        setTimeout(()=>{
            elementSelect.style.animation ="";
        }, timer);
    }

    return {
        timeOutF : function(ClassName, timeout){
            return functionAnimationReset(ClassName, timeout);
        }
    }
})();




//FADEIN ANIMATION CONDITIONS:
//ELEMENTS NEEDS TO BE HIDDEN FIRST
//THEN MAKE IT VISIBLE
let textFadeIn =((universalFunctions)=>{
    let fadeInFunction =(selection)=>{  //FADEIN FUNCTION
        var aniDelayCounter = 0.2;      //SETTING ANIMATION DELAY
        let fadeInClassInit= document.querySelectorAll(".fadeIn");
        for(counter =0; i < fadeInClassInit.length; counter++){
            let fadeInClass = fadeInClassInit[counter];
            selection.style.animation ="fadeIn " + aniDelayCounter + "s linear";
            universalFunctions.timeOutF(fadeInClass, 800);
            if(aniDelayCounter >= 0.7){
                aniDelayCounter = 0.4;
            }else{
                aniDelayCounter = aniDelayCounter + 0.1;
            }   
        }
    }
    return {
        k : function(eventTarget){
            return fadeInFunction(eventTarget);
        }
    }
})(universalFunctions);






let textFadeOut = (()=>{
    let fadeOutFunction =(selection)=>{
        var aniDelayCounter = 0.4;
        let fadeOutClassInit= document.querySelectorAll(".fadeOut");
        for(i =0; i < fadeOutClassInit.length; i++){
            let fadeOutClass = fadeOutClassInit[i];
            selection.style.animation ="fadeOut " + aniDelayCounter + "s linear";
            selection.style.opacity="0";
            setTimeout(()=>{
                selection.style.display="none";
            }, 1000)
            universalFunctions.timeOutF(fadeOutClass, 800);
            if(aniDelayCounter >= 0.7){
                aniDelayCounter = 0.4;
            }else{
                aniDelayCounter = aniDelayCounter + 0.1;
            }
        }
    }
    return {
        fadeOutM : function(eventTarget){
            return fadeOutFunction(eventTarget);
        }
    }
})();





// ======================
// ANIMATION TRIGGERING
let animationTrigger = ((textFadeIn, textFadeOut)=>{
    // CLICK EVENT
    let clickInit = document.querySelectorAll(".clickEvent");
    for(i = 0; i < clickInit.length; i++){
        let click = clickInit[i];
        click.addEventListener("click", (event)=>{
            console.log("event clicked");
            // add the animation depending on the class
            let classChecker= event.target.classList;
            if(classChecker.contains("fadeIn")){
                textFadeIn.k(event.target);
            }else if(classChecker.contains("fadeOut")){
                textFadeOut.fadeOutM(event.target);
            }
        });
    }


    // ONLOAD EVENT
    let OnloadEvent = document.querySelectorAll(".Onload-e");
    for(i = 0; i < OnloadEvent.length; i++){
        let On_load = OnloadEvent[i];

        window.addEventListener("load", ()=>{
            console.log("load done");
            
            // add the animation depending on the class
            let classChecker= On_load.classList;
            console.log(classChecker);
            if(classChecker.contains("fadeIn")){
                textFadeIn.k(On_load);
            }else if(classChecker.contains("fadeOut")){
                textFadeOut.fadeOutM(On_load);
            }
        });
    }


    //ONSCROLL EVENT
    let OnScrollInit = document.querySelectorAll(".OnScroll");
    for(i = 0; i < OnScrollInit.length; i++){
        let Onscroll = OnScrollInit[i];
        Onscroll.addEventListener("scroll", ()=>{
            console.log("scrolled");
            let classChecker= Onscroll.classList;
            if(classChecker.contains("fadeIn")){
                textFadeIn.k(Onscroll);
            }else if(classChecker.contains("fadeOut")){
                textFadeOut.fadeOutM(Onscroll);
            }
        });
    }
})(textFadeIn, textFadeOut);