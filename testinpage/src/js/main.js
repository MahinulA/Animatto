


let hamBergerFunction= (()=>{
    let openHam = document.querySelector(".js-ham-btn-open");
    let closeHam = document.querySelector(".js-ham-close-btn")
    let hamSection = document.querySelector(".js-ham-berger-navigation");


    let hamCloseFunction = ()=>{
        hamSection.style.display= "none";
        document.querySelector("html").style.overflowY = "visible";
        document.querySelector("body").style.overflowY = "visible";
    }
    let hamOpenFunction = ()=>{
        hamSection.style.display= "flex";
        document.querySelector("html").style.overflowY = "hidden";
        document.querySelector("body").style.overflowY = "hidden";
    }

    openHam.addEventListener("click", ()=>{
        hamOpenFunction();
        
    });
    closeHam.addEventListener("click", ()=>{
        hamCloseFunction();
    });

})();


