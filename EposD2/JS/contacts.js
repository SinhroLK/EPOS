// function prikaziAboutUs(){
//     var x = document.getElementById("about_us");
//     var image = document.getElementById("gif1");
    
//     if(getComputedStyle(x, null).display === 'none'){
//         x.style.display = "block";
//         image.src = "img/gifSmrt1.gif"
//     } else {
//         x.style.display = "none";
//         image.src = "img/gifSmrt1-pocetak.png"
//     }
// }

// function prikaziMailove(){
//     var x = document.getElementById("emails");
//     var image = document.getElementById("gif2");
//     if(getComputedStyle(x, null).display === 'none'){
//         x.style.display = "block";
//         image.src = "img/gifSmrt2.gif"
//     } else {
//         x.style.display = "none";
//         image.src = "img/gifSmrt2-pocetak.png"
//     }
// }

// function prikaziGithub(){
//     var x = document.getElementById("github");
//     var image = document.getElementById("gif3");
//     if(getComputedStyle(x, null).display === 'none'){
//         x.style.display = "block";
//         image.src = "img/gifSmrt3.gif"
//     } else {
//         x.style.display = "none";
//         image.src = "img/gifSmrt3-pocetak.png"
//     }
// }

let mylogo1 = document.getElementById('about_us');
document.getElementById('gif1').onclick = function(){
  mylogo1.classList.toggle('fade');
}

let mylogo2 = document.getElementById('emails');
document.getElementById('gif2').onclick = function(){
  mylogo2.classList.toggle('fade');
}

let mylogo3 = document.getElementById('github');
document.getElementById('gif3').onclick = function(){
  mylogo3.classList.toggle('fade');
}