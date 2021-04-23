// JQuery Hide everything except home page and nav links
$(() => {
    $('main:not([id="home"])').hide();

    $('a').on('click', function() {
        value = $(this).attr('id').substring(4);
        displayNewPage(value);
    });

    $('.box.card').on('click', function() {
        productSelectApp.product = $(this).find('h3').text();
        productSelectApp.tagline = $(this).find('p').text();
        productSelectApp.image = $(this).find('img').attr('src');
        productSelectApp.ref = 'nav-' + $(this).closest('main').attr('id');

        if (productSelectApp.product == "Tree Striker") {
            productSelectApp.color = "Neon Black";
            productSelectApp.size = "9.5";
            productSelectApp.price = "$129";
            productSelectApp.image2 = "./images/merc-2.jpg";
            productSelectApp.image3 = "./images/merc-4.jpg";
            productSelectApp.image4 = "./images/merc-5.jpg";


        } else if (productSelectApp.product == "Tree Speedster") {
            productSelectApp.color = "Silver Slipstream";
            productSelectApp.size = "9.5";
            productSelectApp.price = "$149";
            productSelectApp.image2 = "./images/phantom-2.jpg";
            productSelectApp.image3 = "./images/phantom-3.jpg";
            productSelectApp.image4 = "./images/phantom-4.jpg";

        } else if (productSelectApp.product == "Tree Fortress") {
            productSelectApp.color = "Orange Fire";
            productSelectApp.size = "9.5";
            productSelectApp.price = "$139";
            productSelectApp.image2 = "./images/superfly-2.jpg";
            productSelectApp.image3 = "./images/superfly-3.jpg";
            productSelectApp.image4 = "./images/superfly-5.jpg";

        } else {
            productSelectApp.color = "Indigo";
            productSelectApp.size = "Medium";
            productSelectApp.price = "$49";
            productSelectApp.image2 = productSelectApp.image;
            productSelectApp.image3 = productSelectApp.image;
            productSelectApp.image4 = productSelectApp.image;
        }

        displayNewPage('productDetails');

    });
});

function displayNewPage(newPage) {
    $('main').hide();

    // whenever we go to login page, check if user is already logged in and go to profile page instead
    if (newPage == 'login' && typeof user[2] !== 'undefined') {
        newPage = 'profile'
    }

    $('#' + newPage).show();
    $('body, html, #' + newPage).scrollTop(0);
}

// VueJS to manage cart and checkout
const app = Vue.createApp({
    data() {
        return {
            product: '',
            color: '',
            size: '',
            tagline: '',
            price: '',
            image: '',
            inCart: false
        }
    }
});

const app2 = Vue.createApp({
    data() {
        return {
            product: '',
            color: '',
            size: '',
            tagline: '',
            price: '',
            image: '',
            image2: '',
            image3: '',
            image4: '',
            ref: ''
        }
    }
});

const app3 = Vue.createApp({
    data() {
        return {
            product: '',
            color: '',
            size: '',
            tagline: '',
            price: '',
            image: '',
        }
    }
});

function setCart() {
    cartApp.product = productSelectApp.product;
    cartApp.color = productSelectApp.color;
    cartApp.size = productSelectApp.size;
    cartApp.tagline = productSelectApp.tagline;
    cartApp.price = productSelectApp.price;
    cartApp.image = productSelectApp.image;
    cartApp.inCart = true;

    displayNewPage('cart');
}

function checkout() {
    if (cartApp.product != "") {
        checkoutApp.product = cartApp.product;
        checkoutApp.color = cartApp.color;
        checkoutApp.size = cartApp.size;
        checkoutApp.image = cartApp.image;

        // check if users is logged in
        if (typeof user[2] !== 'undefined') {
            $('#checkout-name').text(user[0] + " " + user[1] + " (" + user[2] + ")");
            $('#shipping-first-name').val(user[0]);
            $('#shipping-last-name').val(user[1]);

            $('#checkout-loginButton').text("Profile");
        } else {
            $('#checkout-name').text("Guest");
            $('#checkout-loginButton').text("Create Account");
        }

        displayNewPage('checkout');
    } else {
        window.alert("Please add a product to your cart");
    }
}

function purchase() {
    // clear the cart
    cartApp.product = '';
    cartApp.color = '';
    cartApp.tagline = '';
    cartApp.price = '';
    cartApp.image = '';
    cartApp.inCart = false;
    
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