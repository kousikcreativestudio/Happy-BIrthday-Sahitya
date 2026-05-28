function openSurprise(){
    document.getElementById("surpriseBox").style.display="block";
    document.getElementById("bgMusic").play();
    startVideoSlideshow();
    typingText();
}

let index = 0;
let slides = document.querySelectorAll(".vslide");

function startVideoSlideshow(){
    setInterval(()=>{
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    },3000);
}

function typingText(){
    let text = "Happy Birthday Sahitya 💖 You are my world!";
    let i = 0;
    function type(){
        if(i < text.length){
            document.getElementById("surpriseText").innerHTML += text.charAt(i);
            i++;
            setTimeout(type,60);
        }
    }
    type();
}
