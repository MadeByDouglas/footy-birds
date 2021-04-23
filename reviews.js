reviews = []; //Must be global so it exists throughout the entire HTML document

$(() => {
    // $('#addReviewButton').on('click', addReview );

    displayReviews();  //If any reviews exist, they will be displayed

    //contact modal
    $("#reviewModalButton").on('click', function() {
        $("#reviewModal").show();
    });

    $("#addReviewButton").on('click', function() {
        addReview();
        $("#reviewModal").hide();
    });

    $("#closeSpanReview").on('click', function() {
        $("#reviewModal").hide();
    });

    window.onclick = function(event) {
        if (event.target.id == 'reviewModal') {
            $("#reviewModal").hide();
        }
    }
});

function displayReviews() {
     //Display all reviews

     //Get the jQuery object which is the segment element with id='showReviews'
     //We will replace the HTML of this element
     showReviews = $('#showReviews');

     newReviewsHTML = ""

     index = reviews.length-1;  //This is the index of the last review added

     while ( index >= 0 ) {
         //We iterate over the array in reverse order
         review = reviews[index]; //Get next review
         rating = review[1];
         comment = review[2];
         title = review[3];
         date = review[4];
         author = review[5];

         makeStars = "";  //We use font awesome characters to display stars
         for (i=0; i<5; i++ ) {
             if ( i < stars ) {
                 makeStars += "<span class='fa fa-star checked'></span> ";  //Star filled in with black
             } else {
                 makeStars += "<span class='fa fa-star'></span> ";  //Star not filled in
             }
         }

        //  reviewHTML += "<p>" + makeStars + "</p><p>" + comment + "</p>";
         newReviewsHTML += "<hr>" +
            "<div class='rowLeft'>" +
                "<div>" +
                    "<h4>" + author + "</h4>" +
                    "<p>" + date + "</p>" +
                "</div>" +
                "<div>" +
                    makeStars +
                    // <span class="fa fa-star checked"></span>
                    // <span class="fa fa-star checked"></span>
                    // <span class="fa fa-star checked"></span>
                    // <span class="fa fa-star checked"></span>
                    // <span class="fa fa-star checked"></span>
                "</div>" +
                "<div>" +
                    "<h4>" + title + "</h4>" +
                    "<p>" + comment + "</p>" +
                "</div>" +
            "</div>";

         index--;  //If we don't decrement index we will have an infinite while loop
     }

     reviewHTML = newReviewsHTML + demoReviews; //add new reviews to demo reviews

     showReviews.html(reviewHTML);  //This replaces the HTML in the section element
 }

function addReview() {
    //Retrieves our review form values and stores in the reviews array. 
    //Each entry in reviews is an array of strings
    email = $('input[name="email"]').val();
    stars = $('input[name="review-rating"]').val();
    comment = $('input[name="review-comment"]').val();
    title = $('input[name="review-title"]').val();
    date = $('input[name="review-date"]').val();
    author = $('input[name="review-author"]').val();


    //Add the new entry to our reviews array - we only store one review at a time
    //NOTE: I'm not using the email one but leaving it since it affects order of the array
    review = [];
    review.push( email );
    review.push( stars );
    review.push( comment );
    review.push(title);
    review.push(date);
    review.push(author);

    //We push the new review onto the reviews array making an array of reviews
    reviews.push( review );

    //clear modal data for next use
    clearModal()

    //Display all the reviews - including adding this one to the top
    displayReviews();
}

function clearModal() {
    $('input[name="email"]').val("");
    $('input[name="review-rating"]').val("");
    $('input[name="review-comment"]').val("");
    $('input[name="review-title"]').val("");
    $('input[name="review-date"]').val("");
    $('input[name="review-author"]').val("");
}


//demo reviews down here for readability, although global scope isn't needed or really desired
demoReviews = `
        <hr>
        <div class="rowLeft">
            <div>
                <h4>Bradley</h4>
                <p>04.15.21</p>
            </div>
            <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
            </div>
            <div>
                <h4>Favorite cleats ever</h4>
                <p>super comfy and looks amazing!</p>
            </div>
        </div>

        <hr>
        <div class="rowLeft">
            <div>
                <h4>Greg</h4>
                <p>03.28.21</p>
            </div>
            <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </div>
            <div>
                <h4>Almost Perfect</h4>
                <p>super comfy and looks amazing!</p>
            </div>
        </div>

        <hr>
        <div class="rowLeft">
            <div>
                <h4>Joe</h4>
                <p>02.15.21</p>
            </div>
            <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </div>
            <div>
                <h4>Favorite cleats</h4>
                <p>super comfy and looks amazing!</p>
            </div>
        </div>
        `;