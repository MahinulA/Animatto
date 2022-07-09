/* jshint esversion: 6 */
import {AnimattoTimer} from "./modules/AnimationTimer.js";
import {Animation_Category} from "./modules/AnimationCategory.js";
"use strict";


let fadeInSelectorInit =document.querySelectorAll(".animatto-fadeIn");
let fadeOutSelectorInit = document.querySelectorAll(".animatto-fadeOut");
let slideFadeInSelectorInit = document.querySelectorAll(".animatto-slide-fadeIn");
let slideFadeOutSelectorInit= document.querySelectorAll(".animatto-slide-fadeOut");
let initial = document.querySelectorAll(".animatto-timing");





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
    console.log(QuerySelector);
    for(let counter= 0; counter <QuerySelector.length; counter++){
        let ElementSelector = QuerySelector[counter];
        //event type checker
        let EventType = EventTypeChecker(ElementSelector);

        switch (true){
            case EventType == "load":
                window.addEventListener(EventType, ()=>{
                    AnimationFunction(ElementSelector, AnimattoTimer(ElementSelector));
                });
                break;
            case EventType == "hover":
                ElementSelector.addEventListener("mouseover", ()=>{
                    AnimationFunction(ElementSelector, AnimattoTimer(ElementSelector));
                });
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
    {Run_AnimationClass: ".aanimatto-fadeUp-Two", Run_AnimationFunction: Animation_Category.FadeUpTwo}
];
// RunEvents(".animatto-fadeOut", Animation_Category.FadeOut);
AnimationRunEvent.map((el)=>{
    RunEvents(el.Run_AnimationClass, el.Run_AnimationFunction);
});
