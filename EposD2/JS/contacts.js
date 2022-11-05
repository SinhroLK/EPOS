function prikaziAboutUs(){
    var x = document.getElementById("about_us");
    var image = document.getElementById("gif1");
    
    if(x.style.display == 'none'){
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
    if(x.style.display == 'none'){
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
    if(x.style.display == 'none'){
        x.style.display = "block";
        image.src = "img/gifSmrt3.gif"
    } else {
        x.style.display = "none";
        image.src = "img/gifSmrt3-pocetak.png"
    }
}