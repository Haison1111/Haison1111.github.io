// const SmallSquare = [
//     {
//         htmlfile: ""
//     }
// ]

// const NavElements = document.getElementsByClassName('Element')
// const windowPathName = window.location.pathname;


// for ( let i = 0; i< 5;i++){
//     if ( NavElements[i].href.includes(windowPathName)){
//         NavElements[i].classList.replace("Element","active")
//     }
// }
// var isClickNavMenu = false





// NavElements.forEach(NavElement => {
//     if (NavElement.href.includes(windowPathName)){
//         NavElement.classList.add("active")
//     }
// });



function signInForm(){
    //  document.getElementsByClass("button showcase").style.animation = "disapear 1s"
     document.getElementById("signInField").style.animation= "apeared 0.75s"
     document.getElementById("signInField").style.visibility="visible";
     document.getElementById("darken-element").style.display = "block "
}

function turnoffFeild(){
    document.getElementById("signInField").style.animation= "disapear 0.5s"
    document.getElementById("signInField").style.visibility= "hidden" 
    document.getElementById("darken-element").style.display = "none"
}

// function mobileMenuNav(){
//     isClickNavMenu = !isClickNavMenu
//     if(isClickNavMenu) {
//         document.getElementById("container").style.display="none"
//         document.getElementById("mobileNav").style.display="flex"
//     } else {
//         document.getElementById("container").style.display="block"
//         document.getElementById("mobileNav").style.display="none"
//     }
// }

let paramsSw = new URLSearchParams(window.location.search)
let SmallSquareSw = document.getElementsByClassName("small-square-tsw");
for (let i=0;i<SmallSquareSw.length;i++) {  
    SmallSquareSw[i].setAttribute("data-sw" , i + 1 )   
    SmallSquareSw[i].addEventListener('click', function goToDetail(){
        paramsSw.set("data-sw", SmallSquareSw[i].getAttribute("data-sw") )
        window.location.href = `/detail-page.html?${paramsSw.toString()}`;  
        
    });
}


