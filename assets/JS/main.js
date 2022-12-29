"use strict";

$('header').css('min-height',window.innerHeight);

// loading screen 

$(document).ready(function(){

    $('#loading').fadeOut(1500,function(){
        $('html , body').css('overflow-y','auto')
    });
    
});

// navbar animation when scroll

var aboutOffset = $('.about-me').offset().top;

$(window).scroll(function(){
    if($(window).scrollTop() >= aboutOffset){	
			// show navbar
        $('.navbar').addClass('navbar-navigated');
        document.documentElement.style.setProperty('--active-color', 'black');
    }else{
            // hide navbar
        $('.navbar').removeClass('navbar-navigated');
        document.documentElement.style.setProperty('--active-color', '#fff');
    }
})





// stats counting 

var statsOffset = $('.stats').offset().top;

var happyClients = document.querySelector('.happyClients .number');
var projectsCompleted = document.querySelector('.projectsCompleted .number');
var linesOfCode = document.querySelector('.linesOfCode .number');
var awardsAchieved = document.querySelector('.awardsAchieved .number');

$(window).scroll(function(){
    if($(window).scrollTop() >= statsOffset - 400){
        setInterval(function(){
                if(happyClients.textContent < 220){
                    happyClients.textContent++;
                }
        },2)

        setInterval(function(){
                if(projectsCompleted.textContent < 700){
                    projectsCompleted.textContent++;
                }
        },2)

        setInterval(function(){
            if(linesOfCode.textContent < 1100){
                linesOfCode.textContent++;
            }
        },2)

        setInterval(function(){
            if(awardsAchieved.textContent < 160){
                awardsAchieved.textContent++;
            }
        },2)

    } 
});

// owl carousel

$('#blogs').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 500,
    margin: 30,
    responsiveClass: true,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

$('#testimonials').owlCarousel({
    items:1,
    loop: true,
    autoplay: true,
    smartSpeed:500,
})

// isotope 

let galleryImages = document.querySelectorAll('.portfolio .item-content img');

$(window).on("load", function(){
    $(".portfolio").isotope(),
    $(".portfolio-filter ul li").on("click",function(){
        galleryImages = document.querySelectorAll(`.portfolio ${ $(this).data('filter') === '*' ? '.all' : $(this).data('filter') } img`);

        $(".portfolio-filter ul li").removeClass("current-item"),
        $(this).addClass("current-item");
        var t = $(this).attr("data-filter");
        $(".portfolio").isotope({
            filter: t,
            animationOptions:{
                duration:750,
                easing:"linear",
                queue:false
            }
        })})
});

/* Start Gallery Pop-up Images */


let serachIcons = document.querySelectorAll('.icon i');

let galleryImages_paths = [];

// storing all gallery images paths

serachIcons.forEach( icon => {
    
    icon.addEventListener('click', function(e){

        for(let image of galleryImages){
            galleryImages_paths.push(image.src);
        };
        
        // create overlay element

        let overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);

        // create image box in the overlay element

        let popup_box = document.createElement('div');
        popup_box.className = 'popup-box';
        overlay.appendChild(popup_box);

        // create image element in the image box

        let popup_img = document.createElement('img');
        popup_img.className = 'popup-img';
        let clickedImg = icon.parentElement.parentElement.parentElement.firstElementChild;
        popup_img.src = clickedImg.src;
        popup_box.appendChild(popup_img);

        // create close icon in the overlay element

        let closeIcon = document.createElement('i');
        closeIcon.classList.add('fas', 'fa-times', 'fa-lg', 'close-icon');
        overlay.appendChild(closeIcon);

        // remove the overlay element when the close icon is clicked

        closeIcon.addEventListener('click', function(){
            overlay.remove();
            galleryImages_paths = [];
        });

        // create next icon in the overlay element

        let nextIcon = document.createElement('i');
        nextIcon.classList.add('fas', 'fa-caret-right', 'fa-3x', 'next-icon');
        overlay.appendChild(nextIcon);

        // change to next image 

        nextIcon.addEventListener('click', function(e){
            let currentImage_src = popup_img.src;
            let currentImage_index = galleryImages_paths.indexOf(currentImage_src);
            let nextImage_src = galleryImages_paths[ currentImage_index + 1 ];
            if( currentImage_index < galleryImages_paths.length - 1 ){
                popup_img.src = nextImage_src;
            }else{
                nextImage_src = galleryImages_paths[0];
                popup_img.src = nextImage_src;
            };
        });

        // create previous icon in the overlay element

        let previousIcon = document.createElement('i');
        previousIcon.classList.add('fas', 'fa-caret-left', 'fa-3x', 'previous-icon');
        overlay.appendChild(previousIcon);

        // change to previous image 

        previousIcon.addEventListener('click', function(e){
            let currentImage_src = popup_img.src;
            let currentImage_index = galleryImages_paths.indexOf(currentImage_src);
            let previousImage_src = galleryImages_paths[ currentImage_index - 1 ];
            if( currentImage_index > 0 ){
                popup_img.src = previousImage_src;
            }else{
                previousImage_src = galleryImages_paths[galleryImages_paths.length - 1];
                popup_img.src = previousImage_src;
            };
        });
        
    });
} );


/* End Gallery Pop-up Images */


/* scrollIt */

$(function(){
    $.scrollIt({
        scrollTime: 1000,
        activeClass: 'active'
    });
});

// typed.js

var typed = new Typed('#skills', {
    strings: ["Designing UI/UX.", "Designing Logos.", "Creating Websites."],
    typeSpeed: 40,
    backSpeed: 40,
    smartBackspace: false,
    backDelay: 1000,
    loop: true,
});


// particles.js 

particlesJS("particles-js", {"particles":{"number":{"value":150,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":50,"height":50}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);







