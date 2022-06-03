let ProfileFunction= (()=>{
    let btnOne = document.querySelector(".m-b-pro");
    let closeBtn = document.getElementById("close-btn");
    let OpenFunction= ()=>{
        console.log("open fucntion executed");
        document.querySelector(".full-profile-section").style.display= "block";
    }
    let CloseFunction= ()=>{
        console.log("open fucntion executed");
        document.querySelector(".full-profile-section").style.display= "none";
    }
    btnOne.addEventListener("click", OpenFunction);
    closeBtn.addEventListener("click", CloseFunction);
})();