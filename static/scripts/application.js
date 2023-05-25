let links = document.querySelectorAll('.scroll');
let targetID; 
links.forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault(); 
    targetID = element.getAttribute('href'); 
    document.querySelector(targetID).scrollIntoView({

      behavior: 'smooth', 
      block: 'start', 
    });
  });
});

(function() {
  var formSubscribe, loadApplication, photoSection, svgInjector, gendebFilter;

  loadApplication = function() {
    var styles;
    styles = ["background: #7b77c9", "color: white", "display: block", "padding: 20px 20px 20px 20px", "text-align: center", "font-weight: normal", "font-size: 20px", "line-height: 60px"].join(";");
    console.log('%c Lithium Loaded :)', styles, 'For usage visit: https://github.com/owldesign/3.-Lithium');
    $(svgInjector);
    $(gendebFilter);
    $(photoSection);
    $(formSubscribe);
    $('.arrow-down').on('click', function(e) {
      e.preventDefault();
      return $("html,body").animate({
        scrollTop: $("#gen-deb").offset().top
      });
    });
    if (Modernizr.touch) {
      return FastClick.attach(document.body);
    }
  };

  svgInjector = function() {
    var mySVGsToInject;
    mySVGsToInject = document.querySelectorAll('img.inject-me');
    return SVGInjector(mySVGsToInject);
  };

  $(loadApplication);

}).call(this);

let currentSlide = 1;
const totalSlides = document.getElementsByClassName('slide').length;

document.getElementById('next').addEventListener('click', () => {
  const activeSlide = document.querySelector('.slide.active');
  activeSlide.style.transform = 'translateX(-100%)';

  currentSlide++;
  if(currentSlide > totalSlides) currentSlide = 1;
  
  const newActiveSlide = document.getElementById(`slide-${currentSlide}`);
  newActiveSlide.style.transform = 'translateX(0)';
  
  setTimeout(() => {
    activeSlide.classList.remove('active');
    activeSlide.style.transform = 'translateX(100%)';
    newActiveSlide.classList.add('active');
  }, 1000);
});

document.getElementById('prev').addEventListener('click', () => {
  const activeSlide = document.querySelector('.slide.active');
  activeSlide.style.transform = 'translateX(100%)';
  
  currentSlide--;
  if(currentSlide < 1) currentSlide = totalSlides;
  
  const newActiveSlide = document.getElementById(`slide-${currentSlide}`);
  newActiveSlide.style.transform = 'translateX(0)';
  
  setTimeout(() => {
    activeSlide.classList.remove('active');
    activeSlide.style.transform = 'translateX(100%)';
    newActiveSlide.classList.add('active');
  }, 1000);
});

$('.menu').click (function(){
  $(this).toggleClass('open');
});
