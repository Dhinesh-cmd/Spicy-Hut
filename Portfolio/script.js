// toggle-theme saves browser reaload
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark"; // default is dark
  const html = document.documentElement;
  const icon = document.getElementById("themeIcon");
  html.setAttribute("data-theme", savedTheme);
  if (savedTheme === "dark") {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
  //________________________________________________
  //  toggle-theme function
   function toggleTheme() {
      const html = document.documentElement;
      const icon = document.getElementById("themeIcon");
      const current = html.getAttribute("data-theme");
      const databaseImg = document.getElementById('database-img');
      const frontendImg = document.getElementById('frontend-img');
      const backendImg = document.getElementById('backend-img');

      if (current === "dark") {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      } 
      else {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        
      }
    }

    document.querySelector(".fa-solid").addEventListener("click", () => {
      document.querySelector(".nav-links").classList.toggle("show");
    });

    // Scroll Function Start --

    const scroll = document.getElementById('scroll');
    scroll.addEventListener('click', ()=>{
      document.getElementById('what-i-do').scrollIntoView({
        behavior: 'smooth'
      })
    })

  // heart-icon click effect

const heartIcon = document.getElementById('heart-icon');
const footerHeartIcon = document.getElementById('footer-heart-icon');

function toggleHeartIcon(icon) {
  icon.classList.toggle('fa-solid');
  icon.style.color = 'red';
}

heartIcon.addEventListener('click', () => toggleHeartIcon(heartIcon));
footerHeartIcon.addEventListener('click', () => toggleHeartIcon(footerHeartIcon));



//   Email validation

const submitButton = document.getElementById('form-submit-btn');
const userName = document.getElementById('userName');
const userNameError = document.getElementById('userNameError');
const userEmailError = document.getElementById('userEmailError');
const email = document.getElementById('userEmail');
const userMsg = document.getElementById('userMsg');
const userMsgError = document.getElementById('userMsgError');

const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z][a-zA-Z0-9.-]*\.[a-zA-Z]{2,}$/;

submitButton.addEventListener('click', function(e) {
  e.preventDefault();

  const isNameValid = userNameValidation();
  const isEmailValid = emailValidation();
  const isMsgValid = msgValidation();

  if (isNameValid && isEmailValid && isMsgValid) {
    userName.value = '';
    email.value = '';
    userMsg.value = '';

    userName.style.border = '';
    email.style.border = '';
    userMsg.style.border = '';

    showSuccessPopup();
  }
});

userName.addEventListener('input', userNameValidation);
email.addEventListener('input', emailValidation);
userMsg.addEventListener('input', msgValidation);

function userNameValidation() {
  if (userName.value.trim() === '') {
     setTimeout(() => {
         userNameError.textContent = '';
    userName.style.border = '';
      }, 3000);
    userNameError.textContent = 'Name Should be Filled';
    userName.style.border = '2px solid red';
    return false;
  } else if (specialCharPattern.test(userName.value)) {
    userNameError.textContent = 'Special characters are not allowed';
    userName.style.border = '2px solid red';
     setTimeout(() => {
         userNameError.textContent = '';
    userName.style.border = '';
      }, 3000);
    return false;
  } else {
    userNameError.textContent = '';
    userName.style.border = '2px solid green';
    return true;
  }
}

function emailValidation() {
  if (email.value.trim() === '') {
    userEmailError.textContent = 'Email Should be Filled';
    email.style.border = '2px solid red';
     setTimeout(() => {
         userEmailError.textContent = '';
    email.style.border = '';
      }, 3000);
    return false;
  } else if (!emailPattern.test(email.value.trim())) {
    userEmailError.textContent = 'Enter a Valid Email';
    email.style.border = '2px solid red';
       setTimeout(() => {
         userEmailError.textContent = '';
    email.style.border = '';
      }, 3000);
    return false;
  } else {
    userEmailError.textContent = '';
    email.style.border = '2px solid green';
    return true;
  }
}

function msgValidation() {
  if (userMsg.value.trim() === '') {
    userMsgError.textContent = 'Add a Message';
    userMsg.style.border = '2px solid red';
     setTimeout(() => {
         userMsgError.textContent = '';
    userMsg.style.border = '';
      }, 3000);
    return false;
  } else {
    userMsgError.textContent = '';
    userMsg.style.border = '2px solid green';
    return true;
  }
}

function showSuccessPopup() {
  const submitBtn = document.getElementById('form-submit-btn');
  submitBtn.textContent = 'Sending...'
  const popup = document.getElementById('popup');
setTimeout(() => {
    popup.style.display = 'block';
    submitBtn.textContent = 'Sent';
    // Step 4: After 3s from "Sent" → hide popup & reset button
    setTimeout(() => {
      popup.style.display = 'none';
      submitBtn.textContent = 'Send Message';
    }, 3000);

  }, 2000);
}

// Nav bar 

function menuBar() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Remove 'open' when resizing above 540px
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    document.querySelector('.nav-links').classList.remove('open');
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
let sectionPositions = [];

// Store section positions
function updateSectionPositions() {
  sectionPositions = Array.from(sections).map(sec => ({
    id: sec.id,
    top: sec.offsetTop,
    bottom: sec.offsetTop + sec.offsetHeight
  }));
}

// Run this on load and resize
window.addEventListener("load", updateSectionPositions);
window.addEventListener("resize", updateSectionPositions);

function scrollSpy() {
  const scrollPos = window.scrollY + window.innerHeight / 2;

  let current = "";
  for (const sec of sectionPositions) {
    if (scrollPos >= sec.top && scrollPos < sec.bottom) {
      current = sec.id;
      break;
    }
  }

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

// Throttle scroll updates
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      scrollSpy();
      ticking = false;
    });
    ticking = true;
  }
});


