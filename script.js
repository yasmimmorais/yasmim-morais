// animação do menu navTrigger
//------------------------------------------------------------------
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// voltar para o topo
//------------------------------------------------------------------
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
        }
    });

    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

// Animação do svg-design
//------------------------------------------------------------------
const design = document.querySelectorAll("#design path");

for(let i = 0; i<design.length; i++){
    console.log(`Letter ${i} is ${design[i].getTotalLength()}`);
}

// Adicionar class active quando link for clicado
// $('.navLinks a').click(function() {
//     $(this).siblings('a').removeClass('activeLinkMenu');
//     $(this).addClass('activeLinkMenu');
    
//     return false;
// });

//Scroll suave para sessão sobre e contato
//------------------------------------------------------------------
// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

const menuItems = document.querySelectorAll('.nav a[href^="#"]');

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
    // window.scroll({
    // top: to,
    // behavior: "smooth",
    // })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget)- 75;
    scrollToPosition(to);
}

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 900;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

//Animação da entrada de divs durante o scroll
//------------------------------------------------------------------
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight) * 3 / 4);
    // console.log(windowTop);
    target.forEach(function(element){

        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }

        console.log(element.offsetTop);
    })
}

window.addEventListener('scroll', function(){
    animeScroll();
})