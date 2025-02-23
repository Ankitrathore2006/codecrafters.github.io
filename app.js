let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

nextBtn.onclick = () => {
    active = active + 1;
    setSlider();
}

prevBtn.onclick = () => {
    active = active - 1;
    setSlider();
}

const setSlider = () => {
    let oldActive = document.querySelector('.slider .list .item.active');
    if(oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
    // Show/Hide buttons based on active position
    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');
    if(active == lastPosition) nextBtn.classList.add('d-none');
    if(active == firstPosition) prevBtn.classList.add('d-none');
}

setSlider();

// Set diameter
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter + 'px');
}

setDiameter();
window.addEventListener('resize', () => {
    setDiameter();
})

// Automatic slider transition every 5 seconds
setInterval(() => {
    active = active + 1;
    if (active > lastPosition) {
        active = firstPosition; // Reset to first slide after last one
    }
    setSlider();
}, 70000); // seconds interval




document.addEventListener("DOMContentLoaded", () => {
    const sliderList = document.querySelector(".slider .list");
    const navigator = document.querySelector(".navigation");

    let lastScrollY = window.scrollY; // Store previous scroll position

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            let currentScrollY = window.scrollY;

            if (entry.isIntersecting && currentScrollY <= 300) {
                // Show sliderList and hide navigator when in viewport and near top
                sliderList.classList.add("show");
                navigator.classList.remove("show");
            } else if (currentScrollY < lastScrollY) { 
                // If scrolling up, show the sliderList again
                sliderList.classList.add("show");
            } else {
                // If scrolling down, hide sliderList and show navigator
                sliderList.classList.remove("show");
                navigator.classList.add("show");
            }

            lastScrollY = currentScrollY; // Update scroll position for next event
        });
    }, { threshold: 0.5 }); // Adjusted threshold to trigger more effectively

    observer.observe(sliderList);

    // Extra fix: Ensure correct visibility when page loads at a scrolled position
    if (window.scrollY > 300) {
        sliderList.classList.remove("show");
        navigator.classList.add("show");
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.display = "block";
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    document.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
    });
  
    document.addEventListener("mousedown", () => {
      cursor.style.width = "30px";
      cursor.style.height = "30px";
    });
  
    document.addEventListener("mouseup", () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
    });
  });

  
  const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
