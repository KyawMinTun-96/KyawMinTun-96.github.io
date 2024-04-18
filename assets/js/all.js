var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.getElementById('close-btn');
var openBtn = document.getElementById('open-btn');
var mobileNav = document.querySelector('.mobile-nav');



openBtn.addEventListener('click', function (event) {

    event.preventDefault();

    closeBtn.style.display = "block"; //for close btn
    openBtn.style.display = "none"; //for open btn
    mobileNav.classList.add('slide-nav'); //for mobile nav
    document.body.classList.add('blur'); //blur body
    document.body.classList.add('scroll'); //body scrooll off
    menuBtn.classList.add('hover'); //for zindex

});


closeBtn.addEventListener('click', function (e) {

    e.preventDefault();

    closeBtn.style.display = "none"; //for close btn
    openBtn.style.display = "block"; //for open btn
    mobileNav.classList.remove('slide-nav'); //for mobile nav
    document.body.classList.remove('blur'); //blur body
    document.body.classList.remove('scroll'); //body scrooll off
    menuBtn.classList.remove('hover'); //for zindex

});


$(document).ready(function () {

    //mobile nav 
    $('.mobile-menu').on('click', '.menu-link', function (e) {

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

        closeBtn.style.display = "none"; //for close btn
        openBtn.style.display = "block"; //for open btn
        mobileNav.classList.remove('slide-nav'); //for mobile nav
        document.body.classList.remove('blur'); //blur body
        document.body.classList.remove('scroll'); //body scrooll off
        menuBtn.classList.remove('hover'); //for zindex

    });
})


const mediaQuery = window.matchMedia('(min-width: 576px)');

mediaQuery.addListener(deviceChange);

