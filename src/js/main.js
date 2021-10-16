let textFadeIn =(()=>{
    let functionAnimationReset = (ClassName, timeoutSec)=>{
        setTimeout(()=>{
            ClassName.style.animation ="";
        }, timeoutSec);
    }

    let fadeInFunction =(selection)=>{
        var aniDelayCounter = 0.4;
        let fadeInClassInit= document.querySelectorAll(".fadeIn");
        // console.log(fadeInClassInit);
        for(i =0; i < fadeInClassInit.length; i++){
            let fadeInClass = fadeInClassInit[i];
            
            //all the class selected
            //after the animation ends increment the delay by 0.2
            console.log(fadeInClassInit.length);
                //just testing the animation
                console.log("animation clicked");
                selection.style.animation ="fadeIn " + aniDelayCounter + "s linear";
                functionAnimationReset(fadeInClass, 800);
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
})();





// ======================
// ANIMATION TIMING FUNCTION
let animationTrigger = ((textFadeIn,)=>{
    let clickInit = document.querySelectorAll(".clickEvent");
    for(i = 0; i < clickInit.length; i++){
        let click = clickInit[i];
        click.addEventListener("click", (event)=>{
            console.log("event clicked");
            // add the animation depending on the class
            let classChecker= event.target.classList;
            if(classChecker.contains("fadeIn")){
                // textFadeIn.k();
                textFadeIn.k(event.target);
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
})(textFadeIn);