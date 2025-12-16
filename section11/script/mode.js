const btnSwitch = document.getElementById("btn");
const text = document.getElementById("text");
var isDark = true;
const body = document.body;

btnSwitch.addEventListener("click", () => {
  if (isDark) {
    body.style.background = "#333";
    body.style.color = "#f9f9fb";
    text.textContent = "Switched to Dark Mode";
    btnSwitch.textContent = "Light Mode";
  } else {
    body.style.background = "#f9f9fb";
    body.style.color = "#333";
    text.textContent = "Switched to Light Mode";
    btnSwitch.textContent = "Dark Mode";
  }
  isDark = !isDark;
});
