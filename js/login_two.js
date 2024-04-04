function validateForm() {
    let em = document.getElementById('email').value;
    let pw = document.getElementById('password').value;

    if (em == "") {
        document.getElementById('Message').innerHTML = "Please Enter email";
        return false;
    }

    if (pw == "") {
        document.getElementById('number').innerHTML = "Please Enter a password";
        return false;
    }

    if (pw.length < 6) {
        document.getElementById('number').innerHTML = "Password must be 6 charater"
        return false;
    }

    // alert box
    alert('login sucess full...');
}

// password hide and showF
function togglePasswordVisibility() {
    let passwordInput = document.getElementById("password");
    let showPasswordCheckbox = document.getElementById("showPasswordCheckbox");

    passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
}

// input field color  change on focus out
document.getElementById("email").addEventListener("click", function () {
    this.style.borderColor = "#007bff";
    this.style.backgroundColor = "#e8ebed"
});
document.getElementById("password").addEventListener("click", function () {
    this.style.borderColor = "#007bff";
    this.style.backgroundColor = "#e8ebed"
});


function registerForm() {

    let user = document.getElementById('Username').value;
    let em = document.getElementById('email').value;
    let pw = document.getElementById('pass').value;

    console.log(pw);

    if (user == '') {
        document.getElementById('text_mess').innerHTML = 'please enter username';
        return false;
    }

    if (em == null) {
        document.getElementById('Mess').innerHTML = "Please Enter email";
        return false;
    }

    if (pw == "") {
        document.getElementById('number_one').innerHTML = "Please Enter password";
        return false;
    }

    if (pw.length > 6) {
        document.getElementById('number_one').innerHTML = "Password must be 6 charater"
        return false;
    }

    // alert box
    alert('Register sucess full...');
    document.getElementById('Username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';
}

// INPUT FELD VALIDATION FOR BORDER COLOR
document.getElementById("Username").addEventListener("click", function () {
    this.style.borderColor = "#007bff";
});

document.getElementById("email").addEventListener("click", function () {
    this.style.borderColor = "#007bff";
});

document.getElementById("pass").addEventListener("click", function () {
    this.style.borderColor = "#007bff";
});