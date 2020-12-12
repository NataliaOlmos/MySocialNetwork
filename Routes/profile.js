function renderProfile(){
    let myProfile= `<div>
    <h3>Mi perfil</h3>
    <p>Actividad Reciente</p>

    <div class="postContainer">
    <button id="deleteBtn" class="profileBtns">Eliminar</button>
    <button id="editionBtn" class="profileBtns">Editar</button>

    <div id="results">
    <figure> 
    </figure>
   
    </div>
    </div>
    `
    root.innerHTML = myProfile


    let db = firebase.firestore()
    const postsRef = db.collection("posts")

    console.log("Firebase Active", firebase)


}
export default renderProfile;