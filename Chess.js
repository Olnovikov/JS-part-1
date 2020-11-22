function chess(N) {
    const place = document.querySelector('.body')
    for (let i = 0; i < N + 1; i++) {
        const row = document.createElement('div')
        if (i > 7) {
            row.innerText = '*ABCDEFGH'

        }
        for (let j = 0; j < N + 1; j++) {
            const cell = document.createElement('div')
            row.appendChild(cell)

            //if (i % 2 == j % 2) { cell.classList.add('black') }
            //else { cell.classList.add('white') }
            if (i > 7) {
                row.innerText = '*ABCDEFGH'

            }
            if (j == 0 && !i) {
                cell.innerText = 'N-1-i'

            }


        }
        place.appendChild(row)
    }
}
chess(8)