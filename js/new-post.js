

          // document.querySelector(".new-post-passage").nextSibling.focus();

          function function1(er){
              er.addEventListener("keydown",(e)=>{
                //create a global textarea element:
                let pElement= document.createElement("textarea");
                pElement.setAttribute("class", "new-post-passage");
                pElement.setAttribute("contenteditable", "true");
                pElement.setAttribute("onclick", "function1(this)")
                //if users presses Enter, a new p element will be aded to element
                if(e.keyCode===13){
                        //document.querySelector(".new-post-container").appendChild(pElement).focus();  
                        console.log()  
                    } 
               })
          }

/*document.querySelector(".new-post-container").activeElement.addEventListener("keydown",(e)=>{
    //create a global textarea element:
    let pElement= document.createElement("textarea");
    pElement.setAttribute("class", "new-post-passage");
    pElement.setAttribute("contenteditable", "true");
    //if users presses Enter, a new p element will be aded to element
    if(e.keyCode===13){
            document.querySelector(".new-post-container").appendChild(pElement).focus();        
        } 
})*/