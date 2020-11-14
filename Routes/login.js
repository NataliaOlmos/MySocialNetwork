import saveUsers from './postIt.js'

let root = document.querySelector('#root')
// loginView
function renderLogin() {

    let loginView =
        `<div class="container">
    <h5>Inicia Sesión para Comenzar</h5>
    <input id="txtEmail" type="email" placeholder="Email"><br>
    <input id="txtPassword"type="pas onclick=sword" placeholder="Password"><br>
    
    <div class="allBtns">
    <button id="btnLogin" class="btn">Accesar</button>
    <button class="btn" id="btnFacebook" style="font-size:24px">Acceder con Facebook &nbsp <i class="fa fa-facebook-official"></i></button>
    <button class="btn" id="btnGoogle" style="font-size:24px">Acceder con Google &nbsp <i class="fa fa-google"></i></button>
    <button id="btnLogout" class="btn">Salir</button>
    </div> 
    </div>`

    root.innerHTML = loginView

    //Add LogIn Event
    btnLogin.addEventListener("click", e => {
        //Get email and pass 
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();
        //Sign In
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });

    //Add realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log("Estás registrado");
            btnLogout.classList.add("hide");
            console.log("Existe un usuario activo")
        } else {
            // User is signed out.
            console.log("No existe un usuario activo")
            // ...
        }
    });

    btnLogout.addEventListener("click", e => {
        firebase.auth().signOut();
        console.log("Cerrando sesión")
    });

    let btnFacebook = document.querySelector('#btnFacebook')

    //Firebase function
    function login() {
        let provider = new firebase.auth.FacebookAuthProvider()
        return firebase.auth().signInWithPopup(provider)
            .then(data => {
                saveUsers(data.user)
                let img = document.createElement('img')
                img.src = data.user.photoURL
                let h6 = document.createElement('h6')
                h6.innerText = data.user.displayName

                document.body.appendChild(img)
                document.body.appendChild(h6)
                btnFacebook.remove()

            })
    }

    btnFacebook.onclick = login



    let btnGoogle = document.querySelector('#btnGoogle')
    //Firebase function
    function loginGoogle() {
        let providerGoogle = new firebase.auth.GoogleAuthProvider()
        return firebase.auth().signInWithPopup(providerGoogle)
            .then(data => {
                console.log(data.user)
                let imgGoo = document.createElement("img");
            imgGoo.setAttribute("id", "userImg");
            console.log("imgGoo", imgGoo);
            imgGoo.src = data.user.photoURL
            let h6 = document.createElement("h6")
            h6.innerText = data.user.displayName

                // //colocarlos

            document.body.appendChild(imgGoo)
            document.body.appendChild(h6)
            document.body.appendChild(p)
            logInGoogle.remove()
            })
    }

    btnGoogle.onclick = loginGoogle


}




export default renderLogin;