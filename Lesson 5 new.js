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

    render() {
        const BasketBoxArr = myBasket.basket
        const BasketBox = document.createElement('div')
        const youbue = document.querySelector('.youbue')
        youbue.appendChild(BasketBox)

        const product = document.createElement('a')
        BasketBox.appendChild(product)
        product.innerText = Item.name
        product.setAttribute('href', `#`)
        const productPrice = document.createElement('div')
        productPrice.classList.add('price')
        BasketBox.appendChild(productPrice)
        productPrice.innerText = this.price



    }
}

class Item {
    name = ''
    price = 0

    constructor(name, price) {
        this.name = name
        this.price = price
    }
    renderInBasket() { }
}


class List {
    List = []

    constructor(...items) {
        this.List.push(...items)
    }


    render() {
        const AllProductsarr = myList.List
        const AllProductsBox = document.createElement('div')
        const body = document.querySelector('.body')
        body.appendChild(AllProductsBox)

        AllProductsarr.forEach(element => {
            const Newproduct = document.createElement('a')
            AllProductsBox.appendChild(Newproduct)
            Newproduct.innerText = element.name
            Newproduct.setAttribute('href', `#`)
            const NewproductPrice = document.createElement('div')
            AllProductsBox.appendChild(NewproductPrice)
            NewproductPrice.innerText = element.price
            const ByeBtn = document.createElement('div')
            ByeBtn.classList.add('ByeBtn')
            ByeBtn.innerText = 'Купить'
            Newproduct.appendChild(ByeBtn)
            ByeBtn.addEventListener('click', this.onByeBtnclick.bind(element))

        })
    }

    onByeBtnclick() {
        //if (element) {
        //    const i = 1
        //    const counter = document.createElement('div')
        //    counter.innerText(i)
        //    product.appendChild(counter)
        //    i++
        //}
        //else{}
        myBasket.addProduct(this)
        this.renderInBasket()
        console.log(myBasket)


    }


}

const myList = new List(Item1 = new Item('pc', 35000),
    Item2 = new Item('refregerater', 18000),
    Item3 = new Item('tv', 23000),
    Item4 = new Item('microvave owen', 23000),
    Item5 = new Item('iphon 10', 40000),
    Item6 = new Item('samsung galaxy S10', 38000),
    Item7 = new Item('airpods', 14000),
    Item8 = new Item('kettle', 3000),
    Item9 = new Item('vacuum cleaner', 5000),
    Item10 = new Item('gas stove', 25000),
)
myList.render()
const myBasket = new Basket()
myBasket.render()
