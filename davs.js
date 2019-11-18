var count=0; 
var subcount=1; 
var lastcount; 
var lastsubcount; 
var pressed=false; 
var contain = document.getElementById("container"); 

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}

var shutter=new sound("audio/shutter.wav"); 
var magic=new sound("audio/magic.wav"); 

document.addEventListener('keypress', next); 
document.addEventListener('click', next); 

function next(){
    console.log("key was pressed"); 
    console.log("count: " + count + "; subcount: " + subcount); 
    console.log(contain); 
    lastcount=count;
    lastsubcount=subcount; 
    contain.innerHTML = '';
    if (count==0){
        if (subcount>8) {
            count++; 
            subcount=0; 
            next(); 
        } else {
            if (subcount==3){
                shutter.play(); 
                console.log("shutter"); 
            }
            if (subcount==4){
                shutter.play();
                console.log("shutter");  
            }
            if (subcount==5){
                shutter.play(); 
                console.log("shutter"); 
            }
            if (subcount==6){
                shutter.play(); 
                console.log("shutter"); 
            }
            var p = document.createElement("img");
            p.src ="content/0/" + subcount + ".png"; 
            contain.appendChild(p);
            if (subcount==2){
                var textDiv =document.createElement("div"); 
                textDiv.setAttribute("class", "typewriter"); 
                var textinnerDiv=document.createElement("div"); 
                textinnerDiv.setAttribute("class", "typewriter-text"); 
                textinnerDiv.innerHTML="October 31, 2019. 6:02PM."; 
                textDiv.appendChild(textinnerDiv); 
                contain.appendChild(textDiv); 
            }
            if (subcount==7){
                var textDiv =document.createElement("div"); 
                textDiv.setAttribute("class", "typewriter"); 
                var textinnerDiv=document.createElement("div"); 
                textinnerDiv.setAttribute("class", "typewriter-text"); 
                textinnerDiv.innerHTML="90 minutes later..."; 
                textDiv.appendChild(textinnerDiv); 
                contain.appendChild(textDiv); 
            }
            subcount++; 
        }
    } else if (count==1){
        if (subcount>17) {
            count++; 
            subcount=0; 
            next(0); 
        } else {
            var p = document.createElement("img");
            p.src ="content/1/" + subcount + ".png"; 
            contain.appendChild(p);
            subcount++; 
        }
    } else if (count==2){
        if (subcount>12) {
            count++; 
            subcount=0; 
            next(); 
        } else {
            if (subcount==1){ 
                var l=document.createElement("video"); 
                var t=document.createElement("source");
                t.src="content/2/1.mov"; 
                t.type="video/mp4";  
                l.appendChild(t);
                contain.appendChild(l); 
                l.autoplay=true; 
                l.load();
            } else {
                var p = document.createElement("img");
                p.src ="content/2/" + subcount + ".png"; 
                contain.appendChild(p);
                if (subcount==0) {
                    var textDiv =document.createElement("div"); 
                    textDiv.setAttribute("class", "typewriter"); 
                    var textinnerDiv=document.createElement("div"); 
                    textinnerDiv.setAttribute("class", "typewriter-text"); 
                    textinnerDiv.innerHTML="Round 1: Photos that aren't blurry or overexposed"; 
                    textDiv.appendChild(textinnerDiv); 
                    contain.appendChild(textDiv); 
                }
                if (subcount==2) {
                    var textDiv =document.createElement("div"); 
                    textDiv.setAttribute("class", "typewriter"); 
                    var textinnerDiv=document.createElement("div"); 
                    textinnerDiv.setAttribute("class", "typewriter-text"); 
                    textinnerDiv.innerHTML="Filtered: 143/266 Photos"; 
                    textDiv.appendChild(textinnerDiv); 
                    contain.appendChild(textDiv); 
                }
                
            }
            subcount++; 
        }
    } else if (count==3){
        if (subcount>7) {
            subcount=0;
            count++; 
            next();  
        } else {
            if (subcount==1){ 
                var l=document.createElement("video"); 
                var t=document.createElement("source");
                t.src="content/3/1.mov"; 
                t.type="video/mp4";  
                l.appendChild(t);
                contain.appendChild(l); 
                l.autoplay=true; 
                l.load();
            } else {
                var p = document.createElement("img");
                p.src ="content/3/" + subcount + ".png"; 
                contain.appendChild(p);
                if (subcount==0) {
                    var textDiv =document.createElement("div"); 
                    textDiv.setAttribute("class", "typewriter"); 
                    var textinnerDiv=document.createElement("div"); 
                    textinnerDiv.setAttribute("class", "typewriter-text"); 
                    textinnerDiv.innerHTML="Round 2: Visually pleasing photos that make event look fun + packed"; 
                    textDiv.appendChild(textinnerDiv); 
                    contain.appendChild(textDiv); 
                }
                if (subcount==2) {
                    var textDiv =document.createElement("div"); 
                    textDiv.setAttribute("class", "typewriter"); 
                    var textinnerDiv=document.createElement("div"); 
                    textinnerDiv.setAttribute("class", "typewriter-text"); 
                    textinnerDiv.innerHTML="Filtered: 76/266 Photos"; 
                    textDiv.appendChild(textinnerDiv); 
                    contain.appendChild(textDiv); 
                }
             
            }
            subcount++;

        }
    } else if (count==4){
        if (subcount>4) {
            count++; 
            subcount=0;
            next();  
        } else {
            if (subcount==1){ 
                var l=document.createElement("video"); 
                var t=document.createElement("source");
                t.src="content/4/1.mov"; 
                t.type="video/mp4";  
                l.appendChild(t);
                contain.appendChild(l); 
                l.autoplay=true; 
                l.load();
            } else {
                var p = document.createElement("img");
                p.src ="content/4/" + subcount + ".png"; 
                contain.appendChild(p);
                if (subcount==0) {
                    var textDiv =document.createElement("div"); 
                    textDiv.setAttribute("class", "typewriter"); 
                    var textinnerDiv=document.createElement("div"); 
                    textinnerDiv.setAttribute("class", "typewriter-text"); 
                    textinnerDiv.innerHTML="Round 3: Get rid of repeated content, pick your favorites"; 
                    textDiv.appendChild(textinnerDiv); 
                    contain.appendChild(textDiv); 
                }
                if (subcount==2) {
                    var textDiv =document.createElement("div"); 
                    textDiv.setAttribute("class", "typewriter"); 
                    var textinnerDiv=document.createElement("div"); 
                    textinnerDiv.setAttribute("class", "typewriter-text"); 
                    textinnerDiv.innerHTML="Filtered: 21/266 Photos"; 
                    textDiv.appendChild(textinnerDiv); 
                    contain.appendChild(textDiv); 
                }
            
            }  
            subcount++;  
        }
    } else if (count==5){
        if (subcount>2) {
            count++; 
            subcount=0;
            next();  
        } else {
            if (subcount==1){ 
                var l=document.createElement("video"); 
                var t=document.createElement("source");
                t.src="content/5/1.mov"; 
                t.type="video/mp4";  
                l.appendChild(t);
                contain.appendChild(l); 
                l.autoplay=true; 
                l.load();
            } else {
                var p = document.createElement("img");
                p.src ="content/5/" + subcount + ".png"; 
                contain.appendChild(p);
                if (subcount==0) {
                    var textDiv =document.createElement("div"); 
                    textDiv.setAttribute("class", "typewriter"); 
                    var textinnerDiv=document.createElement("div"); 
                    textinnerDiv.setAttribute("class", "typewriter-text"); 
                    textinnerDiv.innerHTML="Round 4: Photos you're most inclined to edit and send"; 
                    textDiv.appendChild(textinnerDiv); 
                    contain.appendChild(textDiv); 
                }
                if (subcount==2) {
                    var textDiv =document.createElement("div"); 
                    textDiv.setAttribute("class", "typewriter"); 
                    var textinnerDiv=document.createElement("div"); 
                    textinnerDiv.setAttribute("class", "typewriter-text"); 
                    textinnerDiv.innerHTML="Filtered: 6/266 Photos"; 
                    textDiv.appendChild(textinnerDiv); 
                    contain.appendChild(textDiv); 
                }
            
            }  
            subcount++;  
        }
    } else if (count==6) {
        if (subcount>6) {
            count++; 
            subcount=0; 
            next(); 
        } else {
            if (count==0){
                var p = document.createElement("img");
                p.src ="content/6/" + subcount + ".png"; 
                contain.appendChild(p);
                subcount++;
            } else {
                var p = document.createElement("img");
                p.src ="content/6/" + subcount + ".png"; 
                contain.appendChild(p);
                subcount++;
            }
            
        }
    } else if (count==7) {
        if (subcount>1) {
            count++; 
            subcount=0; 
            next(); 
        } else {
            if (subcount==1){ 
                var l=document.createElement("video"); 
                var t=document.createElement("source");
                t.src="content/7/1.mov"; 
                t.type="video/mp4";  
                l.appendChild(t);
                contain.appendChild(l); 
                l.autoplay=true; 
                l.load();
            } else {
                var p = document.createElement("img");
                p.src ="content/7/" + subcount + ".png"; 
                contain.appendChild(p);
            }
            subcount++; 
        }
    } else if (count==8) {
        // var p = document.createElement("img");
        // p.src ="content/7/2.png"; 
        // contain.appendChild(p);
        // var 
        // var alink = document.createElement("a");
        // alink.href="https://www.instagram.com"; 
        var textDiv =document.createElement("div"); 
        textDiv.setAttribute("class", "typewriter"); 
        var textinnerDiv=document.createElement("div"); 
        textinnerDiv.setAttribute("class", "typewriter-text"); 
        textinnerDiv.innerHTML="Click anywhere to return to reality";  
        textDiv.appendChild(textinnerDiv); 
        contain.appendChild(textDiv); 
        count++; 
    } else if (count==9) {
        window.location.href = "https://www.instagram.com/thedavismuseum/";
    }
}
    
