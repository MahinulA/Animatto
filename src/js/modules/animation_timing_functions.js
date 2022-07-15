const Get_class_text =(Selector, partOfClass_As_String)=>{
    for(let counter =0; counter < Selector.length; counter++){
        let ClassText =(Selector[counter]); //this separate the class into the strings\
        let isClassMatched = ClassText.match(partOfClass_As_String);
        if(isClassMatched != null){
            return ClassText;
        }
    }
}

const Extract_Animation_fuction_timing = (Selector)=>{
    let classText =Get_class_text(Selector, "animatto-f-t");
    let Extracted_value = classText.replace("animatto-f-t-", "");
    console.log(Extracted_value);
}

//return something that contains animation-timing-functions as string text
const Animation_timing_function = (ElementSelectorInit)=>{
    for(let counter = 0; counter < ElementSelectorInit.length ; counter++){
        let ElementSelector = ElementSelectorInit[counter];
        let class_List = ElementSelector.classList;
        Extract_Animation_fuction_timing(class_List);
    }
}

//take classlist
let classcheckMY_test = document.querySelectorAll(".animatto-timing");//this should be animation timing

Animation_timing_function(classcheckMY_test);

export {Animation_timing_function}; 