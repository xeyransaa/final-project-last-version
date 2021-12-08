var btn = document.querySelectorAll(".main .contain .features button")
var div = document.querySelectorAll(".main .contain .features .panel .alt")
var pwdTag = document.querySelector(".main .contain .acc-form .user-input .input #pwd")
var seePwd = document.querySelector(".main .contain .acc-form .user-input .input i")
var upBtn = document.querySelector(".up-arrow a")
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
window.onscroll=function(){
    if (this.scrollY > 350){
        upBtn.classList.add("active")
    }
    else{
        upBtn.classList.remove("active")
    }
    
}


seePwd.onclick=function(){
    if (this.className != "far fa-eye active"){
        pwdTag.type="text";
        this.classList.add("active");
    }
    else{
        pwdTag.type="password";
        this.classList.remove("active")
    }
    
}

