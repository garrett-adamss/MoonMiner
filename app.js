let clickUpgrades = {
    pickaxes: {
        price: 100,
        upgradeprice: 400,
        quantity: 0,
        multiplier: 1
    },
};
let automaticUpgrades = {
    rovers: {
        price: 1200,
        quantity: 0,
        multiplier: 20,
        upgrade: 1,
        upgradeprice: 4500,
    },
};

let cheese = 0;
let perClick = 0;

function mine(name) {
    let clicker = clickUpgrades[name]
    cheese += (1 + (clicker.quantity) * (clicker.multiplier))
    console.log("score", cheese)
    update()
}

function update() {
    let template = ''
    let item = cheese
    template += `${item} ⺝`
    let itemElm = document.getElementById("score")
    itemElm.innerHTML = template
}
update()
updatePerClick()
updatePerInterval()
drawInventory()
drawInventoryTwo()
drawNewClickPrice()
drawNewClickPriceTwo()
drawNewAutoPrice()
drawNewAutoPriceTwo()



function buyPickaxe(name) {
    let clicker = clickUpgrades[name]
    // console.log(clicker, clicker.price)
    if (cheese >= clicker.price) {
        console.log("buying for =", clicker.price)
        clicker.quantity++
        cheese -= clicker.price
        clicker.price += (clicker.price * 1.5)
        console.log("money =", cheese, "pickaxes=", clicker.quantity)
    } else {
        console.log("not enough money=", cheese, "price=", clicker.price)
    }
    update()
    updatePerClick()
    drawInventory()
    drawInventoryTwo()
    drawNewClickPrice()
    drawNewClickPriceTwo()

}

function upgradePickaxe(name) {
    let clicker = clickUpgrades[name]
    console.log(clicker, clicker.price)
    if (cheese >= clicker.upgradeprice) {
        console.log("buying upgrade for = ", clicker.upgradeprice)
        clicker.multiplier++
        cheese -= clicker.upgradeprice
        clicker.upgradeprice += (clicker.upgradeprice * 1.5)
        console.log("money =", cheese, "pickaxes upgrades=", clicker.multiplier)
    } else {
        console.log("not enough money = ", cheese, "price=", clicker.upgradeprice)
    }
    update()
    updatePerClick()
    drawInventory()
    drawInventoryTwo()
    drawNewClickPrice()
    drawNewClickPriceTwo()
}

function collectAutoUpgrades() {
    for (let name in automaticUpgrades) {
        let rover = automaticUpgrades[name]
        cheese += ((rover.quantity * rover.multiplier) * rover.upgrade)
        console.log("interval")
        update()
        updatePerClick()
        updatePerInterval()
        drawInventory()
        drawInventoryTwo()
    }
}

function buyAutoUpgrade(name) {
    let rover = automaticUpgrades[name]
    console.log(rover, rover.price)
    if (cheese >= rover.price) {
        console.log("buying for =", rover.price)
        rover.quantity++
        cheese -= rover.price
        rover.price += (rover.price * 1.5)
        console.log("money =", cheese, "rover=", rover.quantity)
    } else {
        console.log("not enough money=", cheese, "price=", rover.price)
    }
    update()
    updatePerClick()
    updatePerInterval()
    drawInventory()
    drawInventoryTwo()
    drawNewAutoPrice()
    drawNewAutoPriceTwo()
}

function upgradeAutoUpgrade(name) {
    let rover = automaticUpgrades[name]
    console.log(rover, rover.upgradeprice)
    if (cheese >= rover.upgradeprice) {
        console.log("buying upgrade for = ", rover.upgradeprice)
        rover.upgrade += (rover.upgrade + 5)
        console.log(rover.upgrade)
        cheese -= rover.upgradeprice
        rover.upgradeprice += (rover.upgradeprice * 1.5)
        console.log("money =", cheese, "rover upgrades=", rover.multiplier)
    } else {
        console.log("not enough money = ", cheese, "price=", rover.upgradeprice)
    }
    update()
    updatePerClick()
    updatePerInterval()
    drawInventory()
    drawInventoryTwo()
    drawNewAutoPrice()
    drawNewAutoPriceTwo()
}

