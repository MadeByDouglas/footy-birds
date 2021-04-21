var contactUser = [];

$(() => {
    //contact modal
    $("#contactButton").on('click', function() {
        $("#contactModal").show();
    });

    $("#sendButton").on('click', function() {
        showConfirmation();
        $("#contactModal").hide();
    });

    $("#closeSpan").on('click', function() {
        $("#contactModal").hide();
    });

    window.onclick = function(event) {
        if (event.target.id == 'contactModal') {
            $("#contactModal").hide();
        }
    }
});

function getContactUser() {

    // get user info to display thank you message
    // in production, data would be sent to server
    firstName = $('input[name="contact-first-name"]').val();
    lastName = $('input[name="contact-last-name"]').val();
    email = $('input[name="contact-email"]').val();

    //reset emailUser var so its always fresh data
    contactUser = [];
    contactUser.push(firstName);
    contactUser.push(lastName);
    contactUser.push(email);

    // test to verify
    // window.alert(emailUser);
}

function displayContactUser() {
    let displayMessage = "Thanks for reaching out " + contactUser[0] + " " + contactUser[1] + " we will be sending you an email at " + contactUser[2] + " shortly."
    $('#confirmMessage').text(displayMessage);
}

function showConfirmation() {
    getContactUser();

    // email validator
    if( /(.+)@(.+){2,}\.(.+){2,}/.test(contactUser[2])) {
        displayContactUser();
        $('#sendInfo').hide();
        $('#sendInfoConfirmed').show();
    } else {
        window.alert("Please enter a valid email address");
    }
}