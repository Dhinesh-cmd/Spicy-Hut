//copy Menu for mobile
function copyMenu() {
  //copy inside .dpt-cat to .departments
  const dptCategory = document.querySelector('.dpt-cat');
  const dptPlace = document.querySelector('.departments');
  dptPlace.innerHTML = dptCategory.innerHTML;

  //copy inside nav to nav
  const mainNav = document.querySelector('.header-nav nav');
  const navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainNav.innerHTML;

  //copy .header-top .wrapper to .thetop-nav
  const topNav = document.querySelector('.header-top .wrapper');
  const topPlace = document.querySelector('.off-canvas .thetop-nav');
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();


//show mobile menu
const menuButton = document.querySelector('.trigger'),
  closeButton = document.querySelector('.t-close'),
  addclass = document.querySelector('.site');

menuButton.addEventListener('click', function () {
  addclass.classList.toggle('showmenu');
});

closeButton.addEventListener('click', function () {
  addclass.classList.remove('showmenu');
});


//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');

submenu.forEach((menu) => {
  menu.addEventListener('click', toggle);
});

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) => {
    if (item !== this) {
      item.closest('.has-child').classList.remove('expand');
    }
  });
  this.closest('.has-child').classList.toggle('expand');
}

// Swiper

const swiper = new Swiper('.swiper', {
  loop: false, // keep false if you want continuous scroll, true will snap
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: {
    forceToAxis: true,
  },
  // Allow smooth drag / trackpad movement
  freeMode: {
    enabled: true,
    sticky: false,   // if true → it will "stick" near a slide
    momentum: true,  // smooth momentum after release
  },
  slidesPerView: 1,  // adjust if you want multiple slides visible
  spaceBetween: 20,  // optional spacing
});


// search visible


//show search
const searchButton = document.querySelector('.t-search'),
  tClose = document.querySelector('.search-close'),
  showClass = document.querySelector('.site');

  searchButton.addEventListener('click', function (e) {
    e.preventDefault();  
  showClass.classList.toggle('showsearch')
})

tClose.addEventListener('click', function (e) {
  e.preventDefault();  
  showClass.classList.remove('showsearch')
})