function updatePerClick() {
    let template = ``
    item = clickUpgrades.pickaxes
    console.log(item)
    let math = 1 + (item.quantity) * (item.multiplier)
    template += `${math} ⺝per click`
    let itemElm = document.getElementById("clickamount")
    itemElm.innerHTML = template
}

function updatePerInterval() {
    let template = ``
    item = automaticUpgrades.rovers
    console.log(item)
    let math = ((item.quantity * item.multiplier) * item.upgrade)
    template += `${math} ⺝per 3 sec`
    let itemElm = document.getElementById("autoamount")
    itemElm.innerHTML = template
}

function drawInventory() {
    let template = ''
    let click = clickUpgrades.pickaxes
    console.log(click,)
    template += `
    <h5 class="col-12 m-1">Pickaxe : ${click.quantity + 1}</h5>
    <h5 class="col-12 m-1">Pickaxe Upgrade : ${click.multiplier - 1}</h5>
    `
    let itemElm = document.getElementById("pick")
    itemElm.innerHTML = template
}

function drawInventoryTwo() {
    let template = ''
    let auto = automaticUpgrades.rovers
    console.log(auto)
    template += `
    <h5 class="col-12 m-1">WALL-E : ${auto.quantity}</h5>
    <h5 class="col-12 m-1">WALL-E Upgrade : ${auto.upgrade - 1}x</h5>
    `
    let itemElm = document.getElementById("auto")
    itemElm.innerHTML = template
}

function drawNewClickPrice() {
    let template = ''
    let click = clickUpgrades.pickaxes
    console.log(click)
    template += `
    <p class="col-5 m-1 text-left"><b>PICKAXE:</b><br> ${click.price}⺝ (+1 per click)</p>
    <img class="col-5 m-1 upgrade-photo" src="Enchanted_Stone_Pickaxe.webp" alt="">
`
    let itemElm = document.getElementById("clickupdate")
    itemElm.innerHTML = template
}

function drawNewClickPriceTwo() {
    let template = ''
    let click = clickUpgrades.pickaxes
    console.log(click)
    template += `
    <p class="col-5 text-left"><b>UPGRADE PICKAXE:</b><br> ${click.upgradeprice}⺝ (x2 your pickaxe power)</p>
    <img class="col-5 upgrade-photo"
        src="https://qph.cf2.quoracdn.net/main-qimg-f6654d89d489afb4b9240dd5d1a43f43" alt="">
`
    let itemElm = document.getElementById("clickupdatetwo")
    itemElm.innerHTML = template
}

function drawNewAutoPrice() {
    let template = ''
    let auto = automaticUpgrades.rovers
    console.log(auto)
    template += `
    <p class="col-5 m-1 text-left"><b>UPGRADE WALL-E:</b><br>${auto.upgradeprice}⺝ (x6 WALL-E's mining power</p>
    <img class="col-5 upgrade-photo"
        src="https://cdn.edu.buncee.com/images/badges/robot-week2.gif?timestamp=1593458292" alt="">
`
    let itemElm = document.getElementById("autoupdate")
    itemElm.innerHTML = template
}

function drawNewAutoPriceTwo() {
    let template = ''
    let auto = automaticUpgrades.rovers
    console.log(auto)
    template += `
    <p class="col-5 m-1 text-left"><b>WALL-E:</b><br>${auto.price}⺝ (mine 20⺝ ever 3 sec)</p>
    <img class="col-5 upgrade-photo"
        src="https://cdn.edu.buncee.com/assets/e1c0902d472b4cad8ea1e3405f5e91bb/animation-stem-021921-1.gif?timestamp=1613750166"
        alt="">
`
    let itemElm = document.getElementById("autoupdatetwo")
    itemElm.innerHTML = template
}


setInterval(collectAutoUpgrades, 3000);

