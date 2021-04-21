user = [];

$(() => {
    //login user
    $("#registerButton").on('click', function() {
        getProfileUser();

        // email validator
        if( /(.+)@(.+){2,}\.(.+){2,}/.test(user[2])) {
            displayProfileUser();
            displayNewPage("profile");
        } else {
            window.alert("Please enter a valid email address");
        }
    });
});

function getProfileUser() {

    // get relevant user info to display thank you message
    // in production, all data would be saved and sent to server
    firstName = $('input[name="first-name"]').val();
    lastName = $('input[name="last-name"]').val();
    email = $('input[name="new-email"]').val();

    //reset user var so its always fresh data
    user = [];
    user.push(firstName);
    user.push(lastName);
    user.push(email);

    // test to verify
    // window.alert(user);
}

function displayProfileUser() {
    $('#userName').text(user[0] + " " + user[1]);
    $('#userEmail').text(user[2]);
}