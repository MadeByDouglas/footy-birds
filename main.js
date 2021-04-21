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