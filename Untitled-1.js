// faire un mode nuit en js ? 
//read stored setting on startup
let isDarkMode = localStorage.getItem("darkmode");
//apply setting
setDarkMode();

button.onclick = function(){
  isDarkMode = !isDarkMode;
  setDarkMode(isDarkMode);
}
function setDarkMode(value = isDarkMode)
{
  value = ~~value; //convert to integer
  document.body.classList.toggle('dark-layout', value);
  localStorage.setItem("darkmode", value);
}





//Source: https://stackoverflow.com/questions/75005912


