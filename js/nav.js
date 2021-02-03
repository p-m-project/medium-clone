function showMenu(){
                
    if(document.querySelector(".topnav-sandwich-links").style.display=="none") {
     document.querySelector(".topnav-sandwich-links").style.display="block";
    
    }
    else{
     document.querySelector(".topnav-sandwich-links").style.display="none";
    }

 }

 function showProfileMenu(){
    if(document.querySelector(".navbar-profile-links").style.display=="none") {
        document.querySelector(".navbar-profile-links").style.display="block";
       
       }
       else{
        document.querySelector(".navbar-profile-links").style.display="none";
       }

 }

//  menu part storeis
        function openCity(cityName) {
        var i;
        var x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        document.getElementById(cityName).style.display = "block";  
        }

