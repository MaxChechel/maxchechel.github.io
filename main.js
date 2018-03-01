const menuIcon = document.querySelector('.header__nav--menu-icon');
const clearIcon = document.querySelector('.header__nav--clear-icon');
const navItems = document.querySelector('.header__nav--items');
const navLogo = document.querySelector('.header__nav--logo');
const headerContact = document.querySelector('.header__content--contact');
const contactLink = document.querySelector('#contact');
const contactClearicon = document.querySelector('.header__content--contact--clear-icon');

//Responsive function to hide responsive nav and hide clear icon and show menu icon
function showHideIcons() {
   $(navItems).removeClass('header__nav--items-responsive');
    // Hide clear icon
    $(clearIcon).fadeOut();
     //Show menu icon
    $(menuIcon).hide().delay(500).fadeIn();
};

//Responsive menu show navigation

$(menuIcon).click(function(){
    //Hide menu icon
    $(menuIcon).hide();
    //Show clear icon
    $(clearIcon).show();
    //Show navigation
    $(navItems).addClass('header__nav--items-responsive').hide().slideDown('slow');
});


//Responsive menu hide navigation

$(clearIcon).click(function(){
  showHideIcons();
});


//Scroll animation for nav links

$(document).ready(function(){
   
    $("#undertop, #project").click(function(e){
        e.preventDefault();
        const sectionId = e.currentTarget.id + 'Section';
        
        //Animation to top
        $('html, body').animate({
          scrollTop: $('#' + sectionId).offset().top
        }, 500);
        
        //Condition for responsive layouts
        if( $(window).width() <= 480){
          showHideIcons();
        }
      })
  });


//Scroll animation for arrow button from bottom of the page 

  $(document).ready(function(){
    $(".arrowTo").click(function(e){
        e.preventDefault();
        
        const nextEl = e.currentTarget.id + 'Section';

        $('html, body').animate({
           scrollTop: $('#' + nextEl).offset().top
        }, 500)
      })
  });


  //Scroll animation for nav logo 

  $('.header__nav--logo').click(function(){
    $('html, body').animate({
        scrollTop: $('body').offset().top
      }, 500)
  });


// Show contact info
  $(contactLink).click(function(){
    
    $(headerContact).css('display', 'flex');

    if( $(window).width() <= 480){
      //Hide navigation links
      showHideIcons();
    }
  });     

  // Hide contact info
  $(contactClearicon).click(function(){
    $(headerContact).css('display', 'none');
  })
