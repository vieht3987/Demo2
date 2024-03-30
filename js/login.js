
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const foundUser = users.find((user) => user.username === username);

  if (foundUser && foundUser.password === password) {
    message.textContent = "Đăng nhập thành công!";
    window.location.href = "/Demo2/home.html";
  } else {
    message.textContent = "Sai tên hoặc mật khẩu!";
  }
});
const home = document.getElementById("home");
home.addEventListener("click", () => {
  window.location.href = "/Demo2/home.html";
})