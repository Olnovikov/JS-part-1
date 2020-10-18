//1
//let a = prompt('введи число')
//function Separate(a) {
//  const object = {
//  hungreeds: parseInt(a / 100),
//tens: parseInt((a - parseInt(a / 100)) / 10),
//numbers: (a - parcelnt(a / 100) - parseInt((a - parcelnt(a / 100)) / 10)),
//}
//return object
//}
//console.log(Separate(a))



const object = {
    hungreeds: 0,
    tens: 0,
    numbers: 0,
}

function Separate(a) {
    if (a < 10) {
        object.numbers = a

    } else {
        if (a < 100) {
            object.tens = parseInt(a / 10)
            object.numbers = (a - object.tens)
        } else {
            object.hungreeds = parseInt(a / 100),
                object.tens = parseInt((a - object.hungreeds * 100) / 10),
                object.numbers = (a - object.hungreeds * 100 - object.tens * 10)
        }
    }
    return object
}
let a = prompt('введи число')
console.log(Separate(a))



//2
class basket {
    price: TotalPrice = []
    clicked: ClickedProducts = []
    addedProducts: Mychoice = []
}
const Mybasket = new basket


function countBasketPrice(Mychoice) {
    for (let index = 0; index < Mychoice.length; index++) {
        return sum += Mychoice[i];

    }

}
function countBasketAdd(arr) {
    if (ClickedProducts.forEach(function (item, i, ClickedProducts) { item == 'true' }) {
        Mychoice.push(item)
    }
    return Mychoice
}
const Mychoice = [] = arr.filter(function (ClickedProducts) {
    return item == True;
});

