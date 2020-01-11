var tl = new TimelineMax({onUpdate:updatePrecentage});
const controller = new ScrollMagic.Controller();

tl.from(".navbar-logo", .4, {x:200, opacity:0});
tl.from(".navbar-nav", .5, {x:200, opacity:0});
tl.from(".mobil", .6, {y:200, opacity:0});
tl.from(".copyright", .6, {x:200, opacity:0});
tl.from(".language", .6, {x:200, opacity:0});
tl.from(".lampu", .1, {y:200, opacity:0});

const scene = new ScrollMagic.Scene({
    triggerElement: ".home",
    triggerHook: "onLeave",
    duration: "0%" 
   
})
    .setPin(".home")
    .setTween(tl)
        .addTo(controller);

function updatePrecentage(){
    tl.progress();
    console.log(tl.progress);
}


var tl2 = new TimelineMax({onUpdate:updatePrecentage});


tl2.from(".title-one", .4, {x:100, opacity:0});
tl2.from(".title-two", .5, {x:100, opacity:0});
tl2.from(".paragraf-one", .6, {x:100, opacity:0});
tl2.from(".vid", .6, {x:-100, opacity:0});

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".introduced",
    triggerHook: "onEnter",
    duration: "130%", 
    offset: "100"
})
    .setPin(".introduced")
    .setTween(tl2)
        .addTo(controller);

function updatePrecentage(){
    tl2.progress();
    console.log(tl2.progress);
}