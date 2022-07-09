import {AnimattoTimer} from "./modules/AnimationTimer.js";
import {Animation_Category} from "./modules/AnimationCategory.js";
/* jshint esversion: 6 */
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


// decide what animation to run on what animation
RunEvents(".animatto-fadeOut", Animation_Category.FadeOut);
