function switchTheme(themeNumber) {
  // Themes are "dark", "light", and "barbie".

  const root = document.querySelector(":root");

  if (themeNumber === 1) {
    root.style.setProperty("--primary-bg-color", "hsl(222, 26%, 31%)");
    root.style.setProperty("--output-bg-color", "hsl(224, 36%, 15%)");
    root.style.setProperty("--calculator-bg-color", "hsl(223, 31%, 20%)");
    root.style.setProperty("--text-color", "#ffffff");
    root.style.setProperty("--dark-text-color", "hsl(221, 14%, 31%)");
    root.style.setProperty("--button-color", "hsl(30, 25%, 89%)");
    root.style.setProperty("--button-shadow", "hsl(28, 16%, 65%)");
    root.style.setProperty("--reset-button-color", "hsl(225, 21%, 49%)");
    root.style.setProperty("--reset-button-shadow", "hsl(224, 28%, 35%)");
    root.style.setProperty("--reset-button-hover", "hsl(225, 51%, 76%)");
    root.style.setProperty("--equals-button-color", "hsl(6, 63%, 50%)");
    root.style.setProperty("--equals-button-shadow", "hsl(6, 70%, 34%)");
    root.style.setProperty("--equals-button-hover", "hsl(6, 93%, 76%)");
    root.style.setProperty("--button-text-color", "hsl(0, 0%, 100%");
  } else if (themeNumber === 2) {
    root.style.setProperty("--primary-bg-color", "hsl(0, 0%, 90%");
    root.style.setProperty("--output-bg-color", "hsl(0, 0%, 93%)");
    root.style.setProperty("--calculator-bg-color", "hsl(0, 5%, 81%)");
    root.style.setProperty("--text-color", "hsl(60, 10%, 19%)");
    root.style.setProperty("--dark-text-color", "hsl(60, 10%, 19%)");
    root.style.setProperty("--button-color", "hsl(45, 7%, 89%)");
    root.style.setProperty("--button-shadow", "hsl(35, 11%, 61%)");
    root.style.setProperty("--reset-button-color", "hsl(185, 42%, 37%)");
    root.style.setProperty("--reset-button-shadow", "hsl(185, 58%, 25%)");
    root.style.setProperty("--reset-button-hover", "hsl(185, 40%, 56%)");
    root.style.setProperty("--equals-button-color", "hsl(25, 98%, 40%)");
    root.style.setProperty("--equals-button-shadow", "hsl(25, 99%, 27%)");
    root.style.setProperty("--equals-button-hover", "hsl(25, 100%, 61%)");
    root.style.setProperty("--button-text-color", "hsl(0, 0%, 100%)");
  } else if (themeNumber === 3) {
    root.style.setProperty("--primary-bg-color", "#f067c1");
    root.style.setProperty("--output-bg-color", "#afdefe");
    root.style.setProperty("--calculator-bg-color", "#37ccf9");
    root.style.setProperty("--text-color", "#0a0a0a");
    root.style.setProperty("--dark-text-color", "#0a0a0a");
    root.style.setProperty("--button-color", "#ffddff");
    root.style.setProperty("--button-shadow", "#eeaaee");
    root.style.setProperty("--reset-button-color", "#59127a");
    root.style.setProperty("--reset-button-shadow", "#301050");
    root.style.setProperty("--reset-button-hover", "#69226a");
    root.style.setProperty("--equals-button-color", "#ff9ff0");
    root.style.setProperty("--equals-button-shadow", "#f090e0");
    root.style.setProperty("--equals-button-hover", "#ffafff");
    root.style.setProperty("--button-text-color", "#ffffff");
  }
}

const slider = document.getElementById("theme-slider");

slider.addEventListener("input", () => {
  const themeNumber = Number(slider.value);
  switchTheme(themeNumber);
  // Save the value in local storage.
  localStorage.setItem("themeValue", slider.value);
});

// Add an event listener to execute when the DOM is fully loaded
// We're doing this because reset causes the first theme to load in css.
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the stored value from local storage
  const storedThemeValue = localStorage.getItem("themeValue");
  if (storedThemeValue !== null) slider.value = storedThemeValue;
  // Set the value to 1 to represent theme 1
  else slider.value = 1;

  // Trigger the input event to apply the theme immediately
  slider.dispatchEvent(new Event("input"));
});
