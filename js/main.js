var btn = document.querySelectorAll(".main .contain .features button")
var div = document.querySelectorAll(".main .contain .features .panel div")
for (let i=0; i<btn.length;i++){
    btn[i].onclick=function(){
        for(let j=0; j<div.length;j++){
            div[j].classList.remove("active")
            btn[j].classList.remove("active")
        }
        div[i].classList.add("active")
        this.classList.add("active")
    }
}
