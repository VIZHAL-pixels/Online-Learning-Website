let dark=true;
function darkbg(){
    let bg=document.getElementById("png");
    console.log("bg is "+bg);
    if(dark){
        document.getElementById("dark").style["background-color"] = "black";
        document.getElementById("dark").style["color"] = "white";
        bg.src="D:/VIZHAL/Pictures/download/bright.jpg";
        images = document.getElementsByClassName("items");
        for(let i=0;i<images.length;i++){
            images[i].style.border="1px solid white";
        }
        s=document.getElementById("search");
        s.style.background="black";
        s.style.border="none";
        s.style["border-bottom"] ="1px solid white";
        s.style["border-left"] ="1px solid white";
        s.style["color"]="white"
        dark=false;
    }
    else{
        document.getElementById("dark").style["background-color"] = "white";
        document.getElementById("dark").style["color"] = "black";
        bg.src="D:/VIZHAL/Pictures/download/dark.png";
        s=document.getElementById("search");
        s.style.background="white";
        s.style.border="none";
        s.style["border-bottom"] ="1px solid black";
        s.style["border-left"] ="1px solid black";
        images = document.getElementsByClassName("items");
        for(let i=0;i<images.length;i++){
            images[i].style.border="1px solid black";
        }
        dark=true;
    }
}
function callme(){
    //alert("Welcome to LearnQuick.com");

}
function menu(){
    alert("This is menu");
}