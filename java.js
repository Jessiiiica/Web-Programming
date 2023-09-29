function buttonClicked(){
    const button = document.getElementById('button').innerHTML = 'Button Clicked!'
};

function cookieClicked(){
    const cookieButton = document.getElementById('acceptCookie').innerHTML = 'Clicked!'
    cookiePopup.classList.add("hide");
    cookiePopup.classList.remove("show");
}   
