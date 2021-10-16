let universalFunctions =(()=>{
    let functionAnimationReset = (CN, TO)=>{
        setTimeout(()=>{
            CN.style.animation ="";
        }, TO);
    }

    return {
        timeOutF : function(ClassName, timeoutS){
            return functionAnimationReset(ClassName, timeoutS);
        }
    }
})();





let textFadeIn =((universalFunctions)=>{
    let fadeInFunction =(selection)=>{
        var aniDelayCounter = 0.2;
        let fadeInClassInit= document.querySelectorAll(".fadeIn");
        for(i =0; i < fadeInClassInit.length; i++){
            let fadeInClass = fadeInClassInit[i];
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
    let OnloadEvent = document.querySelectorAll(".Onload-e");
    for(i = 0; i < OnloadEvent.length; i++){
        let On_load = clickInit[i];
        On_load.addEventListener("load", ()=>{
            // add the animation depending on the class
        });
    }
})(textFadeIn, textFadeOut);