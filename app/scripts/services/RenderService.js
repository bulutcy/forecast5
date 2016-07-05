import axios from 'axios'
import Handlebars from 'handlebars'

function render(path, data) {
    let dom = document.getElementById('wrapper')

    return  new Promise((resolve, reject) => {
        axios.get(path)
            .then(function (response) {
                dom.innerHTML = Handlebars.compile(response.data)(data)
                resolve(dom)
            })
            .catch(()=>{
                reject(renderError())
            })
    })


}
function renderError(){
    let dom = document.getElementById('wrapper')
    dom.innerHTML = 'There is a problem with our server, please try again later.'
    return dom
}
export { render, renderError }
