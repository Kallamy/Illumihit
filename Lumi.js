class Lumi {
    init() {
        this.image = "src/images/Illuminati.png";
        this.size = Math.floor((Math.random() * 200) + 50);
        this.xPos = Math.floor(Math.random() * (window.innerWidth - 110));
        this.yPos = Math.floor(Math.random() * (window.innerHeight - 110));
        this.hit = false;
        this.escapeTime = 3000;
        this.canMove = true;
        setInterval(this.move , this.escapeTime)
    }

    constructor(ref) {
        this.ref = ref;
    }

    image = "src/images/Illuminati.png";
    size = Math.floor((Math.random() * 200) + 50);
    xPos = Math.floor(Math.random() * (window.innerWidth - 110));
    yPos = Math.floor(Math.random() * (window.innerHeight - 110));
    hit = false;
    escapeTime = 3000;
    canMove = true;

    
    
    move() {
        console.log(this.ref)
        //if(this.canMove) {
            this.Size = Math.floor((Math.random() * 200) + 50) 
            this.xPos = Math.floor(Math.random() * (window.innerWidth - 110));
            this.yPos = Math.floor(Math.random() * (window.innerHeight - 110));
            console.log("posição x: " + this.xPos + "posição y: " + this.yPos)
            console.log("tamanho: " + this.size)
            setTimeout(()=> {
                this.canMove = true;
                this.hit = false;
                this.size = "50px";
                console.log("Fugiu!")
                this.escapeTime = 10;
            }, this.escapeTime)
        //}
        this.escapeTime =  Math.floor((Math.random() * 1000) + 900);
    }
    swat() {
       //this.ref.classList.add("hit")
    }

}