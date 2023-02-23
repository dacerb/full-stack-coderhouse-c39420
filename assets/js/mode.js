const modeView = document.getElementById("flexSwitchCheckChecked")
let darkModeCss = document.createElement('link');
let head = document.getElementsByTagName('head')

darkModeCss.rel = 'stylesheet';
darkModeCss.href = "./assets/css/dark.css";  

modeView.addEventListener("change", (event) => {
    

    if (event.target.value == 'light'){
        modeView.value = "dark"
        head[0].appendChild(darkModeCss)
        localStorage.setItem("mode", "dark");
    } else {
        modeView.value = "light"
        localStorage.setItem("mode", "light");
        head[0].removeChild(darkModeCss)
    }

});

const mode = localStorage.getItem("mode")
if (mode === "dark") {
    head[0].appendChild(darkModeCss)
} else {
    head[0].removeChild(darkModeCss)
}