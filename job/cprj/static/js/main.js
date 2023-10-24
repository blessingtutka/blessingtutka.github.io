jQuery( document ).ready(function( $ ) {

"use strict";

// Initiate the wowjs
// new WOW().init();

// Header on Scroll
$(function () {
  $(window).scroll( function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(".header-area").addClass("background-header");
    } 
    else {
      $(".header-area").removeClass("background-header");
    }
  }); 
});
window.addEventListener('load', function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(".header-area").addClass("background-header");
    }
});

// Menu Dropdown Toggle
if($('.menu-trigger').length){
  $(".menu-trigger").on('click', function() { 
    $(this).toggleClass('active');
    $('.header-area .nav').slideToggle(200);
  });
}

function autoWriteMessage() {
  const message = "Cliquez sur l'emballage de l'image pour voir l'image!";
  let index = 0;
  let timeoutId;

  function typeNextCharacter() {
    const messageElement = document.querySelector("#auto-writing-message");
    if (index < message.length) {
      messageElement.textContent += message.charAt(index);
      index++;
      timeoutId = setTimeout(typeNextCharacter, 100); // Adjust typing speed as needed
    } else {
      clearTimeout(timeoutId); // Clear the timeout if typing is complete
      messageElement.textContent = ""; // Clear the message
      index = 0;
      setTimeout(autoWriteMessage, 2500); // Repeat after 5 seconds
    }
  }

  typeNextCharacter();
}

// Call autoWriteMessage to start the auto-writing message
autoWriteMessage();

});

