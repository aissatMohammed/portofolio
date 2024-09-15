var typed=new Typed(".typing",{
    strings:["web Designer","Web Devloper","Graphic Designer","Linkdean"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav = document.querySelector(".nav"),
navlist=nav.querySelectorAll("li"),
totalNavlist=navlist.length,
allsection=document.querySelectorAll(".section"),
totalsection=allsection.length;
for(let i=0;i<totalNavlist;i++){
    const a =navlist[i].querySelector("a");
    a.addEventListener("click",function(){
        for(let i=0;i<totalsection;i++){
            allsection[i].classList.remove("back-section");
        }
        for(let j=0;j<totalNavlist;j++){
            if(navlist[j].querySelector("a").classList.contains("active")){
                allsection[j].classList.add("back-section")
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })}
    function showSection(element){
        for(let i=0;i<totalsection;i++){
            allsection[i].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
document.querySelector("#"+target).classList.add("active")
    }
const navTogglerBtn=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>{
    asideSectionToglerBtn();
})
function asideSectionToglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}
document.querySelector(".hire-me").addEventListener("click",function(){
    console.log(this)
})
