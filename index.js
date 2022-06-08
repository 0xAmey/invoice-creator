let myTasks = []
let totalAmount = 0
let displayContent = []

let content1 = ``
let content2 = ``
let content3 = ``


const washCarBtn = document.getElementById("wash-car-btn")
const mowLawnBtn = document.getElementById("mow-lawn-btn")
const pullWeedsBtn = document.getElementById("pull-weeds-btn")
const sendInvoiceBtn = document.getElementById("send-invoice-btn")

const displayEl = document.getElementById("display-el")
const displayTotalAmount = document.getElementById("total-amount")



washCarBtn.addEventListener("click", function() {
    if (myTasks.indexOf("Wash Car") === -1) {
        myTasks.push("Wash Car")
        console.log(myTasks)

        totalAmount += 10
        displayTotalAmount.innerText = "$" + totalAmount


        content1 =  
        `<div class="cont-align">
            <h2>Wash Car <span><button class="remove-btn" onclick="removeWash()">Remove</button></span> </h2>
            <h2>$10</h2>
        </div>`
        displayContent.push(content1)

        displayEl.innerHTML = displayContent
    } 
})

mowLawnBtn.addEventListener("click", function() {
    if (myTasks.indexOf("Mow Lawn") === -1) {
        myTasks.push("Mow Lawn")
        console.log(myTasks)

        totalAmount += 20
        displayTotalAmount.innerText =  "$" + totalAmount

        content2 =  
        `<div class="cont-align">
            <h2>Mow Lawn <span><button class="remove-btn" onclick="removeMow()">Remove</button></span> </h2>
            <h2>$20</h2>
        </div>
        `
        displayContent.push(content2)
        displayEl.innerHTML = displayContent
    } 
})

pullWeedsBtn.addEventListener("click", function() {
    if (myTasks.indexOf("Pull Weeds") === -1) {
        myTasks.push("Pull Weeds")
        console.log(myTasks)

        totalAmount += 30
        displayTotalAmount.innerText =  "$" + totalAmount

    
        content3 = 
        `<div class="cont-align">
            <h2>Pull Weeds <span><button class="remove-btn" onclick="removePull()">Remove</button></span> </h2>
            <h2>$30</h2>
        </div>`
        displayContent.push(content3)

        displayEl.innerHTML = displayContent
    } 
})


function removeWash() {
    let index = myTasks.indexOf("Wash Car")
    myTasks.splice(index,1)
    console.log(myTasks)

    let index2 = displayContent.indexOf(content1)
    displayContent.splice(index2, 1)

    displayEl.innerHTML = displayContent
    totalAmount -= 10
    displayTotalAmount.innerText =  "$" + totalAmount
}

function removeMow() {
    let index = myTasks.indexOf("Mow Lawn")
    myTasks.splice(index,1)
    console.log(myTasks)

    let index2 = displayContent.indexOf(content2)
    displayContent.splice(index2, 1)

    displayEl.innerHTML = displayContent
    totalAmount -= 20
    displayTotalAmount.innerText =  "$" + totalAmount
}

function removePull() {
    let index = myTasks.indexOf("Pull Weeds")
    myTasks.splice(index,1)
    console.log(myTasks)

    let index2 = displayContent.indexOf(content3)
    displayContent.splice(index2, 1)

    displayEl.innerHTML = displayContent
    totalAmount -= 30
    displayTotalAmount.innerText =  "$" + totalAmount
}

sendInvoiceBtn.addEventListener("click", function(){
    myTasks = []
    totalAmount = 0
    displayEl.innerHTML = ``
    displayTotalAmount.innerText = ""
})




