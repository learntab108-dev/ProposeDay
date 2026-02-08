/* ================= MATRIX RAIN (RESPONSIVE + SAFE) ================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const letters = "01LOVEHIMANSHI❤️";
const fontSize = 14;

let columns;
let drops;

/* resize canvas properly */
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  columns = Math.floor(canvas.width / fontSize);
  drops = new Array(columns).fill(1);
}

/* run once at start */
resizeCanvas();

/* run whenever screen resizes */
window.addEventListener("resize", resizeCanvas);


function drawMatrix() {

  /* black fade effect */
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff88";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {

    const text = letters[Math.floor(Math.random() * letters.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

/* smooth animation */
setInterval(drawMatrix, 33);



/* TYPEWRITER */
const lines = [
"> Initializing system...",
"> Searching for: Himanshi.exe",
"> Connection established ❤️",
"> Accessing heart...",
"> Access Granted"
];

const terminal = document.getElementById("terminal");
const btn = document.getElementById("enterBtn");

let lineIndex=0;

function typeLine(){
  if(lineIndex>=lines.length){
    btn.classList.remove("hidden");
    return;
  }

  let text=lines[lineIndex];
  let i=0;

  let interval=setInterval(()=>{
    terminal.innerHTML+=text[i++];
    if(i>=text.length){
      clearInterval(interval);
      terminal.innerHTML+="<br>";
      lineIndex++;
      setTimeout(typeLine,400);
    }
  },40);
}
typeLine();



/* SECTION FLOW */
btn.onclick=()=>{
  show("message");
  setTimeout(()=>show("memories"),4000);
  setTimeout(()=>{
  show("timelineSec");
  typeTimeline();},9000);
  setTimeout(()=>show("proposal"),13000);
};

function show(id){
  document.getElementById(id).classList.remove("hidden");
}



/* HEART ANIMATION */
setInterval(()=>{
  const h=document.createElement("div");
  h.innerText="❤️";
  h.className="heart";
  h.style.left=Math.random()*100+"vw";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
},400);



/* SLIDESHOW */
const slides=document.querySelectorAll(".slide");
let index=0;

setInterval(()=>{
  slides.forEach(s=>s.style.opacity=0);
  slides[index].style.opacity=1;
  index=(index+1)%slides.length;
},3000);



/* BUTTONS */
document.getElementById("yesBtn").onclick=()=>{
  alert("Yayyyy ❤️ Love you forever!!");
};

const noBtn=document.getElementById("noBtn");
noBtn.onmouseover=()=>{
  noBtn.style.position="absolute";
  noBtn.style.top=Math.random()*80+"vh";
  noBtn.style.left=Math.random()*80+"vw";
};

/* ================= TIMELINE TYPEWRITER ================= */

const timelineLines = [
"> Loading relationship logs...",
"> 2022 → First Scan Detected ❤️",
"> 2023 → Connection Stable",
"> 2024 → Trust Encryption Enabled",
"> 2025 → Heart Opened",
"> 2025 → Love Protocol Running",
"> 2026 → Proposal Request Pending..."
];

function typeTimeline(){

  const el = document.getElementById("timelineText");

  let lineIndex = 0;

  function typeLine(){

    if(lineIndex >= timelineLines.length) return;

    let text = timelineLines[lineIndex];
    let i = 0;

    let lineSpan = document.createElement("div");
    el.appendChild(lineSpan);

    let interval = setInterval(()=>{

      lineSpan.innerHTML = text.substring(0,i) + '<span class="cursor"></span>';
      i++;

      if(i > text.length){
        clearInterval(interval);
        lineSpan.innerHTML = text;
        lineIndex++;
        setTimeout(typeLine, 400); // delay between lines
      }

    }, 25); // typing speed
  }

  typeLine();
}
