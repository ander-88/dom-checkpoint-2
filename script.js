let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})


let isBlack = false
function dark() {
    body = document.getElementById("bd")
    if (isBlack) {
        body.style.backgroundColor = "white"
        for (let i = 0; i < 9; i++) {
            document.querySelector(`#menu${i}`).style.color = "black"

        }
        isBlack = !isBlack
    } else {
        body.style.backgroundColor = "#353432"
        for (let i = 0; i < 9; i++) {
            document.getElementById(`menu${i}`).style.color = "white"
        }
        isBlack = !isBlack

    }
}

function changeBoxColor() {
    let colorBox = document.getElementById('colorBox');
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorBox.style.backgroundColor = randomColor;
   }

function box(){
    let boxsize = document.getElementById('colorBox');
    boxsize.style.width = '300px'
    boxsize.style.height = '50px'
    boxsize.style.padding = '20px'
}

function giveAwayNumb() {
    let userInput = document.getElementById('number-user').value;
    let numInput = Number(userInput);
    let numbToCompar = 885564;

    let crip = numbToCompar;
function cripted(crip) {
    let numCrip = crip.toString();
    let numCripi = [];
    for (let i = 0; i < numCrip.length; i++) {

        let nOfI = Number(numCrip[i]);
        let numOfI = nOfI - 1;
        numCripi.push(numOfI);
    }

    return numCripi.join('');
}

    let testNum=cripted(numInput)

    if (testNum === cripted(crip)) {
        document.getElementById('Winner').innerText = "Olééé! YOU WON!";
        document.getElementById('colorBox').style.backgroundColor = "red"
        box()
    } else {
        document.getElementById('Winner').innerText = "Ops! TRY AGAIN";
        box()
        changeBoxColor()
    }
    
}









