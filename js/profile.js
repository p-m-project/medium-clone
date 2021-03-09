function scrollTop(){
  if(document.body.scrollTop > 76 || document.documentElement.scrollTop > 76){
    document.querySelector('.profile-top').style.top='0';
    document.querySelector('.profile-top').style.backgroundColor="rgba(211, 211, 211,.95)";
  }
  else{
    document.querySelector('.profile-top').style.top='';
    document.querySelector('.profile-top').style.backgroundColor="";
  }
}
window.onscroll=function(){scrollTop()};
function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#blah').attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]); 
    }
  }
  
  $("#imgInp").change(function() {
    readURL(this);
  });
