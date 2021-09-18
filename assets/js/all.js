const menuBtn = document.getElementsByClassName('menu-btn')[0];
const bars = document.getElementsByClassName('bars')[0];
const mobileNav = document.getElementsByClassName('mobile-nav')[0];



menuBtn.addEventListener('click', function(event) {

    event.preventDefault();

    bars.classList.toggle('close');//for close btn
    mobileNav.classList.toggle('slide-nav');//for mobile nav
    document.body.classList.toggle('blur');//blur body
    document.body.classList.toggle('scroll');//body scrooll off
    menuBtn.classList.toggle('hover');//for zindex


    // mobile nav 
    $('.mobile-menu').on('click', '.menu-link', function(e) {

        e.preventDefault();

        $('.menu-link').removeClass('active');
        $(this).addClass('active');

    });

});







const mediaQuery = window.matchMedia('(min-width: 576px)');

mediaQuery.addListener(deviceChange);

function deviceChange(e) {

    if (e.matches) {

        var prevScroll = window.pageYOffset;

        window.onscroll = function() {
        
            const navbar = document.getElementsByClassName('navbar')[0];
            let curScroll = window.pageYOffset;
        
            if (curScroll > prevScroll) {
        
                navbar.style.top = '-60px';
                navbar.style.transition = 'all .5s ease';
                navbar.style.backgroundColor = 'rgba(51, 54, 70, 1)';
                navbar.style.scrollBehavior = "smooth";
                navbar.style.boxShadow = 'none';
        
            } else if(prevScroll <= 20) {
        
                navbar.style.scrollBehavior = "smooth";
                navbar.style.backgroundColor = 'var(--primary-bg)';
                navbar.style.boxShadow = 'none';
        
            }else {
        
                navbar.style.top = '0';
                navbar.style.transition = 'all .5s ease';
                navbar.style.backgroundColor = 'rgba(51, 54, 70, 1)';
                //navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
                navbar.style.scrollBehavior = "smooth";
            }
        
            prevScroll = curScroll;
        
        }

        // navigation bar for desktop
        $(document).ready(function() {

            $('.nav').on('click', '.nav-link', function(e) {

                e.preventDefault();
                $(document).off('scroll');
                $('.nav-link').removeClass('active');
        
                $(this).addClass('active');
                var target = this.hash;
                $target = $(target);
        
                $('html, body').stop().animate({
        
                    'scrollTop': $target.offset().top + 2
        
                }, 500, 'swing', function () {
        
                    window.location.hash = target;
        
                });
            });

        });



    }else {

        var prev = window.pageYOffset;

        window.onscroll = function() {

            const navbar = document.getElementsByClassName('navbar')[0];
            var cur = window.pageYOffset;
        
            if (cur > prev) {
        
                navbar.style.top = '-60px';
                navbar.style.transition = 'all .5s ease';
        
            } else if(prev <= 20) {
        
                navbar.style.backgroundColor = 'var(--primary-bg)';
                navbar.style.boxShadow = 'none';
        
            }else {

                navbar.style.top = '0';
                navbar.style.transition = 'all .5s ease';
                navbar.style.backgroundColor = 'var(--primary-bg)';
                navbar.style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
                //navbar.style.backdropFilter = 'blur(none)';

            }

            prev = cur;
        }


    }
}

deviceChange(mediaQuery);






/*=================Experiences=================*/ 
$(document).ready(function() {

    function skillLoad() {
        $('#load-content').load('education.html');
    }

    skillLoad();

    $('#tabEdu').click(function() {
        $('#load-content').load('education.html');
    });

    $('#tabCer').click(function() {
        $('#load-content').load('certificate.html');
    });

    $('#tabDev').click(function() {
        $('#load-content').load('development.html');
    });

    $('#tabSkl').click(function() {
        $('#load-content').load('skills.html');
    });

    $('#tabExp').click(function() {
        $('#load-content').load('experiences.html');
    });

    $('#tabTol').click(function() {
        $('#load-content').load('tools.html');
    });





    /*=============Project tab===============*/
    function loadProj() {
        $('#load-card').load('projects.html');
    }
    loadProj();

    $('#loadProj').click(function() {
        $('#load-card').load('projects.html');
    });

    $('#loadDes').click(function() {
        $('#load-card').load('design.html');
    });


    // project active 
    $('.project-tab').on('click', '.proj-btn', function(e) {

        e.preventDefault();
        $('.proj-btn').removeClass('proj-active');
        $(this).addClass('proj-active');

    });



    // experiance active 
    $('.skill-tab').on('click', '.tab-btn', function(e) {

        e.preventDefault();

        $('.tab-btn').removeClass('highlight');
        $(this).addClass('highlight');

    });

});



/*=================Form Request====================*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbyVYVf4vVqnpMY3FKHrWN_GqT_-iib25RdwyzgOhcWIIuXGTuKxHBMHzhDyfKW0o9McLg/exec';
const form = document.forms['form-data'];

form.addEventListener('submit', e => {

    e.preventDefault()
    fetch(
        scriptURL, 
        { 
            method: 'POST', 
            body: new FormData(form)
        }
        )
        .then(
            response => alert("Thanks for Contacting me..! I Will Contact You Soon...") + 
            document.getElementById('reset').reset()
            )
        .catch(
            error => console.error('Error!', error.message)
            )

});




// preloader
window.addEventListener('load', function() {

    const preloader = document.getElementById('preloader');
    
    preloader.style.display = 'none';
    this.document.body.classList.remove('loading');
});


