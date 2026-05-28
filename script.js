function openSurprise(){

    document.getElementById("surpriseBox").style.display="block";

    document.getElementById("bgMusic").play();

    startSlideshow();
    createBalloons();
    typing();
}

// 🎬 slideshow
let i = 0;
let slides = document.querySelectorAll(".vslide");

function startSlideshow(){
    setInterval(()=>{
        slides[i].classList.remove("active");
        i = (i+1)%slides.length;
        slides[i].classList.add("active");
    },3000);
}

// 🎂 cake cutting
function cutCake(){

    document.getElementById("cake").style.transform="scale(0.8) rotate(-10deg)";

    document.getElementById("cutSound").play();

    alert("🎉 Cake Cut! Happy Birthday 💖");
}

// 🎈 balloons
function createBalloons(){

    for(let i=0;i<15;i++){
        let b=document.createElement("img");
        b.src="https://i.imgur.com/7QZ7Z6F.png";
        b.className="balloon";
        b.style.left=Math.random()*100+"%";
        document.body.appendChild(b);
    }
}

// 💬 typing
function typing(){

    let text="Happy Birthday Sahitya 💖";
    let i=0;

    function t(){
        if(i<text.length){
            document.getElementById("surpriseText").innerHTML+=text[i];
            i++;
            setTimeout(t,50);
        }
    }
    t();
}
