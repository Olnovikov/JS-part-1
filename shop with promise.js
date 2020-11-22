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
    changeInnerText() { totalPricebox.innerText = this.calcTotalPrice() }

    removeAll() {
        this.basket = []
        this.calcTotalPrice()
        this.changeInnerText()
        const product = document.querySelectorAll('.product')
        console.log(product)
        const price = document.querySelectorAll('.price')
        const counter = document.querySelectorAll('.counter')
        const discreaser = document.querySelectorAll('.discreaser')
        youbue.removeChild(product)
        product.removeChild(price)
        product.removeChild(discreaser)
        product.removeChild(counter)

    }
    FindInBasket(good) {
        return this.items.filter((good) => {
            item.name == good.name

        }
        )
    }
    removeProductFromBasket(item) {
        const delitemnumber = this.basket.indexOf(this.FindInBasket(item))
        this.basket.slice(delitemnumber, 1)
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
        product.classList.add(this.name)
        product.classList.add('product')
        const productPrice = document.createElement('div')
        youbue.appendChild(productPrice)
        productPrice.innerText = this.price
        productPrice.classList.add(this.name + 'price')
        productPrice.classList.add('price')
        const counter = document.createElement('div')
        product.appendChild(counter)
        counter.classList.add(this.name + 'counter')
        counter.classList.add('counter')
        const discreaser = document.createElement('div')
        product.appendChild(discreaser)
        discreaser.innerText = 'уменьшить'
        discreaser.classList.add('discreaser')
        discreaser.addEventListener('click', () => this.Discrease())


    }

    renderInList() {
        const AllProductsBox = document.querySelector('.AllProductsBox')
        const Newproduct = document.createElement('a')
        AllProductsBox.appendChild(Newproduct)
        Newproduct.innerText = this.name
        Newproduct.setAttribute('href', `#`)
        const NewproductPrice = document.createElement('div')
        AllProductsBox.appendChild(NewproductPrice)
        NewproductPrice.innerText = this.price
        const ByeBtn = document.createElement('div')
        ByeBtn.classList.add('ByeBtn')
        ByeBtn.innerText = 'Купить'
        Newproduct.appendChild(ByeBtn)
    }

    Discrease() {
        this.Amoung--
        myBasket.removeProductFromBasket(this)
        if (this.Amoung > 0) {
            const counter = document.querySelector(`.${this.name}` + 'counter')
            counter.innerText = this.Amoung
        }
        else {
            const product = document.querySelector(`.${this.name}`)
            youbue.removeChild(product)
            const productPrice = document.querySelector(`.${this.name}` + 'price')
            youbue.removeChild(productPrice)
            this.AlreadyBued = 'false'
        }
        myBasket.calcTotalPrice()
        myBasket.changeInnerText()
    }
}

const myBasket = new Basket()

class List {
    List = []

    constructor(...items) {

        //this.fetchItem.then(()=> this.List.push(...items)   ???
        //this.render())
        this.List.push(...items)
        this.render()
    }
    addNewProduct(item) {
        this.List.push(item)
    }


    render() {
        const AllProductsarr = this.List
        const AllProductsBox = document.createElement('div')
        AllProductsBox.classList.add('AllProductsBox')

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
            ByeBtn.addEventListener('click', this.Main.bind(element)),
                ByeBtn.addEventListener('click', this.changeAlreadybued.bind(element)),
                ByeBtn.addEventListener('click', myBasket.calcTotalPrice.bind(myBasket))
            ByeBtn.addEventListener('click', myBasket.changeInnerText.bind(myBasket))


        })
    }
    fetchItem() {
        const result = fetch()
        return result
            .then(
                res => { return res.json }
            )
            .then(data => { this.items = data.data.map(cur => { return new Item(cur) }) })
            .catch(err => { console.log(err) })
    }


    changeAlreadybued() { this.AlreadyBued = 'true' }

    onByeBtnclick() {
        return new Promise((resolve, reject) => {
            myBasket.addProduct(this)
            resolve()

        })


    }
    ForResolve() {
        if (this.AlreadyBued == 'false') {

            this.renderInBasket()


        } else {
            this.Amoung++
            const counter = document.querySelector(`.${this.name}` + 'counter')
            counter.innerText = this.Amoung

        }
    }
    Main() {
        this.onByeBtnclick().then(this.ForResolve())
            .catch(() => console.log('Error'))
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

const totalPricebox = document.createElement('div')
youbue.appendChild(totalPricebox)

const removeAll = document.querySelector('.removeall')
removeAll.addEventListener('click', () => myBasket.removeAll())




