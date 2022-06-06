

import { gsap } from "gsap";
console.log(gsap.version);

/*gsap.to('.box',{ x:100, rotation: 360, backgroundColor: 'green', duration: 2});*/
/*gsap.fromto('.box',{ x: -100, opacity: 0}, {x: 100, duration: 2, opacity :1});*/


/*dark Mode*/
let activeTheme = localStorage.getItem("theme");
if(activeTheme != null){
   darklight(activeTheme);
}
let themeTrigger = document.querySelector(".js")
if(themeTrigger){
    themeTrigger.addEventListener("click", choix);
}

function darklight(theme){
    let imdButton = document.querySelector(".darkmode");
    let imdDwm = document.querySelector(".footer__info--logodwm");
    let imdlogo = document.querySelector(".logo");

    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    imdButton.setAttribute("data-theme", theme);
    imdDwm.setAttribute("data-theme", theme);
    imdlogo.setAttribute("data-theme", theme);

    if (theme == "dark"){
        imdButton.setAttribute('src','assets/images/lune-DOP.svg');
        imdDwm.setAttribute('src','assets/images/logo-dwt.svg');
        imdlogo.setAttribute('src','assets/images/logo_DOP.svg');
    }else if (theme == "light"){
        imdButton.setAttribute('src','assets/images/soleil-BOP.svg');
        imdDwm.setAttribute('src','assets/images/logo-dwt_light.svg');
        imdlogo.setAttribute('src','assets/images/logo_BOP.svg');
    }
}

function choix(){

    let theme = document.body.getAttribute("data-theme");
    
    if(theme == "dark"){
        darklight("light");
    }else{
        darklight("dark");
    }
}



/*date*/

let date = new Date().getFullYear();
document.getElementById("annee").innerHTML = date;