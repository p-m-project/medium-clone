

function nextElem(er){
    er.addEventListener("keydown",(e)=>{      
        if(e.keyCode===13){
            er.nextElementSibling.focus();
                    } 
               })
          }

/*function nextElem3(ew){
    if(ew.keyCode===13){
            //create a global p element:
             getElem(elem);         
            if(getE.nextElementSibling){
                    getE.nextElementSibling.focus();
                }
            else{
            let pEl= document.createElement("p");
            pEl.setAttribute("contenteditable", "true");
            pEl.setAttribute("onfocus", "getElem(this)");
            pE1.setAttribute("onkeydown", "nextElem3(ew)");
            document.querySelector(".new-post-container").appendChild(pEl).focus();  
            addClassF();
                }
            
            }          
}*/
function nextElem3(ka){
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

       /* switch(e1.keyCode){
            case 13:if(ka.nextElementSibling){
                    ka.nextElementSibling.focus();
                }
            
                else{
                    let pElement= document.createElement("p");
                    pElement.setAttribute("contenteditable", "true");
                    pElement.setAttribute("class", "new-post-passage");
                    pElement.setAttribute("onfocus", "nextElem3(this)");
                    document.querySelector(".new-post-container").appendChild(pElement).focus();  
                } 
            case 8:    if(ka.innerHTML===""){
                ka.remove()
               }
        }*/

       /* if(e1.keyCode===13){
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

        else {
            if(e1.keyCode===8){
                //create a global p element:
               if(ka.innerHTML===""){
                ka.remove()
               }
            }
       
           
           // addClassF();
        } */

        
    })
    

}

function nextElem2(k1){
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




