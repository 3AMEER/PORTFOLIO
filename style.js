// Start Sction Portfilo
let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}


// Start JS For Botton Scroll top
var mybotton = document.getElementById('goup');

window.onscroll = function () {

    // console.log(scrollY)
    'user strict';

    if (window.pageYOffset >= 1700){
        mybotton.style.display = "block";        
    }
    else{
        mybotton.style.display = "none";        
    }

};
mybotton.onclick = function () {
    'user strict';

    window.scrollTo({
        top: 0,       
        behavior: "smooth",
    });
}



// Start Section Servise
const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show")
    });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes()
