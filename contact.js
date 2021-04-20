var emailUser = [];

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

function getUser() {

    // get user info to display thank you message
    // in production, data would be sent to server
    firstName = $('input[name="first-name"]').val();
    lastName = $('input[name="last-name"]').val();
    email = $('input[name="contact-email"]').val();

    //reset emailUser var so its always fresh data
    emailUser = [];
    emailUser.push(firstName);
    emailUser.push(lastName);
    emailUser.push(email);

    // test to verify
    // window.alert(emailUser);
}

function displayUser() {
    let displayMessage = "Thanks for reaching out " + emailUser[0] + " " + emailUser[1] + " we will be sending you an email at " + emailUser[2] + " shortly."
    $('#confirmMessage').text(displayMessage);
}

function showConfirmation() {
    getUser();
    displayUser();
    $('#sendInfo').hide();
    $('#sendInfoConfirmed').show();
}