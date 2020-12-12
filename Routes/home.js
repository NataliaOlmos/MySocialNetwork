// main nodes
let root = document.querySelector('#root')
// first view
function renderHome() {
    let homeView = `<div><br>
    <h1>Ideas de Organización</h1>

    <p>Recibe los mejores consejos de organización de aficionados y amantes de la decoración de interiores</p> 
    <img id="homeImg"src="https://images.adsttc.com/media/images/5f2c/8545/b357/65db/c000/008c/large_jpg/FEAT_ID.jpg?1596753213">
    </div>
    <div>
    
    </div>`
    root.innerHTML = homeView
}

export default renderHome;

