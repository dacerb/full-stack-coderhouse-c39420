const switchModeView = document.getElementById("flexSwitchCheckChecked")
let darkModeStyles = document.createElement('link');
let head = document.getElementsByTagName('head')

darkModeStyles.rel = 'stylesheet';
darkModeStyles.href = "./assets/css/dark.css";  

switchModeView.addEventListener("change", (event) => {
    

    if (event.target.value == 'light'){
        switchModeView.value = "dark"
        head[0].appendChild(darkModeStyles)
        localStorage.setItem("mode", "dark");
    } else {
        switchModeView.value = "light"
        localStorage.setItem("mode", "light");
        head[0].removeChild(darkModeStyles)
    }

});

const mode = localStorage.getItem("mode")
if (mode === "dark") {
    head[0].appendChild(darkModeStyles)
    switchModeView.checked = false;
    switchModeView.value = "dark";
} else {
    head[0].removeChild(darkModeStyles)
    switchModeView.checked = true;
    switchModeView.value = "light";
}