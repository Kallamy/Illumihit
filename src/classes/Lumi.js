class Lumi {
    type = "illuminati";
    image = "src/images/Illuminati.png";
    size = Math.floor((Math.random() * 200) + 50);
    xPos = Math.floor(Math.random() * (window.innerWidth - 110));
    yPos = Math.floor(Math.random() * (window.innerHeight - 110));
    escapeTime = Math.floor((Math.random() * 3700) + 1300);
    escapeLimits = [3700, 1300];
    respawnTime = Math.floor((Math.random() * 500) + 900);
    respawnLimits = [500, 900];
    canMove = true;
    hitted = false;

    move() {
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
            document.getElementById("timerCount").innerText = String(Number(timerCount.innerText) - 3);
    }

    hit() {
        hitSound.cloneNode(true).play();
        if(!this.hitted ) {
            document.getElementById("timerCount").innerText = String(Number(timerCount.innerText) + 3);
            score += 3;
            hits_count += 1;
            document.querySelector("#scoreNumber").innerText = score;
            this.hitted = true;
        }

          
            //lumis[this.id].classList.add("hit")
            setTimeout(() => {
                this.xPos = Math.floor(Math.random() * (-window.innerWidth ));
                this.yPos = Math.floor(Math.random() * (-window.innerHeight ));
                this.hitted = false;
            // removeLumi(index)
            update();
            setTimeout(() => {
                this.canMove = true;
                lumisObj[this.id].classList.remove("hit")
            }, this.respawnTime)
        }, 500);
    }

}






