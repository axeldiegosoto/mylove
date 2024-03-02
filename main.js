const btnContainer = document.querySelector('#btn-no')
const btn = document.querySelector('#btn-no .btn')

let toggle = 'center'

btn.addEventListener('mouseover', () => {
    switch (toggle) {
        case 'center':
            toggle = 'flex-end'
            break;
        case 'flex-end':
            toggle = 'flex-start'
            break;
        case 'flex-start':
            toggle = 'center'
            break
        default:
            break;
    }

    btnContainer.style.justifyContent = toggle
})
