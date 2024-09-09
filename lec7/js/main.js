(window.addEventListener("scroll",function(){
    var navbar = document.querySelector(".navbar");
    var myScroll = window.scrollY;
    if(myScroll>300){
        navbar.classList.remove("bg-dark")
        navbar.classList.add("bg-success")
    }else{
        navbar.classList.remove("bg-success")
        navbar.classList.add("bg-dark")
    }
}))();

function myFun(){
    alert("Hi");
}

function myDemo(){
    var demo = new Date();
    document.querySelector("#nada").innerHTML=demo.toLocaleTimeString();
}

