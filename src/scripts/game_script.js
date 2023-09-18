const bgMusic = new Audio('src/sounds/bg_music.mp3');

const shotSound = new Audio('src/sounds/shot.wav');
const hitSound = new Audio('src/sounds/hit.wav');
const escapeSound = new Audio('src/sounds/escape.wav');
const gameOverSound = new Audio('src/sounds/game_over.wav');

// import { random } from "../../Libraries/chancePercent";

bgMusic.volume = 0.5;
shotSound.volume = 0.2;
hitSound.volume = 1;

const menu = new Menu();

menu.startScreen();

//  seleciona a div que contêm os illuminatis
const lumisContainer = document.querySelector(".lumis");
// seleciona  todos os illuminatis
// lumis = document.querySelectorAll(".lumi");
let lumisObj = [];
let lumis = [];

let isPlaying = false;
let timerValue = 90;
let score = 0;
let hits_count = 0;

let quantity = 1;

let canDraw = true;

let insertionLimit = 100;
let insertionFloor = Math.floor((Math.random() * 47) + 3);
let insertionFloorOffset = 0;
let insertionPercent = Math.floor((Math.random() * 100));
let insertionChance = 60;

let remotionFloor = Math.floor((Math.random() * 27) + 3);
let remotionFloorOffset = 0;
let remotionPercent = Math.floor((Math.random() * 100));
let remotionChance = 60;

let respawnTime = Math.floor((Math.random() * 3000) + 1500)


function startGame() {
    isPlaying = true;
    bgMusic.currentTime = 0;
    bgMusic.play();
    timerCount.innerText = String(timerValue);
    quantity = 3;
    score = 0;
}

function timerCountDown() {
    timerCount = document.getElementById("timerCount");
    setInterval(() => {
        if(isPlaying) {
            timerCount.innerText = String(Number(timerCount.innerText) - 1); 
        }
        
    }, 1800)
}

function checkGameOver() {
    setInterval(() => {
        if(Number(timerCount.innerText) < 0) {
            bgMusic.pause();
            document.querySelector(".scoreText").innerText = score;
            menu.gameOverScreen();
            gameOverSound.play();
            timerCount.innerText = "90";
            isPlaying = false;
        }
        
    }, 500)
}

timerCountDown();
checkGameOver();
drawLumis()
//insere o primeiro illuminati
function drawLumis() {
    //lumis = document.querySelectorAll(".lumi");
   
    
    
    console.log("Desenhando....")
    
    lumisContainer.innerHTML = "";
    lumisObj = []


    console.log("desenhou!!!")
    
    for(let q = 0; q < quantity; q++) {
        insertLumi()
    }

        
   console.log("QUANTIDADE: "+quantity)

    
    
    for(let i = 0; i < lumisObj.length; i++) {

        lumisObj[i].move();

       // lumisContainer[i].//style.backGroundImage = "url(src/images/lumis/pizza.png)";
        console.log(lumisContainer[i])
    }
    console.log(lumis)
    
}
update()
runGame()

