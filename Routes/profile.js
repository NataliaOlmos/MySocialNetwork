let root = document.querySelector('#root')

function renderAbout(){
     
    let profileView =`<div>
    <h4>Bienvenido</h4>
    </div>`
    root.innerHTML = profileView
}

export default renderAbout;