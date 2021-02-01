let btnAdd=document.querySelector(".button-add");

/*this function get dimension of the page in order to set the left value of emlement with class .button-add  */
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
    /*get the distance og=f current element from top of the window:*/
    let getHeight2=window.pageYOffset + ka.getBoundingClientRect().top;
    btnAdd.style.display="block";
    /*apply the height of the current element from top of the page as the 
        css top property:*/ 
    btnAdd.style.display="block";
    btnAdd.style.top=`${getHeight2}px`;
    ka.addEventListener("keydown", (e1)=>
    {
        
        if(e1.shiftKey){
            if( e1.keyCode===13)
            document.execCommand('insertHTML', false, '<br/>');
            return false;
        }
     
        if(e1.keyCode===13){
            //create a global p element:
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
           // addClassF();
        } 
        if(e1.keyCode===8 && ka.innerHTML==="" || ka.innerHTML==="<br>" && e1.keyCode===8){
            ka.remove()         
        }
        
    })
    
}

function nextElem2(k1){
     /*get the distance og=f current element from top of the window:*/
     let getHeight1=window.pageYOffset + k1.getBoundingClientRect().top;
     btnAdd.style.display="block";
     /*apply the height of the current element from top of the page as the 
         css top property:*/ 
     btnAdd.style.display="block";
     btnAdd.style.top=`${getHeight1}px`;
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
                document.querySelector(".new-post-container").appendChild(pElement).focus();  

            }          
           // addClassF();
        } 
        
    })
    

}




