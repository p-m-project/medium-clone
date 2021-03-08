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

function makeRed(){
    let hearts = document.querySelectorAll('.fa-heart-o');
    for(var i=0;i<=hearts.length;i++){
        hearts[i].style.color==="red"? hearts[i].style.color="":hearts[i].style.color="red";
    }
}
function makeBlack(){
    let saves = document.querySelector(".main").querySelectorAll('.fa-save');
    for(var i=0;i<=saves.length;i++){
        saves[i].style.color==="black"? saves[i].style.color="":saves[i].style.color="black";
      /* 
        saves[i].style.color="black"? saves[i].style.color="":saves[i].style.color="black";
      */
}
}