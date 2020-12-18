/*window.onload = function() {
 Меняем меню-бургер на крестик
    document.querySelector(".btnMenu").onclick=function()
    {
        document.querySelector(".menuLine").classList.toggle("menuLineActive");
    }
    
};*/

window.onload = function() {
    let now=new Date();
    let date=document.getElementById("date");
    date.innerHTML=now.getDate();
    let mouth=document.getElementById("mouth");
    mounth.innerHTML="/"+(now.getMonth()+1);
    
   /*Меняем меню-бургер на крестик и выдвигаем список меню*/ document.querySelector(".burgerMenuBtn").onclick=function()
    {
       document.querySelector(".burgerMenu").classList.toggle("burgerMenuActive");
    } 
   
   document.querySelector(".btnLearnMore").focus();
}