escape()
function runGame() {
   
    console.log("Rodou o jogo!")
    if(hits_count > insertionFloor + insertionFloorOffset) {
        insertionPercent = Math.floor((Math.random() * 100));

        if(insertionFloor <= 3) {
            insertionChance = Math.floor((Math.random() * 20) + 5);
        } else if(insertionFloor <= 7) {
            insertionChance = Math.floor((Math.random() * 15) + 10);
        } else if(insertionFloor <= 15) {
            insertionChance = Math.floor((Math.random() * 20) + 15);
        } else if(insertionFloor <= 30) {
            insertionChance = Math.floor((Math.random() * 25) + 30);
        } else {
            insertionChance = Math.floor((Math.random() * 20) + 50);
        }
        
        if(insertionPercent <= insertionChance){
            canInsert = true;
        } else {
            canInsert = false;
        }
        if(canInsert) {
            console.log(`Limite: ${insertionLimit}`)
            if(quantity <= insertionLimit) {
                if(quantity < insertionLimit) {
                    quantity++;
                    drawLumis();
                    console.log("Entreou!")
                }
            }
            insertionFloorOffset += hits_count;
            console.log("Mais um!")
            insertionFloor = Math.floor((Math.random() * 47) + 3);
        }
        else {
            console.log("Entreou!")

            drawLumis();
            remotionPercent = Math.floor((Math.random() * 100));
            if(remotionFloor <= 5) {
                remotionChance = Math.floor((Math.random() * 20) + 10);
            } else if(remotionFloor <= 15) {
                remotionChance = Math.floor((Math.random() * 15) + 30);
            } else if(remotionFloor <= 25) {
                remotionChance = Math.floor((Math.random() * 10) + 40);
            } else {
                remotionChance = Math.floor((Math.random() * 15) + 50);
            }
            if(remotionPercent <= remotionChance){
                canRemove = true;
            } else {
                canRemove = false;
            }
            if(canRemove) {
                drawLumis();
                if(quantity > 1) {
                    quantity--;
                    
                }
                remotionFloorOffset += hits_count;
                update()
                console.log("Menos um!")
                
                remotionFloor = Math.floor((Math.random() * 8) + 2);
                
            }
            
        }
        console.log("Piso: "+ insertionFloor)
        console.log("Chance: "+ insertionChance)
    }
    
    if(hits_count > remotionFloor + remotionFloorOffset) {
       //drawLumis()
        
        console.log("Piso: "+ insertionFloor)
        console.log("Chance: "+ insertionChance)
    }
    //console.log(lumisContainer);
    console.log("piso: "+insertionFloor);
}
function escape() {
    //alert("oi")
    for (let i = 0; i < lumisObj.length; i++) {
        
        setInterval(() => {
            lumisObj[i].escapeTime = Math.floor((Math.random() * lumisObj[i].escapeLimits[1]) + lumisObj[i].escapeLimits[0]);
            lumisObj[i].respawnTime = Math.floor((Math.random() * lumisObj[i].respawnLimits[1]) + lumisObj[i].respawnLimits[0]);
            if(isPlaying) {
                update();
                if(lumisObj[i].hitted) {
                    lumisObj[i].move();
                } else {
                    
                    timerCount.innerText = Number(timerCount.innerText) - 1;
                }
            }
        }, lumisObj[i].escapeTime);
        
    }
}



// percorre todos os illuminatis e movimenta eles de acordo com o tempo de cada um


// Atualizar as posições dos illuminatis na tela
function update() {
   
    for(let i=0;i<lumisObj.length;i++) {
        let lumis = document.querySelectorAll(".lumi");
       // console.log(lumis)
        lumis[i].style.left = lumisObj[i].xPos + "px";
       // lumisObj[i].move();
        lumis[i].style.top = lumisObj[i].yPos + "px";
        lumis[i].style.width = lumisObj[i].size + "px";
        lumis[i].style.height = lumisObj[i].size + "px";
        lumis[i].addEventListener("click", (event) => {
            event.stopImmediatePropagation();
            canDraw = false;
            lumis[i].classList.add("hit")
            lumisObj[i].canMove = false;
            lumisObj[i].hit(i);
            
            setTimeout(() => {
                
                lumis[i].classList.remove("hit")
                canDraw = true;
                /* if(lumis[i].classList.contains("hit")) {
                    lumis[i].style.display = "none";
                } */
               // lumis[i].style.display = "block";

            }, 1000)
            
        })
        if(canDraw) {
        lumis[i].classList.remove("hit")

           
        }
        if(isPlaying) {
            if(Number(timerCount.innerText) < 0) {
                document.getElementById("gameOverScreen").style.display = "block";
                isPlaying = false;
            }
        }
        
    }

    // Adiciona a classe que define a imagem dos illuminatis
    for(var i=0; i<lumisObj.length; i++) {
        if(lumisContainer.childNodes[i].classList.contains("pizza")) {
            lumisContainer.childNodes[i].classList.remove("pizza")
        }
        if(lumisContainer.childNodes[i].classList.contains("massonary")) {
            lumisContainer.childNodes[i].classList.remove("massonary")
        }
        if(lumisContainer.childNodes[i].classList.contains("bill")) {
            lumisContainer.childNodes[i].classList.remove("bill")
        }
        lumisContainer.childNodes[i].classList.add(lumisObj[i].type);
    }
    runGame();
}


// Inserir um novo illuminati
function insertLumi() {
   

    newLumi = new Lumi();
    
    lumisContainer.innerHTML += `<div class='lumi'></div>`;
    lumisObj.push(newLumi);
 
    
}

// Remover um illuminati
function removeLumi(index) {
    lumisObj.splice(index, 1);
    console.log("removeu!")
}

document.addEventListener("mousedown", () => {
    if(isPlaying) {
        shotSound.cloneNode(true).play();
    }
})

playButton = document.querySelector(".menuPlayButton");
gameOverButton = document.querySelector(".gameOverButton")

playButton.addEventListener("click", () => {
    menu.hide();
    startGame();
    isPlaying = true;
})

gameOverButton.addEventListener("click", () => menu.startScreen())