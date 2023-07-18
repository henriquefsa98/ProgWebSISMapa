function apontador(){

    const description = document.querySelector(".tooltip");

    if(description instanceof HTMLElement){
    
        document.querySelectorAll('path').forEach((el) =>
            el.addEventListener('mouseover', (event) => {
                if(event.target instanceof Element){
                    //event.target.className = ("enabled");
                    //event.target.setAttribute("class", "enabled");//faz com que os estados visitados fiquem azul...
                    description.classList.add("active");
                    description.innerHTML = event.target.id;
                    //console.log("mouseover");
                }
            })

        );

        document.querySelectorAll('path').forEach((el) =>
            el.addEventListener("mouseout", () => {
                description.classList.remove("active");
                //console.log("mouseout");
            })
        );

        document.onmousemove = function (e) {
            
            description.style.left = e.pageX + "px";
            description.style.top = (e.pageY - 70) + "px";
            //console.log("mouse move");
            
        }
    }

}


function main(){
    apontador();
}

main();
