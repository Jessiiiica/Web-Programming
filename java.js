function buttonClicked(){
    const button = document.getElementById('button').innerHTML = 'Button Clicked!'
};

let popUp = document.getElementById("cookiePopup");

document.getElementById("acceptCookie").addEventListener("click", () =>{
    let d = new Date();
    d.setMinutes(2 + d.getMinutes());
    document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
    popUp.classList.add("hideCookie");
    popUp.classList.remove("showCookie");
});

const checkCookie = () => {
    let input = document.cookie.split("=");
    if(input[0] == "myCookieName"){
        popUp.classList.add("hideCookie");
        popUp.classList.remove("showCookie");
    }
    else{
        popUp.classList.add("showCookie");
        popUp.classList.add("hideCookie");
    }
};

window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 2000);
};