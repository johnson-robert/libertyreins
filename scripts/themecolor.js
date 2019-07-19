function ChangeThemeColor() {
    var color = document.getElementById("footerid").style.background;
    var color1 = "#cc9900";
    var color2 = "#009999";
    var color3 = "#0040ff";
    var color4 = "#cccccc";
    
    if (color === "rgb(204, 153, 0)") {
        document.getElementById("headerid").style.background = color2;
        document.getElementById("mainmenu").style.background = color2;
        document.getElementById("footerid").style.background = color2;
        
    } else if (document.getElementById("footerid").style.background === "rgb(0, 153, 153)") {
        document.getElementById("headerid").style.background = color3;
        document.getElementById("mainmenu").style.background = color3;
        document.getElementById("footerid").style.background = color3;
    } else if (document.getElementById("footerid").style.background === "rgb(0, 64, 255)") {
        document.getElementById("headerid").style.background = color4;
        document.getElementById("mainmenu").style.background = color4;
        document.getElementById("footerid").style.background = color4;
    }
    else {
        document.getElementById("headerid").style.background = color1;
        document.getElementById("mainmenu").style.background = color1;
        document.getElementById("footerid").style.background = color1;
    }   
        document.getElementById("printme").innerHTML = document.getElementById("footerid").style.background;
}


