function checklogin() {
    let username = document.getElementById("username").value;
    let usernameError = document.getElementById('usernameError');

    let password = document.getElementById("password").value;
    let passwordError = document.getElementById('passwordError');

    let logInError = document.getElementById("logInError").value;

    let isValid = true;
    if (username == "admin@gmail.com" && password == "123456789") {
        var y = document.getElementById("snackbar1");
        y.className = "show1";
        setTimeout(function () { x.className = x.className.replace("show1",window.location.href = "../admin.html"); }, 1000);
    }

    if (username == '') {
        usernameError.innerText = 'Email không được để trống';
        isValid = false;
    } else {
        let testEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username);

        if (!testEmailFormat) {
            usernameError.innerText = 'Email không đúng,mời nhập lại';
            isValid = false;
        } else {
            if (username != window.localStorage.getItem("USERNAME_KEY")) {
                isValid = false;
                alert("Email không tồn tại")
            } else {
                usernameError.innerText = '';
            }
        }
    }
    if (password == '') {
        passwordError.innerText = 'Password không được bỏ trống';
        isValid = false;
    } else {
        if (username === window.localStorage.getItem("USERNAME_KEY") && password !== window.localStorage.getItem("PASSWORD_KEY")) {
            passwordError.innerText = 'Sai mật khẩu,mời nhập lại';
            isValid = false;
        } else {
            passwordError.innerText = '';
        }

    }

    if (username === window.localStorage.getItem("USERNAME_KEY") && password === window.localStorage.getItem("PASSWORD_KEY")) {
        isValid = true;
    }

    if (isValid) {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");

        // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", window.location.href = "../index.html"); }, 2000);
    }
}


function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}