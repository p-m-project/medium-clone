
/*function setClass(){
    document.querySelector(".new-post-container").childNodes.setAttribute("class",".new-post-passage");
}*/
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

function nextElem2(ka){
    ka.addEventListener("keydown", (e)=>
    {
        if(e.keyCode===13){
            //create a global p element:
            if(ka.nextElementSibling){
                ka.nextElementSibling.focus();
            }
            else{
                let pElement= document.createElement("div");
                pElement.setAttribute("contenteditable", "true");
                pElement.setAttribute("class", "new-post-passage");
                pElement.setAttribute("onfocus", "nextElem2(this)");
                document.querySelector(".new-post-container").appendChild(pElement).focus();  
            }          
           // addClassF();
        } 

        if(e.keyCode===8){
            //create a global p element:
           if(ka.innerHTML===""){
            ka.remove()
           }
           
           // addClassF();
        } 
    })
    

}



