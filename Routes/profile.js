function renderProfile(){
    let myProfile= `<div>
    <h3>Mi perfil</h3>
    <p>Actividad Reciente</p>

    <div class="postContainer">
   
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

    let resultsContainer = document.getElementById('results');


    postsRef.onSnapshot(function(snap){
            snap.forEach(function(doc){
                drawResults([doc.data()])
            })
        })
        


        function drawResults(array){
            // OPTIONAL
            //resultsContainer.innerHTML = ""
            //
              array.forEach(function(el, index){
                  let figure = document.createElement('figure')
                  figure.innerHTML = `
                      <img src="${el.link}" alt="${index}">
                      <p>Descripción:${el.body}</p>
                      <p>Subido el:<span class="minHeight collapse" id="collapseExample">${el.date.slice(0, -32)}</span></p>
                      <button id="deleteBtn" class="profileBtns">Eliminar</button>
                      <button id="editionBtn" class="profileBtns">Editar</button>
                  
                    `
                  resultsContainer.prepend(figure)
              })
              const btnDelete = document.querySelector("#deleteBtn");


              btnDelete.addEventListener("click", e => {
                db.collection("posts").doc(id).delete().then(function() {
                    console.log("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document:", error);
                });
            });
          }
          
        


}
export default renderProfile;