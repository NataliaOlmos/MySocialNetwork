let root = document.querySelector('#root')

function renderProfile() {
    let myProfile = `<div>
                      <h3>Mi perfil</h3>
                        <p>Actividad Reciente</p>
                        <div class="postContainer">
                        <div id="results-profile">
                    <figure> 
                    </figure>
                    </div>
                    </div>
                    `
    root.innerHTML = myProfile

    let db = firebase.firestore()

    const postsRef = db.collection("posts")

    console.log("Firebase Active", firebase)


    postsRef.onSnapshot(snap => {
        snap.forEach(doc => {
            let div = `
            <div class="main-container">
            <div class="card1" >
                 <img src="${doc.data().link}" alt="${doc.data().index}">
                    <p>${doc.data().body}</p>
                    <p>${doc.data().id}</p>
                    <p>${doc.data().date}</p>
                 
                    <p><button id="type2" class="buttons">Borrar</button>
                    </div>  
              </div>`

            let nodo = document.createElement("div");
            nodo.innerHTML = div;
            document.body.appendChild(nodo);
        })

        let btnDelete = document.querySelectorAll('.buttons');
        btnDelete.forEach((buttons) => buttons.addEventListener('click', eliminar));

        function eliminar() {
            db.collection("posts").doc('${id}').delete().then(function () {
                console.log("Document successfully deleted!");
            }).catch(function (error) {
                console.error("Error removing document:", error);
            });
        };

    });



}

export default renderProfile;