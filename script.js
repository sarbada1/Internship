let menu_tag=document.getElementById('menu-tag');
let menu=document.getElementById('menu');
let sideNav=document.getElementById('side-Nav');

sideNav.style.right = "-250px";

menu_tag.onclick=function(){
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src="img/close.png";
        
    }
    else{
        sideNav.style.right = "-250px";
        menu.src="img/menu.png";
    }

}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});