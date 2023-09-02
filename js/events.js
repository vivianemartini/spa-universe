import { body, buttonHome, buttonUniverse, buttonExplore } from './elements.js'

export default function events() {
  buttonHome.addEventListener('click', () => {
    body.classList.add('body-home')
    body.classList.remove('body-universe')
    body.classList.remove('body-explore')
    buttonHome.classList.add('active')
    buttonExplore.classList.remove('active')
    buttonUniverse.classList.remove('active')
  })

  buttonExplore.addEventListener('click', () => {
    body.classList.add('body-explore')
    body.classList.remove('body-home')
    body.classList.remove('body-universe')
    buttonExplore.classList.add('active')
    buttonHome.classList.remove('active')
    buttonUniverse.classList.remove('active')
  })

  buttonUniverse.addEventListener('click', () => {
    body.classList.add('body-universe')
    body.classList.remove('body-home')
    body.classList.remove('body-explore')
    buttonUniverse.classList.add('active')
    buttonExplore.classList.remove('active')
    buttonHome.classList.remove('active')
  })
}
