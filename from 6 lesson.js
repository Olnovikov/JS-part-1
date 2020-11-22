class Task {
    text = ''
    flag = 'false'

    constructor(text) {
        this.text = text
    }
    createTask() {
        const Newelement = document.createElement('div')
        Newelement.innerText = this.text
        const flex = document.querySelector('.flex')
        if (flag == 'false') {
            const todo = flex.querySelector('.todo')
            Newelement.appendChild(this.createBtn())
            todo.appendChild(Newelement)
        } else {
            const done = flex.querySelector('.done')
            Newelement.appendChild(this.createBtn())
            done.appendChild(Newelement)

        }


    }
    onBtnClick() {
        this.flag = 'true'
        this.createTask()

    }
    createBtn() {
        const btn = document.createElement('a')
        btn.innerHTML = 'done!'
        btn.addEventListener('click', this.onBtnClick().bind(this))

        return btn
    }
}

const Task1 = new Task('Task1')
Task1.createTask()

const form = document.querySelector('.form')
form.addEventListener('submit', function () {
    const input = form.querySelector('.input')
    event.preventDefault()
    const newTask = new Task(input.value)
    newTask.createTask()

})



let i = 0
function Chess() {
    for (let j = 0; j < 8; j++) {
        if (i < 8) {
            for (let i = 0; i < 8; i++) {
                const fild = document.createElement('div')
                body.appendChild(fild)
                const check = fild.style.backgroundcolor = 'black'
                if (check(i - 1) == 'black') {
                    fild.style.backgroundcolor = 'white'

                }
            }
        }
        else {
            const br = document.createElement('br')
            body.appendChild(br)
        }
    }
}


