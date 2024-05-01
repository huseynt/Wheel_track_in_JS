const wheel = document.querySelector(".wheel")
const mechanism = document.querySelector(".mechanism")
const section = document.querySelector("section")
var i = 0
const long = (section.getBoundingClientRect().height-mechanism.getBoundingClientRect().height)/10;
const up =  (section.getBoundingClientRect().width-mechanism.getBoundingClientRect().width)/10;

const circleHeight = {
    0: 0,
    1: 7,
    2: 13,
    3: 17,
    4: 20,
    5: 22,
    6: 23,
    7: 23,
    8: 22,
    9: 20,
    10: 17,
    11: 13,
    12: 7,
    13: 0,
}

// change i with key -------------------------------------------
addEventListener("keydown", function (e) {
keyRole(e)
console.log("__")
})

function keyRole(e) {
    if (e.key=="ArrowRight" && i<up) {
        i++
        circlePath(i)
    }
    else if(e.key=="ArrowLeft" && i>0) { 
        i--
        circlePath(i)
    }
}

// circle path ------------------------------------------------
function circlePath(i) {
    mechanism.style.left=`${i*10}px`
    wheel.style.transform=`rotate(${i*18}deg)`
    if (i>=28 && i<=92) {
        if ( i>=56 && i<=70) {
            mechanism.style.bottom=`${circleHeight[i-57]}px`
        } 
        else if (i>=79 && i<=92) {
            mechanism.style.bottom=`${circleHeight[i-79]}px`
        }
         else {
            mechanism.style.bottom=`${circleHeight[i-28]}px`
        }
    } 
}
// ------------------------onOff auto----------------------------------
const changeAuto = document.querySelector("#changeAuto")
var onOff = false
changeAuto.addEventListener("click",function () {
    if(onOff==false) {
        onOff=true
        xCoordinant=0
        mechanism.style.bottom=`${circleHeight[0]}px`
        changeAuto.innerText="Switch keyboard"
    }
    else {
        onOff=false
        xCoordinant=4000 //for off set interval
        mechanism.style.left=`${0}px`
        mechanism.style.bottom=`${circleHeight[0]}px`
        changeAuto.innerText="Switch auto"
    }

    const interval = setInterval(function () {
        xCoordinant++
        if (xCoordinant<=up) {
            circlePath(xCoordinant)
            console.log(xCoordinant)
        } 
        else {
            clearInterval(interval)
        }
    },50)
})