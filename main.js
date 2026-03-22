document.addEventListener("DOMContentLoaded",() => {
    
    const elments = document.querySelectorAll("[class*='chai-']")

    elments.forEach((element) => {
       const classes = element.classList;

       classes.forEach((cls)=>{
        if(cls.startsWith("chai-")){
            const parts = cls.split("-")
            const type = parts[1];
            const value = parts[2];
         //Padding section
            if(type=='p'){
                element.style.padding = value+"px"
            }
            if (type === "pt") {
            element.style.paddingTop = value + "px";
           }
           if (type === "pb") {
            element.style.paddingBottom = value + "px";
           }
           if (type === "pl") {
            element.style.paddingLeft = value + "px";
           }
           if (type === "pr") {
            element.style.paddingRight = value + "px";
           }
           //margin section   
            if(type==="m"){
                element.style.margin= value+"px";
            }
            if (type === "mt") {
              element.style.marginTop = value + "px";
            }

            if (type === "mb") {
              element.style.marginBottom = value + "px";
            }

            if (type === "ml") {
              element.style.marginLeft = value + "px";
            }

            if (type === "mr") {
              element.style.marginRight = value + "px";
            }
            if(type==="italic"){
                element.style.fontStyle="Italic"
            }
            //background color
             if (type === "bg") {
               element.style.backgroundColor = value;
             }
             if (type === "nightmode") {
               element.style.backgroundColor = "black";
             }

             // text color
             if(type==="txtcol"){
                element.style.color=value;
             }
             if(type==="bold"){
                element.style.fontWeight="bold";
             }

             //text align
             if (type === "center") {
                element.style.textAlign = "center";

             }
             if (type === "left"){
             element.style.textAlign = "left";

             } 
             if (type === "right") {
             element.style.textAlign = "right";

             }
             if(type==="size"){
                element.style.fontSize=value+"px"
             }
             if (type === "border") {
               element.style.border = value + "px solid black";
             }

             if (type === "rounded") {
               element.style.borderRadius = value + "px";
             }
        }
       })
        
    });
})