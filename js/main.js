AOS.init({
	duration: 800,
	easing: 'slide'
});

(function($) {

   "use strict";

   $(window).stellar({
   responsive: true,
   parallaxBackgrounds: true,
   parallaxElements: true,
   horizontalScrolling: false,
   hideDistantElements: false,
   scrollProperty: 'scroll'
 });


   var fullHeight = function() {

	   $('.js-fullheight').css('height', $(window).height());
	   $(window).resize(function(){
		   $('.js-fullheight').css('height', $(window).height());
	   });

   };
   fullHeight();

   // loader
   var loader = function() {
	   setTimeout(function() { 
		   if($('#ftco-loader').length > 0) {
			   $('#ftco-loader').removeClass('show');
		   }
	   }, 1);
   };
   loader();

   // Scrollax
  $.Scrollax();



  // Burger Menu
   var burgerMenu = function() {

	   $('body').on('click', '.js-fh5co-nav-toggle', function(event){

		   event.preventDefault();

		   if ( $('#ftco-nav').is(':visible') ) {
			   $(this).removeClass('active');
		   } else {
			   $(this).addClass('active');	
		   }

		   
		   
	   });

   };
   burgerMenu();


   var onePageClick = function() {


	   $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	   event.preventDefault();

	   var href = $.attr(this, 'href');

	   $('html, body').animate({
		   scrollTop: $($.attr(this, 'href')).offset().top - 70
	   }, 500, function() {
		   // window.location.hash = href;
	   });
	   });

   };

   onePageClick();
   

   var carousel = function() {
	   $('.home-slider').owlCarousel({
	   loop:true,
	   autoplay: true,
	   margin:0,
	   animateOut: 'fadeOut',
	   animateIn: 'fadeIn',
	   nav:false,
	   autoplayHoverPause: false,
	   items: 1,
	   navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	   responsive:{
		 0:{
		   items:1
		 },
		 600:{
		   items:1
		 },
		 1000:{
		   items:1
		 }
	   }
	   });
   };
   carousel();

   $('nav .dropdown').hover(function(){
	   var $this = $(this);
	   // 	 timer;
	   // clearTimeout(timer);
	   $this.addClass('show');
	   $this.find('> a').attr('aria-expanded', true);
	   // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
	   $this.find('.dropdown-menu').addClass('show');
   }, function(){
	   var $this = $(this);
		   // timer;
	   // timer = setTimeout(function(){
		   $this.removeClass('show');
		   $this.find('> a').attr('aria-expanded', false);
		   // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		   $this.find('.dropdown-menu').removeClass('show');
	   // }, 100);
   });


   $('#dropdown04').on('show.bs.dropdown', function () {
	 console.log('show');
   });

   // scroll
   var scrollWindow = function() {
	   $(window).scroll(function(){
		   var $w = $(this),
				   st = $w.scrollTop(),
				   navbar = $('.ftco_navbar'),
				   sd = $('.js-scroll-wrap');

		   if (st > 150) {
			   if ( !navbar.hasClass('scrolled') ) {
				   navbar.addClass('scrolled');	
			   }
		   } 
		   if (st < 150) {
			   if ( navbar.hasClass('scrolled') ) {
				   navbar.removeClass('scrolled sleep');
			   }
		   } 
		   if ( st > 350 ) {
			   if ( !navbar.hasClass('awake') ) {
				   navbar.addClass('awake');	
			   }
			   
			   if(sd.length > 0) {
				   sd.addClass('sleep');
			   }
		   }
		   if ( st < 350 ) {
			   if ( navbar.hasClass('awake') ) {
				   navbar.removeClass('awake');
				   navbar.addClass('sleep');
			   }
			   if(sd.length > 0) {
				   sd.removeClass('sleep');
			   }
		   }
	   });
   };
   scrollWindow();

   

   var counter = function() {
	   
	   $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

		   if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

			   var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
			   $('.number').each(function(){
				   var $this = $(this),
					   num = $this.data('number');
					   console.log(num);
				   $this.animateNumber(
					 {
					   number: num,
					   numberStep: comma_separator_number_step
					 }, 7000
				   );
			   });
			   
		   }

	   } , { offset: '95%' } );

   }
   counter();


   var contentWayPoint = function() {
	   var i = 0;
	   $('.ftco-animate').waypoint( function( direction ) {

		   if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
			   
			   i++;

			   $(this.element).addClass('item-animate');
			   setTimeout(function(){

				   $('body .ftco-animate.item-animate').each(function(k){
					   var el = $(this);
					   setTimeout( function () {
						   var effect = el.data('animate-effect');
						   if ( effect === 'fadeIn') {
							   el.addClass('fadeIn ftco-animated');
						   } else if ( effect === 'fadeInLeft') {
							   el.addClass('fadeInLeft ftco-animated');
						   } else if ( effect === 'fadeInRight') {
							   el.addClass('fadeInRight ftco-animated');
						   } else {
							   el.addClass('fadeInUp ftco-animated');
						   }
						   el.removeClass('item-animate');
					   },  k * 50, 'easeInOutExpo' );
				   });
				   
			   }, 100);
			   
		   }

	   } , { offset: '95%' } );
   };
   contentWayPoint();

   // magnific popup
   $('.image-popup').magnificPopup({
   type: 'image',
   closeOnContentClick: true,
   closeBtnInside: false,
   fixedContentPos: true,
   mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	gallery: {
	 enabled: true,
	 navigateByImgClick: true,
	 preload: [0,1] // Will preload 0 - before current, and 1 after the current image
   },
   image: {
	 verticalFit: true
   },
   zoom: {
	 enabled: true,
	 duration: 300 // don't foget to change the duration also in CSS
   }
 });

 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
   disableOn: 700,
   type: 'iframe',
   mainClass: 'mfp-fade',
   removalDelay: 160,
   preloader: false,

   fixedContentPos: false
 });





})(jQuery);
// Smooth reveal animation for elements
const observerOptions = {
	threshold: 0.1,
	rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add('visible');
		entry.target.style.transform = 'translateY(0)';
		entry.target.style.opacity = '1';
	  }
	});
  }, observerOptions);
  
  document.querySelectorAll('.blog-entry, .about-info, .skill-mf, .heading-section').forEach(el => {
	el.style.transform = 'translateY(50px)';
	el.style.opacity = '0';
	el.style.transition = 'all 0.6s ease-out';
	observer.observe(el);
  });
  
  // Animate progress bars when in view
  document.querySelectorAll('.progress-bar').forEach(bar => {
	observer.observe(bar);
	bar.style.width = '0%';
  });
  
  // Enhanced scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();
	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	  });
	});
  });
  // About section animations
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about-section');
    
    // Parallax effect for floating shapes
    document.addEventListener('mousemove', function(e) {
        if(!aboutSection) return;
        
        const shapes = document.querySelectorAll('.shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach(shape => {
            const shiftX = (mouseX - 0.5) * 30;
            const shiftY = (mouseY - 0.5) * 30;
            
            shape.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
        });
    });
});
// Enhanced progress bar animation
const progressObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		const progressBar = entry.target;
		const targetWidth = progressBar.getAttribute('aria-valuenow') + '%';
		setTimeout(() => {
		  progressBar.style.width = targetWidth;
		  progressBar.style.opacity = '1';
		}, 200);
	  }
	});
  }, { threshold: 0.1 });
  
  // Observe all progress bars
  document.querySelectorAll('.progress-bar').forEach(bar => {
	bar.style.width = '0%';
	bar.style.opacity = '0';
	progressObserver.observe(bar);
  });
  // Enhanced typing animation
function initTypeAnimation() {
    const typingElement = document.getElementById('typing-animation');
    const texts = [
        'AI/ML Engineer',
        'Data Analyst',
        'Deep Learning Enthusiast'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = 2000; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingDelay = 200;
        } else {
            typingDelay = isDeleting ? 50 : 100;
        }

        setTimeout(type, typingDelay);
    }

    type();
}

// Initialize typing animation when document is ready
document.addEventListener('DOMContentLoaded', initTypeAnimation);

// Enhanced navbar scroll behavior
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.ftco-navbar-light');
    if (window.scrollY > 100) {
        navbar.style.padding = '15px 0';
        navbar.style.background = 'rgba(0, 0, 0, 0.95) !important';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = 'rgba(0, 0, 0, 0.85) !important';
    }
});
// Add particle effect
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2-6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        particlesContainer.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initTypeAnimation();
});
