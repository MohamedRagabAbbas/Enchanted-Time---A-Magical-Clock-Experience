let s=document.querySelector("#s")
let m=document.querySelector("#m")
let h=document.querySelector("#h")

let time=setInterval(function fun(){
    let day=new Date();
    let ss=day.getSeconds() * 6;
    let mm=day.getMinutes() * 6;
    let hh=day.getHours() * 15;

    s.style.transform=`rotate(${ss}deg)`;
    m.style.transform=`rotate(${mm}deg)`;
    h.style.transform=`rotate(${hh + mm/12}deg)`;
},1000);