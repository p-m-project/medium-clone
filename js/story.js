document.getElementById("comment-textarea").addEventListener("focus", ()=>{
    document.querySelector('.info-submit').style.display="flex";
})
function makeChecked(){
    /*document.querySelector('.post-writer-name').querySelector('.btn-follow-icon').innerHTML=`<i class="fa fa-check" aria-hidden="true"></i>`;
    document.querySelector('.post-writer-follow').querySelector('.btn-follow-icon').innerHTML=`<i class="fa fa-check" aria-hidden="true"></i>`;
    document.querySelector('.btn-follow-text').innerHTML=`Followed`;*/
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