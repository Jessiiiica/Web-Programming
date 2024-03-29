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
  document.body.style.color = localStorage.getItem('textColour');
  document.body.style.backgroundColor = localStorage.getItem('bgColour')

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

function settingsSaveButton(){
    document.getElementById('btn').innerHTML = ('Saved');

    if(typeof(Storage) !== "undefined"){
      localStorage.setItem("fullName", document.getElementById('fullName').value)
      
      localStorage.setItem("email", document.getElementById('email').value)
      
      localStorage.setItem("password", document.getElementById('pass').value)

      localStorage.setItem("birthday", document.getElementById('birthday').value)


    }
    else{
      document.getElementById("btn").innerHTML = "Sorry, this feature is not supported on your browser";
    }
}

function updateContactUs(){
  document.body.style.color = localStorage.getItem('textColour');
  document.body.style.backgroundColor = localStorage.getItem('bgColour')
}


function updateSettings(){
  document.getElementById('fullName').value = localStorage.getItem('fullName');
  document.getElementById('email').value = localStorage.getItem('email');
  document.getElementById('pass').value = localStorage.getItem('password');
  document.getElementById('birthday').value = localStorage.getItem('birthday');

  document.body.style.color = localStorage.getItem('textColour');
  document.body.style.backgroundColor = localStorage.getItem('bgColour')
}

function bgColourChange(colour){
  document.body.style.backgroundColor = colour
  if(typeof(Storage) !== "undefined"){
    localStorage.setItem("bgColour", colour)
    localStorage.setItem("bgColourName", document.getElementsByName(colour.selectedIndex));
    document.getElementById("btn").innerHTML = localStorage.getItem("bgColourName");
  }
}

function textColourChange(colour){
  document.body.style.color = colour;
  if(typeof(Storage) !== "undefined"){
    localStorage.setItem("textColour", colour)
  }
}

let saveFile = () => {
  const firstName = document.getElementById("firstName");
  const lastName = document.getAnimations("lastName");
  const email = document.getElementById("email");
  const country = document.getElementById("country");
  const contents = document.getElementById("contents");

  let data = "\r Name:" + firstName.value + "\r\n" + "Last Name: " + lastName.value + "\r\n" + "Email: " + email.value + "\r\n" + "Country: " + country.value + "\r\n" + "Contents: " + contents.value;
  console.log(data);

  const textToBLOB = new BlobEvent([data], {type: "text/plain"});
  var filename = new Date();
  var month = new Date();
  month = month.getMonth();

  var day = new Date();
  var day = day.getUTCDate();

  var year = new Date();
  var year = year.getUTCFullYear();

  newdate = year + "/" + month + "/" + day;
  const sFileName = filename;

  let newLink = document.createElement("a");
  newLink.download = new Date();

  if(window.webkitURL != null){
    newLink.href = window.URL.createObjectURL(textToBLOB);
  }
  else{
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();

};