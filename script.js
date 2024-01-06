function cursorEffect() {
    var pageContent = document.getElementById('page1-content')
var cursor = document.querySelector('#cursor')

// using GSAP (GreenSock Animation Platform)
pageContent.addEventListener("mousemove",function(dets){
   gsap.to(cursor, {
    x:dets.x,
    y:dets.y
   })
})

pageContent.addEventListener('mouseenter', function(){
    gsap.to(cursor , {
        scale:1,
        opacity:1
    })
})             

pageContent.addEventListener('mouseleave', function(){
    gsap.to(cursor , {
        scale:0,
        opacity:0
    })
})
    
}
cursorEffect()

var swiper = new Swiper(".myswipe", {
    effect: "cards",
    grabCursor: true,
    autoplay:{
        delay:1900,
        disableOnInteraction: true,
    }
  });

// gsap.timeline()  async code --> sync

var t1 = gsap.timeline()
t1.from(".load h1",{
    x:40,
    duration:1,
    opacity:0,
    stagger:0.3
})
t1.to(".load h1",{
    opacity:0,
    x:-40,
    duration:2,
    stagger:1
})
t1.to(".load",{
    opacity:0
})
t1.to(".load",{
    display:"none"
})
t1.from("#page1-content .head span",{
    y:100,
    opacity:0,
    stagger:0.6,
    duration:0.5
})

var seatsAvailable = 10;
function showSeatsAvailable() {
    if(seatsAvailable > 0){
        document.getElementById("seats-available").innerHTML = seatsAvailable;
    }
  
}
setInterval(showSeatsAvailable, 1000); // update the number of seats available every second

// When a user clicks the "Book Seat" button, decrease the number of seats available by 1
document.getElementById("book-seat").addEventListener("click", function() {
  seatsAvailable--;
});



