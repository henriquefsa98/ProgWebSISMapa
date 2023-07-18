
function apontador(){



    const description = document.querySelector(".tooltip");

    if(description){
    
        document.querySelectorAll('path').forEach((el) =>
            el.addEventListener('mouseover', (event) => {
                if(event instanceof HTMLElement){
                    event.target.className = ("enabled");
                    description.classList.add("active");
                    description.innerHTML = event.target.id;
                }
            })

        );

        document.querySelectorAll('path').forEach((el) =>
            el.addEventListener("mouseout", () => {
                description.classList.remove("active");
            })
        );

        document.onmousemove = function (e) {
            description.style.left = e.pageX + "px";
            description.style.top = (e.pageY - 70) + "px";
        }
    }

}
function main(){
    apontador();
}

main();
