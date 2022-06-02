const lumisContainer = document.querySelector(".lumis");
let lumis = document.querySelectorAll(".lumi");
let lumisObj = [];


insertLumi();
insertLumi();
insertLumi();
insertLumi();
insertLumi();
insertLumi();


update();
for(let i=0;i<lumisObj.length;i++) {
    setInterval(() => {
        lumisObj[i].move();
        update();
    }, lumisObj[i].escapeTime);
}
function update() {
    for(let i=0;i<lumisObj.length;i++) {
        let lumis = document.querySelectorAll(".lumi");
        
        
        lumis[i].style.left = lumisObj[i].xPos + "px";
        lumis[i].style.top = lumisObj[i].yPos + "px";
        lumis[i].style.width = lumisObj[i].size + "px";
        lumis[i].style.height = lumisObj[i].size + "px";
        lumis[i].addEventListener("click", () => {
            lumis[i].classList.add("hit")
            lumisObj[i].canMove = false;
            lumisObj[i].hit();
            setTimeout(() => {
                lumis[i].classList.remove("hit")
            }, 1500)
        })
       
        
    }
}

function insertLumi() {
    lumisContainer.innerHTML += "<div class='lumi'></div>";

    lumisObj.push({
        image: "src/images/Illuminati.png",
        size: Math.floor((Math.random() * 200) + 50),
        xPos: Math.floor(Math.random() * (window.innerWidth - 110)),
        yPos: Math.floor(Math.random() * (window.innerHeight - 110)),
        escapeTime: Math.floor((Math.random() * 3000) + 1500),
        canMove:true,
        move: function() {
            if(this.canMove) {
                this.xPos = Math.floor(Math.random() * (window.innerWidth - 110));
                this.yPos = Math.floor(Math.random() * (window.innerHeight - 110));
                this.size = Math.floor((Math.random() * 200) + 50);
            }
        },
        hit: function() {
            respawnTime = Math.floor((Math.random() * 3000) + 1500)
            setTimeout(() => {
                this.xPos = Math.floor(Math.random() * (-window.innerWidth ));
                this.yPos = Math.floor(Math.random() * (-window.innerHeight ));

                setTimeout(() => {
                    this.canMove = true;
                }, respawnTime)
            }, 1200);
        },
    })
}





