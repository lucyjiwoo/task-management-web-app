// Function for login(check the user is valid or not)
function checkCredentials() {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // package data in a JSON object
    var data_d = {'email': email,
        'password': password};
    
    console.log('data_d', data_d);

    
    // SEND DATA TO SERVER VIA jQuery.ajax({})
    jQuery.ajax({
        url: "/processlogin",
        data: data_d,
        type: "POST",
        success:function(returned_data){
              returned_data = JSON.parse(returned_data);
              if (returned_data.success === 1){
                window.location.href = "/home";
              }
              else{
                const feedback = document.getElementById('feedback');
                feedback.innerHTML = `Authentication failed, ${returned_data.message}`;
              }
            }
    });
}
// Function for sign up(check the user is valid or not)
function validateSignUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');

    // Check if email is not empty and valid
    const emailPattern  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        feedback.innerHTML = `Email cannot be empty.`;
        return false;
    } else if (!emailPattern.test(email)) {
        feedback.innerHTML = `Invalid email format.`;
        return false;
    }

    // Check if password is not empty
    if (!password) {
        feedback.innerHTML = `Password cannot be empty.`;
        return false;
    }

    // If all validations pass, clear feedback and proceed to create account
    feedback.innerHTML = '';
    createAccount();
}



function createAccount() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // package data in a JSON object
    var data_d = {'email': email,
                 'password': password};
    
    console.log('data_d', data_d);

    // SEND DATA TO SERVER VIA jQuery.ajax({})
    jQuery.ajax({
        url: "/processsignup",
        data: data_d,
        type: "POST",
        success:function(returned_data){
            returned_data = JSON.parse(returned_data);
              if (returned_data.success === 1){
                alert("Successfully created account!")
                window.location.href = "/login";
              }
              else{
                alert(`Account creation failed: ${returned_data.message}`);
                window.location.href = "/login";

              }
            }
    });
}
