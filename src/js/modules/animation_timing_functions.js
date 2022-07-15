const Get_class_text =(Selector, MatchString)=>{
    for(let counter =0; counter < Selector.length; counter++){  //this loop goes through the class list object
        let ClassText =(Selector[counter]); //getting class in string data type
        let isClassMatched = ClassText.match(MatchString);
        if(isClassMatched != null || isClassMatched != undefined){
            return ClassText;
        }
    }
}

const Extract_Animation_fuction_timing = (Selector)=>{
    let Class_text =Get_class_text(Selector, "animatto-f-t");
    if(Class_text != undefined){ //if x not undefined then do something with this functions
        let Extracted_value = Class_text.replace("animatto-f-t-", "");
        return Extracted_value;
    }else{
        return "ease-in";
    }
}

const Extract_Animation_duration = (Selector)=>{
    let Class_text =Get_class_text(Selector, "animatto-duration");
    if(Class_text != undefined){ //if x not undefined then do something with this functions
        let Extracted_value = Class_text.replace("animatto-duration-", "");
        return Extracted_value;
    }else{
        return "400";
    }

}

//return something that contains animation-timing-functions as string text
// const Animation_timing_function = (ElementSelectorInit)=>{
//     for(let counter = 0; counter < ElementSelectorInit.length ; counter++){
//         let ElementSelector = ElementSelectorInit[counter];
//         let class_List = ElementSelector.classList;
//         let animation_timing = Extract_Animation_fuction_timing(class_List);
//         let animation_duration = Extract_Animation_duration(class_List);
//         return {animation_timing, animation_duration};
        
//     }
    
// }


const Animation_timing_function = (ElementSelector)=>{
    let class_List = ElementSelector.classList;
    let animation_timing = Extract_Animation_fuction_timing(class_List);
    let animation_duration = Extract_Animation_duration(class_List);
    console.log(animation_duration, animation_timing);
    return {animation_timing, animation_duration};
}


export {Animation_timing_function}; 
