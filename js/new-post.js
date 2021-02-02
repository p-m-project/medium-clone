let btnAdd=document.querySelector(".button-add-section");

/*this function get dimension of the page in order to set the left value of emlement with class .button-add-section  */
function getDimension(){
    let winWidth=window.innerWidth;
    let postContainerWidth=document.querySelector(".new-post-container").offsetWidth;
    btnAdd.style.left=((winWidth-postContainerWidth)/2)+"px";
}
getDimension();

function nextElem(er){
    er.addEventListener("keydown",(e)=>{      
        if(e.keyCode===13){
            er.nextElementSibling.focus();
                    } 
               })
            }
function nextElem3(ka){
    /*get the distance of the current element from top of the window:*/
    let getHeight2=window.pageYOffset + ka.getBoundingClientRect().top;
    btnAdd.style.display="block";
    /*apply the height of the current element from top of the page as the 
        css top property:*/ 
    btnAdd.style.display="inline-block";
    btnAdd.style.top=`${getHeight2}px`;
    //document.querySelectorAll(".new-post-passage").id='';
    document.getElementById('txt').id="";
    ka.id='txt';   

    ka.addEventListener("keydown", (e1)=>
    {
        
        if(e1.shiftKey){
            if( e1.keyCode===13)
            document.execCommand('insertHTML', false, '<br/>');
            return false;
        }
     
        if(e1.keyCode===13){
            /*create a global p element:*/
            if(ka.nextElementSibling){
                ka.nextElementSibling.focus();
            }
          
            else{
                let pElement= document.createElement("p");
                pElement.setAttribute("class", "new-post-passage");
                pElement.setAttribute("contenteditable", "true");
                pElement.setAttribute("onfocus", "nextElem3(this)");
                document.querySelector(".new-post-container").appendChild(pElement).focus();  
            }          
        } 
        if(e1.keyCode===8 && ka.innerHTML==="" || ka.innerHTML==="<br>" && e1.keyCode===8 ){
            ka.previousElementSibling.id="txt";  
            ka.remove();                  
        }
       if(e1.keyCode===46 && ka.innerHTML==="" || ka.innerHTML==="<br>" && e1.keyCode===46){
            ka.previousElementSibling.id="txt";  
            ka.remove();         
        }   
    })
}

function nextElem2(k1){
     /*get the distance of the current element from top of the window:*/
     let getHeight1=window.pageYOffset + k1.getBoundingClientRect().top;
     btnAdd.style.display="inline-block";
     /*apply the height of the current element from top of the page as the 
         css top property:*/ 
     btnAdd.style.display="block";
     btnAdd.style.top=`${getHeight1}px`;
     document.getElementById('txt').id="";
     k1.id='txt';
    k1.addEventListener("keydown", (e)=>
    {
       if(e.shiftKey){
            if( e.keyCode===13)
            document.execCommand('insertHTML', false, '<br/>');
            return false;
        }
       

        if(e.keyCode===13){
            //create a global p element:
            if(k1.nextElementSibling){
                k1.nextElementSibling.focus();

            }
            else{
                let pElement= document.createElement("p");
                pElement.setAttribute("contenteditable", "true");
                pElement.setAttribute("class", "new-post-passage");
                pElement.setAttribute("onfocus", "nextElem3(this)");
                /*pElement.setAttribute("onblur", "removeId(this)");*/
                document.querySelector(".new-post-container").appendChild(pElement).focus();  

            }          
           // addClassF();
        } 
        
    })
}

function toggleAddMedia(){
    if(document.querySelector(".add-media-section").style.display=="none"){
        document.querySelector(".add-media-section").style.display="inline-block"
    }
    else{
        document.querySelector(".add-media-section").style.display="none";
    }
}
function deleteMedia(media){   
    media.addEventListener("keydown", (e4)=>{
        if(e4.keyCode===8 || e4.keyCode===46){
            media.remove()
        }
    })
}

function loadImage(img){
    document.querySelector(".add-media-section").style.display="none";
    var txt = document.getElementById('txt');
    /*create a img tag in order to put uploaded img into it */
    var imageElement = document.createElement('img');
    imageElement.style.maxWidth="684px";
    imageElement.style.marginBottom="21px";
    imageElement.style.cursor="pointer";
    imageElement.setAttribute("contenteditable","true");
    imageElement.setAttribute("onclick","deleteMedia(this)");
    /*add a img tag after the current p element */
    txt.parentNode.insertBefore(imageElement,txt.nextSibling );
    let pElement= document.createElement("p");
    pElement.setAttribute("contenteditable", "true");
    pElement.setAttribute("class", "new-post-passage");
    pElement.setAttribute("onfocus", "nextElem3(this)");
    imageElement.parentNode.insertBefore(pElement,imageElement.nextSibling );
    imageElement.src = URL.createObjectURL(img.target.files[0]);
    imageElement.onload = function() {
    URL.revokeObjectURL(imageElement.src) 
    }
}

function loadVideo(video){
    document.querySelector(".add-media-section").style.display="none";
    var txt = document.getElementById('txt');
    /*create a video tag in order to put uploaded video into it */
    var videoElement = document.createElement('video');
    videoElement.style.maxWidth="684px";
    videoElement.style.marginBottom="21px";
    videoElement.style.cursor="pointer";
    videoElement.setAttribute("contenteditable","true");
    videoElement.setAttribute("onclick","deleteMedia(this)");
    videoElement.setAttribute("controls","on");
        /*add a video tag after the current p element */
    txt.parentNode.insertBefore(videoElement,txt.nextSibling );
    let pElement= document.createElement("p");
    pElement.setAttribute("contenteditable", "true");
    pElement.setAttribute("class", "new-post-passage");
    pElement.setAttribute("onfocus", "nextElem3(this)");
    videoElement.parentNode.insertBefore(pElement,videoElement.nextSibling );
    videoElement.src = URL.createObjectURL(video.target.files[0]);
    videoElement.onload = function() {
    URL.revokeObjectURL(videoElement.src) 
    } 
}

