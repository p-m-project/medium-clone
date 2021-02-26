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
let saveBtn=document.querySelectorAll('.fa-save');
for(i=0;i<saveBtn.length;i++){
    saveBtn[i].addEventListener('click',function(e1){
        if(e1.target.style.color==='black'){
            e1.target.style.color='inherit'
        }
        else{
            e1.target.style.color='black'
        }
    })
}