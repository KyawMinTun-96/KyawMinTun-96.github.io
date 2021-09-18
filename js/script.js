///=============PAGE BOTTOM TO TOP AND PRELOAD WEB===============///
$(document).ready(function(){
	var btn = $('.footer_sec .back_to_top');
	$(window).scroll(function(){
		let scrollTop =$(this).scrollTop();
		if( scrollTop > 1000){
			$(btn).css({'display': 'block','transition' : '.3s ease-in'});
		}else{
			$(btn).css('display', 'none');
		}
	});
	$('#click_btn').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop : 0}, 300);
		return false;
	});
});



///==================MENU SHOW/HIDE=====================///
var navbar = document.getElementById('navbar');
if(matchMedia){
    var mq = window.matchMedia("(min-width: 767px");
    mq.addListener(widthChange);
    widthChange(mq);
}

function widthChange(mq){
    if(mq.matches){
        let lastScrollTop = 0;
        window.addEventListener('scroll', function(){
            let scrollTop = window.scrollTop || document.documentElement.scrollTop;
            if(scrollTop > lastScrollTop){
                navbar.style.top = "-70px";
             	navbar.style.transition  = 'all .5s ease-in-out';
                navbar.style.scrollBehavior = "smooth";
            }else{
                navbar.style.top = "0px";
            }
            lastScrollTop = scrollTop;
        });
    }else{
        let lastScrollTop = 0;
        let scrollTop = 0;
        window.addEventListener('scroll', function(){
            scrollTop = window.scrollTop || document.documentElement.scrollTop;
            if(scrollTop > lastScrollTop){
                navbar.style.top = "0px";
            }else{
                navbar.style.top = "0";
            }
        });
    }
}









///*===============CLICK MENU==================*///
var tgl,nav;

const showMenu = (toggleId, navId)=>{
    tgl = document.getElementById(toggleId);
    nav = document.getElementById(navId);
  
    if(tgl && nav){
      	tgl.addEventListener('click', ()=>{
			nav.classList.toggle('show');
			tgl.classList.toggle('bx-x');
      });
    }
}
showMenu('header-toggle','nav-menu');


///===============NAV ACTIVE================///
const navLink = document.querySelectorAll('.nav_link'); 
function linkAction(){
	navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    nav.classList.remove('show');
    // tgl.classList.toggle('bx-x');
}
navLink.forEach(n => n.addEventListener('click', linkAction));






















































































