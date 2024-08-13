/*=================Navbar show / hide=================*/
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
    }
}
deviceChange(mediaQuery);




// function displayBlog() {

//     $.ajax ({
//         url: "assets/json/blog.json",
//         dataType: "json",
//         method: "GET",
//         success: function (data) {

//             var output = "";

//             for (var i = 0; i < data.length; i++) {

//                 output +=
//                     `<div class="card animate__animated animate__flipInY">
//                         <div class="card-body">
//                             <p class="title" style="height:80px">` + data[i].title + `</p>

//                             <div class="card_image">
//                                 <img src="assets/imgs/blogs/`+ data[i].image + `" title="This is a blog image">
//                             </div>
                        
//                             <div class="description">
//                                 <p>` + data[i].content + `</p>
//                             </div>

//                             <div id="read_more">
//                                 <button>Read more</button>
//                             </div>
//                         </div>
//                     </div>`;

//             }
//             $('#dataBlog').append(output);


//             $(document).ready(function () {

//                 if ($(window).width() > 1024) {

//                     pjSec = $('.blg');
//                     $.each(pjSec, function () {
//                         $(this)
//                             .find('.card')
//                             .slice(6)
//                             .hide();
//                     });

//                     $('.load-btn').click(function (e) {

//                         e.preventDefault();

//                         $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

//                     });

//                 }

//                 if ($(window).width() > 768 && $(window).width() <= 1024) {

//                     pjSec = $('.blg');
//                     $.each(pjSec, function () {
//                         $(this)
//                             .find('.card')
//                             .slice(4)
//                             .hide();
//                     });

//                     $('.load-btn').click(function (e) {

//                         e.preventDefault();

//                         $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

//                     });

//                 }

//                 if ($(window).width() <= 768) {

//                     pjSec = $('.blg');
//                     $.each(pjSec, function () {
//                         $(this)
//                             .find('.card')
//                             .slice(4)
//                             .hide();
//                     });

//                     $('.load-btn').click(function (e) {

//                         e.preventDefault();

//                         $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

//                     });

//                 }

//             });

//         },
//         error: function (error) {
//             console.log(error)
//         }
//     });
// }

// displayBlog();




/*===============preloader===================*/
// window.addEventListener('load', function () {

//     setTimeout(removeLoader, .3);

// });


// function removeLoader() {

//     $('#preloader').fadeOut(1, function () {

//         $('#preloader').remove();
//         $('.loading').removeClass();

//     });
// }


// function dateCalculate(startDate, endDate, ID) {

//     var sDate = new Date(startDate);

//     //get the current date from the system
//     var now = new Date(endDate);

//     //extract the year, month, and date from user date input
//     var sDateYear = sDate.getYear();
//     var sDateMonth = sDate.getMonth();
//     var sDateDate = sDate.getDate();

//     //extract the year, month, and date from current date
//     var currentYear = now.getYear();
//     var currentMonth = now.getMonth();
//     var currentDate = now.getDate();

//     //declare a variable to collect the year, month, and days
//     var exp = {};
//     var expString = "";

//     //get years
//     yearExp = currentYear - sDateYear;



//     //get months
//     if (currentMonth >= sDateMonth)
//         //get months when current month is greater
//         var monthExp = currentMonth - sDateMonth;

//     else {
//         yearExp--;
//         var monthExp = 12 + currentMonth - sDateMonth;
//     }

//     //get days
//     if (currentDate >= sDateDate)
//         //get days when the current date is greater
//         var dateExp = currentDate - sDateDate;
//     else {
//         monthExp--;
//         var dateExp = 31 + currentDate - sDateDate;

//         if (monthExp < 0) {
//             monthExp = 11;
//             yearExp--;
//         }
//     }

//     //group the age in a single variable
//     exp = {
//         years: yearExp,
//         months: monthExp,
//         days: dateExp
//     };


//     if ((exp.years > 0) && (exp.months > 0) && (exp.days > 0))
//         expString = exp.years + " years, " + exp.months + " months, and " + exp.days + " days";
//     else if ((exp.years == 0) && (exp.months == 0) && (exp.days > 0))
//         expString = exp.days + " days";
//     //when current month and date is same as birth date and month
//     else if ((exp.years > 0) && (exp.months == 0) && (exp.days == 0))
//         expString = exp.years + " years";
//     else if ((exp.years > 0) && (exp.months > 0) && (exp.days == 0))
//         expString = exp.years + " years and " + exp.months + " months";
//     else if ((exp.years == 0) && (exp.months > 0) && (exp.days > 0))
//         expString = exp.months + " months and " + exp.days + " days";
//     else if ((exp.years > 0) && (exp.months == 0) && (exp.days > 0))
//         expString = exp.years + " years, and " + exp.days + " days";
//     else if ((exp.years == 0) && (exp.months > 0) && (exp.days == 0))
//         expString = exp.months + " months";
//     //when current date is same as dob(date of birth)
//     else expString = "Something";

//     return document.getElementById(ID).innerHTML = expString;

// }




// dateCalculate('2021-11-26', '2023-1-26', 'galaxy_exp');
// dateCalculate('2023-03-28', '2024-04-12', 'nex4_exp');










// Get information Get Website Visitor info
// document.addEventListener('DOMContentLoaded', function() {
//     // Function to send data to your server
//     function sendVisitorInfo(data) {
//         // Replace the following URL with the endpoint on your server to handle the data
//         // const endpoint = 'https://prod-50.southeastasia.logic.azure.com:443/workflows/efc3a04d12a34a52b9b8c8720c5756db/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-Y6B4QDJoLFJ3zto74rofhqk2emUnaBpnZl-cryJeVE';

//         const endpoint = 'https://prod2-59.southeastasia.logic.azure.com:443/workflows/42ef4487b5ae41a29170530ddb701d60/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=IQyAHtZqWqNMXhjLTsiOps8HHwhzOv3iwWhgOAoaGV0';
        
//         // Use fetch API to send data to the server
//         fetch(endpoint, {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })
//         // .then(response => {
//         //     if (!response.ok) {

//         //         throw new Error('Network response was not ok');

//         //     }

//         //     return response.json();
//         // })
//         // .then(data => {

//         //     console.log('Data sent successfully:', data);

//         // })

//     }

//     // Get visitor information
//     const visitorInfo = {
//         userAgent: navigator.userAgent,
//         language: navigator.language,
//         platform: navigator.platform,
//         cookiesEnabled: navigator.cookieEnabled,
//         online: navigator.onLine,
//         javaEnabled: navigator.javaEnabled(),
//         doNotTrack: navigator.doNotTrack,
//         hardwareConcurrency: navigator.hardwareConcurrency,
//         maxTouchPoints: navigator.maxTouchPoints,
//         plugins: getPluginInfo(),
//         screen: {
//           width: window.screen.width,
//           height: window.screen.height,
//           pixelDepth: window.screen.pixelDepth,
//         },
//         viewport: {
//           width: window.innerWidth,
//           height: window.innerHeight,
//         },
//         location: {
//           href: window.location.href,
//           protocol: window.location.protocol,
//           host: window.location.host,
//           pathname: window.location.pathname,
//           search: window.location.search,
//         },
//         timestamp: new Date().toISOString(),
//     };

//     // Function to get plugin information
//     function getPluginInfo() {

//         const plugins = [];
//         for (let i = 0; i < navigator.plugins.length; i++) {

//             plugins.push({
//             name: navigator.plugins[i].name,
//             description: navigator.plugins[i].description,
//             });

//         }

//         return plugins;
//     }

//     sendVisitorInfo(visitorInfo);

// });





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


