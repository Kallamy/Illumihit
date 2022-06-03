//  seleciona a div que contêm os illuminatis
const lumisContainer = document.querySelector(".lumis");
// seleciona  todos os illuminatis
let lumis = document.querySelectorAll(".lumi");
let lumisObj = [];

let score = 0;
let hits_count = 0;

let respawnTime = Math.floor((Math.random() * 3000) + 1500)


//insere o primeiro illuminati
getIlluminati()
insertLumi(illuminati)



// percorre todos os illuminatis e movimenta eles de acordo com o tempo de cada um
for (let i = 0; i < lumisObj.length; i++) {
    setInterval(() => {
        lumisObj[i].move();
        update();
        lumisObj[i].escapeTime = Math.floor((Math.random() * lumisObj[i].escapeLimits[1]) + lumisObj[i].escapeLimits[0])
        lumisObj[i].respawnTime = Math.floor((Math.random() * lumisObj[i].respawnLimits[1]) + lumisObj[i].respawnLimits[0])
    }, lumisObj[i].escapeTime)
}

// Atualizar as posições dos illuminatis na tela
function update() {
    for(let i=0;i<lumisObj.length;i++) {
        let lumis = document.querySelectorAll(".lumi");
        
        
        lumis[i].style.left = lumisObj[i].xPos + "px";
        lumis[i].style.top = lumisObj[i].yPos + "px";
        lumis[i].style.width = lumisObj[i].size + "px";
        lumis[i].style.height = lumisObj[i].size + "px";
        lumis[i].addEventListener("click", (event) => {
            event.stopImmediatePropagation();
            lumis[i].classList.add("hit")
            lumisObj[i].canMove = false;
            lumisObj[i].hit(i);
            setTimeout(() => {
                lumis[i].classList.remove("hit")
            
            }, lumisObj[i].respawnTime + 150)
            
        })
       
        
    }
}


// Inserir um novo illuminati
function insertLumi(lumi) {
    lumisContainer.innerHTML += "<div class='lumi'></div>";
    lumisObj.push(lumi);
}

// Remover um illuminati
function removeLumi(index) {
    lumisObj.splice(index, 1);
    console.log("removeu!")
}





