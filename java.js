const button = document.querySelector('#button');

button.addEventListener("click", buttonClicked());

function buttonClicked(){
    button.innerText = 'Button Clicked!';
}