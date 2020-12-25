window.onload = function() {
    let now=new Date();
    let date=document.getElementById("date");
    date.innerHTML=now.getDate();
    let mouth=document.getElementById("mouth");
    mounth.innerHTML="/"+(now.getMonth()+1);
}
$(document).ready(function() {
    
    $(".burger-menu__burger").click(function(event) {
        $(".burger-menu__burger, .header__menu, .footer__body").toggleClass("active");
		$("body").toggleClass("lock");
    });  
});