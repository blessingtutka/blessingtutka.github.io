jQuery( document ).ready(function( $ ) {

"use strict";

// Fixed header
$(function () {
  $(window).scroll( function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(".page-header").addClass("fixed");
    } 
    else {
      $(".page-header").removeClass("fixed");
    }
  }); 
});
window.addEventListener('load', function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(".page-header").addClass("fixed");
    }
});

// Function to handle smooth scroll to target
function smoothScrollTo(target) {
  var headerHeight = $('.page-header').outerHeight();
  var targetOffset = $(target).offset().top - headerHeight;

  $('html, body').animate({
    scrollTop: targetOffset
  }, 500);
}

// Add 'click' event listener to anchor elements
$('a[href^="#"]').on('click', function (event) {
  event.preventDefault();
  var target = $(this.getAttribute('href'));
  if (target.length) {
    smoothScrollTo(target);
  }
});

// Menu Dropdown Toggle
if($('.menu-trigger').length){
  $(".menu-trigger").on('click', function() { 
    $(this).toggleClass('active');
    $('.header .nav ul').slideToggle(200);
  });
}


});
