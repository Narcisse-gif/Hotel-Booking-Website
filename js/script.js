const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const buttonBtn = document.getElementsByClassName("btn");
const hotelDetails = document.getElementById("particularity");


menuBtn.addEventListener("click", (e) => {  
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    distance: "5opx",
    origin: "bottom",
    duration: 1000,
};

// home container
ScrollReveal().reveal(".header_container .section_subheader", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header_container .btn", {
    ...scrollRevealOption,
    delay:1000,
});

// room container
ScrollReveal().reveal(".room_card", {
    ...scrollRevealOption,
    interval:500,
});

// feature container
ScrollReveal().reveal(".feature_card", {
    ...scrollRevealOption,
    interval:500,
});

// news container
ScrollReveal().reveal(".news_card", {
    ...scrollRevealOption,
    interval:500,
});

function openPoppup(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form elements
    const arrival = document.querySelector('input[placeholder="Your Arrival Date"]');
    const departure = document.querySelector('input[placeholder="Your Departure Date"]');
    const adults = document.querySelector('input[placeholder="Adults"]');
    const children = document.querySelector('input[placeholder="Children"]');
    
    // Check if all inputs are filled
    if (arrival.value && departure.value && adults.value && children.value) {
      document.getElementById('poppup').classList.add('open-poppup');
    } else {
      alert("Please fill all the fields before booking.");
    }
  }

  function closePoppup() {
    document.getElementById('poppup').classList.remove('open-poppup');
    if(closePoppup){
        document.getElementById("bookingForm").reset();
    }
  }

function openPoppup1(event){
    event.preventDefault();

    const book = document.getElementById("poppup1");

    if(openPoppup1){
        document.getElementById("poppup1").classList.add("open-poppup1");
    }
}
function closePoppup1() {
    document.getElementById('poppup1').classList.remove('open-poppup1');
    if(closePoppup1){
        document.getElementById("open-poppup1").classList.remove();
    }
  }
