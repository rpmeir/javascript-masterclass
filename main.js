import './style.css'
import { run } from './public/02-data-types/03-number'

document.querySelector('#app').innerHTML = `
  <div id="result" >
  </div>
`

run(document.querySelector('#result'));