function deviceChange(e) {

    if (e.matches) {

        var prevScroll = window.pageYOffset;

        window.onscroll = function () {

            const navbar = document.getElementsByClassName('navbar')[0];
            let curScroll = window.pageYOffset;

            if (curScroll > prevScroll) {

                navbar.style.top = '-60px';
                navbar.style.transition = 'all .5s ease';
                navbar.style.backgroundColor = 'rgba(51, 54, 70, 1)';
                navbar.style.scrollBehavior = "smooth";
                navbar.style.boxShadow = 'none';

            } else if (prevScroll <= 20) {

                navbar.style.scrollBehavior = "smooth";
                navbar.style.backgroundColor = 'var(--primary-bg)';
                navbar.style.boxShadow = 'none';

            } else {

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
        $(document).ready(function () {

            $('.nav').on('click', '.nav-link', function (e) {

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



    } else {

        var prev = window.pageYOffset;

        window.onscroll = function () {

            const navbar = document.getElementsByClassName('navbar')[0];
            var cur = window.pageYOffset;

            if (cur > prev) {

                navbar.style.top = '-60px';
                navbar.style.transition = 'all .5s ease';

            } else if (prev <= 20) {

                navbar.style.backgroundColor = 'var(--primary-bg)';
                navbar.style.boxShadow = 'none';

            } else {

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
$(document).ready(function () {
    $('.tab-btn').click(function () {
        $(".tabSkill").removeClass('tabSkill-active');
        $(".tabSkill[data-id='" + $(this).attr('data-id') + "']").addClass("tabSkill-active");
        $(".tab-btn").removeClass('highlight');
        $(this).addClass('highlight');
    });
});


/*=================Project tab==================*/
$(document).ready(function () {

    $('.proj-btn').click(function () {

        $(".tab").removeClass('tab-active');
        $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".proj-btn").removeClass('proj-active');
        $(this).addClass('proj-active');

    });

});


function displayProject() {

    $.ajax({

        url: "assets/json/projects.json",
        dataType: "json",
        method: "GET",
        success: function (data) {

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


            $(document).ready(function () {

                if ($(window).width() > 1024) {

                    pjSec = $('.projects-sec');
                    $.each(pjSec, function () {
                        $(this)
                            .find('.card')
                            .slice(6)
                            .hide();
                    });

                    $('.load-btn').click(function (e) {

                        e.preventDefault();

                        $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

                    });

                }

                if ($(window).width() > 768 && $(window).width() <= 1024) {

                    pjSec = $('.projects-sec');
                    $.each(pjSec, function () {
                        $(this)
                            .find('.card')
                            .slice(4)
                            .hide();
                    });

                    $('.load-btn').click(function (e) {

                        e.preventDefault();

                        $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

                    });

                }

                if ($(window).width() <= 768) {

                    pjSec = $('.projects-sec');
                    $.each(pjSec, function () {
                        $(this)
                            .find('.card')
                            .slice(4)
                            .hide();
                    });

                    $('.load-btn').click(function (e) {

                        e.preventDefault();

                        $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

                    });

                }

            });

        },
        error: function (error) {
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
        success: function (data) {

            let output = '';

            for (let i = 0; i < data.length; i++) {

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


            $(document).ready(function () {

                if ($(window).width() <= 768) {

                    design = $('.design');
                    $.each(design, function () {
                        $(this)
                            .find('.card')
                            .slice(6)
                            .hide();
                    });

                    $('.load-btn').click(function (e) {

                        e.preventDefault();

                        $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

                    });

                }

                if ($(window).width() > 1024) {

                    design = $('.design');
                    $.each(design, function () {
                        $(this)
                            .find('.card')
                            .slice(8)
                            .hide();
                    });

                    $('.load-btn').click(function (e) {

                        e.preventDefault();

                        $(this).parent().find(".card:hidden").slice(0, 4).fadeIn('fast');

                    });
                }

                if ($(window).width() > 768 && $(window).width() <= 1024) {

                    design = $('.design');
                    $.each(design, function () {
                        $(this)
                            .find('.card')
                            .slice(6)
                            .hide();
                    });

                    $('.load-btn').click(function (e) {

                        e.preventDefault();

                        $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

                    });

                }


                $('.card').on('click', '.view-btn', function () {

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



                    $('.close-btn').click(function () {

                        $('.model').css({
                            'z-index': -1,
                            'opacity': 0
                        });

                        $('body').removeClass('loading');

                    });

                });

            });
        },
        error: function (error) {
            console.log(`Error: ${error}`);
        }

    });
}
loadImage();

function displayBlog() {

    $.ajax ({
        url: "assets/json/blog.json",
        dataType: "json",
        method: "GET",
        success: function (data) {

            var output = "";

            for (var i = 0; i < data.length; i++) {

                output +=
                    `<div class="card animate__animated animate__flipInY">
                        <div class="card-body">
                            <div class="card-header">
                                <a href="` + data[i].title + `" title="github" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                                <a href="` + data[i].title + `" title="projects" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <p class="title">` + data[i].title + `</p>

                            <div class="description">
                                <p>` + data[i].content + `</p>
                            </div>
                        </div>

                        <div class="card-footer">
                            <ul>
                                <li>` + ' ' + `</li>
                            </ul>
                        </div>

                    </div>`;

            }
            $('#dataBlog').append(output);


            $(document).ready(function () {

                if ($(window).width() > 1024) {

                    pjSec = $('.blg');
                    $.each(pjSec, function () {
                        $(this)
                            .find('.card')
                            .slice(6)
                            .hide();
                    });

                    $('.load-btn').click(function (e) {

                        e.preventDefault();

                        $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

                    });

                }

                if ($(window).width() > 768 && $(window).width() <= 1024) {

                    pjSec = $('.blg');
                    $.each(pjSec, function () {
                        $(this)
                            .find('.card')
                            .slice(4)
                            .hide();
                    });

                    $('.load-btn').click(function (e) {

                        e.preventDefault();

                        $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

                    });

                }

                if ($(window).width() <= 768) {

                    pjSec = $('.blg');
                    $.each(pjSec, function () {
                        $(this)
                            .find('.card')
                            .slice(4)
                            .hide();
                    });

                    $('.load-btn').click(function (e) {

                        e.preventDefault();

                        $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

                    });

                }

            });

        },
        error: function (error) {
            console.log(error)
        }
    });
}

// displayBlog();







/*=================Form Request====================*/
const scriptURL = 'https://prod-41.southeastasia.logic.azure.com:443/workflows/bd2ac059878a44b5a9b5716687759cab/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=6k-iZ5Kn8PNR04P5S-1OphbtUtl6vtiJ0CqsgQjfIgM';

const form = document.forms['form-data'];
form.addEventListener('submit', e => {

    e.preventDefault()

    // Get form data
    const formData = new FormData(document.getElementById('reset'));

    // Convert FormData to JSON
    const jsonData = {};

    formData.forEach((value, key) => {

        jsonData[key] = value;

    });

    fetch(
            scriptURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(jsonData),
            }
        )
        .then(

            response => {

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Thanks for Contacting me..! I Will Contact You Soon...',
                    confirmButtonColor: '#3085d6'
                })

                form.reset()

            }

        )
        .catch(
            error => console.error('Error!', error.message)
        )

});




/*===============preloader===================*/
window.addEventListener('load', function () {

    setTimeout(removeLoader, .3);

});


function removeLoader() {

    $('#preloader').fadeOut(1, function () {

        $('#preloader').remove();
        $('.loading').removeClass();

    });
}


function dateCalculate(startDate, endDate, ID) {

    var sDate = new Date(startDate);

    //get the current date from the system
    var now = new Date(endDate);

    //extract the year, month, and date from user date input
    var sDateYear = sDate.getYear();
    var sDateMonth = sDate.getMonth();
    var sDateDate = sDate.getDate();

    //extract the year, month, and date from current date
    var currentYear = now.getYear();
    var currentMonth = now.getMonth();
    var currentDate = now.getDate();

    //declare a variable to collect the year, month, and days
    var exp = {};
    var expString = "";

    //get years
    yearExp = currentYear - sDateYear;



    //get months
    if (currentMonth >= sDateMonth)
        //get months when current month is greater
        var monthExp = currentMonth - sDateMonth;

    else {
        yearExp--;
        var monthExp = 12 + currentMonth - sDateMonth;
    }

    //get days
    if (currentDate >= sDateDate)
        //get days when the current date is greater
        var dateExp = currentDate - sDateDate;
    else {
        monthExp--;
        var dateExp = 31 + currentDate - sDateDate;

        if (monthExp < 0) {
            monthExp = 11;
            yearExp--;
        }
    }

    //group the age in a single variable
    exp = {
        years: yearExp,
        months: monthExp,
        days: dateExp
    };


    if ((exp.years > 0) && (exp.months > 0) && (exp.days > 0))
        expString = exp.years + " years, " + exp.months + " months, and " + exp.days + " days";
    else if ((exp.years == 0) && (exp.months == 0) && (exp.days > 0))
        expString = exp.days + " days";
    //when current month and date is same as birth date and month
    else if ((exp.years > 0) && (exp.months == 0) && (exp.days == 0))
        expString = exp.years + " years";
    else if ((exp.years > 0) && (exp.months > 0) && (exp.days == 0))
        expString = exp.years + " years and " + exp.months + " months";
    else if ((exp.years == 0) && (exp.months > 0) && (exp.days > 0))
        expString = exp.months + " months and " + exp.days + " days";
    else if ((exp.years > 0) && (exp.months == 0) && (exp.days > 0))
        expString = exp.years + " years, and" + exp.days + " days";
    else if ((exp.years == 0) && (exp.months > 0) && (exp.days == 0))
        expString = exp.months + " months";
    //when current date is same as dob(date of birth)
    else expString = "Something";

    return document.getElementById(ID).innerHTML = expString;

}




dateCalculate('2021-11-26', '2023-1-26', 'galaxy_exp');

dateCalculate('2023-03-28', '2024-04-12', 'nex4_exp');










// Get information Get Website Visitor info
document.addEventListener('DOMContentLoaded', function() {
    // Function to send data to your server
    function sendVisitorInfo(data) {
        // Replace the following URL with the endpoint on your server to handle the data
        const endpoint = 'https://prod-50.southeastasia.logic.azure.com:443/workflows/efc3a04d12a34a52b9b8c8720c5756db/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-Y6B4QDJoLFJ3zto74rofhqk2emUnaBpnZl-cryJeVE';
        
        // Use fetch API to send data to the server
        fetch(endpoint, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        // .then(response => {
        //     if (!response.ok) {

        //         throw new Error('Network response was not ok');

        //     }

        //     return response.json();
        // })
        // .then(data => {

        //     console.log('Data sent successfully:', data);

        // })

    }

    // Get visitor information
    const visitorInfo = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        cookiesEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        javaEnabled: navigator.javaEnabled(),
        doNotTrack: navigator.doNotTrack,
        hardwareConcurrency: navigator.hardwareConcurrency,
        maxTouchPoints: navigator.maxTouchPoints,
        plugins: getPluginInfo(),
        screen: {
          width: window.screen.width,
          height: window.screen.height,
          pixelDepth: window.screen.pixelDepth,
        },
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        location: {
          href: window.location.href,
          protocol: window.location.protocol,
          host: window.location.host,
          pathname: window.location.pathname,
          search: window.location.search,
        },
        timestamp: new Date().toISOString(),
    };


    // Function to get plugin information
    function getPluginInfo() {

        const plugins = [];
        for (let i = 0; i < navigator.plugins.length; i++) {

            plugins.push({
            name: navigator.plugins[i].name,
            description: navigator.plugins[i].description,
            });

        }

        return plugins;
    }

    sendVisitorInfo(visitorInfo);

});





// Get the user's current location
// navigator.geolocation.getCurrentPosition(
//     function(position) {
//         const location = {
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//         };
//     },
//     function(error) {

//         console.error('Error getting location:', error.message);

//     }
// );


