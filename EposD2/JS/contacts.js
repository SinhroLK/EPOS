function prikaziAboutUs(){
    var x = document.getElementById("about_us");
    var image = document.getElementById("gif1");
    
    if(getComputedStyle(x, null).display === 'none'){
        x.style.display = "block";
        image.src = "img/gifSmrt1.gif"
    } else {
        x.style.display = "none";
        image.src = "img/gifSmrt1-pocetak.png"
    }
}

function prikaziMailove(){
    var x = document.getElementById("emails");
    var image = document.getElementById("gif2");
    if(getComputedStyle(x, null).display === 'none'){
        x.style.display = "block";
        image.src = "img/gifSmrt2.gif"
    } else {
        x.style.display = "none";
        image.src = "img/gifSmrt2-pocetak.png"
    }
}

function prikaziGithub(){
    var x = document.getElementById("github");
    var image = document.getElementById("gif3");
    if(getComputedStyle(x, null).display === 'none'){
        x.style.display = "block";
        image.src = "img/gifSmrt3.gif"
    } else {
        x.style.display = "none";
        image.src = "img/gifSmrt3-pocetak.png"
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

function form(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getUTCMinutes();
    let seconds = date.getSeconds();
    if(minute<10 && seconds < 10){
        alert("Your message was sent at " + hour.toString()+ ":" + "0" + minute.toString() +":"+ "0"+ seconds.toString() +"\n" +
        "Date: " + day.toString() +"."+ month.toString() +"." +year.toString() +"." + "\n"
        + "Thank you for messaging us! We are going to respond as soon as we fix our servers UwU <3.");
    } else if(minute<10 && seconds>=10){
        alert("Your message was sent at " + hour.toString()+ ":" + "0"+ minute.toString() +":"+ seconds.toString() +"\n" +
        "Date: " + day.toString() +"."+ month.toString() +"." +year.toString() +"." + "\n"
        + "Thank you for messaging us! We are going to respond as soon as we fix our servers UwU <3.");
    } else if(minute >= 10 && seconds<10){
        alert("Your message was sent at " + hour.toString()+ ":" + minute.toString() +":"+ "0" +seconds.toString() +"\n" +
        "Date: " + day.toString() +"."+ month.toString() +"." +year.toString() +"." + "\n"
        + "Thank you for messaging us! We are going to respond as soon as we fix our servers UwU <3.");
    } else{
        alert("Your message was sent at " + hour.toString()+ ":" + minute.toString() +":"+ seconds.toString() +"\n" +
        "Date: " + day.toString() +"."+ month.toString() +"." +year.toString() +"." + "\n"
        + "Thank you for messaging us! We are going to respond as soon as we fix our servers Uwu <3.");
    }
   
    
}

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})


document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
    hamburger.classList.remove("active")
}))