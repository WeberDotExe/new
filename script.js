
var loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 4200)

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
var scr = document.querySelector("#scroller")

elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})
scr.addEventListener("mouseenter",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elemm,h2")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        // console.log(image)
        fixed.style.backgroundImage = `url(${image})`
    })
})


gsap.to("#page2",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top -30%",
        end:"top -120%",
        scrub:2
    }

})

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+30+"px"
    crsr.style.top =dets.y+"px"
    blur.style.left=dets.x -200 +"px"
    blur.style.top =dets.y -200 +"px"
})

var main2 = document.querySelector("#main-2");
main2.addEventListener("mouseenter",function(){
    crsr.style.display = "block"
    blur.style.display = "block"
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 30%",
        end:"top 25%",
        scrub:5
    }
})

gsap.from(".card",{
    scale:0.8, 
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})

gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
    }
})
gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
    }
})

gsap.from("#page4 h1",{
    y:60,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
        }
})

gsap.to("#page5 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        scrub:4,
        pin:true
    }
})

gsap.to("#page6",{
    backgroundColor : "#F5E41B",
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        start:"top 30%",
        end:"top 70%",
        scrub:2
    }

})

gsap.to("#def1 h1 " ,{
    y:50,
    opacity:1,
    // backgroundColor : "#fff",
    scrollTrigger:{
        trigger:"#def1 h1 ",
        scroller:"body",
        start:"top 10%",
        end:"top 50%",
        scrub:2
    }

})
gsap.to("#t1 p ",{
    y:50,
    opacity:1,
    // backgroundColor : "#fff",
    scrollTrigger:{
        trigger:"#t1 p ",
        scroller:"body",
        start:"top 10%",
        end:"top 50%",
        scrub:3
    }

})
gsap.to("#def2 p" ,{
    y:-10,
    opacity:1,
    // backgroundColor : "red",
    scrollTrigger:{
        trigger:"#page6 #f-half",
        scroller:"body",
        start:"top 0%",
        end:"top 40%",
        scrub:3
    }

})
gsap.to("#t2 h1 " ,{
    y:-10,
    opacity:1,
    // backgroundColor : "red",
    scrollTrigger:{
        trigger:"#t2 h1 ",
        scroller:"body",
        start:"top 55%",
        end:"top 80%",
        scrub:4
    }

})
