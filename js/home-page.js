let followBtn=document.querySelectorAll('.btn-follow');
for(i=0;i<followBtn.length;i++){
    followBtn[i].addEventListener('click',function(e){
        if(e.target.innerHTML==='Follow'){
           e.target.innerHTML='Followed'
        }
        else{
           e.target.innerHTML='Follow'
        }
    })
}