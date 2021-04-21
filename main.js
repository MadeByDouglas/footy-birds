// JQuery Hide everything except home page and nav links
$(() => {
    $('main:not([id="home"])').hide();

    $('a').on('click', function() {
        value = $(this).attr('id').substring(4);
        displayNewPage(value);
    });
});

function displayNewPage(newPage) {
    $('main').hide();
    $('#' + newPage).show();
    $('body, html, #' + newPage).scrollTop(0);
}

// VueJS to manage cart and checkout
const app = Vue.createApp({
    data() {
        return {
            product: 'Tree Striker',
            tagline: 'Control and Style',
            price: '$129',
            image: './images/merc-1.jpg'
        }
    }
})


// parallax
const parallaxEls = document.querySelectorAll("[data-speed]");
 
window.addEventListener("scroll", scrollHandler);
 
function scrollHandler() {
  for (const parallaxEl of parallaxEls) {
    const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
    const transformY = this.pageYOffset * parallaxEl.dataset.speed;
    if (parallaxEl.classList.contains("banner-title")) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
    } else if (parallaxEl.classList.contains("banner-subtitle")) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
    } else {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
    }
  }
}