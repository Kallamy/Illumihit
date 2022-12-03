class Lumi {
    type = "illuminati";
    image = "src/images/Illuminati.png";
    size = Math.floor((Math.random() * 200) + 50);
    xPos = Math.floor(Math.random() * (window.innerWidth - 110));
    yPos = Math.floor(Math.random() * (window.innerHeight - 110));
    escapeTime = Math.floor((Math.random() * 3000) + 1300);
    escapeLimits = [3000, 1300];
    respawnTime = Math.floor((Math.random() * 500) + 400);
    respawnLimits = [500, 700];
    canMove = true;

    move() {
            this.escapeTime = Math.floor((Math.random() * this.escapeLimits[1]) + this.escapeLimits[0])
            this.respawnTime = Math.floor((Math.random() * this.respawnLimits[1]) + this.respawnLimits[0])
            
            setInterval(() => {
                this.escapeTime = Math.floor((Math.random() * this.escapeLimits[1]) + this.escapeLimits[0])
                this.respawnTime = Math.floor((Math.random() * this.respawnLimits[1]) + this.respawnLimits[0])
                this.update();
                if(this.canMove) {
                    this.size = Math.floor((Math.random() * 200) + 50);
                    this.xPos = Math.floor(Math.random() * (window.innerWidth - 110));
                    this.yPos = Math.floor(Math.random() * (window.innerHeight - 110));
                }
                
            }, this.escapeTime);
            escapeSound.cloneNode(true).play();
    }

    hit() {
        hitSound.cloneNode(true).play();
        hits_count += 1;
          
            //lumis[this.id].classList.add("hit")
            setTimeout(() => {
                this.xPos = Math.floor(Math.random() * (-window.innerWidth ));
                this.yPos = Math.floor(Math.random() * (-window.innerHeight ));
            // removeLumi(index)
            update();
            setTimeout(() => {
                this.canMove = true;
                lumisObj[this.id].classList.remove("hit")
            }, this.respawnTime)
        }, 500);
    }
    
    update() {
        console.log("Mudou!")
    }

}






