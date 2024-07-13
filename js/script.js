$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
});




// Function to update the data-width attribute for all Twitter timelines
function updateTwitterTimelineWidth() {
  const twitterTimelines = document.querySelectorAll('.twitter-timeline');
  const newWidth = window.matchMedia('(max-width: 998px)').matches ? '98vw' : '330px';
  twitterTimelines.forEach(timeline => {
    timeline.setAttribute('data-width', newWidth);
  });
  
  twttr.widgets.load();
}

updateTwitterTimelineWidth();

window.matchMedia('(max-width: 998px)').addEventListener('change', updateTwitterTimelineWidth);


//// NAV START 

// NAV 

let hamburger = document.querySelector('.hamb-main');
let navbar = document.querySelector('.nav');
let nav_ul = document.querySelector('.ul-nav');
let hamb1 = document.querySelector('.h-resp1');
let hamb2 = document.querySelector('.h-resp2');
let header = document.querySelector('.header');


hamburger.addEventListener("click", ()=>{
    navbar.classList.toggle('nav-resp');
    nav_ul.classList.toggle('ul-resp');
    
    if (header.classList.contains("head-resp")){

        header.classList.remove("head-resp");
    } else {
        header.classList.add("head-resp");
    }

});

// nav end 



// hamburger delay 

document.addEventListener('DOMContentLoaded', () => {
  const hambMain = document.querySelector('.hamb-main');
  const header = document.querySelector('.header');
   
  hambMain.addEventListener('click', () => {
      const dropmenu = document.querySelectorAll('.ul-delay');
      header.style.backgroundColor = '#FF7F02'; 
  
      dropmenu.forEach(dropElement => {
    
          setTimeout(() => {
              if (dropElement.classList.contains('visible')) {
                  dropElement.classList.remove('visible');
                  header.style.backgroundColor = 'transparent';
              } else {
                  dropElement.classList.add('visible');
              }
          }, 300);
      });
  });
});


// hamburger delay end




const nav = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
      nav.classList.add('scrolled');
  } else {
      nav.classList.remove('scrolled');
  }
});



// Hover for about 


document.addEventListener('DOMContentLoaded', () => {
  const hambMain = document.querySelector('.dropdown');
   
  hambMain.addEventListener('click', () => {
      const dropmenu = document.querySelectorAll('.dropdown-menu'); 
  
      dropmenu.forEach(dropElement => {
    
          
        if (dropElement.classList.contains('Dmenu')) {
            dropElement.classList.remove('Dmenu');
        } else {
            dropElement.classList.add('Dmenu');
        }
        
      });
  });
});

//// NAV END 