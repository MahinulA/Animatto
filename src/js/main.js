/* jshint esversion: 6 */
// import {AnimattoTimer} from "./modules/AnimationTimer.js";
import {Animation_Category, Nulyfy_Animation} from "./modules/AnimationCategory.js";
import {Animation_timing_function} from "./modules/animation_timing_functions.js";
"use strict";


//take classlist
let check_if_class_has_timingFunction = document.querySelectorAll(".animatto-timing");//this should be animation timing

// Animation_timing_function(classcheckMY_test);
// console.log(Animation_timing_function(classcheckMY_test).animation_timing);





// this function will get class  data related to the selector returns "string value" 
const EventTypeChecker = (QueryCurrentSelector) =>{
    let ClassData = QueryCurrentSelector.classList;
    switch(true){
        // Statement update: successful
        case (ClassData.contains("Onload")):
            return "load";
            // break;
        case (ClassData.contains("hover")):
            return "hover";
            // break;
        default: 
            return "load";
    }
}


const RunEvents = (Selector, AnimationFunction)=>{
    let QuerySelector =document.querySelectorAll(Selector); // the Selector value should be a query Class selector example ".animatto-slide-fadeOut"
    // console.log(QuerySelector);
    for(let counter= 0; counter <QuerySelector.length; counter++){
        let ElementSelector = QuerySelector[counter];
        
        let EventType = EventTypeChecker(ElementSelector);//check the event type

        switch (true){
            case EventType == "load":
                window.addEventListener(EventType, ()=>{
                    AnimationFunction(ElementSelector, Animation_timing_function(ElementSelector).animation_duration, Animation_timing_function(ElementSelector).animation_timing);
                });
                break;
            // case EventType == "hover":
            //     ElementSelector.addEventListener("mouseover", ()=>{
            //         AnimationFunction(ElementSelector, AnimattoTimer(ElementSelector));
            //         setTimeout(()=>{
            //             Nulyfy_Animation.NullifyAninmationFunc(ElementSelector);
            //         }, AnimattoTimer(ElementSelector));
            //     });
                
        }
    }
}


// decide what animation to run on what animation\
const AnimationRunEvent =[
    {Run_AnimationClass: ".animatto-fadeOut", Run_AnimationFunction: Animation_Category.FadeOut}, 
    {Run_AnimationClass: ".animatto-fadeIn", Run_AnimationFunction: Animation_Category.FadeIn},
    {Run_AnimationClass: ".animatto-slide-fadeIn", Run_AnimationFunction: Animation_Category.SlideFadeIn},
    {Run_AnimationClass: ".animatto-slide-fadeOut", Run_AnimationFunction: Animation_Category.SlideFadeOut},
    {Run_AnimationClass: ".aanimatto-fadeUp-One", Run_AnimationFunction: Animation_Category.FadeUpOne},
    {Run_AnimationClass: ".animatto-fadeUp-Two", Run_AnimationFunction: Animation_Category.FadeUpTwo},
    {Run_AnimationClass: ".animatto-fadeIn-Bounce-one", Run_AnimationFunction: Animation_Category.FadeInBounceOne},
];
// RunEvents(".animatto-fadeOut", Animation_Category.FadeOut);
AnimationRunEvent.map((ArrayElements)=>{
    RunEvents(ArrayElements.Run_AnimationClass, ArrayElements.Run_AnimationFunction);
});



