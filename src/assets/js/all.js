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

















