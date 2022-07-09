// this function will extract MILI_SECONDS in number from class name in DOM
// this animation timer is called back in the animation section
const AnimattoTimer = (SelectorElement) =>{
    let timerClass = SelectorElement;
    let GET_MILI_SECONDS =timerClass.classList;
    if(timerClass.classList.contains("animatto-timing")){
        GET_MILI_SECONDS= GET_MILI_SECONDS.value;
        GET_MILI_SECONDS = GET_MILI_SECONDS.match(/\d/g); //removing all the white space to extract number using regex otherwise it returns two null result and fails joins functions
        GET_MILI_SECONDS = GET_MILI_SECONDS.join("");
        GET_MILI_SECONDS = parseFloat(GET_MILI_SECONDS);
        console.log(typeof GET_MILI_SECONDS);
        return GET_MILI_SECONDS; 
    }else{
        return 400;
    }
    
};

export {AnimattoTimer};