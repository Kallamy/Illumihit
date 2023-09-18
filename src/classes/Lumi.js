class Lumi {
    type = "illuminati";
    image = "src/images/Lumis/Pizza.png";
    size = Math.floor((Math.random() * 200) + 50);
    xPos = Math.floor(Math.random() * (window.innerWidth - 110));
    yPos = Math.floor(Math.random() * (window.innerHeight - 110));
    escapeTime = Math.floor((Math.random() * 3870) + 1200);
    escapeLimits = [3870, 1200];
    respawnTime = Math.floor((Math.random() * 1000) + 1860);
    respawnLimits = [1000, 1860];
    canMove = true;
    hitted = false;

    constructor() {
        
        if(this.type === "pizza") {
            this.escapeTime = Math.floor((Math.random() * 4000) + 1400);
            this.escapeLimits = [4000, 1400];
            
        } else if (this.type === "massonary") {
            this.escapeTime = Math.floor((Math.random() * 4100) + 1100);
            this.escapeLimits = [4100, 1100];
        
        } else if (this.type === "bill") {
            this.escapeTime = Math.floor((Math.random() * 3500) + 1900);
            this.escapeLimits = [3500, 1900];
        }
    }

    setType() {
        // sorteia um número aleatório com uma casa decimal entre 0 e 10
        
       let typeChance = (Math.random() * (10 - 0) + 0).toFixed(1);
       if(typeChance < 7 ) {
            this.type = "illuminati"
        } else if(typeChance < 8) {
            this.type = "pizza"
        } else if(typeChance < 8.5) {
            this.type = "massonary"
        } else  {
            this.type = "bill"
        } 
    }
    

    move() {
        console.log(this.type)
        if(!this.hitted) {
            if(this.type === "bill") {
                console.log("My name is bill!")
                this.xPos = Math.floor(Math.random() * (-window.innerWidth ));
                   this.yPos = Math.floor(Math.random() * (-window.innerHeight ));
                   this.xPos = Math.floor(Math.random() * (window.innerWidth - 110));
                    this.yPos = Math.floor(Math.random() * (window.innerHeight - 110));
    
                        setInterval(() => {
                            
                            this.size = Math.floor((Math.random() * 200) + 50);
                            
                            this.xPos = Math.floor(Math.random() * (-window.innerWidth ));
                            this.yPos = Math.floor(Math.random() * (-window.innerHeight ));
                            
                            this.respawnTime = Math.floor((Math.random() * this.respawnLimits[1]) + this.respawnLimits[0])
                            this.escapeTime = Math.floor((Math.random() * this.escapeLimits[1]) + this.escapeLimits[0])
                    }, this.escapeTime); 
                } else {
                console.log("My name is not bill!")

                    this.escapeTime = Math.floor((Math.random() * this.escapeLimits[1]) + this.escapeLimits[0])
                    this.respawnTime = Math.floor((Math.random() * this.respawnLimits[1]) + this.respawnLimits[0])
                
                    setInterval(() => {
                
                        this.escapeTime = Math.floor((Math.random() * this.escapeLimits[1]) + this.escapeLimits[0])
                        this.respawnTime = Math.floor((Math.random() * this.respawnLimits[1]) + this.respawnLimits[0])
        
                        if(this.canMove) {
                            this.size = Math.floor((Math.random() * 200) + 50);
                            this.xPos = Math.floor(Math.random() * (window.innerWidth - 110));
                            this.yPos = Math.floor(Math.random() * (window.innerHeight - 110));
                        }
                        
                    }, this.escapeTime);
                    escapeSound.cloneNode(true).play();
                }
        }

    }

    hit() {
        hitSound.cloneNode(true).play();
        score += 3;
        hits_count += 1;

        if(!this.hitted ) {
            document.getElementById("timerCount").innerText = String(Number(timerCount.innerText) + 3);
            document.querySelector("#scoreNumber").innerText = score;
            this.hitted = true;
            // this.setType()
        }

          
            //lumis[this.id].classList.add("hit")
            setTimeout(() => {
                if(this.hitted) {
                    this.xPos = Math.floor(Math.random() * (-window.innerWidth ));
                    this.yPos = Math.floor(Math.random() * (-window.innerHeight ));
                }
                this.hitted = false;
                this.setType()
            // removeLumi(index)
            this.setType();
            update();
            setTimeout(() => {
                this.canMove = true;
                //lumisObj[this.id].classList.remove("hit")
            }, this.respawnTime)
        }, 500);
    }
    
}






