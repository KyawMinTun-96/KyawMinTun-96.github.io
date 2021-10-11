var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.getElementById('close-btn');
var openBtn = document.getElementById('open-btn');
var mobileNav = document.querySelector('.mobile-nav');



openBtn.addEventListener('click', function(event) {

    event.preventDefault();

    closeBtn.style.display = "block";//for close btn
    openBtn.style.display = "none";//for open btn
    mobileNav.classList.add('slide-nav');//for mobile nav
    document.body.classList.add('blur');//blur body
    document.body.classList.add('scroll');//body scrooll off
    menuBtn.classList.add('hover');//for zindex

});


closeBtn.addEventListener('click', function(e) {

    e.preventDefault();

    closeBtn.style.display = "none";//for close btn
    openBtn.style.display = "block";//for open btn
    mobileNav.classList.remove('slide-nav');//for mobile nav
    document.body.classList.remove('blur');//blur body
    document.body.classList.remove('scroll');//body scrooll off
    menuBtn.classList.remove('hover');//for zindex

});


$(document).ready(function() {

    //mobile nav 
    $('.mobile-menu').on('click', '.menu-link', function(e) {

        e.preventDefault();

        $(document).off('scroll');
        $('.menu-link').removeClass('active');
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({

            'scrollTop': $target.offset().top + 2

        }, 500, 'swing', function () {

            window.location.hash = target;

        });

        closeBtn.style.display = "none";//for close btn
        openBtn.style.display = "block";//for open btn
        mobileNav.classList.remove('slide-nav');//for mobile nav
        document.body.classList.remove('blur');//blur body
        document.body.classList.remove('scroll');//body scrooll off
        menuBtn.classList.remove('hover');//for zindex

    });
})


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
    $('.tab-btn').click(function() {
        $(".tabSkill").removeClass('tabSkill-active');
        $(".tabSkill[data-id='"+$(this).attr('data-id')+"']").addClass("tabSkill-active");
        $(".tab-btn").removeClass('highlight');
        $(this).addClass('highlight');
    });
});


/*=================Project tab==================*/
    $(document).ready(function() {

        $('.proj-btn').click(function() {

            $(".tab").removeClass('tab-active');
            $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
            $(".proj-btn").removeClass('proj-active');
            $(this).addClass('proj-active');

        });

    });


    function displayProject() {

        $.ajax({

            url: "assets/json/projects.json",
            dataType: "json",
            method: "GET",
            success: function(data) {

                var output = "";

                for (var i = 0; i < data.length; i++) {

                    output += 
                    `<div class="card animate__animated animate__flipInY">
                        <div class="card-body">
                            <div class="card-header">
                                <a href="` + data[i].github + `" title="github" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                                <a href="` + data[i].demo + `" title="projects" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <p class="title">` + data[i].title + `</p>

                            <div class="description">
                                <p>` + data[i].content + `</p>
                            </div>
                        </div>

                        <div class="card-footer">
                            <ul>
                                <li>` + data[i].languages.join(', ') + ' ' + `</li>
                            </ul>
                        </div>

                    </div>`;

                }
                $('#dataProj').append(output);


                $(document).ready(function() {

                    if($(window).width() > 1024) {

                        pjSec = $('.projects-sec');
                        $.each(pjSec, function() {
                            $(this)
                            .find('.card')
                            .slice(6)
                            .hide(); 
                        });

                        $('.load-btn').click(function(e) {

                            e.preventDefault();

                            $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

                        });

                    }
                    
                    if($(window).width() > 768 && $(window).width() <= 1024 ) {

                        pjSec = $('.projects-sec');
                        $.each(pjSec, function() {
                            $(this)
                            .find('.card')
                            .slice(4)
                            .hide(); 
                        });

                        $('.load-btn').click(function(e) {

                            e.preventDefault();

                            $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

                        });

                    }
                
                    if($(window).width() <= 768) {

                        pjSec = $('.projects-sec');
                        $.each(pjSec, function() {
                            $(this)
                            .find('.card')
                            .slice(4)
                            .hide(); 
                        });

                        $('.load-btn').click(function(e) {

                            e.preventDefault();

                            $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

                        });

                    }
                
                });
                
            },
            error: function(error){
                console.log(error)
            }

        });
    }
    displayProject();

    function loadImage() {

        $.ajax({

            url: 'assets/json/design.json',
            method: 'GET',
            dataType: "json",
            success:function(data) {

                let output = '';

                for(let i = 0; i < data.length; i++) {
                    
                    output += `
                    <div class="card animate__animated animate__flipInX">
                        <div class="card-image">
                            <img src="assets/imgs/designs/` + data[i].image + `" alt="design image">
                        </div>
                        
                        <button type="button" data-img="` + data[i].image + `" data-name="` + data[i].title + `" class="view-btn"><i class="fa fa-eye"></i></button>
                    </div>
                    `;
                }

                $('.design').append(output);


                $(document).ready(function() {

                    if($(window).width() <= 768) {

                        design = $('.design');
                        $.each(design, function() {
                            $(this)
                            .find('.card')
                            .slice(6)
                            .hide(); 
                        });

                        $('.load-btn').click(function(e) {

                            e.preventDefault();

                            $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

                        });

                    }

                    if($(window).width() > 1024) {

                        design = $('.design');
                        $.each(design, function() {
                            $(this)
                            .find('.card')
                            .slice(8)
                            .hide(); 
                        });

                        $('.load-btn').click(function(e) {

                            e.preventDefault();

                            $(this).parent().find(".card:hidden").slice(0, 4).fadeIn('fast');

                        });
                    }

                    if($(window).width() > 768 && $(window).width() <= 1024 ) {

                        design = $('.design');
                        $.each(design, function() {
                            $(this)
                            .find('.card')
                            .slice(6)
                            .hide(); 
                        });

                        $('.load-btn').click(function(e) {

                            e.preventDefault();

                            $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

                        });

                    }


                    $('.card').on('click', '.view-btn', function() {

                        let image = $(this).data('img');
                        let name = $(this).data('name');

                        $('.model').css({
                            'z-index': 999999999,
                            'opacity': 1
                        });
                        $('body').addClass('loading');


                        /*--------model box-------*/
                        const mTitle = document.querySelector('.model-title #title');
                        const mImage = document.getElementById('design-image');
                        mTitle.textContent = name;
                        mImage.src = 'assets/imgs/designs/' + image;

                

                        $('.close-btn').click(function() {

                            $('.model').css({
                                'z-index': -1,
                                'opacity': 0
                            });

                            $('body').removeClass('loading');

                        });

                    });
            
                });
            },
            error: function(error) {
                console.log(`Error: ${error}`);
            }

        });
    }
	loadImage();







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




/*===============preloader===================*/
window.addEventListener('load', function() {

    setTimeout(removeLoader, 2000);
    
});


function removeLoader() {

    $('#preloader').fadeOut(500, function() {

        $('#preloader').remove();
        $('.loading').removeClass();

    });
}