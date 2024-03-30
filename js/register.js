const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    
    if (password !== confirmPassword) {
        message.textContent = "Mật khẩu không giống!";
        return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.some((user) => user.username === username)) {
        message.textContent = "Tên đã tồn tại!";
        return;
    }

    const registerForm = document.getElementById("registerForm");
    const message = document.getElementById("message");
    
    
    if (!hcaptcha.getResponse()) {
      message.textContent = "Xin hãy làm captcha!";
      event.preventDefault();
      return;
    }
    

    existingUsers.push({ username, password });

    localStorage.setItem("users", JSON.stringify(existingUsers));

    message.textContent = "Đăng kí thành công!";
    window.location.href = "/Demo2/login.html";
});
const home = document.getElementById("home");
home.addEventListener("click", () => {
  window.location.href = "/Demo2/home.html";
})