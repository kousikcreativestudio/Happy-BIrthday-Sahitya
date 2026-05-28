function openSurprise(){
    document.getElementById("surpriseBox").style.display="block";
    document.getElementById("bgMusic").play();
    startSlideshow();
    typingText();
}

let i = 0;
let slides = document.querySelectorAll(".vslide");

function startSlideshow(){
    setInterval(()=>{
        slides[i].classList.remove("active");
        i = (i+1)%slides.length;
        slides[i].classList.add("active");
    },3000);
}

function typingText(){
    let text="Happy Birthday Sahitya 💖";
    let i=0;
    function type(){
        if(i<text.length){
            document.getElementById("surpriseText").innerHTML += text[i];
            i++;
            setTimeout(type,50);
        }
    }
    type();
}

function cutCake(){
    document.getElementById("cakeFull").style.display="none";
    document.getElementById("sliceLeft").classList.add("cut-left");
    document.getElementById("sliceRight").classList.add("cut-right");
    burstFireworks();
}

function burstFireworks(){
    let canvas = document.getElementById("fireCanvas");
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for(let i=0;i<80;i++){
        let x = canvas.width/2;
        let y = canvas.height/2;
        let angle = Math.random()*2*Math.PI;
        let speed = Math.random()*5;
        let dx = Math.cos(angle)*speed;
        let dy = Math.sin(angle)*speed;
        let life = 40;

        function draw(){
            if(life<=0) return;
            ctx.fillStyle = "hsl(" + Math.random()*360 + ",100%,50%)";
            ctx.fillRect(x,y,3,3);
            x+=dx;
            y+=dy;
            life--;
            requestAnimationFrame(draw);
        }
        draw();
    }
}

document.addEventListener("click", function(e){
    let x = e.clientX;
    let y = e.clientY;
    let div = document.createElement("div");
    div.style.position="fixed";
    div.style.left=x+"px";
    div.style.top=y+"px";
    div.style.width="20px";
    div.style.height="20px";
    div.style.borderRadius="50%";
    div.style.background="white";
    document.body.appendChild(div);

    div.animate([
        {transform:"scale(1)", opacity:1},
        {transform:"scale(4)", opacity:0}
    ],{duration:500});

    setTimeout(()=>div.remove(),500);
});
