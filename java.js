function buttonClicked(){
    const button = document.getElementById('button').innerHTML = 'Button Clicked!'
}

function cookieClicked(){
    document.getElementById("cookiePopup").style.display = 'none';
    }

let slideIndex = 1;
showSlides(slideIndex);
    
function plusSlides(n) {
  showSlides(slideIndex += n);
}
    
function currentSlide(n) {
  showSlides(slideIndex = n);
}
    
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

}

let saveFile = () => {
    const name = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const country = document.getElementById("country");
    const contents = document.getElementById("contents");

    let data = "\r Name: " + name.value + " \r\n " + "Age: " + lastName.value + " \r\n " + "Email: " + email.value + " \r\n " + "Country: " + country.value + " \r\n " + "Message: " + contents.value;
    console.log(data);
    const textToBLOB = new Blob([data], { type: "text/plain" });
    var filename = new Date();
    var month =new Date();
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = filename;

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};
