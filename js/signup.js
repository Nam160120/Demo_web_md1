function doCheckForm() {
    let username =document.getElementById("username").value;
    let usernameError = document.getElementById('usernameError');
    let password =document.getElementById("password").value;
    let passwordError = document.getElementById('passwordError');
    let isValid = true;

    if (username == '') {
        usernameError.innerText = 'Vui lòng không bỏ trống';
        isValid = false;
    } else {
        let testEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username);

        if (!testEmailFormat) {
            usernameError.innerText = 'Mời nhập đúng Email';
        } else {
            usernameError.innerText = '';
        }
    }

    if (password == '') {
        passwordError.innerText = 'Vui lòng không bỏ trống';
        isValid = false;
    } else {
        passwordError.innerText = '';
    }

    if (password.length < 8) {
        passwordError.innerText = 'Mật khẩu phải nhiều hơn 9 kí tự';
        isValid = false;
    } else {
        passwordError.innerText = '';
    }

    if (document.getElementById("form2Example3c").checked) {
        checkboxError.innerText = '';
    } else {
        checkboxError.innerText = 'Bạn chưa đồng ý với điều khoản dịch vụ'
        isValid = false;
    }

    if (isValid) {
        window.localStorage.setItem("USERNAME_KEY",username);
        window.localStorage.setItem("PASSWORD_KEY",password);
        window.location.href = "./login.html"
}

}