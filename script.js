/*let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');*/

/*window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}*/
let element = document.getElementById('elementId');
if (element) {
  element.classList.add('fa-times');
}
document.addEventListener('DOMContentLoaded', (event) => {
  let element = document.getElementById('elementId');
  if (element) {
    element.classList.add('active');
  }
});


/*menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});*/
let menu = document.getElementById('#menu-bar');
if (menu) {
  menu.addEventListener('click', function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
}
document.getElementById('menu-bar')?.addEventListener('click', function() {
  menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});



/*searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});*/
/*let searchBtn = document.getElementById('search-btn');
if (searchBtn) {
  searchBtn.addEventListener('click', function() {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
  });
}
document.getElementById('search-btn')?.addEventListener('click', function() {
  searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});*/

    // Select the elements
    const searchBtn = document.getElementById('search-btn');
    const loginBtn = document.getElementById('login-btn');
    const searchBarContainer = document.getElementById('search-bar-container');
    const loginFormContainer = document.getElementById('login-form-container');
    const closeForm = document.getElementById('form-close');

    // Toggle search bar visibility
    searchBtn.addEventListener('click', () => {
        searchBarContainer.style.display = searchBarContainer.style.display === 'none' || searchBarContainer.style.display === '' ? 'block' : 'none';
        // Ensure login form is hidden when search is opened
        loginFormContainer.style.display = 'none';
    });

    // Toggle login form visibility
    loginBtn.addEventListener('click', () => {
        loginFormContainer.style.display = loginFormContainer.style.display === 'none' || loginFormContainer.style.display === '' ? 'block' : 'none';
        // Ensure search bar is hidden when login is opened
        searchBarContainer.style.display = 'none';
    });

    // Close login form when close icon is clicked
    closeForm.addEventListener('click', () => {
        loginFormContainer.style.display = 'none';
    });
  searchBtn.addEventListener('click',()=>{
    console.log('Search button Clicked')
  })


/*formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});*/
let formBtn = document.getElementById('#login-btn');
if (formBtn) {
  formBtn.addEventListener('click', function() {
    loginForm.classList.add('active');
  });
}
document.getElementById('login-btn')?.addEventListener('click', function() {
  loginForm.classList.add('active');
});


/*formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});*/
let formClose = document.getElementById('form-close');
if (formClose) {
  formClose.addEventListener('click', function() {
    loginForm.classList.remove('active');
  });
}
document.getElementById('form-close')?.addEventListener('click', function() {
  loginForm.classList.remove('active');
});


/*const videoBtn=document.querySelector('.vifeo-btn');
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});*/


/*var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});*/

console.log('swiper is intializing')

const swiper=new Swiper('.swiper-container',{
  loop:true,
  pagination:{
    El:'.swiper-pagination',
    clickable:true,
  },
  navigation:{
    nextEl:'.swiper-button-next',
    precEl:'.swiper-button-prev',
  },
 on:{
  slideChange:function(){
    const activeIndex=this.realIndex;
    updateActiveButton(activeIndex);
  },
 },
});
// Select all video buttons and the video element
const videoButtons = document.querySelectorAll('.vid-btn');
//const videoSlider = document.getElementById('video-slider');//

// Loop through all video buttons and add click event listeners
videoButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the video source from the clicked button
        const index = this.getAttribute('data-index');
        swiper.slideTo(index);
        updateActiveButton(index);
      
    });
});
function updateActiveButton(index){
   videoButtons.forEach(btn => btn.classList.remove('active'));
   videoButtons[index].classList.add('actlive');
}
