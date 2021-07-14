const toggleButton = document.getElementById("btn");
const toogle = document.getElementById("toggle");

toggleButton.addEventListener("click", ()=> {
    toggleMenu();
    
})


const toggleMenu = ()=>{
    toogle.classList.toggle("makeVisible");
}