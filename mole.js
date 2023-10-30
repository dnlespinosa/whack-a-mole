let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
    setGame();
}

const setGame = () => {
    // set grid for game board in html
    for (let i=0; i<9; i++) {
        let tile = document.createElement('div')
        tile.id = i.toString();
        // div ids will be 0 to 8
        tile.addEventListener('click', selectTile)
        document.getElementById('board').appendChild(tile)
    }

    const randomNumber = [700, 800, 900, 1000]
    let num = Math.floor(Math.random() * 4)

    setInterval(setMole, randomNumber[num]);
    setInterval(setPlant, 3000);

    const btn = document.getElementById('restart')
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        currMoleTile.innerHTML = '';
        currPlantTile.innerHTML = '';
        score = 0;
        gameOver = false;
        document.getElementById('score').innerText = score.toString()
    })
}

const getRandomTile = () => {
    let num = Math.floor(Math.random() * 9)
    return num.toString()
}

const setMole = () => {
    if (gameOver) {
        return
    }

    let mole = document.createElement('img')
    mole.src='./800px-MontymoleNSMBU.png'

    if (currMoleTile) {
        currMoleTile.innerHTML = ''
    }

    let number = getRandomTile();

    if (currPlantTile && currPlantTile.id === number) {
        return;
    }

    currMoleTile = document.getElementById(number)
    currMoleTile.appendChild(mole)
}

const setPlant = () => {
    if (gameOver) {
        return
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = ''
    }

    let plant = document.createElement('img')
    plant.src = './piranhaplant.png'

    let number = getRandomTile();

    if (currMoleTile && currMoleTile.id === number) {
        return;
    }

    currPlantTile = document.getElementById(number)
    currPlantTile.appendChild(plant)
}

function selectTile () {
    if (this == currMoleTile) {
        score += 10;
        document.getElementById('score').innerText = score.toString()
        currMoleTile.innerHTML = ''
    } else if (this == currPlantTile) {
        document.getElementById('score').innerText = 'GAME OVER ' + score.toString()
        gameOver = true
    }
}



