$(document).ready(function() {
    //Navbar Purple Upon Scrolling 
    $(window).scroll(function() {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
    });

    // Slide up the navbar when some link is clicked
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
})