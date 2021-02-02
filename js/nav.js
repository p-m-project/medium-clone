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

// button
$("button").click(function(){
	if($(this).hasClass("confirm")){
		$(this).addClass("done");
		$("span").text("Deleted");
	} else {
		$(this).addClass("confirm");
		$("span").text("Are you sure?");
	}
});

// Reset
$("button").on('mouseout', function(){
	if($(this).hasClass("confirm") || $(this).hasClass("done")){
		setTimeout(function(){
			$("button").removeClass("confirm").removeClass("done");
			$("span").text("Delete");
		}, 3000);
	}
});

