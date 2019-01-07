//Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually going to happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Change focus
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

 //Rotating Image Slider
 $(document).ready(function() {
 $('.next').on('click', function() {
  var currentImg = $('.active');
  var nextImg = currentImg.next();

  if(nextImg.length == 0) {
   nextImg = $('.slider-inner img').first();
  }

  currentImg.removeClass('active');
  nextImg.addClass('active');
 });

 $('.prev').on('click', function() {
  var currentImg = $('.active');
  var prevImg = currentImg.prev();

  if(prevImg.length == 0) {
   prevImg = $('.slider-inner img').last();
  }

  currentImg.removeClass('active');
  prevImg.addClass('active');
 });
});﻿


//Navigation Bar

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});
