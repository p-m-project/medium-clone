let hearts = document.querySelectorAll('.fa-heart-o');
for(var i=0;i<hearts.length;i++){
    hearts[i].addEventListener('click',function(e1){
        if(e1.target.style.color==="red"){
           e1.target.style.color="";
           e1.target.nextElementSibling.innerHTML=parseInt(e1.target.nextElementSibling.innerHTML)-1;
        }
        else{
            e1.target.style.color="red";
            e1.target.nextElementSibling.innerHTML=parseInt(e1.target.nextElementSibling.innerHTML)+1;
        }
    })
}
function makeChecked(){
    if(document.querySelector('.post-writer-name').querySelector('.btn-follow-icon').innerHTML==`<i class="fa fa-check" aria-hidden="true"></i>`
    || document.querySelector('.post-writer-follow').querySelector('.btn-follow-icon').innerHTML==`<i class="fa fa-check" aria-hidden="true"></i>`
    || document.querySelector('.btn-follow-text').innerHTML==`Followed`){
        document.querySelector('.post-writer-name').querySelector('.btn-follow-icon').innerHTML=`<i class="fa fa-plus" aria-hidden="true"></i>`;
        document.querySelector('.post-writer-follow').querySelector('.btn-follow-icon').innerHTML=`<i class="fa fa-plus" aria-hidden="true"></i>`;
        document.querySelector('.btn-follow-text').innerHTML=`Follow`;
    }
    else{
        document.querySelector('.post-writer-name').querySelector('.btn-follow-icon').innerHTML=`<i class="fa fa-check" aria-hidden="true"></i>`;
    document.querySelector('.post-writer-follow').querySelector('.btn-follow-icon').innerHTML=`<i class="fa fa-check" aria-hidden="true"></i>`;
    document.querySelector('.btn-follow-text').innerHTML=`Followed`;
    }

}

function makeBlack(){
    let saves = document.querySelectorAll('.fa-save');
    for(var i=0;i<saves.length;i++){
        saves[i].style.color==="black"? saves[i].style.color="":saves[i].style.color="black";
}
}