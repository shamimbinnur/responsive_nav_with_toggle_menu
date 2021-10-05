// 	AUTHOR:		SHAMIM BIN NUR
// 	GITHUB:		https://github.com/shamimbinnur
// 	LINKEDIN:	https://www.linkedin.com/in/shamimbinnur
// 	MAIL:		iamshamimbn@gmail.com
// 	SITE:		www.shamimbinnur.me

const toggleButton = document.getElementById("btn");
const toogle = document.getElementById("toggle");

toggleButton.addEventListener("click", ()=> {
    toggleMenu();
    
})


const toggleMenu = ()=>{
    toogle.classList.toggle("makeVisible");
}
