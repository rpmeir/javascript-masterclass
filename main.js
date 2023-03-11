import './style.css'
import { run } from './public/01-intro/01-var.js'

document.querySelector('#app').innerHTML = `
  <div id="result" >
  </div>
`

run(document.querySelector('#result'))
