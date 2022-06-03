// Lumi types
let illuminati = {}
getIlluminati = () => {
        illuminati = new  Object({
        type: "illuminati",
        image: "src/images/Illuminati.png",
        size: Math.floor((Math.random() * 200) + 50),
        xPos: Math.floor(Math.random() * (window.innerWidth - 110)),
        yPos: Math.floor(Math.random() * (window.innerHeight - 110)),
        escapeTime: Math.floor((Math.random() * 2000) + 750),
        escapeLimits: [750, 2000],
        respawnTime: Math.floor((Math.random() * 3000) + 1500),
        respawnLimits: [1500, 3000],
        canMove:true,
        move: function() {
            if(this.canMove) {
                this.xPos = Math.floor(Math.random() * (window.innerWidth - 110));
                this.yPos = Math.floor(Math.random() * (window.innerHeight - 110));
                this.size = Math.floor((Math.random() * 200) + 50);
            }
        },
        hit: function() {
            hits_count += 1;
            console.log(hits_count)
            setTimeout(() => {
                this.xPos = Math.floor(Math.random() * (-window.innerWidth ));
                this.yPos = Math.floor(Math.random() * (-window.innerHeight ));
               // removeLumi(index)
               // update();
                setTimeout(() => {
                    this.canMove = true;
                }, this.respawnTime)
            }, 1200);
        },
    })

}




