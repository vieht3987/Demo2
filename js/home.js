const apiKey = "869b54f9d7561a994d30e2ae64e35290";
const city = "Hanoi";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent = `Nhiệt độ: ${data.main.temp}°C`;
        document.getElementById("wind-speed").textContent = `Tốc độ gió: ${data.wind.speed} m/s`;

        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("weather-icon").src = iconUrl;
    })

const find = document.getElementById("hitbox");

find.addEventListener("click", () => {
    const city = document.getElementById("location-input").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city-name").textContent = data.name;
            document.getElementById("temperature").textContent = `Nhiệt độ: ${data.main.temp}°C`;
            document.getElementById("wind-speed").textContent = `Tốc độ gió: ${data.wind.speed} m/s`;

            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            document.getElementById("weather-icon").src = iconUrl;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("city-name").textContent = "Không tìm thấy thành phố " + city;
        });
});
window.addEventListener('scroll', () => {
  const textElements = document.querySelectorAll('.para p');

  textElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const isInViewport = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    if (isInViewport) {
      element.classList.add('visible');
    }
  });
});
const home = document.getElementById("home");
home.addEventListener("click", () => {
  window.location.href = "/Demo2/home.html";
})