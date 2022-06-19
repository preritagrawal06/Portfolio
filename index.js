console.log("portfolio")
let typed = new Typed(".welcome",{
    strings: ["Hello,","नमस्ते,","ନମସ୍କାର,","নমস্কার,","வணக்கம்,","నమస్కరం,","Bonjour,","Hola,"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

let scrollTop = document.getElementsByClassName('scrollTop')[0]

window.onscroll = function () {
    scrollFunction();
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop>20){
        scrollTop.style.width = '30px';
        scrollTop.style.transition = 'width 0.5s linear';
    }
    else{
        scrollTop.style.width = '0';
    }
}

scrollTop.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

let hamburger = document.getElementsByClassName('hamburger')[0]
let navbar = document.getElementsByClassName('navbar-links')[0]

hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    let barTop = document.getElementsByClassName('bars')[0]
    let barMid = document.getElementsByClassName('bars')[1]
    let barBottom = document.getElementsByClassName('bars')[2]
    barTop.classList.toggle('top');
    barMid.classList.toggle('mid');
    barBottom.classList.toggle('bottom');
})