var myDisplay = []
var myinput
function myDigit(myNum) {
    myinput = myNum
    myDisplay.push(myinput)
    disp.value = ``
    for (let index = 0; index < myDisplay.length; index++) { 
        disp.value += `${myDisplay[index]}`
    }
} 
// symbol
var myOperator
function mySymbol(mySym) {
    myOperator = mySym
    myDisplay.splice(myDisplay.length,0, myOperator)
    disp.value = ``
    for (let index = 0; index < myDisplay.length; index++) { 
        disp.value += `${myDisplay[index]}`
    } 
}

// operation
 function myEquals() {
    disp.value = eval(disp.value)
}

// to clear all 
function clearNum() {
    myDisplay.splice(0, myDisplay.length)
    disp.value = myDisplay
}

function deleteNum() {
    myDisplay.pop()
    disp.value = myDisplay
}




