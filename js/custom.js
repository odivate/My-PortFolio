(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    });

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true
    });

    // SMOOTHSCROLL
    $(function() {
        $('.nav-link, .custom-btn-link').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

    // TOOLTIP
    $('.social-links a').tooltip();

    // DOWNLOAD RESUME BUTTON
    $(document).ready(function() {
        $('#downloadResumeBtn').on('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            // Define the URL of the resume file
            const resumeUrl = "Omkar_Divate_Web-Developer.pdf"; 

            // Create an anchor element dynamically
            const link = document.createElement("a");
            link.href = resumeUrl;
            link.download = "Omkar Divate_Web Developer-Resume.pdf"; // Replace "Resume.pdf" with the desired file name

            // Trigger the download
            link.click();
        });
    });

})(jQuery);
