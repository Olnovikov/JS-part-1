const body = document.querySelector('.body')
const youbue = body.querySelector('.youbue ')

class Basket {
    basket = []
    constructor(...items) {
        this.basket.push(...items)
    }

    addProduct(item) {
        this.basket.push(item)
    }

    calcTotalPrice() {
        return this.basket.reduce((result, curItem) => {
            return result + curItem.price
        }, 0)
    }
    changeInnerText() { totalPricebox.innerText = `Суммарная цена: ${this.calcTotalPrice()}` }

    removeProduct(item) {
        this.basket.filter(function DelItem(item) {
            this.name.bind(element) == element.name

        }
        )
    }
    removeAll() {
        this.basket = [0]

    }
}

class Item {
    name = ''
    price = 0
    AlreadyBued = 'false'
    Amoung = 1
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    renderInBasket() {

        const product = document.createElement('a')
        youbue.appendChild(product)
        product.innerText = this.name
        product.setAttribute('href', `#`)
        const productPrice = document.createElement('div')
        youbue.appendChild(productPrice)
        productPrice.innerText = this.price
        const counter = document.createElement('div')
        product.appendChild(counter)
        counter.classList.add(this.name)
        const discreaser = document.createElement('div')
        product.appendChild(discreaser)
        discreaser.innerText = 'уменьшить'
        discreaser.classList.add('discreaser')
        discreaser.addEventListener('click', () => { this.Discrease() })


    }
    Discrease() {
        this.Amoung--
        if (this.Amoung > 0) {
            const counter = document.querySelector(`.${this.name}`)
            counter.innerText = this.Amoung
        }
        else {
            myBasket.removeProduct(this)

        }
        myBasket.calcTotalPrice()
        myBasket.changeInnerText()
    }

}

const myBasket = new Basket()

class List {
    List = []

    constructor(...items) {
        this.List.push(...items)
    }


    render() {
        const AllProductsarr = myList.List
        const AllProductsBox = document.createElement('div')

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


            ByeBtn.addEventListener('click', this.onByeBtnclick.bind(element)),
                ByeBtn.addEventListener('click', this.changeAlreadybued.bind(element)),
                ByeBtn.addEventListener('click', myBasket.calcTotalPrice.bind(myBasket))
            ByeBtn.addEventListener('click', myBasket.changeInnerText.bind(myBasket))




        })
    }

    changeAlreadybued() {
        this.AlreadyBued = 'true'

    }




    onByeBtnclick() {
        myBasket.addProduct(this)


        if (this.AlreadyBued == 'false') {

            this.renderInBasket()





        } else {
            this.Amoung++
            const counter = document.querySelector(`.${this.name}`)
            counter.innerText = this.Amoung



        }


    }


}

const myList = new List(Item1 = new Item('pc', 35000),
    Item2 = new Item('refregerater', 18000),
    Item3 = new Item('tv', 23000),
    Item4 = new Item('microvave_owen', 23000),
    Item5 = new Item('iphon10', 40000),
    Item6 = new Item('samsung_galaxy_S10', 38000),
    Item7 = new Item('airpods', 14000),
    Item8 = new Item('kettle', 3000),
    Item9 = new Item('vacuum_cleaner', 5000),
    Item10 = new Item('gas_stove', 25000),
)
myList.render()

const totalPricebox = document.createElement('div')
youbue.appendChild(totalPricebox)

const removeAll = document.querySelector('.removeall')
removeAll.addEventListener('click', myBasket.removeAll())