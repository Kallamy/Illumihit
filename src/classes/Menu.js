class Menu {
    menuScreen = document.getElementById("menuScreen");

    gameOverScreen = document.getElementById("gameOverScreen");
    gameOverButton = document.querySelector(".gameOverButton")

    startScreen = () =>  {
        gameOverScreen.style.display = "none";
        menuScreen.style.display = "block";
    }

    gameOverScreen = () => {
        gameOverScreen.style.display = "block";
    }

    hide = () => {
        gameOverScreen.style.display = "none";
        menuScreen.style.display = "none";
    }

}