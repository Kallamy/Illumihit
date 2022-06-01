const lumi = document.querySelector(".lumi");
escapeTime = 3000
canMove = true;
setInterval(move, escapeTime);
move();
function move() {
    xPos = Math.floor(Math.random() * (window.innerWidth - 110));
    yPos = Math.floor(Math.random() * (window.innerHeight - 110));
    lumiSize = Math.floor((Math.random() * 200) + 50) 
    if(canMove) {
        lumi.style.left = xPos + "px";
        lumi.style.top = yPos + "px";
        lumi.style.width = lumiSize + "px";
        lumi.style.height = lumiSize + "px";
    }
    escapeTime =  Math.floor((Math.random() * 1000) + 900);
    setTimeout(()=> {
        canMove = true;
        lumi.classList.remove("hit");
        lumi.style.width = "1px";
        lumi.style.height = "1px";
    }, 2000)
}

lumi.addEventListener("click", hit)
function hit() {
    lumi.classList.add("hit");
    canMove = false;
}

