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
            product: '',
            color: '',
            tagline: '',
            price: '',
            image: '',

        }
    }
});

function setCart(newProduct) {
    mountedApp.product = newProduct[0];
    mountedApp.color = newProduct[1];
    mountedApp.tagline = newProduct[2];
    mountedApp.price = newProduct[3];
    mountedApp.image = newProduct[4];

    displayNewPage('cart');
}

function checkout() {
    if (mountedApp.product != "") {
        displayNewPage('checkout');
    } else {
        window.alert("Please add a product to your cart");
    }
}

function purchase() {
    // clear the cart
    mountedApp.product = '';
    mountedApp.color = '';
    mountedApp.tagline = '';
    mountedApp.price = '';
    mountedApp.image = '';
    
    displayNewPage('thankyou');
}


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