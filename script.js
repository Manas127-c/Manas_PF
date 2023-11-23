// function locomotivejs() {
//     gsap.registerPlugin(ScrollTrigger);
//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);
//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
// }

// locomotivejs();

function cursor() {
    let cursor = document.querySelector("#cursor")
    let main = document.querySelector("body")
    main.addEventListener("mousemove", function(dets) {
        cursor.style.scale = 1;
        cursor.style.opacity = 1;
        let ydiff = dets.y;
        let xdiff = dets.x;
        gsap.to(cursor, {
            ease: Power3,
            top: ydiff - 8,
            left: xdiff - 8,
        })
    })
    main.addEventListener("mouseleave", function() {
        cursor.style.scale = 0;
        cursor.style.opacity = 0;
    })
    let te = document.querySelectorAll("button")
    let img = document.querySelector("#img")
    let btn = document.querySelector("#rightp3 form #btn")
    te.forEach(v => {

        v.addEventListener("mouseleave", () => {
            cursor.style.display = "block"
        });
        v.addEventListener("mousemove", () => {
            cursor.style.display = "none"
        });
    })
    img.addEventListener("mouseleave", () => {
        cursor.style.display = "block"
    });
    img.addEventListener("mousemove", () => {
        cursor.style.display = "none"
    });
    btn.addEventListener("mouseleave", () => {
        cursor.style.display = "block"
        console.log("hi")
    });
    btn.addEventListener("mousemove", () => {
        cursor.style.display = "none"
    });
}
cursor();

// function loader() {
//     var tl = gsap.timeline()

//     function time() {
//         var a = 0
//         setInterval(function() {
//             a = a + Math.floor(Math.random() * 15)
//             if (a < 100) {
//                 document.querySelector("#loader h1").innerHTML = a + "%"
//             } else {
//                 a = 100
//                 document.querySelector("#loader h1").innerHTML = a + "%"
//             }
//         }, 150)
//     }
//     tl.to("#loader h1", {
//         delay: 1,
//         onStart: time()
//     })
//     tl.to("#loader", {
//         top: "-100vh",
//         delay: 1.5,
//         duration: 2
//     })
// }
// loader();

function textanimation() {
    var typed = new Typed("#auto", {
        strings: ["Web Devloper", "Web Designer", "UI/UX Designer"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
    });
}
textanimation()

function sheryjs1() {
    Shery.imageEffect("#img", {
        style: 5,
        config: {
            "a": { "value": 2, "range": [0, 30] },
            "b": { "value": 1, "range": [-1, 1] },
            "zindex": {
                "value": -9996999,
                "range": [-9999999, 9999999]
            },
            "aspect": { "value": 1 },
            "ignoreShapeAspect": { "value": false },
            "shapePosition": { "value": { "x": 0, "y": 0 } },
            "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
            "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
            "shapeRadius": { "value": 0.5, "range": [0, 2] },
            "currentScroll": { "value": 0 },
            "scrollLerp": { "value": 0.07 },
            "gooey": { "value": true },
            "infiniteGooey": { "value": true },
            "growSize": { "value": 4, "range": [1, 15] },
            "durationOut": { "value": 1, "range": [0.1, 5] },
            "durationIn": { "value": 1.5, "range": [0.1, 5] },
            "displaceAmount": { "value": 0.5 },
            "masker": { "value": false },
            "maskVal": { "value": 1, "range": [1, 5] },
            "scrollType": { "value": 0 },
            "geoVertex": { "range": [1, 64], "value": 1 },
            "noEffectGooey": { "value": false },
            "onMouse": { "value": 1 },
            "noise_speed": { "value": 0.2, "range": [0, 10] },
            "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 4 } },
            "discard_threshold": { "value": 0.5, "range": [0, 1] },
            "antialias_threshold": { "value": 0, "range": [0, 0.1] },
            "noise_height": { "value": 0.5, "range": [0, 2] },
            "noise_scale": { "value": 10, "range": [0, 100] }
        },
        gooey: true
    })
}
sheryjs1()

function navigation() {
    let page = document.querySelectorAll(".page");
    let anchor = document.querySelectorAll("#anchor a");
    window.onscroll = () => {
        page.forEach(e => {
            let top = window.scrollY;
            let offset = e.offsetTop - 150;
            let height = e.offsetHeight;
            let id = e.getAttribute('id');
            if (top >= offset && top < offset + height) {
                anchor.forEach(a => {
                    a.classList.remove('active');
                    document.querySelector('header #anchor a[href*=' + id + ']').classList.add('active');
                })
            };
        })
    }
}
navigation();