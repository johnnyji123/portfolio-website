

const about = document.getElementById("about");
console.log(about);
const navbar = document.getElementById("navbar");
const image = document.getElementById("image");
const understand = document.getElementById("modal");
const closeModal = document.getElementById("close");
const closeButton = document.getElementById("close-button");
console.log(image)

console.log(understand)





understand.style.display = "none";
const open = () => {

    image.addEventListener("click", () => {
        if (understand.style.display = "none") {
            understand.style.display = "block";
            understand.classList.add("transition")
        }
    })
}


open();

const close = () => {
    closeModal.addEventListener("click", () => {
        understand.style.display = "none";
    })
}

close();


const buttonClose = () => {
    closeButton.addEventListener("click", () => {
        understand.style.display = "none";
    })
}

buttonClose();

// gsap.to("#understand", {duration: 1, x: 100});


const graph = document.getElementById("graph")

const fontawesomeIconsAnimation = document.querySelectorAll(".spacing-fontawesome-icons");
console.log(fontawesomeIconsAnimation)



// window.addEventListener("scroll", () => {
//     const scrolled = window.scrollY
//     fontawesomeIconsAnimation.forEach((div) => {
//         if (scrolled >= 450) {

//             div.classList.add("scrollaboutme");
//         } else {
//             div.classList.remove("scrollaboutme")
//         }
//     })
// })

const projecAnimation = document.querySelectorAll(".project-image")
console.log(projecAnimation)


// window.addEventListener("scroll",()=>{
//     const scrolled = window.scrollY
    
//     projecAnimation.forEach((project) =>{
//         if(scrolled>=1300){
//             project.classList.add("projectanimation");
//         }else {
//             project.classList.remove("projectanimation");
//         }
//     })
// })
// // const stickyGraph = graph.offsetTop;

// const animateGraph = () => {
//     if (window.scrollY >=900) {
//         graph.classList.add("animategraph")
//     } else {
//         graph.classList.remove("animategraph")
//     }
// }
// animateGraph();

window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY
    if (scrolled >= 500) {
        console.log("HELLLO")
        graph.classList.add("animategraph");
    } else {
        graph.classList.remove("animategraph");
    }
    //    console.log(scrollable)

})


const sticky = navbar.offsetTop;

const stickyNav = () => {
    if (window.scrollY >= sticky) {
        navbar.classList.add("fixed")
    } else {
        navbar.classList.remove("fixed");
    }

}


window.addEventListener("scroll", stickyNav);







