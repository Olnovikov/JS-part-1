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


class Basket {
    basket = []
    constructor(...items) {
        this.basket.push(...items)
    }

    addProduct(item) {
        this.basket.push(item)
    }

    calcTotalPrice() {
        return this._basket.reduce((result, curItem) => {
            return result + curItem.price
        }, 0)
    }
}

class Item {
    name = ''
    price = 0




    constructor(name, price) {
        this._name = name
        this._price = price
    }
}
const myBasket = new Basket(Item1 = new Item('pc', 35000),
    Item2 = new Item('refregerater', 18000),
    Item3 = new Item('tv', 23000))

const Basket_box = myBasket.basket
const Basket_box_html = document.createElement('div')

Basket_box.forEach(element => {
    const product = Basket_box_html.createElement('a')
    product.innerText = Item.name
    product.setAttribute('href', `/${link.toLowerCase()}/`)
    const product_price = product.createElement('div')
    product_name.innerText = Item.price

});

